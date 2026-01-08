import { docQ, docQA, random_chance } from './utils.js';

// =========================
// VARS
// =========================

const character = docQ('#character'),
    obstruction = docQ('#obstruction'),
    title = docQ('#title'),
    restart = docQ('#restart'),
    mouth = docQ('#mouth'),
    ground = docQ('#btm'),
    eyes = docQA('#eyes span'),
    subtitle = docQ('#subtitle'),
    main = docQ('main');

// =========================
// TOUCH SWIPE
// =========================

// Swiped-up
window.addEventListener('swiped-up', function (e) {
    jump();
});

// Swiped-down
window.addEventListener('swiped-down', function (e) {
    duck();
});

// =========================
// START/STOP FUNCTIONS
// =========================

document.body.onkeydown = function (e) {
    if (e.keyCode == 32) {
        start_game();
    }
}

restart.addEventListener('click', start_game);

var running = false;
function start_game() {
    if (!running) {
        running = true;
        subtitle.style.opacity = 0;
        play_tone('start');
        setTimeout(function () {
            // I am delayed
            play_tone('bgm');
        }, 1000);
        mouth.style.paddingBottom = '1rem'
        restart.removeEventListener('click', start_game);
        restart.addEventListener('click', () => { location.reload(); });

        restart.style.opacity = 0;
        restart.innerText = 'Restart';
        title.innerText = score + unit;
        toggle_animation('on');
        var check_dead_int = setInterval(function () {
            check_dead();
        }, 10)
        main.addEventListener('click', jump);
        document.body.onkeydown = function (e) {
            if (e.keyCode == 32 || e.keyCode == 87 || e.keyCode == 38) { // Space or W or UpArrow
                jump();
            }
            if (e.keyCode == 83 || e.keyCode == 40) { // S or DownArrow
                duck();
            }
        }
    }
}

function stop_game() {
    play_tone('dead');
    mouth.style.paddingBottom = '0';
    restart.style.opacity = 1;
    alive = false;
    title.innerText = 'You Died! Score: ' + score + unit;
    clearInterval(check_dead);
    toggle_animation('off');
    document.body.onkeydown = function (e) {
        if (e.keyCode == 32) {
            location.reload();
        }
    }
}

// =========================
// MECHANICS
// =========================

var unit = ' pts';
var score = 0;
var alive = true;
// var speed = 3;

function jump() {
    if (running && (!character.classList.contains('jump') && !character.classList.contains('duck')) && alive) {
        play_tone('jump');
        character.classList.add('jump');
        setTimeout(function () {
            // I am delayed
            character.classList.remove('jump');
            // speed -= .1;
            // obstruction.style = `animation-duration: ${speed}s;`
            score++;
            check_score();
            if (score === 1) {
                unit = ' pt';
            } else {
                unit = ' pts';
            }
            if (alive) { title.innerText = score + unit; }
        }, 750);
    }
}

function duck() {
    if (running && (!character.classList.contains('jump') && !character.classList.contains('duck')) && alive) {
        const eyes_obj = docQ('#eyes');

        character.classList.add('char_duck');
        eyes_obj.classList.add('eyes_duck');
        mouth.classList.add('mouth_duck');
        mouth.style.paddingBottom = '.25rem';
        setTimeout(function () {
            // I am delayed
            character.classList.remove('char_duck');
            eyes_obj.classList.remove('eyes_duck');
            mouth.classList.remove('mouth_duck');
            mouth.style.paddingBottom = '.5rem';
            // speed -= .1;
            // obstruction.style = `animation-duration: ${speed}s;`
            score++;
            check_score();
            if (score === 1) {
                unit = ' pt';
            } else {
                unit = ' pts';
            }
            if (alive) { title.innerText = score + unit; }
        }, 750);
    }
}

function check_dead() { // Check for death
    var rect1 = character.getBoundingClientRect();
    var rect2 = obstruction.getBoundingClientRect();

    var overlap = !(rect1.right < rect2.left ||
        rect1.left > rect2.right ||
        rect1.bottom < rect2.top ||
        rect1.top > rect2.bottom);

    overlap && stop_game();
}

// =========================
// LEVELS
// =========================

function check_score() {
    // Obstruction height
    if (random_chance(.25)) {
        obstruction.style.marginBottom = '1.5rem';
    } else {
        obstruction.style.marginBottom = '0';
    }
    // Colors
    if (score === 10) {
        color_character('greenyellow');
    } else if (score === 20) {
        color_character('yellow');
    } else if (score === 30) {
        color_character('red');
    } else if (score === 40) {
        color_character('purple');
    } else if (score === 50) {
        color_character('brown');
    } else if (score === 60) {
        color_character('teal');
    } else if (score === 70) {
        color_character('black');
    } else if (score === 80) {
        color_character('white');
    }
}

function color_character(color) { // param color is a string
    // title.style.color = color;
    character.style.backgroundColor = color;
    if (color === 'black') {
        mouth.style.backgroundColor = 'white';
        eyes.forEach(eye => {
            eye.style.backgroundColor = 'white';
        });
    } else if (color === 'white') {
        mouth.style.backgroundColor = 'black';
        eyes.forEach(eye => {
            eye.style.backgroundColor = 'black';
        });
    }
}
// =========================
// ANIMATIONS
// =========================

function toggle_animation(state) {
    if (state === 'on') {
        obstruction.classList.add('obstruction_slide');
        ground.classList.add('ground_slide');
    } else {
        obstruction.classList.remove('obstruction_slide');
        ground.classList.remove('ground_slide');
    }
}

// =========================
// SOUNDS & MUSIC
// =========================

var bgm_playing = false;
function play_tone(target) { // Call sounds with their file name Ex. play_tone('bgm');
    const audio = new Audio(`sounds/${target}.mp3`);
    if (target === 'bgm' && !bgm_playing) { // If it's the background music play it on loop
        bgm_playing = true;
        audio.loop = true;
        audio.play();
    } else {
        audio.play();
    }
}