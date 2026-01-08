const projects = [
	{
		name: 'Anytown, USA WebVR Shooting Gallery',
		img: 'anytown-usa.png',
		alt: 'Preview of the game',
		desc: 'A fun WebVR FPS with controls, cheats, sounds, and more.',
		tech: 'Three.JS, Blender',
		cta: [
			{ label: 'Play', link: '/idm331/final' },
			{ label: 'Case Study', link: '/idm331/casestudy' },
		],
	},
	{
		name: 'IMDb Redesign',
		img: 'imdb.jpg',
		alt: "IMDb's logo",
		desc: "Team project redesigning IMDb's app.",
		tech: 'Figma',
		cta: [{ label: 'View', link: '/projects/imdb' }],
	},
	{
		name: 'Tic Tac Toe',
		img: 'tic-tac-toe.jpg',
		alt: 'A tic-tac-toe board',
		desc: 'Made a Tic-Tac-Toe game for myself!',
		tech: 'CSS, JS',
		cta: [
			{ label: 'View', link: '/projects/tic-tac-toe' },
			{
				label: 'GitHub',
				link: 'https://github.com/hmh84/tic-tac-toe',
			},
		],
	},
	{
		name: 'Lyft Analytics',
		img: 'lyft.jpg',
		alt: 'Screenshot of the Lyft Analytics page',
		desc: 'We redesigned Lyft focusing on user ride data.',
		tech: 'PHP, CSS',
		cta: [
			{
				label: 'View',
				link: '/idm216/final/month-ride-history.php',
			},
			{
				label: 'GitHub',
				link: 'https://github.com/cybersnail-ui/jervo-jawns',
			},
		],
	},
	{
		name: 'Block Run',
		img: 'block-run.jpg',
		alt: 'Preview of the Block Run Game',
		desc: 'An 8-bit, minimal, JavaScript side-scrolling game.',
		tech: 'CSS, JS',
		cta: [{ label: 'View', link: '/projects/block-run' }],
	},
	{
		name: 'Coloringbook',
		img: 'coloringbook.jpg',
		alt: 'View of the coloring page with a sample page',
		desc: 'This is a coloring book, but optimized to the fullest.',
		tech: 'NPM, PHP',
		cta: [
			{ label: 'View', link: '/idmt380' },
			{
				label: 'GitHub',
				link: 'https://github.com/mgabriele1/idmt380',
			},
		],
	},
	{
		name: 'Grammarly Interactions',
		img: 'grammarly.jpg',
		alt: 'Preview of the micro-interaction',
		desc: 'Redesigning interactions found in Grammarly.',
		tech: 'CSS, JS',
		cta: [
			{ label: 'View', link: '/idm241/final/build' },
			{ label: 'GitHub', link: 'https://github.com/hmh84/idm241' },
		],
	},
	{
		name: 'Zodiac',
		img: 'zodiac.jpg',
		alt: 'Preview of the front page',
		desc: 'A web app that gives you your Chinese Zodiac.',
		tech: 'JS',
		cta: [
			{ label: 'View', link: '/projects/zodiac' },
			{ label: 'GitHub', link: 'https://github.com/hmh84/idm231' },
		],
	},
];

const docQ = document.querySelector.bind(document),
	docQA = document.querySelectorAll.bind(document),
	body = docQ('body'),
	nav = docQ('nav'),
	main = docQ('main'),
	footer = docQ('footer'),
	graphical = docQ('#graphical'),
	nav_button = docQ('#nav_button'),
	nav_span_2 = docQ('#nav-span-2');

function toggleNav() {
	'0px' == nav.style.right
		? ((nav.style.right = '-100%'), nav_button.classList.remove('nav_open'))
		: ((nav.style.right = '0px'), nav_button.classList.add('nav_open'));
}

nav_button.addEventListener('click', toggleNav);
const nav_items = docQA('.nav-item');

if (
	(nav_items.forEach((a) => {
		a.innerHTML == current_page && a.setAttribute('id', 'current_page');
	}),
		'home' == current_page)
) {
	function a() {
		(c.innerHTML = '.typewrite .wrap { border-right: 0.08em solid #fff}'),
			setTimeout(() => {
				(c.innerHTML =
					'.typewrite .wrap { border-right: 0.08em solid #ffffff00}'),
					setTimeout(() => {
						a();
					}, 800);
			}, 800);
	}
	let b = function (a, b, c) {
		(this.toRotate = b),
			(this.el = a),
			(this.loopNum = 0),
			(this.period = parseInt(c, 10) || 2e3),
			(this.txt = ''),
			this.tick(),
			(this.isDeleting = !1);
	};
	(b.prototype.tick = function () {
		let a = this.loopNum % this.toRotate.length,
			b = this.toRotate[a];
		(this.txt = this.isDeleting
			? b.substring(0, this.txt.length - 1)
			: b.substring(0, this.txt.length + 1)),
			(this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>');
		let c = this,
			d = 200 - 100 * Math.random();
		this.isDeleting && (d /= 2),
			this.isDeleting || this.txt !== b
				? this.isDeleting &&
				'' === this.txt &&
				((this.isDeleting = !1), this.loopNum++, (d = 500))
				: ((d = this.period), (this.isDeleting = !0)),
			setTimeout(() => {
				c.tick();
			}, d);
	}),
		(window.onload = function () {
			let c = document.getElementsByClassName('typewrite');
			for (let a = 0; a < c.length; a++) {
				let d = c[a].getAttribute('data-type'),
					e = c[a].getAttribute('data-period');
				d && new b(c[a], JSON.parse(d), e);
			}
			a();
		});
	let c = document.createElement('style');
	c.setAttribute('type', 'text/css'),
		(c.innerHTML = '.typewrite .wrap { border-right: 0.08em solid #fff}'),
		document.body.appendChild(c);
}

if (
	('contact' == current_page &&
		(docQ('textarea').style.minHeight =
			2 * docQ('.input').offsetHeight + 'px'),
		'wall' == current_page)
) {
	function a() {
		const a = docQA('.wall_block');
		a.forEach((a) => {
			a.style.height = a.clientWidth + 'px';
		});
	}
	const b = docQ('.wall_container');
	let c = -1;
	projects.forEach((a) => {
		(c += 2),
			(b.innerHTML += `
            <div class="wall_block" tabindex="${c}" style="background-image: url('${dirPrefix}assets/graphics/${a.img}');" alt="${a.alt}">
                <div class="block_fog">
                    <h2 class="block_title">${a.name}</h2>
                    <p class="block_desc">${a.desc}</p>
                    <p class="block-tech"><strong>Major Tech:</strong> ${a.tech}</p>
                    <div class="block_cta_wrap"></div>
                </div>
            </div>
        `),
			a.cta.forEach((a) => {
				docQ('.wall_block:last-of-type .block_cta_wrap').innerHTML += `
                <button class="cta">${a.label}</button>
            `;
			});
	});
	window.addEventListener('resize', a),
		a(),
		setInterval(a, 3e3),
		'ontouchstart' in document.documentElement ||
		(document.documentElement.className += ' no-touch'),
		$('.wall_block').on('touchstart touchend', () => {
			$(this).toggleClass('over');
		});
}

function footer_check() {
	var a = Math.max;
	const b = a(
		document.documentElement.clientWidth || 0,
		window.innerWidth || 0
	),
		c = a(
			document.documentElement.clientHeight || 0,
			window.innerHeight || 0
		),
		d = nav.offsetHeight,
		e = main.offsetHeight,
		f = footer.offsetHeight;
	footer.style.position =
		850 <= b && e + d > c - f
			? 'unset'
			: 850 > b && e > c - f
				? 'unset'
				: 'fixed';
}

setInterval(footer_check, 1500),
	footer_check(),
	window.addEventListener('resize', footer_check);

function do_animation() {
	const a = docQA('#graphical span');
	let b = 0;
	a.forEach((a) => {
		b++,
			setTimeout(() => {
				a.classList.toggle('flip');
			}, 150 * b);
	});
}

for (let a = 0; 25 > a; a++) {
	const b = document.createElement('span');
	graphical.appendChild(b),
		24 == a && do_animation(),
		24 == a && begin_animation();
}

function begin_animation() {
	setInterval(() => {
		do_animation();
	}, 15e3);
}
