import { AnimatedSection } from "./AnimatedSection";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["C", "C++", "Java"],
  },
  {
    title: "Web Development",
    skills: ["HTML", "CSS", "JavaScript", "React.js", "Node.js", "Express.js"],
  },
  {
    title: "Databases",
    skills: ["MySQL", "MongoDB"],
  },
  {
    title: "Core Concepts",
    skills: ["RESTful APIs", "JWT Authentication", "Data Structures & Algorithms", "Basic AI/ML"],
  },
  {
    title: "UI/UX",
    skills: ["Figma"],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <h2 className="text-3xl font-bold mb-2">Skills</h2>
          <p className="text-muted-foreground mb-12">
            Technologies and tools I work with.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
          {skillCategories.map((category, index) => (
            <AnimatedSection key={category.title} delay={0.1 * (index + 1)}>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-primary">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-secondary text-secondary-foreground rounded-md text-sm border border-border hover:border-primary/50 transition-colors"
                    >
                      {skill}
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
