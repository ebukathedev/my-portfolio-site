import { useEffect, useState } from "react";
import About from "./containers/About";
import Contact from "./containers/Contact";
import Footer from "./containers/Footer";
import Hero from "./containers/Hero";
import Navbar from "./containers/Navbar";
import Projects from "./containers/Projects";

const App = () => {
	const [isOpen, setIsOpen] = useState(false);
	const toggleMenu = () => {
		setIsOpen((isOpen) => !isOpen);
	};

	useEffect(() => {
		if (isOpen) {
			document.body.classList.add("overflow-hidden");
		} else {
			document.body.classList.remove("overflow-hidden");
		}

		return () => {
			document.body.classList.remove("overflow-hidden");
		};
	}, [isOpen]);

	return (
		<>
			<Navbar toggleMenu={toggleMenu} isOpen={isOpen} />
			<main className="px-6 sm:px-12 md:px-24 lg:px-36 max-w-[1600px] min-h-screen mx-auto">
				<Hero />
				<About />
				<Projects />
				<Contact />
			</main>
			<Footer />
		</>
	);
};

export default App;
