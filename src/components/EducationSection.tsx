import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "B.Tech in Information Technology",
    institution: "Banasthali Vidyapith",
    period: "2022 – 2026",
  },
  {
    degree: "Class 12 (PCM, CBSE)",
    institution: "Jaycees Public School",
    period: "2021 – 2022",
  },
  {
    degree: "Class 10 (CBSE)",
    institution: "Jaycees Public School",
    period: "2019 – 2020",
  },
];

export function EducationSection() {
  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12">
          <span className="text-primary">#</span> Education
        </h2>

        <div className="max-w-3xl space-y-6">
          {education.map((item, index) => (
            <div
              key={index}
              className="flex gap-4 p-6 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">{item.degree}</h3>
                <p className="text-muted-foreground">{item.institution}</p>
                <p className="text-sm text-primary mt-1">{item.period}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
