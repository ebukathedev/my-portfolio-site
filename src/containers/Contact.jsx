import ButtonLink from "../UI/ButtonLink";
import Heading from "../animation components/Heading";
import DivContainer from "../animation components/DivContainer";

/* eslint-disable react/no-unescaped-entities */
const Contact = () => {
	return (
		<section id="contact" className="section mb-[50px]">
			<Heading className="numbered-heading" data-num="03">
				Contact
			</Heading>
			<DivContainer
				delay={0.4}
				className="text-center flex flex-col items-center max-w-[600px] mx-auto pt-10"
			>
				<h2 className="text-4xl md:text-5xl text-lightest-green-slate capitalize mb-3 md:mb-4">
					Get in touch
				</h2>
				<p className="mb-12">
					I'm currently looking for any new opportunities, my inbox is
					always open. Whether you have a question, want to
					collaborate on a project or just want to say hi, I'll
					definitely get back to you!
				</p>
				<ButtonLink
					className="py-3 px-10"
					href="mailto:ebukathedev@gmail.com"
				>
					Say hello
				</ButtonLink>
			</DivContainer>
		</section>
	);
};

export default Contact;
