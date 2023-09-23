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
			image: "https://res.cloudinary.com/drtebxtdt/image/upload/v1695453751/my%20portfolio/projects/moviebox.png",
			name: "MovieBox",
			description: [
				"A movie discovery web application. Movie Box allows users to search for movies, view detailed information about them, and save their favorite movies for later.",
			],
			skills: ["react.js", "tailwind css", "api"],
			github: "https://github.com/ebukathedev/movie-box",
			live: "https://ebukathedev-moviebox.netlify.app/",
		},
		{
			id: 2,
			category: "featured",
			image: "https://res.cloudinary.com/drtebxtdt/image/upload/v1695453746/my%20portfolio/projects/imageblitz.png",
			name: "ImageBlitz",
			description: [
				"ImageBlitz is an image gallery application. Authenticated users can explore a captivating collection of stunning images, effortlessly search for their favorites, and even indulge their artistic side by intuitively rearranging images with a simple drag-and-drop interface, all within the app. ",
			],
			skills: ["react.js", "tailwind css", "api", "firebase"],
			github: "https://github.com/ebukathedev/ImageBlitz",
			live: "https://ebukathedev-imageblitz.netlify.app/",
		},
		{
			id: 3,
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
			id: 4,
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
			id: 5,
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
	],
};

export default data;
