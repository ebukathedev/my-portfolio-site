/* eslint-disable react/prop-types */
import { useState } from "react";
import Button from "../UI/Button";
import Heading from "../animation components/Heading";
import ListItem from "../animation components/ListItem";
import OtherProject from "../components/Projects/OtherProject";

const OtherProjects = ({ projects }) => {
	const lessProjects = projects.slice(0, 6);
	const [otherProjects, setOtherProjects] = useState(lessProjects);
	const [showMore, setShowMore] = useState(false);
	const buttonText = showMore ? "Show less" : "Show more";

	const handleClick = () => {
		if (!showMore) {
			setOtherProjects(projects);
			setShowMore(true);
			console.log("array changed to more");
		} else {
			setOtherProjects(lessProjects);
			setShowMore(false);
			console.log("array changed to less");
		}
	};

	return (
		<section className="section">
			<Heading className="medium-heading text-lightest-green-slate text-center capitalize">
				Other noteworthy projects
			</Heading>
			<ul className="project-grid">
				{otherProjects.map((project, index) => {
					const step = index / 10;
					return (
						<ListItem key={project.id} delay={0.4 + step}>
							<OtherProject {...project} />
						</ListItem>
					);
				})}
			</ul>
			{projects.length > 6 && (
				<Button
					className="mt-20 mx-auto"
					innerClassName="py-3 px-10"
					onClick={handleClick}
				>
					{buttonText}
				</Button>
			)}
		</section>
	);
};

export default OtherProjects;
