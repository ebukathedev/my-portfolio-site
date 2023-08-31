import { FiGithub, FiTwitter, FiLinkedin } from "react-icons/fi";

const SideLinks = () => {
	return (
		<div className="fixed bottom-0 right-auto z-10 hidden w-10 md:block left-5 lg:left-10 lg:right-auto text-light-green-slate">
			<ul className="flex flex-col items-center">
				<li>
					<a
						href="#"
						className="p-[10px] inline-block transition-normal hover:-translate-y-[3px] hover:text-green"
					>
						<FiGithub size={20} />
					</a>
				</li>
				<li>
					<a
						href="#"
						className="p-[10px] inline-block transition-normal hover:-translate-y-[3px] hover:text-green"
					>
						<FiTwitter size={20} />
					</a>
				</li>
				<li className="mb-5">
					<a
						href="#"
						className="p-[10px] inline-block transition-normal hover:-translate-y-[3px] hover:text-green"
					>
						<FiLinkedin size={20} />
					</a>
				</li>
				<span className="block w-[1px] h-[90px] bg-light-green-slate mx-auto"></span>
			</ul>
		</div>
	);
};

export default SideLinks;
