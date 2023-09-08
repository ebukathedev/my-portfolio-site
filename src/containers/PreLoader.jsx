import { motion } from "framer-motion";
import { AiOutlineRocket } from "react-icons/ai";

const PreLoader = () => {
	return (
		<div className="h-screen bg-dark-navy-green text-white relative">
			<motion.span
				className="text-green absolute"
				initial={{
					bottom: "0px",
					left: "50%",
				}}
				animate={{
					top: "0px",
				}}
				transition={{
					duration: 1,
					ease: "easeInOut",
				}}
			>
				<AiOutlineRocket size={60} />
			</motion.span>
		</div>
	);
};

export default PreLoader;
