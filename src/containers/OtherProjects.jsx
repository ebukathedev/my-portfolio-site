/* eslint-disable react/prop-types */
import { useState } from "react";
import Button from "../UI/Button";
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
			<h2 className="medium-heading text-lightest-green-slate text-center capitalize">
				Other noteworthy projects
			</h2>
			<ul className="project-grid">
				{otherProjects.map((project) => (
					<li key={project.id}>
						<OtherProject {...project} />
					</li>
				))}
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
