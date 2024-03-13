// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projects = [
	{
		id: 1,
		path: "/projects/orange-app-development/index.md",
		slug: 'orange-app-development',
		header: {
			title: 'Orange App Development',
			date: 'Jul 26, 2021',
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
			date: 'Jul 26, 2021',
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
			date: 'Jul 26, 2021',
			tag: 'UX/UI Design',
			category: 'App Development',


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
			date: 'Jul 26, 2021',
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
			date: 'Jul 26, 2021',
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
			date: 'Jul 26, 2021',
			tag: 'Web Development',
			category: 'Web Development',

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
];

export default projects;
