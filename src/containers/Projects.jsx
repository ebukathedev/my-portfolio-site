import data from "../data";
import FeaturedProject from "../components/Projects/FeaturedProject";
import OtherProjects from "./OtherProjects";
import Heading from "../animation components/Heading";
import ListItem from "../animation components/ListItem";

const { projects } = data;
const otherProjects = projects.filter(
	(project) => project.category === "other"
);

const Projects = () => {
	return (
		<>
			<section id="projects" className="section">
				<Heading className="numbered-heading" data-num="02">
					My projects
				</Heading>
				<ul className="space-y-[70px] md:space-y-[100px]">
					{projects.map((project) => {
						const isOdd = project.id % 2 !== 0;
						if (project.category === "featured") {
							return (
								<ListItem
									key={project.id}
									delay={0.4}
									className="grid items-center gap-6 min-[1200px]:grid-cols-12 max-w-[672px] mx-auto min-[1200px]:max-w-none"
								>
									<FeaturedProject
										{...project}
										isOdd={isOdd}
									/>
								</ListItem>
							);
						}
					})}
				</ul>
			</section>
			{otherProjects.length > 0 && (
				<OtherProjects projects={otherProjects} />
			)}
		</>
	);
};

export default Projects;
