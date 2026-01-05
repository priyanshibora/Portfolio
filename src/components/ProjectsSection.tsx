import { Github, Calendar, Play } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";

const projects = [
  {
    title: "College Event Hub",
    period: "Jan 2025 – May 2025",
    description:
      "A full-stack college event management system with role-based access control for students, admins, and volunteers. Features JWT-based authentication, email notifications for approvals, and structured MySQL database for data storage.",
    features: [
      { text: "Role-based access control system" },
      { text: "JWT authentication & authorization" },
      { text: "Email notification workflows" },
      { text: "Structured data validation" },
    ],
    tech: ["Node.js", "Express", "MySQL", "JWT", "REST APIs"],
    github: "https://github.com/priyanshibora/eventhub",
  },
  {
    title: "Personal Finance Risk Forecaster",
    description:
      "A financial risk assessment tool that analyzes income, expenses, and debt patterns using rule-based backend logic. Provides actionable insights without relying on complex ML models — just clear, structured analysis.",
    features: [
      { text: "Rule-based risk assessment" },
      { text: "RESTful API architecture" },
      { text: "Data modeling & validation" },
      { text: "Error handling best practices" },
    ],
    tech: ["JavaScript", "Node.js", "Express", "MongoDB", "HTML", "CSS"],
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <h2 className="text-3xl font-bold mb-2">Projects</h2>
          <p className="text-muted-foreground mb-12">
            Practical applications I've built from the ground up.
          </p>
        </AnimatedSection>

        <div className="space-y-6 max-w-4xl">
          {projects.map((project, index) => (
            <AnimatedSection key={project.title} delay={0.15 * (index + 1)}>
              <div className="bg-card border border-primary/30 rounded-lg p-6 hover:border-primary/50 transition-colors">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-xl">
                    {project.title}
                  </h3>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 hover:text-primary transition-colors border border-border rounded-md hover:border-primary/50"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                </div>

                {project.period && (
                  <div className="flex items-center gap-2 text-primary text-sm mb-4">
                    <Calendar className="w-4 h-4" />
                    {project.period}
                  </div>
                )}

                <p className="text-muted-foreground mb-6">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Key Features:</h4>
                  <div className="grid md:grid-cols-2 gap-2">
                    {project.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-muted-foreground text-sm">
                        <Play className="w-3 h-3 text-primary fill-primary" />
                        {feature.text}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 bg-secondary text-secondary-foreground rounded-md text-sm font-medium"
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
