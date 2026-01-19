import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ProjectRegistry, SectionHeading } from "../components";
import { contactLinks, projects } from "../lib/data";

export const Route = createFileRoute("/")({ component: App });

function App(): React.ReactNode {
	const [time] = useState(() => new Date());

	return (
		<div className="min-h-screen w-full overflow-x-hidden bg-bg p-4 md:p-8 md:h-screen md:overflow-hidden">
			<div className="min-h-full border border-foreground flex flex-col md:h-full relative">
				<div className="corner-mark corner-mark-tl" />
				<div className="corner-mark corner-mark-tr" />
				<div className="corner-mark corner-mark-bl" />
				<div className="corner-mark corner-mark-br" />

				<header className="border-b border-foreground px-4 py-3 md:px-6 md:py-4 flex items-center justify-between">
					<div className="label-xs text-faint">Est. Sept 2024</div>
					<div className="text-sm text-muted">
						{time.toLocaleDateString("en-GB")}{" "}
						{time.toLocaleTimeString("en-US", { hour12: false })}
					</div>
				</header>

				<div className="flex flex-col md:flex-row flex-1 min-h-0">
					<main className="flex-1 border-b md:border-b-0 md:border-r border-foreground flex flex-col">
						<section className="p-4 md:p-6 border-b border-divider">
							<SectionHeading number="01" title="Organization" />
							<h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
								ANTIFIELD
							</h1>
							<div className="label-xs text-muted">
								Independent Software Company
							</div>
						</section>

						<section className="p-4 md:p-6 border-b border-divider flex-1">
							<SectionHeading number="02" title="About" />
							<p className="leading-relaxed max-w-md">
								Antifield is an independent software company with one developer
								and various volunteers, focused on making software that respects
								the creatives who make the internet worth visiting.
							</p>
						</section>

						<section className="p-4 md:p-6">
							<SectionHeading number="03" title="Contact" />
							<div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
								{contactLinks.map((link) => (
									<div key={link.label}>
										<div className="label-xs text-faint mb-1">{link.label}</div>
										<a
											href={link.href}
											{...(link.external && {
												target: "_blank",
												rel: "noopener noreferrer",
											})}
											className="text-accent text-sm md:text-base"
										>
											{link.text}
										</a>
									</div>
								))}
							</div>
						</section>
					</main>

					<ProjectRegistry projects={projects} />
				</div>

				<footer className="footer hidden md:block">
					&copy; 2026 Antifield Ltd
				</footer>
			</div>
		</div>
	);
}
