import { FiGithub, FiTwitter, FiLinkedin } from "react-icons/fi";

const data = {
	pageSections: ["about", "projects", "contact"],
	skills: [
		"html",
		"css",
		"sass",
		"tailwind css",
		"javascript",
		"react.js",
		"git",
		"github",
		"figma",
	],
	socials: [
		{
			id: 1,
			name: "Github",
			icon: FiGithub,
			link: "https://github.com/ebukathedev",
		},
		{
			id: 2,
			name: "Twitter",
			icon: FiTwitter,
			link: "https://twitter.com/ebukathedev",
		},
		{
			id: 3,
			name: "LinkedIn",
			icon: FiLinkedin,
			link: "https://www.linkedin.com/in/ebukathedev",
		},
	],
	projects: [
		{
			id: 1,
			category: "featured",
			image: "https://res.cloudinary.com/drtebxtdt/image/upload/v1694246107/my%20portfolio/projects/wendys-portfolio_otm9n2.png",
			name: "Wendy's Portfolio",
			description: [
				"A portfolio site for my friend Wendy, a Product Designer. It showcases her skills, projects, and experiences in Product Design.",
			],
			skills: ["react.js", "tailwind css", "aos library"],
			github: "https://github.com/ebukathedev/wendys-portfolio",
			live: "https://wendys-portfolio.vercel.app/",
		},
		{
			id: 2,
			category: "featured",
			image: "https://res.cloudinary.com/drtebxtdt/image/upload/v1694246106/my%20portfolio/projects/zoidpay_lwk0oj.png",
			name: "ZoidPay",
			description: [
				"This project, inspired by the creative community on Figma, began as a design exploration for a sleek landing page. While it's a work in progress, it showcases my dedication to bringing innovative design ideas to life through web development, even if not fully completed.",
			],
			skills: ["react.js", "tailwind css"],
			github: "https://github.com/ebukathedev/zoidpay-crypto-landing-page",
			live: "https://ebukathedev-zoidpay.netlify.app",
		},
		{
			id: 3,
			category: "featured",
			image: "https://res.cloudinary.com/drtebxtdt/image/upload/v1694246107/my%20portfolio/projects/react-playground_ksysnr.png",
			name: "React Playground",
			description: [
				"A site where I develop and display mini React applications, each focused on practicing and learning specific React concepts. From state management to API integration, these mini-apps encompass a wide range of React topics. ",
			],
			skills: ["react.js", "tailwind css"],
			github: "https://github.com/ebukathedev/react-playground",
			live: "https://ebukathedev-react-playground.netlify.app",
		},
		{
			id: 4,
			category: "featured",
			image: "https://res.cloudinary.com/drtebxtdt/image/upload/v1694246107/my%20portfolio/projects/ip-tracker_ymfutd.png",
			name: "IP Location Tracker",
			description: [
				"A simple tracker that displays information about an IP address and shows the location on a map.",
			],
			skills: ["html", "css", "javascript", "api"],
			github: "https://github.com/ebukathedev/IP-Address-Location-Tracker-",
			live: "https://ebukathedev.github.io/IP-Address-Location-Tracker-/",
		},
		{
			id: 5,
			category: "featured",
			image: "https://res.cloudinary.com/drtebxtdt/image/upload/v1694246106/my%20portfolio/projects/calculator_o9ryqm.png",
			name: "Scientific Calculator",
			description: ["A simple scientific calculator."],
			skills: ["html", "css", "javascript"],
			github: "https://github.com/ebukathedev/Scientific-Calculator-",
			live: "https://ebukathedev.github.io/Scientific-Calculator-/",
		},
	],
};

export default data;
