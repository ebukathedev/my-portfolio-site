/* eslint-disable react/prop-types */
import { FiGithub, FiExternalLink } from "react-icons/fi";
import SkillsList from "../About/SkillsList";
import Card from "../../UI/Card";
import IconLink from "../IconLink";
import ProjectImage from "./ProjectImage";

const FeaturedProject = ({
	image,
	name,
	description,
	skills,
	github,
	live,
	isOdd,
}) => {
	return (
		<>
			{/* image */}
			<ProjectImage live={live} isOdd={isOdd} image={image} />
			{/* content */}
			<Card className="flex flex-col px-6 pt-6 pb-5 col-span-full sm:pt-10 sm:pb-7 sm:px-10 md:p-6 min-[1200px]:col-span-7">
				<div>
					<p className="text-green text-[13px] my-1">
						Featured Project
					</p>
					<h3 className="project-title">
						<a
							href={live}
							target="_blank"
							rel="noreferrer"
							title="Live site"
							className="block text-white transition-normal hover:text-green focus:text-green"
						>
							{name}
						</a>
					</h3>

					<div className="mt-5 space-y-2 mb-7">
						{description.map((paragraph, index) => (
							<p key={index}>{paragraph}</p>
						))}
					</div>
					<SkillsList
						skills={skills}
						pillClassName="py-1"
						className="mb-3"
					/>
					<div className="flex text-lightest-green-slate items-center -ml-[10px]">
						<IconLink
							href={github}
							title="Github"
							className="p-[10px]"
						>
							<FiGithub size={20} />
						</IconLink>
						<IconLink
							href={live}
							title="Live site"
							className="p-[10px]"
						>
							<FiExternalLink size={20} />
						</IconLink>
					</div>
				</div>
			</Card>
		</>
	);
};

export default FeaturedProject;
