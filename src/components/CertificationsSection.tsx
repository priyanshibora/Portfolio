import { Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const certifications = [
  {
    title: "Idea Carnival",
    description: "Participated in Idea Carnival organized by Atal Incubation Center (AIC)",
    link: "https://drive.google.com/file/d/16V67r210f47Ziw9D3vFJ6ZHoLZobDNaJ/view?usp=sharing",
  },
  {
    title: "MERN Stack Certification",
    description: "Completed MERN Stack Development course from Udemy",
    link: "https://drive.google.com/file/d/1f1J-KpqgtnalghpnC5mezV1e8a6gMOdr/view?usp=sharing",
  },
  {
    title: "Frontend Web Development",
    description: "Completed Frontend Web Development course from Udemy",
    link: "https://drive.google.com/file/d/1f1J-KpqgtnalghpnC5mezV1e8a6gMOdr/view?usp=sharing",
  },
];

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-4">
          Achievements And Certifications 🏆
        </h2>
        <p className="text-muted-foreground mb-12 uppercase text-sm tracking-wide">
          Achievements, certifications, and some cool stuff that I have done!
        </p>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="bg-card border border-border rounded-lg p-6 flex flex-col items-center text-center hover:border-primary/50 transition-colors"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">{cert.title}</h3>
              <p className="text-muted-foreground text-sm mb-6 flex-1">
                {cert.description}
              </p>
              <Button
                asChild
                variant="default"
                size="sm"
                className="rounded-full px-6"
              >
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Certification
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
