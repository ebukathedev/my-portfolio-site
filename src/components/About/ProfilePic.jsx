import { useState } from "react";
import profilePic from "../../assets/images/profile-pic.jpg";

const ProfilePic = () => {
	const [isHovering, setIsHovering] = useState(false);

	const handleMouseOver = () => {
		setIsHovering(true);
	};
	const handleMouseOut = () => {
		setIsHovering(false);
	};

	return (
		<div
			className={`profile-pic-wrapper ${
				!isHovering && "before:mix-blend-screen"
			}`}
			onMouseOver={handleMouseOver}
			onMouseOut={handleMouseOut}
		>
			<div
				className={`max-w-[500px] transition-all duration-300 ease-out contrast-[1] ${
					!isHovering && "grayscale mix-blend-multiply"
				}`}
			>
				<img
					src={profilePic}
					alt="profile picture"
					className="block rounded-md aspect-square"
				/>
			</div>
		</div>
	);
};

export default ProfilePic;
