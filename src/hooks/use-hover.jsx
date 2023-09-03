import { useState } from "react";

const useHover = () => {
	const [isHovering, setIsHovering] = useState(false);

	const handleMouseOver = () => {
		setIsHovering(true);
	};
	const handleMouseOut = () => {
		setIsHovering(false);
	};

	return [isHovering, handleMouseOver, handleMouseOut];
};

export default useHover;
