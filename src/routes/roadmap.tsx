import { createFileRoute, Link } from "@tanstack/react-router";
import { RoadmapBoard, RoadmapStats, SectionHeading } from "../components";
import { tagConfig } from "../lib/data";

export const Route = createFileRoute("/roadmap")({
	component: Roadmap,
	head: () => ({
		meta: [
			{ title: "Roadmap - Antifield" },
			{
				name: "description",
				content: "Current development status across all Antifield projects.",
			},
		],
	}),
});

function Roadmap(): React.ReactNode {
	return (
		<div className="min-h-screen w-full overflow-x-hidden bg-bg p-4 md:p-8 md:h-screen md:overflow-hidden">
			<div className="min-h-full border border-foreground flex flex-col md:h-full relative">
				<div className="corner-mark corner-mark-tl" />
				<div className="corner-mark corner-mark-tr" />
				<div className="corner-mark corner-mark-bl" />
				<div className="corner-mark corner-mark-br" />

				<header className="border-b border-foreground px-4 py-3 md:px-6 md:py-4 flex items-center justify-between">
					<Link to="/" className="label-xs text-faint hover:text-accent">
						← Back to Home
					</Link>
					<RoadmapStats />
				</header>

				<div className="p-4 md:p-6 border-b border-divider">
					<SectionHeading number="01" title="Development" />
					<h1 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">
						ROADMAP
					</h1>
					<p className="text-sm text-muted max-w-lg">
						Current development status across all Antifield projects. Features move
						from Limbo through Testing to Live.
					</p>
				</div>

				<div className="p-4 md:p-6 border-b border-divider">
					<SectionHeading number="02" title="Legend" />
					<div className="flex flex-wrap gap-4">
						<div className="flex items-center gap-4">
							{Object.entries(tagConfig).map(([key, config]) => (
								<span key={key} className={`label-xs ${config.color}`}>
									● {config.label}
								</span>
							))}
						</div>
					</div>
				</div>

				<RoadmapBoard />

				<footer className="footer hidden md:block">
					&copy; 2026 Antifield Ltd
				</footer>
			</div>
		</div>
	);
}
