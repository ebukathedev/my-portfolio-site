/* eslint-disable react/prop-types */
import ButtonLink from "../UI/ButtonLink";

const ResumeButton = ({ className, bgColor }) => {
	return (
		<ButtonLink href="/resume.pdf" className={className} bgColor={bgColor}>
			Resume
		</ButtonLink>
	);
};

export default ResumeButton;
