import { Wrench, Github, ExternalLink } from 'lucide-react';

export default function Header() {
  return (
    <header className="border-b bg-card">
      <div className="container mx-auto px-4 py-6 max-w-7xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-primary text-primary-foreground p-3 rounded-lg">
              <Wrench className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Verdana AG Tools Dashboard</h1>
              <p className="text-sm text-muted-foreground">
                Zentrale Übersicht aller Manus-Tools und Projekte
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/VerdanaAG"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="w-4 h-4" />
              <span className="hidden sm:inline">GitHub</span>
            </a>
            <a
              href="https://manus.im"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              <span className="hidden sm:inline">Manus</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

