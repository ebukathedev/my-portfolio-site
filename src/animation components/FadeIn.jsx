/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

const FadeIn = ({ children, delay, className }) => {
	return (
		<motion.div
			className={className}
			initial={{ opacity: 0.01 }}
			animate={{
				opacity: 1,
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

export default FadeIn;
