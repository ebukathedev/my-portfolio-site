/* eslint-disable react/prop-types */
const SkillsList = ({ skills, className, pillClassName }) => {
	return (
		<ul className={`flex flex-wrap items-center gap-2 ${className}`}>
			{skills.map((skill, index) => (
				<li key={index}>
					<div className={`pill ${pillClassName}`}>{skill}</div>
				</li>
			))}
		</ul>
	);
};

export default SkillsList;
