import { type ProjectTag, tagConfig } from "../lib/data";

type TagBadgeProps = {
	tag: ProjectTag;
};

export function TagBadge({ tag }: TagBadgeProps): React.ReactNode {
	const config = tagConfig[tag];
	return (
		<span className={`label-xs ${config.color} border border-current px-1.5 py-0.5`}>
			{config.label}
		</span>
	);
}
