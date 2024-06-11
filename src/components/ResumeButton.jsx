/* eslint-disable react/prop-types */
import ButtonLink from "../UI/ButtonLink";

const ResumeButton = ({ className, bgColor }) => {
	return (
		<ButtonLink
			href="https://drive.google.com/file/d/1JOm7KpCmZXlVJh9ArY84RGOcsvpClnjD/view?usp=sharing"
			className={className}
			bgColor={bgColor}
		>
			Resume
		</ButtonLink>
	);
};

export default ResumeButton;
