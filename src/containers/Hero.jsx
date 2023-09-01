import { useEffect, useState } from "react";
import FadeUp from "../animation components/FadeUp";
import ResumeButton from "../components/ResumeButton";

const Hero = () => {
	const [isDesktop, setIsDesktop] = useState(false);

	useEffect(() => {
		const windowWidth = window.innerWidth;
		if (windowWidth >= 768) {
			setIsDesktop(true);
			console.log(windowWidth, true);
		} else {
			setIsDesktop(false);
			console.log(windowWidth, false);
		}
	}, []);

	return (
		<section className="hero">
			<div className="leading-[1.1]">
				<FadeUp delay={isDesktop ? 0.95 : 0.5}>
					<h1 className="text-green mb-5 font-medium">
						Hi, my name is
					</h1>
				</FadeUp>

				<FadeUp delay={isDesktop ? 1.05 : 0.6}>
					<h2 className="big-heading text-lightest-green-slate">
						Ebuka Ejiofor.
					</h2>
				</FadeUp>

				<FadeUp delay={isDesktop ? 1.15 : 0.7}>
					<h3 className="big-heading mt-2">
						I bring your ideas to life.
					</h3>
				</FadeUp>
			</div>

			<FadeUp delay={isDesktop ? 1.25 : 0.8}>
				<p className="mt-5 max-w-[550px] lg:text-lg lg:max-w-[590px]">
					I’m a software engineer specializing in building Frontend
					applications and exceptional digital experiences. I take
					pride in my work and ensure I deliver the fastest and most
					responsive application possible.
				</p>
			</FadeUp>

			<div className="mt-8">
				<FadeUp delay={isDesktop ? 1.35 : 0.9}>
					<ResumeButton className="py-3 px-10" />
				</FadeUp>
			</div>
		</section>
	);
};

export default Hero;
