import Button from "../../UI/Button";
import NavLink from "./NavLink";

const DesktopNav = () => {
	return (
		<div className="items-center hidden space-x-8 text-sm md:flex">
			<ol className="flex space-x-8 text-lightest-green-slate">
				<li>
					<NavLink name="about" index="01" />
				</li>
				<li>
					<NavLink name="projects" index="02" />
				</li>
				<li>
					<NavLink name="contact" index="03" />
				</li>
			</ol>
			<Button href="/resume.pdf">Resume</Button>
		</div>
	);
};

export default DesktopNav;
