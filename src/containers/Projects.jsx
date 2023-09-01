// import SkillsList from "../components/About/SkillsList";
// import { FiGithub, FiExternalLink } from "react-icons/fi";
import data from "../data";
import FeaturedProject from "../components/Projects/FeaturedProject";

/* eslint-disable react/no-unescaped-entities */
const { projects } = data;

const Projects = () => {
	return (
		<section id="projects" className="section">
			<h2 className="numbered-heading" data-num="02">
				My projects
			</h2>
			<ul className="space-y-[30px] sm:space-y-[70px] md:space-y-[100px]">
				{projects.map((project) => (
					<li key={project.id} className="grid grid-cols-12 gap-8">
						<FeaturedProject {...project} />
					</li>
				))}
			</ul>
		</section>
	);
};

export default Projects;
