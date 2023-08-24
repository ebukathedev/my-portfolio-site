import About from "./containers/About";
import Hero from "./containers/Hero";
import Navbar from "./containers/Navbar";

const App = () => {
	return (
		<>
			<Navbar />
			<main className="px-6 sm:px-12 md:px-24 lg:px-36 max-w-[1600px] min-h-screen mx-auto">
				<Hero />
				<About />
			</main>
		</>
	);
};

export default App;
