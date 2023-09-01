import ProfilePic from "../components/About/ProfilePic";
import SkillsList from "../components/About/SkillsList";
import TextContent from "../components/About/TextContent";

import data from "../data";

const { skills } = data;

const About = () => {
	return (
		<section id="about" className="section max-w-[900px]">
			<h2 className="numbered-heading" data-num="01">
				About me
			</h2>
			<div className="md:grid md:grid-cols-[3fr_2fr] md:gap-12 md:space-y-0 space-y-14">
				<div>
					<TextContent />
					<SkillsList skills={skills} className="mt-4" />
				</div>
				<div className="w-[70%] max-w-[300px] md:w-full mx-auto">
					<ProfilePic />
				</div>
			</div>
		</section>
	);
};

export default About;
