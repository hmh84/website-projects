// =========================
// THE 12 SIGNS
// =========================

const signs = [
    rat = {
        name: "rat",
        image: '01_rat.svg',
        topline: "Quick-witted, resourceful, and versatile",
        description1: "According to the Chinese zodiac story, in the competition held by the Jade Emperor to decide the zodiac animals, the quick-witted rat asked the diligent ox to take him on a ride to cross the river and jumped down before the ox crossed the finish line, so the rat won the race and became the first of the zodiac animals.",
        description2: "Rats are quick-witted, resourceful, and smart but lack courage. With rich imaginations and sharp observations, they can take advantage of various opportunities well. In Chinese culture, rats represent working diligently and thriftiness, so people born in a Rat year are thought to be wealthy and prosperous.",
        most_compatible: "<span class='sign-link'>ox</span>, <span class='sign-link'>rabbit</span>, or <span class='sign-link'>dragon</span>",
        least_compatible: "<span class='sign-link'>horse</span> or <span class='sign-link'>rooster</span>",
        sound: '01_rat.mp3',
    },
    ox = {
        name: "ox",
        image: '02_ox.svg',
        topline: "Diligent and dependable",
        description1: "Oxen are known for diligence, dependability, strength and determination. Having an honest nature, Oxen are strongly patriotic, have ideals and ambitions for life, and attach importance to family and work. These reflect traditional conservative characteristics. Women Oxen are traditional, faithful wives, who attach great importance to their children's education. Having great patience and a desire to make progress, Oxen can achieve their goals by consistent effort. They are not much influenced by others or the environment, but persist in doing things according to their ideals and capabilities.",
        description2: "Before taking any action, Oxen will have a definite plan with detailed steps, to which they apply their strong faith and physical strength. As a result, people of the Ox zodiac sign often enjoy great success. Oxen are weakest in their communication skills. They are not good at communicating with others, and even think it is not worthwhile to exchange ideas with others. They are stubborn and stick to their own ways.",
        most_compatible: "<span class='sign-link'>rat</span>, <span class='sign-link'>monkey</span>, or <span class='sign-link'>rooster</span>",
        least_compatible: "<span class='sign-link'>tiger</span>, <span class='sign-link'>dragon</span>, <span class='sign-link'>horse</span>, or <span class='sign-link'>goat</span>",
        sound: '02_ox.mp3',
    },
    tiger = {
        name: "tiger",
        image: '03_tiger.svg',
        topline: "Brave and confident",
        description1: "People born in a year of the Tiger are brave, competitive, unpredictable, and confident. They are very charming and well-liked by others. But sometimes they are likely to be impetuous, irritable, and overindulged.",
        description2: "With stubborn personalities and tough judgment, Tigers work actively and express themselves boldly, doing things in a high-handed manner. They are authoritative and never go back on what they have said. With great confidence and indomitable fortitude, they can be competent leaders. They will not make preparations for anything, but can handle anything that comes along.",
        most_compatible: "<span class='sign-link'>dragon</span>, <span class='sign-link'>horse</span>, or <span class='sign-link'>pig</span>",
        least_compatible: "<span class='sign-link'>ox</span>, <span class='sign-link'>tiger</span>, <span class='sign-link'>snake</span>, or <span class='sign-link'>monkey</span>",
        sound: '03_tiger.mp3',
    },
    rabbit = {
        name: "rabbit",
        image: '04_rabbit.svg',
        topline: "Quiet and elegant",
        description1: "Rabbits tend to be gentle, quiet, elegant, and alert as well as quick, skillful, kind, patient, and very responsible. However, they might be superficial, stubborn, melancholy, and overly-discreet. Gentlemen who belong to the Rabbit zodiac sign always treat people politely, with a gentle smile that makes people feel that they are credible and sincere. ",
        description2: "When encountering tough difficulties, they are never discouraged but instead remain persistent in their endeavors to find solutions. This means they eventually achieve enviable success. Ladies belonging to the Rabbit zodiac sign, apart from having a pretty and demure appearance, have a pure heart. Rabbits are faithful to those around them but are reluctant to reveal their minds to others, and have a tendency to escape reality. They are too cautious and conservative, which means they miss good opportunities.",
        most_compatible: "<span class='sign-link'>rat</span>, <span class='sign-link'>goat</span>, <span class='sign-link'>monkey</span>, <span class='sign-link'>dog</span>, or <span class='sign-link'>pig</span>",
        least_compatible: "<span class='sign-link'>rooster</span> or <span class='sign-link'>snake</span>",
        sound: '04_rabbit.mp3',
    },
    dragon = {
        name: "dragon",
        image: '05_dragon.svg',
        topline: "Confident and intelligent",
        description1: "Among the Chinese zodiac animals, the dragon is the sole imaginary animal. The Chinese dragon is the most vital and powerful beast in the Chinese zodiac, although Dragons have an infamous reputation for being a hothead and possessing a sharp tongue. In ancient times, people thought that Dragons were best suited to be leaders of the world with their character traits of dominance and ambition.",
        description2: "Gifted with innate courage, tenacity, and intelligence, Dragons are enthusiastic and confident. They are not afraid of challenges, and willing to take risks. However, Dragons are sometimes regarded as aggressive, and angry Dragons are not open to criticism. They don't consider themselves irritating and arrogant. Instead of following tradition, they strive for a smooth future.",
        most_compatible: "<span class='sign-link'>rat</span>, <span class='sign-link'>tiger</span>, or <span class='sign-link'>snake</span>",
        least_compatible: "<span class='sign-link'>ox</span>, <span class='sign-link'>goat</span>, or <span class='sign-link'>dog</span>",
        sound: '05_dragon.mp3',
    },
    snake = {
        name: "snake",
        image: '06_snake.svg',
        topline: "Intelligent and wise",
        description1: "In Chinese culture, the Snake is the most enigmatic animal among the 12 zodiac animals. People born in a year of the Snake are supposed to be the most intuitive. Snakes tend to act according to their own judgments while remaining private and reticent. They are determined to accomplish their goals and hate to fail. Snakes represent the symbol of wisdom. They are intelligent and wise. They are good at communication but say little. Snakes are usually regarded as great thinkers.",
        description2: "Snakes are materialistic and love keeping up with the Joneses. They love to possess the best of everything but they have no patience for shopping. Snake people prefer to work alone; therefore, they are easily stressed. If they seem unusually stressed, it is best to allow them their own space and time to return to normal.",
        most_compatible: "<span class='sign-link'>dragon</span> or <span class='sign-link'>rooster</span>",
        least_compatible: "<span class='sign-link'>tiger</span>, <span class='sign-link'>rabbit</span>, <span class='sign-link'>goat</span>, or <span class='sign-link'>pig</span>",
        sound: '06_snake.mp3',
    },
    horse = {
        name: "horse",
        image: '07_horse.svg',
        topline: "Active and energetic",
        description1: "People born in a year of the Horse are extremely animated, active and energetic. Horses love to be in a crowd, and they can usually be seen on such occasions as concerts, theater performances, meetings, sporting events, and parties. With a deft sense of humor, Horses are masters of repartee. They love to take center stage and delight audiences everywhere.",
        description2: "Sometimes, the Horse is a little self-centered, but it doesn't mean that she/he isn't interested in others' problems. Horses are really more cunning than intelligent, and that is probably why most Horse people lack real confidence.",
        most_compatible: "<span class='sign-link'>goat</span> or <span class='sign-link'>tiger</span>",
        least_compatible: "<span class='sign-link'>rat</span>, <span class='sign-link'>ox</span>, or <span class='sign-link'>rooster</span>",
        sound: '07_horse.mp3',
    },
    goat = {
        name: "goat",
        image: '08_goat.svg',
        topline: "Calm and gentle",
        description1: "People born in a year of the Goat are generally believed to be gentle, mild-mannered, shy, stable, sympathetic, amicable, and brimming with a strong sense of kindheartedness and justice. They have very delicate thoughts, strong creativity, and perseverance, and acquire professional skills well. Although they look gentle on the surface, they are tough on the inside, always insisting on their own opinions in their minds. They have strong inner resilience and excellent defensive instincts.",
        description2: "Although they prefer to be in groups, they do not want to be the center of attention. They are reserved and quiet, most likely because they like spending a lot of time in their own thoughts. Goats like to spend money on fashionable things that give them a first class appearance. Although Goats enjoy spending money on the finer things in life, they are not snobbish.",
        most_compatible: "<span class='sign-link'>rabbit</span>, <span class='sign-link'>horse</span>, or <span class='sign-link'>pig</span>",
        least_compatible: "<span class='sign-link'>ox</span>, <span class='sign-link'>dragon</span>, <span class='sign-link'>snake</span>, or <span class='sign-link'>dog</span>",
        sound: '08_goat.mp3',
    },
    monkey = {
        name: "monkey",
        image: '09_monkey.svg',
        topline: "Sharp, smart, but naughty",
        description1: "People born in a year of the Monkey have magnetic personalities and are witty and intelligent. Personality traits like mischievousness, curiosity, and cleverness make them very naughty. Monkeys are masters of practical jokes, because they like playing most of the time. Although they don't have bad intentions, their pranks sometimes hurt other people's feelings.",
        description2: "Monkeys are fast learners and crafty opportunists. They have many interests and need partners who are capable of stimulating them. While some like the eccentric nature of Monkeys, others don't trust their sly, restless, and inquisitive nature. Although they are clever and creative, Monkeys can't always exhibit their talents properly. They like to accept challenges and prefer urban life to rural life.",
        most_compatible: "<span class='sign-link'>ox</span> or <span class='sign-link'>rabbit</span>",
        least_compatible: "<span class='sign-link'>tiger</span> or <span class='sign-link'>pig</span>",
        sound: '09_monkey.mp3',
    },
    rooster = {
        name: "rooster",
        image: '10_rooster.svg',
        topline: "Observant and hardworking",
        description1: "Roosters are always active, amusing, and popular within a crowd. Roosters are talkative, outspoken, frank, open, honest, and loyal individuals. They like to be the center of attention and always appear attractive and beautiful. Roosters are happiest when they are surrounded by others, whether at a party or just a social gathering. They enjoy the spotlight and will exhibit their charm on any occasion.",
        description2: "Roosters expect others to listen to them while they speak, and can become agitated if they don't. Vain and boastful, Roosters like to brag about themselves and their accomplishments. Their behavior of continually seeking the unwavering attention of others annoys people around them at times.",
        most_compatible: "<span class='sign-link'>ox</span> or <span class='sign-link'>snake</span>",
        least_compatible: "<span class='sign-link'>rat</span>, <span class='sign-link'>rabbit</span>, <span class='sign-link'>horse</span>, or <span class='sign-link'>pig</span>",
        sound: '10_rooster.mp3',
    },
    dog = {
        name: "dog",
        image: '11_dog.svg',
        topline: "Loyal, honest, but not good at communication",
        description1: "Dogs are loyal and honest, amiable and kind, cautious and prudent. Due to having a strong sense of loyalty and sincerity, Dogs will do everything for the person who they think is most important. As Dogs are not good at communication, it is difficult for them to convey their thoughts to others. Therefore, Dogs tend to leave others with the impression that they have a stubborn personality.",
        description2: "When thrown into doubt, Dogs think the world is evil and complicated. Then they criticize sharply when making comments, and infer that all things are according to their pessimistic point of view.",
        most_compatible: "<span class='sign-link'>rabbit</span>",
        least_compatible: "<span class='sign-link'>dragon</span>, <span class='sign-link'>goat</span>, or <span class='sign-link'>rooster</span>",
        sound: '11_dog.mp3',
    },
    pig = {
        name: "pig",
        image: '12_pig.svg',
        topline: "Diligent, compassionate, and realistic",
        description1: "Pigs are diligent, compassionate, and generous. They have great concentration: once they set a goal, they will devote all their energy to achieving it. Though Pigs rarely seek help from others, they will not refuse to give others a hand. Pigs never suspect trickery, so they are easily fooled.",
        description2: "General speaking, Pigs are relatively calm when facing trouble. No matter how difficult the problems are Pigs encounter, they can handle things properly and carefully. They have a great sense of responsibility to finish what they are engaged in.",
        most_compatible: "<span class='sign-link'>goat</span>, <span class='sign-link'>tiger</span>, or <span class='sign-link'>rabbit</span>",
        least_compatible: "<span class='sign-link'>monkey</span> or <span class='sign-link'>snake</span>",
        sound: '12_pig.mp3',
    }];

// =========================
// INITIALIZE
// =========================

const bubble_wrap = document.querySelector('.sign-bubble-wrap');
const list_wrap = document.querySelector('.sign-list-wrap');

signs.forEach(sign => {
    build_sign_bubbles(sign);
    build_sign_list(sign);
});

// Build Bubbles & Lists

function build_sign_bubbles(sign) {
    const button = document.createElement('button');
    const img = document.createElement('img');
    button.classList.add('sign-bubble');
    img.classList.add('sign-img');
    img.src = './graphics/' + sign.image;

    bubble_wrap.appendChild(button);
    button.dataset.value = sign.name;
    button.appendChild(img);
}

function build_sign_list(sign) {
    const button = document.createElement('button');
    const div = document.createElement('div');
    button.classList.add('sign-list');
    div.classList.add('sign-list-ind');

    button.innerHTML = sign.name;
    button.dataset.value = sign.name;
    button.appendChild(div);
    list_wrap.appendChild(button);
}

// Add Click Listeners

function add_bubble_listeners() {
    const sign_bubbles = document.querySelectorAll('.sign-bubble');

    sign_bubbles.forEach(bubble => {
        bubble.addEventListener('click', () => {
            determine_sign(bubble.dataset.value);
        });
    });
}

function add_list_listeners() {
    const sign_lists = document.querySelectorAll('.sign-list');

    sign_lists.forEach(list => {
        list.addEventListener('click', () => {
            determine_sign(list.dataset.value);
        });
    });
}

add_bubble_listeners();
add_list_listeners();

// Set the active sign

function determine_sign(compare) {
    x = 0;
    signs.forEach(sign => {
        if (sign.name === compare) {
            const active_sign = sign;
            window.active_sign = active_sign;
            output_sign(active_sign);
        } else {
            x++;
        }
    });
    if (x === signs.length) {
        const bdayArray = compare.split('-');

        const year = bdayArray[0];
        const month = bdayArray[1];
        const day = bdayArray[2];
        // Year int converter

        const yearCalc = (year - 4 - ((Math.round((year - 4) / 12)) * 12));
        const active_sign = signs[yearCalc];
        window.active_sign = active_sign;
        output_sign(active_sign);
    }
}

// =========================
// OUTPUT SIGN MODAL
// =========================

const modal_wrap = document.querySelector('.modal-wrap');
const modal_wallpaper = document.querySelector('.modal-wallpaper');
const modal = document.querySelector('.modal');
const modal_title = document.querySelector('.modal-title');
const modal_desc_1 = document.querySelector('.modal-desc-1');
const modal_desc_2 = document.querySelector('.modal-desc-2');
const modal_most_comp = document.querySelector('.modal-most-comp');
const modal_least_comp = document.querySelector('.modal-least-comp');

function output_sign(active_sign) {
    modal_wallpaper.style.backgroundImage = "url('./graphics/" + active_sign.image + "')";

    modal_title.innerHTML = active_sign.name + ' - ' + active_sign.topline + '...';
    modal_desc_1.innerHTML = active_sign.description1;
    modal_desc_2.innerHTML = active_sign.description2;
    modal_most_comp.innerHTML = 'Most Compatible With: ' + active_sign.most_compatible;
    modal_least_comp.innerHTML = 'Least Compatible With: ' + active_sign.least_compatible;

    add_sign_links();
    const active_sign_index = signs.indexOf(active_sign);
    add_arrow_links(active_sign_index);
    modal_wrap.style.display = 'flex';
    call_speaker(active_sign.sound);
    window.modal_vis = 'showing';
}

// Close modal button

function hide_modal() {
    modal_wrap.style.display = 'none';
    window.modal_vis = 'hidden';
}
const close_modal = document.querySelector('.close-modal');

close_modal.addEventListener('click', hide_modal);
// modal_wrap.addEventListener('click', hide_modal);

// Sign Links

function add_sign_links() {
    const sign_links = document.querySelectorAll('.sign-link');
    sign_links.forEach(link => {
        link.addEventListener('click', () => {
            determine_sign(link.innerHTML);
        });
    });
}

// Submit Button

const submit = document.querySelector('#submit');

submit.addEventListener('click', (event) => {
    event.preventDefault();
    if (bday.value == '') {
        alert('Enter a date to use this feature');
        return;
    }
    else {
        determine_sign(bday.value);
    }
});

// =========================
// AUDIO
// =========================

const speaker = document.querySelector('#speaker');
const speaker_control = document.querySelector('#sound-control');
const speaker_icon = document.querySelector('#speaker-icon');

function call_speaker(sound) {
    speaker.src = './sounds/' + sound;
    if (!mute) {
        speaker.play();
    }
}

let mute;
speaker_control.addEventListener('click', () => {
    if (speaker_icon.dataset.icon == 'muted') {
        speaker_icon.dataset.icon = 'audible';
        speaker_icon.src = './graphics/audible.svg';
    } else {
        speaker_icon.dataset.icon = 'muted';
        speaker_icon.src = './graphics/muted.svg';
    }
    speaker.pause();
    mute = !mute;
});

// =========================
// ARROWS
// =========================

const prev_arrow = document.querySelector('#prev-arrow');
const next_arrow = document.querySelector('#next-arrow');

prev_arrow.addEventListener('click', () => {
    change_sign('prev');
});

next_arrow.addEventListener('click', () => {
    change_sign('next');
});

function add_arrow_links(active_sign_index) {
    if (active_sign_index == 0) {
        // Prev
        prev_arrow.dataset.value = signs.length - 1;
    } else {
        prev_arrow.dataset.value = active_sign_index - 1;
    }

    if (active_sign_index == signs.length - 1) {
        //Next
        next_arrow.dataset.value = 0;
    } else {
        next_arrow.dataset.value = active_sign_index + 1;
    }
}

function change_sign(direction) {
    if (direction == 'prev') {
        const change = prev_arrow.dataset.value;
        determine_sign(signs[change].name);
    } else {
        const change = next_arrow.dataset.value;
        determine_sign(signs[change].name);
    }
}

// =========================
// KEY EVENTS
// =========================

// KeyUp Events

document.onkeyup = function (evt) {
    if (window.modal_vis == 'showing') {
        evt = evt || window.event;
        if (evt.keyCode == 27 || evt.keyCode == 32) {
            // Keys (27 = ESC, 32 = SpaceBar)
            event.preventDefault();
            hide_modal();
        }
        if (evt.keyCode == 37) {
            // Keys (37 = ArrowLeft)
            event.preventDefault();
            prev_arrow.click();
        }
        if (evt.keyCode == 39) {
            // Keys (39 = ArrowRight)
            event.preventDefault();
            next_arrow.click();
        }
    }
};

// KeyDown Events

document.onkeydown = function (evt) {
    if (window.modal_vis == 'showing') {
        if (evt.keyCode == 38) {
            // Keys (38: ArrowUp)
            event.preventDefault();
            modal.scrollBy(0, -25);
        }
        if (evt.keyCode == 40) {
            // Keys (40: ArrowDown)
            event.preventDefault();
            modal.scrollBy(0, 25);
        }
    }
};