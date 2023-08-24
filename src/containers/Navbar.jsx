import { useState } from "react";
import DesktopNav from "../components/Navbar/DesktopNav";
import MobileNav from "../components/Navbar/MobileNav";
import HamburgerMenu from "../components/Navbar/HamburgerMenu";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<header className="fixed z-50 top-0 right-0 left-0 h-[100px] flex items-center px-6 md:px-10 bg-navy-green/80 lg:px-[50px] backdrop-blur-[10px]">
			<nav className="flex items-center justify-between w-full font-mono">
				{/* logo and hamburger */}
				<div className="flex items-center justify-center px-3 text-lg border border-green text-green">
					<a href="/">ebukathedev</a>
				</div>
				<HamburgerMenu onToggleMenu={toggleMenu} isMenuOpen={isOpen} />
				<DesktopNav />
				<MobileNav isMenuOpen={isOpen} />
			</nav>
		</header>
	);
};

export default Navbar;
