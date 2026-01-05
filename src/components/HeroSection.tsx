import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DeveloperIllustration } from "./DeveloperIllustration";

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Hi, I'm <span className="text-primary">Priyanshi</span>👋
            </h1>
            <p className="text-muted-foreground max-w-lg leading-relaxed">
              An aspiring Software Developer 🚀 having an experience of building Web applications 
              with JavaScript / Reactjs / Nodejs / Express and some other cool libraries and frameworks.
            </p>

            <div className="flex items-center gap-4">
              <a
                href="https://github.com/priyanshibora"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/priyanshi-bora-"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:priyanshiibora@gmail.com"
                className="p-2 rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button asChild>
                <a
                  href="https://drive.google.com/file/d/1iMFODOMlaw2CYpuNdd3SY0GE7Nbx-Mmy/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#projects">View Projects</a>
              </Button>
            </div>
          </div>

          <div className="hidden lg:flex justify-center">
            <DeveloperIllustration />
          </div>
        </div>
      </div>
    </section>
  );
}
