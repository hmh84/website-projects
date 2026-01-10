const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");
const projects = require('./deploy.config.json');
const tempReposDir = path.resolve('./temp-repos');
const projectsSiteDir = path.resolve('./projects-site');
const readline = require("readline");

const askQuestion = (question) => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise(resolve => {
        rl.question(question, answer => {
            rl.close();
            resolve(answer.trim().toLowerCase());
        });
    });
};

const isGitRepo = (dir) => {
    return fs.existsSync(path.join(dir, ".git"));
};

// Ensure temp-repos exists
fs.mkdirSync(tempReposDir, { recursive: true });

console.log({ config: projects });

async function run() {
    for (const project of projects) {
        const { skip, repoUrl, repoBranch, buildCommand, outputDirToCopy, destinationPath } = project;

        if (skip) {
            console.log(`⏭️ Skipping project: ${repoUrl}`);
            continue;
        }

        if (!repoUrl || !repoBranch || !outputDirToCopy || !destinationPath) {
            console.error("❌ Missing required project configuration.");
            return;
        }

        const repoUrlParts = repoUrl.split('/');
        const repoFolderName = repoUrlParts[repoUrlParts.length - 1].replace('.git', '');

        if (!repoFolderName) {
            console.error("❌ Invalid repository URL.");
            return;
        }

        const tempRepoDir = path.join(tempReposDir, repoFolderName + `_${repoBranch}`);

        // -----------------------------
        // Clone / update mode
        // -----------------------------
        if (!fs.existsSync(tempRepoDir)) {
            console.log(`⬇️ Cloning ${repoUrl} to ${tempRepoDir}`);
            execSync(`git clone ${repoUrl} "${tempRepoDir}"`, {
                stdio: "inherit"
            });
        } else {
            if (!isGitRepo(tempRepoDir)) {
                console.log(`ℹ️ ${repoFolderName} is not a git repo`);
                continue;
            }

            console.log(`Checking out branch ${repoBranch} for ${repoFolderName}...`);
            execSync(`git checkout ${repoBranch}`, {
                cwd: tempRepoDir,
                stdio: "inherit"
            });

            // -----------------------------
            // Check for local git changes
            // -----------------------------
            let hasChanges = false;
            let status = "";

            try {
                status = execSync("git status --porcelain", {
                    cwd: tempRepoDir
                }).toString().trim();

                hasChanges = status.length > 0;
            } catch (err) {
                console.warn(`⚠️ Could not determine git status for ${repoFolderName}`);
            }

            if (hasChanges) {
                console.log(`⚠️ Local changes detected in ${repoFolderName}`);
                console.log(status);

                const answer = await askQuestion(
                    "Choose: [c]ontinue, [s]kip, [d]iscard changes, [a]bort: "
                );

                if (answer === "a") {
                    console.log("❌ Aborted by user.");
                    process.exit(1);
                }

                if (answer === "s") {
                    console.log(`⏭️ Skipping update for ${repoFolderName} ${repoBranch}...`);
                    continue;
                }

                if (answer === "d") {
                    console.log("🧹 Discarding local changes...");

                    console.log(`Hard resetting to latest changes for ${repoFolderName} ${repoBranch}...`);
                    execSync("git reset --hard", {
                        cwd: tempRepoDir,
                        stdio: "inherit"
                    });

                    console.log(`Fetching latest changes for ${repoFolderName} ${repoBranch}...`);
                    execSync(`git fetch`, {
                        cwd: tempRepoDir,
                        stdio: "inherit"
                    });

                    console.log(`Pulling latest changes for ${repoFolderName} ${repoBranch}...`);
                    execSync(`git pull origin ${repoBranch}`, {
                        cwd: tempRepoDir,
                        stdio: "inherit"
                    });
                }

                if (answer === "c") {
                    console.log("▶️ Continuing with changes...");
                }
            } else {
                console.log(`Fetching latest changes for ${repoFolderName} ${repoBranch}...`);
                execSync(`git fetch`, {
                    cwd: tempRepoDir,
                    stdio: "inherit"
                });

                console.log(`Pulling latest changes for ${repoFolderName} ${repoBranch}...`);
                execSync(`git pull origin ${repoBranch}`, {
                    cwd: tempRepoDir,
                    stdio: "inherit"
                });
            }
        }

        // -----------------------------
        // Build project
        // -----------------------------
        console.log(`🏗️ Building ${repoFolderName}...`);

        if (buildCommand) {
            execSync(buildCommand, {
                cwd: tempRepoDir,
                stdio: "inherit"
            });
        }

        // -----------------------------
        // Copy build output
        // -----------------------------
        const src = path.join(tempRepoDir, outputDirToCopy);
        const dest = path.join(projectsSiteDir, destinationPath);

        if (!fs.existsSync(src)) {
            console.error(`❌ Build output not found: ${src}`);
            return;
        }

        fs.rmSync(dest, { recursive: true, force: true });
        fs.mkdirSync(dest, { recursive: true });
        fs.cpSync(src, dest, { recursive: true });

        console.log(`✅ Copied distro files to ${dest}`);

        if (buildCommand && (buildCommand.length > 0) && (outputDirToCopy !== "./")) {
            console.log(`🧹 Removing temporary repo build folder for ${repoFolderName}...`);
            fs.rmSync(src, { recursive: true, force: true });
        }
    }
}

run().catch(err => {
    console.error("❌ Script failed:", err);
    process.exit(1);
});