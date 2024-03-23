/* eslint-disable react/prop-types */
import ButtonLink from "../UI/ButtonLink";

const ResumeButton = ({ className, bgColor }) => {
	return (
		<ButtonLink
			href="https://drive.google.com/file/d/1P1W7cMifA1kus6IIvsQ6GDpwtbOv1Bec/view?usp=drive_link"
			className={className}
			bgColor={bgColor}
		>
			Resume
		</ButtonLink>
	);
};

export default ResumeButton;
