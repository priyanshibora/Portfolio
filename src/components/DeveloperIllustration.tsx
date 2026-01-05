export function DeveloperIllustration() {
  return (
    <div className="relative w-80 h-80">
      {/* Monitor */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 w-48 h-36 bg-card border-2 border-border rounded-lg overflow-hidden">
        <div className="h-full bg-gradient-to-br from-muted to-secondary p-3">
          {/* Code lines */}
          <div className="space-y-2">
            <div className="flex gap-2">
              <div className="w-8 h-2 bg-primary/60 rounded" />
              <div className="w-16 h-2 bg-muted-foreground/30 rounded" />
            </div>
            <div className="flex gap-2 pl-4">
              <div className="w-12 h-2 bg-primary/40 rounded" />
              <div className="w-10 h-2 bg-muted-foreground/30 rounded" />
            </div>
            <div className="flex gap-2 pl-4">
              <div className="w-6 h-2 bg-primary/50 rounded" />
              <div className="w-14 h-2 bg-muted-foreground/30 rounded" />
            </div>
            <div className="flex gap-2">
              <div className="w-4 h-2 bg-primary/60 rounded" />
            </div>
            <div className="flex gap-2 pl-4">
              <div className="w-16 h-2 bg-primary/40 rounded" />
              <div className="w-8 h-2 bg-muted-foreground/30 rounded" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Monitor stand */}
      <div className="absolute top-44 left-1/2 -translate-x-1/2 w-4 h-8 bg-border" />
      <div className="absolute top-52 left-1/2 -translate-x-1/2 w-20 h-2 bg-border rounded-full" />

      {/* Character */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
        {/* Body */}
        <div className="relative">
          {/* Head */}
          <div className="absolute -top-28 left-1/2 -translate-x-1/2 w-16 h-16 bg-amber-200 dark:bg-amber-300 rounded-full">
            {/* Hair */}
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-18 h-10 bg-zinc-800 dark:bg-zinc-900 rounded-t-full" style={{ width: '4.5rem' }} />
            {/* Eyes */}
            <div className="absolute top-6 left-3 w-2 h-2 bg-zinc-800 rounded-full" />
            <div className="absolute top-6 right-3 w-2 h-2 bg-zinc-800 rounded-full" />
            {/* Smile */}
            <div className="absolute top-10 left-1/2 -translate-x-1/2 w-4 h-2 border-b-2 border-zinc-800 rounded-b-full" />
          </div>
          
          {/* Torso */}
          <div className="w-20 h-24 bg-primary rounded-t-3xl" />
          
          {/* Arms */}
          <div className="absolute top-4 -left-4 w-6 h-16 bg-primary rounded-full rotate-12" />
          <div className="absolute top-4 -right-4 w-6 h-16 bg-primary rounded-full -rotate-12" />
          
          {/* Hands */}
          <div className="absolute top-16 -left-6 w-5 h-5 bg-amber-200 dark:bg-amber-300 rounded-full" />
          <div className="absolute top-16 -right-6 w-5 h-5 bg-amber-200 dark:bg-amber-300 rounded-full" />
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-4 right-4 w-8 h-8 border-2 border-primary/40 rounded rotate-12 animate-pulse" />
      <div className="absolute top-20 right-0 w-4 h-4 bg-primary/30 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }} />
      <div className="absolute bottom-20 left-0 w-6 h-6 border-2 border-primary/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-12 left-4 text-primary/50 font-mono text-sm">&lt;/&gt;</div>
      <div className="absolute bottom-32 right-8 text-primary/50 font-mono text-sm">{ }</div>
    </div>
  );
}
