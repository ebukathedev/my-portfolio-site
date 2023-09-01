import InlineLink from "../components/InlineLink";
import SocialLinks from "../components/SocialLinks";

const Footer = () => {
	return (
		<footer className="p-[15px] flex flex-col items-center text-center">
			<div className="md:hidden">
				<SocialLinks />
			</div>
			<div className="space-y-1 text-[13px] tracking-wide">
				<a href="#" className="transition-normal hover:text-green">
					Built by Ebuka Ejiofor
				</a>
				<p>
					Inspired by{" "}
					<InlineLink
						href="https://v4.brittanychiang.com/"
						text="Brittany Chiang"
					/>{" "}
					and{" "}
					<InlineLink
						href="https://kromate.dev/"
						text="Anthony Akpan"
					/>
				</p>
			</div>
		</footer>
	);
};

export default Footer;
