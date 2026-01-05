import { AnimatedSection } from "./AnimatedSection";

export function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <h2 className="text-3xl font-bold mb-2">About Me</h2>
          <p className="text-muted-foreground mb-8">
            A little bit about my background and what drives me.
          </p>
        </AnimatedSection>
        
        <AnimatedSection delay={0.1}>
          <div className="max-w-3xl space-y-4 text-muted-foreground leading-relaxed">
            <p>
              An aspiring Software Developer 🚀 with hands-on experience building full-stack web 
              applications using JavaScript, Node.js, Express, Sql/Non-Sql databases and some other 
              cool libraries and frameworks.
            </p>
            <p>
              I have hands-on experience with JavaScript, Node.js, and Express, building applications 
              with clean architecture and structured logic. I believe in writing code that's maintainable 
              and serves actual use cases.
            </p>
            <p>
              My approach is straightforward: understand the problem, design a clear solution, and build 
              something that works. No unnecessary complexity, just practical engineering.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
