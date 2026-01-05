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
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12">
          <span className="text-primary">#</span> Skills
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
          {skillCategories.map((category) => (
            <div key={category.title} className="space-y-4">
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
          ))}
        </div>
      </div>
    </section>
  );
}
