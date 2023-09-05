import { FiGithub, FiTwitter, FiLinkedin } from "react-icons/fi";
import project1 from "./assets/images/wendys-portfolio.png";
import project2 from "./assets/images/zoidpay.png";
import project3 from "./assets/images/react-playground.png";

const data = {
	pageSections: ["about", "projects", "contact"],
	skills: [
		"html",
		"css",
		"sass",
		"tailwind css",
		"javascript",
		"react",
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
			image: project1,
			name: "Wendy's Portfolio",
			description: [
				"Lorem ipsum dolor sit amet consectetu adipisicing elit. Rerum nemo fugiat saepe unde optio dolorem possimus repudiandae corrupti, del pariatur! Aperiam neque ame ipsam corrupti, aspernatur c nisi?",
			],
			skills: ["react", "tailwind css", "animations"],
			github: "#",
			live: "#",
		},
		{
			id: 2,
			category: "featured",
			image: project2,
			name: "ZoidPay",
			description: [
				"Lorem ipsum dolor sit amet consectetu adipisicing elit. Rerum nemo fugiat saepe unde optio dolorem possimus repudiandae corrupti, del pariatur! Aperiam neque ame ipsam corrupti, aspernatur c nisi?",
			],
			skills: ["react", "tailwind css", "animations"],
			github: "#",
			live: "#",
		},
		{
			id: 3,
			category: "featured",
			image: project3,
			name: "React Playground",
			description: [
				"Lorem ipsum dolor sit amet consectetu adipisicing elit. Rerum nemo fugiat saepe unde optio dolorem possimus repudiandae corrupti, del pariatur! Aperiam neque ame ipsam corrupti, aspernatur c nisi?",
			],
			skills: ["react", "tailwind css", "animations"],
			github: "#",
			live: "#",
		},
	],
};

export default data;
