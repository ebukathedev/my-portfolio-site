/* eslint-disable react/prop-types */
import ButtonLink from "../UI/ButtonLink";

const ResumeButton = ({ className, bgColor }) => {
	return (
		<ButtonLink
			href="https://drive.google.com/file/d/1FKqXBy_qhW6tlLVWn73EldR62M9aLXqt/view?usp=sharing"
			className={className}
			bgColor={bgColor}
		>
			Resume
		</ButtonLink>
	);
};

export default ResumeButton;
