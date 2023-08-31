import data from "../../data";

const { skills } = data;

const SkillsList = () => {
	return (
		<ul className="flex flex-wrap items-center gap-2 mt-4 text-xs">
			{skills.map((skill, index) => (
				<li key={index}>
					<div className="pill">{skill}</div>
				</li>
			))}
		</ul>
	);
};

export default SkillsList;
