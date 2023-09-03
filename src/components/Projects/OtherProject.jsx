/* eslint-disable react/prop-types */
import Card from "../../UI/Card";
import SkillsList from "../About/SkillsList";
import { FiExternalLink, FiFolder, FiGithub } from "react-icons/fi";
import IconLink from "../IconLink";

const OtherProject = ({ name, description, skills, github, live }) => {
	return (
		<Card className="py-8 px-7 flex flex-col overflow-auto h-full justify-between">
            <header>
                {/* project top */}
				<div className="flex justify-between items-center">
					<div className="text-green">
						<FiFolder size={40} className="stroke-1" />
					</div>
					<div className="text-light-green-slate flex justify-center items-center -mr-[10px]">
						{github && (
							<IconLink
								href={github}
								title="Github"
								className="py-[5px] px-[7px] flex justify-center items-center"
							>
								<FiGithub size={22} />
							</IconLink>
						)}
						{live && (
							<IconLink
								href={live}
								title="Live site"
								className="py-[5px] px-[7px] flex justify-center items-center"
							>
								<FiExternalLink size={22} />
							</IconLink>
						)}
					</div>
				</div>

				<h3 className="text-[22px] mt-5 mb-2 text-lightest-green-slate">
					<a
						href={live}
						target="_blank"
						rel="noreferrer"
						title="Live site"
						className="block transition-normal hover:text-green focus:text-green"
					>
						{name}
					</a>
				</h3>
				<p>{description}</p>
			</header>
			<footer className="mt-5">
				<SkillsList skills={skills} pillClassName="py-1" />
			</footer>
		</Card>
	);
};

export default OtherProject;
