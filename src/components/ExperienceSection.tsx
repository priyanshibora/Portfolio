import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Web Development Intern",
    company: "CodSoft",
    type: "Internship",
    period: "June 2024 – July 2024",
    description: [
      "Completed a one-month internship focused on frontend-centric web development",
      "Built a personal portfolio website, a responsive travel agency landing page, and a functional calculator",
      "Worked using HTML, CSS, and JavaScript",
      "Focused on layout structure, basic styling, client-side logic, usability, and meeting task deadlines",
    ],
  },
  {
    title: "Full-Stack Developer",
    company: "College Event Hub",
    type: "Academic Project",
    period: "Jan 2025 – May 2025",
    description: [
      "Designed and developed a full-stack college event management system",
      "Implemented role-based access for students, admins, and volunteers",
      "Developed responsive frontend interfaces using HTML, CSS, and JavaScript",
      "Built backend APIs using Node.js and Express with JWT-based authentication",
      "Managed data storage using MySQL and integrated email notifications",
    ],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12">
          <span className="text-primary">#</span> Work Experience
        </h2>

        <div className="max-w-3xl space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-8 border-l-2 border-border hover:border-primary transition-colors"
            >
              <div className="absolute -left-3 top-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                <Briefcase className="w-3 h-3 text-primary-foreground" />
              </div>
              
              <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <h3 className="font-semibold text-lg">{exp.title}</h3>
                  <span className="px-2 py-0.5 bg-primary/10 text-primary text-xs rounded">
                    {exp.type}
                  </span>
                </div>
                <p className="text-primary font-medium">{exp.company}</p>
                <p className="text-sm text-muted-foreground mb-4">{exp.period}</p>
                
                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-muted-foreground text-sm flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
