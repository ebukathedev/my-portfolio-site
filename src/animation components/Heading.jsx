import { motion, useInView } from "framer-motion";
import { useRef } from "react";

/* eslint-disable react/prop-types */
const Heading = ({ children, className, ...props }) => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });
	return (
		<motion.h2
			className={className}
			ref={ref}
			animate={{
				opacity: isInView ? 1 : 0,
				transform: isInView
					? "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)"
					: "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 20, 0, 1)",
			}}
			transition={{
				duration: 0.3,
				ease: [0.645, 0.045, 0.355, 1],
				delay: 0.1,
			}}
			{...props}
		>
			{children}
		</motion.h2>
	);
};

export default Heading;
