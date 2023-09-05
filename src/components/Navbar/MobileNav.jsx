/* eslint-disable react/prop-types */
import data from "../../data";
import ResumeButton from "../ResumeButton";
import NavLink from "./NavLink";
const { pageSections } = data;

const sideBarStyles =
	"fixed z-40 flex md:hidden right-0 top-0 h-screen bg-light-navy-green w-[75vw] max-w-[400px] py-[50px] px-[10px] justify-center items-center transition-all duration-500 ease-in-out mobile-links";

const overLayStyles = "fixed inset-0 bg-black/30 md:hidden min-h-screen";

const MobileNav = ({ isMenuOpen, onToggleMenu }) => {
	return (
		<>
			<div
				className={`${overLayStyles} ${
					isMenuOpen ? "block" : "hidden"
				}`}
				onClick={onToggleMenu}
			></div>
			<aside
				className={`${sideBarStyles} ${
					isMenuOpen ? "translate-x-0" : "translate-x-full"
				}`}
			>
				<nav className="w-full flex flex-col items-center justify-between py-5 space-y-9 text-lg">
					<ol className="flex flex-col space-y-5 flex-1 justify-evenly w-full">
						{pageSections.map((section, index) => (
							<li key={index}>
								<NavLink
									name={section}
									onClick={onToggleMenu}
								/>
							</li>
						))}
					</ol>
					<ResumeButton
						className="py-4 px-[50px] text-sm"
						bgColor="bg-light-navy-green"
					/>
				</nav>
			</aside>
		</>
	);
};

export default MobileNav;
