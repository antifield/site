import {
	type RoadmapItem,
	type RoadmapStatus,
	roadmapItems,
	statusConfig,
	statusOrder,
} from "../lib/data";
import { TagBadge } from "./tag-badge";

function getItemsByStatus(status: RoadmapStatus): RoadmapItem[] {
	return roadmapItems.filter((item) => item.status === status);
}

function StatusBadge({ status }: { status: RoadmapStatus }): React.ReactNode {
	const config = statusConfig[status];
	return (
		<span className="inline-flex items-center gap-1.5">
			<span className={`w-1.5 h-1.5 rounded-full ${config.color}`} />
			<span className="label-xs">{config.label}</span>
		</span>
	);
}

function RoadmapCard({ item }: { item: RoadmapItem }): React.ReactNode {
	return (
		<div className="p-3 border-b border-divider last:border-b-0 lg:last:border-b hover:bg-bg-muted transition-colors">
			<div className="flex items-start justify-between gap-2 mb-1">
				<span className="font-semibold text-sm">{item.title}</span>
				<TagBadge tag={item.tag} />
			</div>
			<p className="text-xs text-muted mb-2 leading-relaxed">
				{item.description}
			</p>
			<div className="flex items-center justify-between">
				<span className="font-mono text-xs text-faint">{item.id}</span>
				<StatusBadge status={item.status} />
			</div>
		</div>
	);
}

function StatusColumn({ status }: { status: RoadmapStatus }): React.ReactNode {
	const items = getItemsByStatus(status);
	const config = statusConfig[status];

	return (
		<div className="flex-1 min-w-0 border-r border-divider last:border-r-0 flex flex-col">
			<div className="p-3 border-b border-divider flex items-center justify-between">
				<div className="flex items-center gap-2">
					<span className={`w-2 h-2 rounded-full ${config.color}`} />
					<span className="font-semibold text-sm">{config.label}</span>
				</div>
				<span className="font-bold text-lg">
					{String(items.length).padStart(2, "0")}
				</span>
			</div>
			<div className="flex-1 overflow-auto">
				{items.map((item) => (
					<RoadmapCard key={item.id} item={item} />
				))}
				{items.length === 0 && (
					<div className="p-4 text-center text-faint text-xs">No items</div>
				)}
			</div>
		</div>
	);
}

function MobileStatusSection({
	status,
}: {
	status: RoadmapStatus;
}): React.ReactNode {
	const items = getItemsByStatus(status);
	const config = statusConfig[status];

	if (items.length === 0) return null;

	return (
		<div className="border-b border-divider last:border-b-0">
			<div className="p-4 border-b border-divider flex items-center justify-between bg-bg-muted">
				<div className="flex items-center gap-2">
					<span className={`w-2 h-2 rounded-full ${config.color}`} />
					<span className="font-semibold">{config.label}</span>
				</div>
				<span className="font-bold text-xl">
					{String(items.length).padStart(2, "0")}
				</span>
			</div>
			{items.map((item) => (
				<RoadmapCard key={item.id} item={item} />
			))}
		</div>
	);
}

export function RoadmapBoard(): React.ReactNode {
	return (
		<>
			<div className="flex-1 min-h-0 overflow-auto lg:hidden">
				{statusOrder.map((status) => (
					<MobileStatusSection key={status} status={status} />
				))}
			</div>
			<div className="hidden lg:flex flex-1 min-h-0 overflow-hidden">
				{statusOrder.map((status) => (
					<StatusColumn key={status} status={status} />
				))}
			</div>
		</>
	);
}

export function RoadmapStats(): React.ReactNode {
	const totalItems = roadmapItems.length;
	const liveCount = getItemsByStatus("live").length;

	return (
		<div className="label-xs text-muted">
			{liveCount}/{totalItems} Live
		</div>
	);
}
