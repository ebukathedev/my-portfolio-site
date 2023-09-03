import profilePic from "../../assets/images/profile-pic.jpg";
import useHover from "../../hooks/use-hover";

const ProfilePic = () => {
	const [isHovering, handleMouseOver, handleMouseOut] = useHover();

	return (
		<div
			className={`profile-pic-wrapper ${
				!isHovering && "before:mix-blend-screen"
			}`}
			onMouseOver={handleMouseOver}
			onMouseOut={handleMouseOut}
		>
			<div
				className={`max-w-[500px] transition-normal ease-out contrast-[1] ${
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
