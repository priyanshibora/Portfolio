import { Github } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";

const projects = [
  {
    title: "College Event Hub",
    description:
      "Full-stack role-based college event management system with authentication, backend APIs, and structured workflows.",
    tech: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MySQL"],
    github: "https://github.com/priyanshibora/eventhub",
  },
  {
    title: "Personal Finance Risk Forecaster",
    description:
      "Helps users understand their financial risk level based on income, expenses, and existing debt using rule-based calculations.",
    tech: ["JavaScript", "Node.js", "Express.js", "MongoDB", "HTML", "CSS"],
    details: [
      "Designed backend logic using rule-based calculations",
      "Built REST APIs to collect and process financial data",
      "Structured MongoDB collections with validation and error handling",
    ],
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <h2 className="text-3xl font-bold mb-12">Projects</h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
          {projects.map((project, index) => (
            <AnimatedSection key={project.title} delay={0.15 * (index + 1)}>
              <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors group h-full">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-semibold text-xl group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 hover:text-primary transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                </div>

                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                {project.details && (
                  <ul className="space-y-1 mb-4">
                    {project.details.map((detail, i) => (
                      <li key={i} className="text-muted-foreground text-xs flex gap-2">
                        <span className="text-primary">•</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                )}

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
