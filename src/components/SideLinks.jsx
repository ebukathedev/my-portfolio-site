import FadeIn from "../animation components/FadeIn";
import SocialLinks from "./SocialLinks";

const delay = 1.45;

const SideLinks = () => {
	return (
		<>
			<FadeIn
				className="fixed bottom-0 right-auto z-10 hidden w-10 md:block left-5 lg:left-10 lg:right-auto text-light-green-slate"
				delay={delay}
			>
				<SocialLinks />
			</FadeIn>
			<FadeIn
				className="fixed bottom-0 left-auto z-10 hidden w-10 md:block right-5 lg:right-10 lg:left-auto text-light-green-slate"
				delay={delay}
			>
				<div className="flex flex-col items-center relative text-[13px]">
					<a
						href="mailto:ebukathedev@gmail.com"
						className="p-[10px] my-5 tracking-widest transition-normal hover:text-green hover:-translate-y-[3px]"
						style={{ writingMode: "vertical-rl" }}
						title="My email"
					>
						ebukathedev@gmail.com
					</a>
					<span className="hidden md:block w-[1px] h-[90px] bg-light-green-slate mx-auto"></span>
				</div>
			</FadeIn>
		</>
	);
};

export default SideLinks;
