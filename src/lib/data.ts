export const projects = [
	{
		id: "SKO-001",
		name: "skowt",
		type: "Platform",
		status: "Active" as const,
		url: "https://skowt.cc",
	},
	{
		id: "ORI-002",
		name: "originoid",
		type: "Platform",
		status: "Beta" as const,
		url: "https://originoid.co",
	},
	{
		id: "VMT-003",
		name: "vmt",
		type: "Utility",
		status: "Active" as const,
		url: "https://github.com/antifield/vmt",
	},
];

export const contactLinks = [
	{
		label: "Email",
		href: "mailto:marcel@antifield.com",
		text: "marcel@antifield.com",
	},
	{
		label: "Github",
		href: "https://github.com/antifield",
		text: "github.com/antifield",
		external: true,
	},
	{
		label: "Discord",
		href: "https://discord.gg/noid",
		text: "discord.gg/noid",
		external: true,
	},
];

export type RoadmapStatus = "limbo" | "in-progress" | "testing" | "live";
export type ProjectTag = "originoid" | "skowt" | "other";

export type RoadmapItemInput = {
	title: string;
	description: string;
	tag: ProjectTag;
	status: RoadmapStatus;
};

export type RoadmapItem = RoadmapItemInput & { id: string };

const tagPrefixes: Record<ProjectTag, string> = {
	originoid: "ORI",
	skowt: "SKO",
	other: "OTH",
};

function generateIds(items: RoadmapItemInput[]): RoadmapItem[] {
	const counters: Record<ProjectTag, number> = { originoid: 100, skowt: 100, other: 100 };
	return items.map((item) => {
		const id = `${tagPrefixes[item.tag]}-${counters[item.tag]}`;
		counters[item.tag]++;
		return { ...item, id };
	});
}

export const roadmapItems: RoadmapItem[] = generateIds([
	{
		title: "skowt.cc v4",
		description: "Complete platform redesign and feature overhaul",
		tag: "skowt",
		status: "live",
	},
	{
		title: "Originoid v1",
		description: "Initial release of the Originoid platform",
		tag: "originoid",
		status: "testing",
	},
	{
		title: "Originoid iOS/Android App",
		description: "Native mobile application for Originoid",
		tag: "originoid",
		status: "in-progress",
	},
	{
		title: "skowt.cc iOS/Android App",
		description: "Native mobile application for skowt.cc",
		tag: "skowt",
		status: "in-progress",
	},
	{
		title: "vmt Site",
		description: "Website for vmt allowing easy find and install",
		tag: "other",
		status: "testing",
	},
	{
		title: "Toolkit v2",
		description: "v2 of what was previously known as Originoid Toolkit",
		tag: "other",
		status: "testing",
	},
	{
		title: "Unified Authentication",
		description: "Single sign-on across all Antifield products",
		tag: "other",
		status: "limbo",
	},
]);

export const statusConfig = {
	limbo: { label: "Limbo", color: "bg-faint" },
	"in-progress": { label: "In Progress", color: "bg-accent-alt" },
	testing: { label: "Testing", color: "bg-accent" },
	live: { label: "Live", color: "bg-status-online" },
} as const;

export const tagConfig = {
	originoid: { label: "originoid", color: "text-accent-alt" },
	skowt: { label: "skowt.cc", color: "text-accent" },
	other: { label: "other", color: "text-muted" },
} as const;

export const statusOrder: RoadmapStatus[] = ["limbo", "in-progress", "testing", "live"];
