import { Github, Linkedin, Send, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const socials = [
  {
    icon: Github,
    href: "https://github.com/priyanshibora",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/priyanshi-bora-",
    label: "LinkedIn",
  },
  {
    icon: Send,
    href: "mailto:priyanshiibora@gmail.com",
    label: "Email",
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <div className="w-12 h-1 bg-primary mx-auto mb-6 rounded-full" />
          <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
          <p className="text-muted-foreground mb-10">
            I'm open to discussing new projects, ideas, or opportunities. Feel free to reach out!
          </p>

          <div className="bg-card border border-border rounded-xl p-8 max-w-md mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Mail className="w-5 h-5 text-primary" />
              <span className="text-foreground">priyanshiibora@gmail.com</span>
            </div>

            <div className="flex items-center justify-center gap-4 mb-8">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-secondary rounded-lg hover:bg-primary/20 hover:text-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            <Button asChild className="w-full">
              <a href="mailto:priyanshiibora@gmail.com">
                <Mail className="w-4 h-4 mr-2" />
                Say Hello
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
