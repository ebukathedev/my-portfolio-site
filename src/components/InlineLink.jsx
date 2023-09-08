/* eslint-disable react/prop-types */

const InlineLink = ({ href, text }) => {
	return (
		<a
			href={href}
			target="_blank"
			rel="noreferrer"
			className="relative inline-block text-green after:h-[1px] after:bg-green after:relative after:block after:bottom-0 after:w-0 after:hover:w-full after:transition-normal  after:origin-left after:opacity-50"
		>
			{text}
		</a>
	);
};

export default InlineLink;
