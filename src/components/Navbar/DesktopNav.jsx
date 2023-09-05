import FadeDown from "../../animation components/FadeDown";
import data from "../../data";
import ResumeButton from "../ResumeButton";
import NavLink from "./NavLink";
const { pageSections } = data;
const DesktopNav = () => {
	let currentDelay = 0.15;

	return (
		<div className="items-center hidden space-x-8 text-sm md:flex">
			<ol className="flex space-x-[22px] text-lightest-green-slate">
				{pageSections.map((section, index) => {
					currentDelay += 0.15;
					return (
						<li key={index}>
							<FadeDown delay={currentDelay}>
								<NavLink name={section} />
							</FadeDown>
						</li>
					);
				})}
			</ol>
			<FadeDown delay={0.75}>
				<ResumeButton />
			</FadeDown>
		</div>
	);
};

export default DesktopNav;
