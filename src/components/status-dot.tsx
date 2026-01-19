type StatusDotProps = {
	status: "online" | "pending" | "offline";
	label?: string;
};

const statusStyles = {
	online: "bg-status-online",
	pending: "bg-status-pending",
	offline: "bg-faint",
} as const;

export function StatusDot({ status, label }: StatusDotProps): React.ReactNode {
	return (
		<span className="inline-flex items-center gap-1.5">
			<span className={`w-1.5 h-1.5 rounded-full ${statusStyles[status]}`} />
			{label && <span className="text-sm">{label}</span>}
		</span>
	);
}
