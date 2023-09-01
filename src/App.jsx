import About from "./containers/About";
import Contact from "./containers/Contact";
import Footer from "./containers/Footer";
import Hero from "./containers/Hero";
import Navbar from "./containers/Navbar";
import Projects from "./containers/Projects";

const App = () => {
	return (
		<>
			<Navbar />
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
