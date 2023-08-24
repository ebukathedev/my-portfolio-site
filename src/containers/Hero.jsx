import Button from "../UI/Button";

const Hero = () => {
	return (
		<section className="h-screen min-h-screen pt-[100px] flex flex-col justify-center items-start min-[700px]:h-auto max-[360px]:h-auto">
			<div className="leading-[1.1]">
				<div>
					<h1 className="font-mono text-green mb-5">
						Hi, my name is
					</h1>
				</div>
				<div>
					<h2 className="big-heading text-lightest-green-slate">
						Ebuka Ejiofor.
					</h2>
				</div>
				<div>
					<h3 className="big-heading mt-2">
						I bring your ideas to life.
					</h3>
				</div>
			</div>

			<div>
				<p className="mt-5 max-w-[550px] lg:text-lg">
					I’m a software engineer specializing in building{" "}
					<span className="text-green"> Frontend applications </span>{" "}
					and exceptional digital experiences. I take pride in my work
					and ensure I deliver the fastest and most responsive
					application possible.
				</p>
			</div>
			<div className="mt-5">
				<Button href="/" className="py-3 px-10">
					Resume
				</Button>
			</div>
		</section>
	);
};

export default Hero;
