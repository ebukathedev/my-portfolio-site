/* eslint-disable react/prop-types */
import Button from "../UI/Button";

const ResumeButton = ({ className, bgColor }) => {
	return (
		<Button href="#" innerClassName={className} bgColor={bgColor}>
			Resume
		</Button>
	);
};

export default ResumeButton;
