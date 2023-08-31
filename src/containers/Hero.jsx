import { motion } from "framer-motion";
import ResumeButton from "../components/ResumeButton";

const Hero = () => {
	return (
		<section className="hero">
			<div className="leading-[1.1]">
				<motion.div
					initial={{ opacity: 0, transform: "translate(0px, 25px)" }}
					whileInView={{
						opacity: 1,
						transform: "translate(0px, 0px)",
					}}
					transition={{ duration: 0.3 }}
				>
					<h1 className="text-green mb-5 font-medium">
						Hi, my name is
					</h1>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, transform: "translate(0px, 25px)" }}
					whileInView={{
						opacity: 1,
						transform: "translate(0px, 0px)",
					}}
					transition={{ duration: 0.3, delay: 0.3 }}
				>
					<h2 className="big-heading text-lightest-green-slate">
						Ebuka Ejiofor.
					</h2>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, transform: "translate(0px, 25px)" }}
					whileInView={{
						opacity: 1,
						transform: "translate(0px, 0px)",
					}}
					transition={{ duration: 0.3, delay: 0.6 }}
				>
					<h3 className="big-heading mt-2">
						I bring your ideas to life.
					</h3>
				</motion.div>
			</div>

			<div>
				<p className="mt-5 max-w-[550px] lg:text-lg lg:max-w-[590px]">
					I’m a software engineer specializing in building Frontend
					applications and exceptional digital experiences. I take
					pride in my work and ensure I deliver the fastest and most
					responsive application possible.
				</p>
			</div>
			<div className="mt-8">
				<ResumeButton className="py-3 px-10" />
			</div>
		</section>
	);
};

export default Hero;
