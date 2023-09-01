/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

const FadeUp = ({ children, delay }) => {
	return (
		<motion.div
			initial={{ opacity: 0.01, transform: "translateY(20px)" }}
			animate={{
				opacity: 1,
				transform: "translateY(0px)",
			}}
			transition={{
				duration: 0.3,
				ease: [0.645, 0.045, 0.355, 1],
				delay,
			}}
		>
			{children}
		</motion.div>
	);
};

export default FadeUp;
