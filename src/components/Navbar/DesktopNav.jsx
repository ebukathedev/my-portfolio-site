import FadeDown from "../../animation components/FadeDown";
import ResumeButton from "../ResumeButton";
import NavLink from "./NavLink";

const DesktopNav = () => {
	return (
		<div className="items-center hidden space-x-8 text-sm md:flex">
			<ol className="flex space-x-[22px] text-lightest-green-slate">
				<li>
					<FadeDown delay={0.3}>
						<NavLink name="about" />
					</FadeDown>
				</li>
				<li>
					<FadeDown delay={0.45}>
						<NavLink name="projects" />
					</FadeDown>
				</li>
				<li>
					<FadeDown delay={0.55}>
						<NavLink name="contact" />
					</FadeDown>
				</li>
			</ol>
			<FadeDown delay={0.65}>
				<ResumeButton />
			</FadeDown>
		</div>
	);
};

export default DesktopNav;
