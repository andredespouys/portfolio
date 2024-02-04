// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projects = [
	{
		id: 1,
		path: "./src/data/projects/orange-app-development/index.md",
		slug: 'orange-app-development',
		header: {
			title: 'Orange App Development',
			date: 'Jul 26, 2021',
			tag: 'App Development',
			category: 'App Development',
		},
		summary:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.',
		images: [
			{
				id: 1,
				title: 'orange-project-image1',
				img: '../src/assets/images/orange-project1.jpg',
			},
		],
		technologies: [
			{
				title: 'Tools & Technologies',
				techs: [
					'HTML',
					'CSS',
					'JavaScript',
					'Vue.js',
					'TailwindCSS',
					'AdobeXD',
				],
			},
		],
	},
	{
		id: 2,
		path: "./src/data/projects/botium-toys/index.md",
		header: {
			title: 'Botium Toys',
			date: 'Jul 26, 2021',
			tag: 'UI / Frontend',
			category: 'Web Development',


		},
		slug: 'botium-toys',
		category: 'Cybersecurity',
		images: [
			{
				id: 1,
				title: 'botium-project-image1',
				img: '../src/assets/images/botium-toys-1.jpg',
			},
		],
		summary:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.',
		technologies: [
			{
				title: 'Tools & Technologies',
				techs: [
					'HTML',
					'CSS',
					'JavaScript',
					'Vue.js',
					'TailwindCSS',
					'AdobeXD',
				],
			},
		],
	},
	{
		id: 3,
		path: "./src/data/projects/website-redesign/index.md",
		header: {
			title: 'Website Redesign',
			date: 'Jul 26, 2021',
			tag: 'UX/UI Design',
			category: 'UX/UI Design',

		},
		slug: 'website-redesign',
		images: [
			{
				id: 1,
				title: 'lvmh-project-image1',
				img: '../src/assets/images/lvm-laptop.png',
			},
		],
		summary:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.',
		technologies: [
			{
				title: 'Tools & Technologies',
				techs: [
					'HTML',
					'CSS',
					'JavaScript',
					'Vue.js',
					'TailwindCSS',
					'AdobeXD',
				],
			},
		],
	}
	,
	{
		id: 4,
		path: "./src/data/projects/gendarmerie-nationale/index.md",
		header: {
			title: 'Gendarmerie Nationale',
			date: 'Jul 26, 2021',
			tag: 'App Development',
			category: 'App Development',

		},
		slug: 'gendarmerie-nationale',
		images: [
			{
				id: 1,
				title: 'gendarmerie-project-image1',
				img: '../src/assets/images/gendarmerie.jpg',
			},
		],
		summary: "This winter, during the cybersecurity week at my university, I and my classmates had the pleasure and privilege to work with the National Gendarmerie (Bordeaux) to create two digital solutions to help gendarmerie professionals and civilian communities from the many everyday cybersecurity threats, risks and vulnerabilities that everyone is concerned about.",
		technologies: [
			{
				title: 'Tools & Technologies',
				techs: [
					'HTML',
					'CSS',
					'JavaScript',
					'Vue.js',
					'TailwindCSS',
					'AdobeXD',
				],
			},
		],
	
	},
	{
		id: 5,
		path: "./src/data/projects/incident-response/index.md",
		header: {
			title: 'Incident Response',
			date: 'Jul 26, 2021',
			tag: 'Cybersecurity',
			category: 'Cybersecurity',

		},
		slug: 'incident-response',
		images: [
			{
				id: 1,
				title: 'incident-response-image1',
				img: '../src/assets/images/incident-report.jpg',
			},
		],
		summary: "This winter, during the cybersecurity week at my university, I and my classmates had the pleasure and privilege to work with the National Gendarmerie (Bordeaux) to create two digital solutions to help gendarmerie professionals and civilian communities from the many everyday cybersecurity threats, risks and vulnerabilities that everyone is concerned about.",
		technologies: [
			{
				title: 'Tools & Technologies',
				techs: [
					'HTML',
					'CSS',
					'JavaScript',
					'Vue.js',
					'TailwindCSS',
					'AdobeXD',
				],
			},
		],
	},
	{
		id: 6,
		path: "./src/data/projects/d-teye/index.md",
		header: {
			title: 'D-Teye',
			date: 'Jul 26, 2021',
			tag: 'Web Development',
			category: 'Web Development',

		},
		slug: 'd-teye',
		images: [
			{
				id: 1,
				title: 'd-teye-image1',
				img: '../src/assets/images/d-teye.png',
			},
		],
		summary: "This winter, during the cybersecurity week at my university, I and my classmates had the pleasure and privilege to work with the National Gendarmerie (Bordeaux) to create two digital solutions to help gendarmerie professionals and civilian communities from the many everyday cybersecurity threats, risks and vulnerabilities that everyone is concerned about.",
		technologies: [
			{
				title: 'Tools & Technologies',
				techs: [
					'HTML',
					'CSS',
					'JavaScript',
					'Vue.js',
					'TailwindCSS',
					'AdobeXD',
				],
			},
		],
	},
];

export default projects;
