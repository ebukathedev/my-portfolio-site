import ResumeButton from "../ResumeButton";
import NavLink from "./NavLink";

const DesktopNav = () => {
	return (
		<div className="items-center hidden space-x-8 text-sm md:flex">
			<ol className="flex space-x-[22px] text-lightest-green-slate">
				<li>
					<NavLink name="about" />
				</li>
				<li>
					<NavLink name="projects" />
				</li>
				<li>
					<NavLink name="contact" />
				</li>
			</ol>
			<ResumeButton />
		</div>
	);
};

export default DesktopNav;
