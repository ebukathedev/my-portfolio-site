import ProfilePic from "../components/About/ProfilePic";
import SkillsList from "../components/About/SkillsList";
import TextContent from "../components/About/TextContent";
import data from "../data";
import Heading from "../animation components/Heading";
import DivContainer from "../animation components/DivContainer";

const { skills } = data;

const About = () => {
	return (
		<section id="about" className="section max-w-[900px]">
			<Heading className="numbered-heading" data-num="01">
				About me
			</Heading>
			<DivContainer
				className="md:grid md:grid-cols-[3fr_2fr] md:gap-12 md:space-y-0 space-y-14"
				delay={0.4}
			>
				<div>
					<TextContent />
					<SkillsList skills={skills} className="mt-4" />
				</div>
				<div className="w-[70%] max-w-[300px] md:w-full mx-auto">
					<ProfilePic />
				</div>
			</DivContainer>
		</section>
	);
};

export default About;
