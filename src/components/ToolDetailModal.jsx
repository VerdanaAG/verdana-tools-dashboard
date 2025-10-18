import { X, ExternalLink, Calendar, Tag, CheckCircle, Github, Globe, Key } from 'lucide-react';
import { statusConfig } from '../data/tools';

export default function ToolDetailModal({ tool, category, onClose }) {
  const status = statusConfig[tool.status];

  const statusColors = {
    green: 'bg-green-100 text-green-700 border-green-300 dark:bg-green-950 dark:text-green-300',
    blue: 'bg-blue-100 text-blue-700 border-blue-300 dark:bg-blue-950 dark:text-blue-300',
    yellow: 'bg-yellow-100 text-yellow-700 border-yellow-300 dark:bg-yellow-950 dark:text-yellow-300',
    gray: 'bg-gray-100 text-gray-700 border-gray-300 dark:bg-gray-950 dark:text-gray-300'
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
      onClick={onClose}
    >
      <div
        className="bg-card rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-card border-b p-6 flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h2 className="text-2xl font-bold">{tool.name}</h2>
              {tool.url && (
                <a
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              )}
            </div>
            <p className="text-muted-foreground">{tool.description}</p>
          </div>
          <button
            onClick={onClose}
            className="ml-4 text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Status and Category */}
          <div className="flex flex-wrap gap-3">
            <span className={`inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium border ${statusColors[status.color]}`}>
              {status.label}
            </span>
            <span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-muted">
              {category.name}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm text-muted-foreground">
              <Calendar className="w-4 h-4" />
              {new Date(tool.createdDate).toLocaleDateString('de-DE', {
                day: '2-digit',
                month: 'long',
                year: 'numeric'
              })}
            </span>
          </div>

          {/* Tags */}
          {tool.tags && tool.tags.length > 0 && (
            <div>
              <h3 className="text-sm font-semibold mb-2 flex items-center gap-2">
                <Tag className="w-4 h-4" />
                Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {tool.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-2.5 py-1 bg-muted text-sm rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Features */}
          {tool.features && tool.features.length > 0 && (
            <div>
              <h3 className="text-sm font-semibold mb-3 flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                Features
              </h3>
              <ul className="space-y-2">
                {tool.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Resources */}
          {tool.resources && Object.keys(tool.resources).length > 0 && (
            <div>
              <h3 className="text-sm font-semibold mb-3 flex items-center gap-2">
                <Globe className="w-4 h-4" />
                Ressourcen
              </h3>
              <div className="space-y-2">
                {Object.entries(tool.resources).map(([key, value]) => (
                  <a
                    key={key}
                    href={value}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-primary hover:underline"
                  >
                    {key === 'github' && <Github className="w-4 h-4" />}
                    {key === 'cloudflare' && <Globe className="w-4 h-4" />}
                    {key === 'formspree' && <ExternalLink className="w-4 h-4" />}
                    {key === 'script' && <Tag className="w-4 h-4" />}
                    <span className="capitalize">{key}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Credentials */}
          {tool.credentials && Object.keys(tool.credentials).length > 0 && (
            <div className="bg-muted/50 border rounded-lg p-4">
              <h3 className="text-sm font-semibold mb-3 flex items-center gap-2">
                <Key className="w-4 h-4" />
                Zugangsdaten
              </h3>
              <div className="space-y-2 text-sm">
                {Object.entries(tool.credentials).map(([key, value]) => (
                  <div key={key} className="flex items-start gap-2">
                    <span className="font-medium capitalize min-w-[100px]">{key}:</span>
                    <code className="bg-background px-2 py-0.5 rounded text-xs">
                      {value}
                    </code>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-card border-t p-4 flex justify-end gap-3">
          {tool.url && (
            <a
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Tool öffnen
            </a>
          )}
          <button
            onClick={onClose}
            className="px-4 py-2 bg-muted hover:bg-muted/80 rounded-lg transition-colors"
          >
            Schließen
          </button>
        </div>
      </div>
    </div>
  );
}

