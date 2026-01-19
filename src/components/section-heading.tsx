type SectionHeadingProps = {
	number: string;
	title: string;
};

export function SectionHeading({
	number,
	title,
}: SectionHeadingProps): React.ReactNode {
	return (
		<div className="label-xs text-faint mb-2">
			{number} — {title}
		</div>
	);
}
