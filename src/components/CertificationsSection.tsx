import { Award, ExternalLink } from "lucide-react";

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
        <h2 className="text-3xl font-bold mb-12">
          <span className="text-primary">#</span> Certifications
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl">
          {certifications.map((cert) => (
            <a
              key={cert.title}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-colors group cursor-pointer"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                {cert.title}
              </h3>
              <p className="text-muted-foreground text-sm">{cert.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
