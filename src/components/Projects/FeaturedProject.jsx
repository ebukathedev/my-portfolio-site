/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { FiGithub, FiExternalLink } from "react-icons/fi";
import SkillsList from "../About/SkillsList";

const FeaturedProject = ({
	image,
	name,
	description,
	skills,
	github,
	live,
}) => {
	return (
		<>
			{/* image */}
			{/* <div className="aspect-video bg-red-500 col-span-full shadow-normal md:col-span-5">
				<img src={image} alt={name} className="aspect-video" />
			</div> */}
			{/* content */}
			<div className="col-span-full flex flex-col items-center pt-6 pb-5 px-6 sm:pt-10 sm:pb-7 sm:px-10 md:p-6 bg-light-navy-green rounded-md shadow-normal">
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
							className="text-white transition-normal hover:text-green"
						>
							{name}
						</a>
					</h3>

					<div className="mt-5 mb-7 space-y-2">
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
						<a
							href={github}
							target="_blank"
							rel="noreferrer"
							title="Github"
							className="p-[10px] transition-normal hover:text-green"
						>
							<FiGithub size={20} />
						</a>
						<a
							href={live}
							target="_blank"
							rel="noreferrer"
							title="Live site"
							className="p-[10px] transition-normal hover:text-green"
						>
							<FiExternalLink size={20} />
						</a>
					</div>
				</div>
			</div>
		</>
	);
};

export default FeaturedProject;
