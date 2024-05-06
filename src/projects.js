// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.


const projects = [
	{
		id: 1,
		path: "/projects/orange-app-development/index.md",
		slug: 'orange-app-development',
		header: {
			title: 'Orange App Development',
			date: 'July 2021',
			tag: 'App Development',
			category: 'App Development',

		},
		summary: 'Internship app development project at Orange',
	
		images: [
			{
				id: 1,
				title: 'orange-project-image1',
				img: '/images/orange-project1.jpg',
			},
		],
		technologies: [
			{
				title: 'Tools & Technologies',
				techs: [
					'Excel Macros',
					'Visual Basic',
				],
			},
		],
	},
	{
		id: 2,
		path: "/projects/botium-toys/index.md",
		header: {
			title: 'Botium Toys',
			date: 'September 2023',
			tag: 'UI / Frontend',
			category: 'Cybersecurity',
		},
		slug: 'botium-toys',
		images: [
			{
				id: 1,
				title: 'botium-project-image1',
				img: '/images/botium-toys-1.jpg',
			},
		],
		summary: 'Google Cybersecurity Certificate project ',
		technologies: [
			{
				title: 'Skills developed',
				techs: [
					'Security Audit',
					'Asset Security',
					'Writtig Communication'
					
				],
			},
		],
	},
	{
		id: 3,
		path: "/projects/website-redesign/index.md",
		header: {
			title: 'Le Vieux Monastère',
			date: 'September 2023',
			tag: 'UX/UI Design',
			category: 'App Development',


		},
		link : {
			title: 'View Project',
			url: 'https://www.levieuxmonastere.com'
		},
		slug: 'lvm',
		images: [
			{
				id: 1,
				title: 'lvmh-project-image1',
				img: '/images/lvm-laptop.png',
			},
		],
		summary: 'CRM Develoment from scratch',
		technologies: [
			{
				title: 'Tools & Technologies',
				techs: [
					'Google Apps Script',
					'CSS',
					'JavaScript',
				],
			},
		],
	}
	,
	{
		id: 4,
		path: "/projects/gendarmerie-nationale/index.md",
		header: {
			title: 'Gendarmerie Nationale',
			date: 'February 2023',
			tag: 'App Development',
			category: 'App Development',

		},
		slug: 'gendarmerie-nationale',
		images: [
			{
				id: 1,
				title: 'gendarmerie-project-image1',
				img: '/images/gendarmerie.jpg',
			},
		],
		summary: 'A cybersecurity oriented school project',
		technologies: [
			{
				title: 'Tools & Technologies',
				techs: [
					'PandaSuite',
					'Figma',
				],
			},
		],
	
	},
	{
		id: 5,
		path: "/projects/incident-response/index.md",
		header: {
			title: 'Incident Response',
			date: 'October 2023',
			tag: 'Cybersecurity',
			category: 'Cybersecurity',

		},
		slug: 'incident-response',
		images: [
			{
				id: 1,
				title: 'incident-response-image1',
				img: '/images/incident-report.jpg',
			},
		],
		summary: "A small Google's cybersecurity certificate project",
		technologies: [
			{
				title: 'Tools & Technologies',
				techs: [
					'Wireshark',
					'SIEM Tools',
					'Google Docs',
					'Google Sheets',
				],
			},
		],
	},
	{
		id: 6,
		path: "/projects/d-teye/index.md",
		header: {
			title: 'D-Teye',
			date: 'March 2023',
			tag: 'Web Development',
			category: 'Web Development',

		},
		link : {
			title: 'View Project',
			url: 'https://bacchanight-d-teye.vercel.app/'
		},
		slug: 'd-teye',
		images: [
			{
				id: 1,
				title: 'd-teye-image1',
				img: '/images/d-teye.png',
			},
		],
		summary: "In the winter of 2022, during the cybersecurity week at my university, I and my classmates had the pleasure and privilege to work with the National Gendarmerie (Bordeaux) to create two digital solutions to help gendarmerie professionals and civilian communities from the many everyday cybersecurity threats, risks and vulnerabilities that everyone is concerned about.",
		technologies: [
			{
				title: 'Tools & Technologies',
				techs: [
					'HTML',
					'CSS',
					'JavaScript',
					'Next.js',
					'Github'
				],
			},
		],
	},
	{
		id: 7,
		path: "/projects/allela/index.md",
		header: {
			title: 'Allela',
			date: 'January 2023',
			tag: 'Web Development',
			category: 'Web Development',

		},
		link : {
			title: 'View Project',
			url: 'https://www.collectif-allela.com/'
		},
		slug: 'allela',
		images: [
			{
				id: 1,
				title: 'allela-image1',
				img: '/images/allela.png',
			},
		],
		summary: "Description of my side-project Allela.", 
		technologies: [
			{
				title: 'Tools & Technologies',
				techs: [
					'Webflow',
					'Figma',
					'JavaScript',
				],
			},
		],
	},
	{
		id: 8,
		path: "/projects/musba/index.md",
		header: {
			title: 'Musba Experience 2024',
			date: 'March 2024',
			tag: 'Web Development',
			category: 'Web Development',

		},
		slug: 'musba',
		link : {
			title: 'View Project',
			url: 'https://nuit-du-musba.mmibordeaux.com/'
		},
		images: [
			{
				id: 1,
				title: 'musba-image1',
				img: '/images/logo_musba.jpeg',
			},
		],
		summary: "Huge school project developed with Three.js", 
		technologies: [
			{
				title: 'Tools & Technologies',
				techs: [
					'Three.js',
					'Javascript',
					'HTML',
					'CSS',
				],
			},
		],
	},
	{
		id: 9,
		path: "/projects/samiras-journey/index.md",
		header: {
			title: "Samira's Journey",
			date: 'March 2024',
			tag: 'Web Development',
			category: 'Web Development',

		},
		link : {
			title: 'View Project',
			url: 'https://1-samira.les-voix-errantes-de-kyiv.fr/'
		},
		slug: 'samiras-journey',
		images: [
			{
				id: 1,
				title: 'samira1',
				img: '/images/samira1.png',
			},
		],
		summary: "School project developed with Three.js", 
		technologies: [
			{
				title: 'Tools & Technologies',
				techs: [
					'Three.js',
					'Javascript',
					'HTML',
					'CSS',
				],
			},
		],
	},
	{
		id: 9,
		path: "/projects/samiras-journey/index.md",
		header: {
			title: "Le jeu Allela",
			date: 'March 2024',
			tag: 'Videogame Development',
			category: 'Videogame Development',

		},
		link : {
			title: 'View Project',
			url: 'https://effortless-kelpie-6bc42f.netlify.app/'
		},
		slug: 'jeu-allela',
		images: [
			{
				id: 1,
				title: 'Jeu Allela',
				img: '/images/allela-jeu-1.png',
			},
		],
		summary: "School video game project developed with Unity & C#", 
		technologies: [
			{
				title: 'Tools & Technologies',
				techs: [
					'Unity',
					'C#'
				],
			},
		],
	},
	{
		id: 10,
		path: "/projects/symbié/index.md",
		header: {
			title: "Symbié Magazine",
			date: 'April 2024',
			tag: 'Web Development',
			category: 'Web Development',

		},
		link : {
			title: 'See Project',
			url: 'https://symbie.netlify.app/'
		},
		slug: 'symbie',
		images: [
			{
				id: 1,
				title: 'Symbié Magazine',
				img: '/images/symbie3.png',
			},
		],
		summary: "Independant magazine project developed with Three.js", 
		technologies: [
			{
				title: 'Tools & Technologies',
				techs: [
					'Three.js',
					'TypeScript',
					'HTML',
					'CSS',
				],
			},
		],
	},
	{
		id: 11,
		path: "/projects/password_manager/index.md",
		header: {
			title: "My Own Password Manager",
			date: 'February 2024',
			tag: 'Cybersecurity',
			category: 'Cybersecurity',

		},
		link : {
			title: 'See Github Repository',
			url: 'https://github.com/andredespouys/password-manager'
		},
		slug: 'password_manager',
		images: [
			{
				id: 1,
				title: 'My Own Password Manager',
				img: '/images/password1.png',
			},
		],
		summary: "My own password manager developed with Python ", 
		technologies: [
			{
				title: 'Tools & Technologies',
				techs: [
					'Python',
				],
			},
		],
	},
];

export default projects;
