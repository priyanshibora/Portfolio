export function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8">
          <span className="text-primary">#</span> About Me
        </h2>
        
        <div className="max-w-3xl space-y-4 text-muted-foreground leading-relaxed">
          <p>
            I'm an aspiring Software Developer with hands-on experience in JavaScript, Node.js, 
            and Express. I focus on building applications with clean architecture and structured logic.
          </p>
          <p>
            I believe in writing maintainable code that serves actual use cases. My approach is 
            straightforward: understand the problem, design a clear solution, and build something 
            that works — no unnecessary complexity.
          </p>
        </div>
      </div>
    </section>
  );
}
