import { SectionHeading } from "./section-heading";
import { StatusDot } from "./status-dot";

type Project = {
	id: string;
	name: string;
	type: string;
	status: "Active" | "Beta" | "Pending" | "Offline";
	url: string;
};

type ProjectRegistryProps = {
	projects: Project[];
};

const statusMap = {
	Active: "online",
	Beta: "pending",
	Pending: "pending",
	Offline: "offline",
} as const;

const tableHeaders = ["ID", "Name", "Type", "Status"];

function getMobileRowClassName(index: number, total: number): string {
	const hasBorder = index !== total - 1 ? "border-b border-divider" : "";
	const hasBackground = index % 2 === 1 ? "bg-bg-muted" : "";
	return `block p-4 interactive-row ${hasBorder} ${hasBackground}`;
}

export function ProjectRegistry({
	projects,
}: ProjectRegistryProps): React.ReactNode {
	return (
		<div className="w-full md:w-[420px] flex flex-col">
			<div className="p-4 md:p-6 border-b border-divider">
				<SectionHeading number="04" title="Project Registry" />
				<div className="flex items-center justify-between">
					<span className="font-semibold">Active Projects</span>
					<span className="font-bold text-2xl">
						{String(projects.length).padStart(2, "0")}
					</span>
				</div>
			</div>

			<div className="flex-1 overflow-auto md:hidden">
				{projects.map((project, i) => (
					<a
						key={project.id}
						href={project.url}
						target="_blank"
						rel="noopener noreferrer"
						className={getMobileRowClassName(i, projects.length)}
					>
						<div className="flex items-center justify-between mb-1">
							<span className="font-semibold">{project.name}</span>
							<StatusDot
								status={statusMap[project.status]}
								label={project.status}
							/>
						</div>
						<div className="flex items-center justify-between text-sm text-muted">
							<span>{project.type}</span>
							<span className="font-mono">{project.id}</span>
						</div>
					</a>
				))}
			</div>

			<div className="flex-1 overflow-auto hidden md:block">
				<table className="w-full data-table">
					<thead>
						<tr className="border-b border-divider">
							{tableHeaders.map((header) => (
								<th
									key={header}
									className="text-left p-3 label-xs text-faint font-normal"
								>
									{header}
								</th>
							))}
						</tr>
					</thead>
					<tbody>
						{projects.map((project) => (
							<tr
								key={project.id}
								className="border-b border-divider hover:bg-bg-muted"
							>
								<td className="p-3 font-mono text-sm text-muted">
									{project.id}
								</td>
								<td className="p-3">
									<a
										href={project.url}
										target="_blank"
										rel="noopener noreferrer"
										className="font-semibold hover:text-accent"
									>
										{project.name}
									</a>
								</td>
								<td className="p-3 text-sm text-muted">{project.type}</td>
								<td className="p-3">
									<StatusDot
										status={statusMap[project.status]}
										label={project.status}
									/>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			<div className="p-4 md:p-6 border-t border-foreground">
				<div className="label-xs text-faint mb-2">Registered Address</div>
				<div className="text-sm leading-relaxed">
					124 City Road
					<br />
					London, England
					<br />
					EC1V 2NX
				</div>
				<div className="label-xs text-faint mt-4">
					&copy; 2026 Antifield LTD
				</div>
			</div>
		</div>
	);
}
