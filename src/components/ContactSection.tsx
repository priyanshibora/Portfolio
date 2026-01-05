import { Github, Linkedin, Mail } from "lucide-react";

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: "priyanshiibora@gmail.com",
    href: "mailto:priyanshiibora@gmail.com",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/priyanshibora",
    href: "https://github.com/priyanshibora",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/priyanshi-bora-",
    href: "https://linkedin.com/in/priyanshi-bora-",
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12">
          <span className="text-primary">#</span> Contact
        </h2>

        <div className="max-w-2xl">
          <p className="text-muted-foreground mb-8">
            I'm currently looking for opportunities. Whether you have a question or just want to
            say hi, feel free to reach out!
          </p>

          <div className="space-y-4">
            {contacts.map((contact) => (
              <a
                key={contact.label}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:border-primary transition-colors group"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <contact.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{contact.label}</p>
                  <p className="font-medium group-hover:text-primary transition-colors">
                    {contact.value}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
