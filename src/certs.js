// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const certs = [
	{
		id: 1,
        title: 'Google Cybersecurity Certificate',
        img: '/images/google-logo.svg',
		url: "https://www.coursera.org/account/accomplishments/professional-cert/NTXVJ2CQS554?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=prof",
		category: 'Cyberscurity',
        certificate: true
	},
    {
		id: 2,
        title: 'Cybersecurity Fundamentals MOOC',
        img: '/images/mooc-logo.svg',
        url: "https://secnumacademie.gouv.fr/",
		category: 'Cyberscurity',
        certificate: false
	},
    {
		id: 3,
        title: 'Udemy Full Stack Web Development Certuficate',
        img: '/images/udemy.svg',
		url: "https://www.coursera.org/account/accomplishments/professional-cert/NTXVJ2CQS554?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=prof",
		category: 'Web Development',
        certificate: true
	},
    {
		id: 4,
        title: 'Opquast Web Quality Certification',
        img: '/images/opquast-logo.svg',
        url : 'https://directory.opquast.com/fr/certificat/KZPTC5/',
		category: 'Web Development',
        certificate: true
	},
];

export default certs;
