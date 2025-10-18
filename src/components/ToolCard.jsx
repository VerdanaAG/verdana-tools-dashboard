import { ExternalLink, Calendar, Tag } from 'lucide-react';
import { statusConfig } from '../data/tools';

export default function ToolCard({ tool, category, onClick }) {
  const status = statusConfig[tool.status];
  
  const statusColors = {
    green: 'bg-green-100 text-green-700 border-green-300 dark:bg-green-950 dark:text-green-300',
    blue: 'bg-blue-100 text-blue-700 border-blue-300 dark:bg-blue-950 dark:text-blue-300',
    yellow: 'bg-yellow-100 text-yellow-700 border-yellow-300 dark:bg-yellow-950 dark:text-yellow-300',
    gray: 'bg-gray-100 text-gray-700 border-gray-300 dark:bg-gray-950 dark:text-gray-300'
  };

  return (
    <div
      onClick={onClick}
      className="bg-card border rounded-lg p-5 hover:shadow-lg transition-all cursor-pointer group"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
            {tool.name}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {tool.description}
          </p>
        </div>
        {tool.url && (
          <a
            href={tool.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="ml-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        )}
      </div>

      {/* Status Badge */}
      <div className="mb-3">
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${statusColors[status.color]}`}>
          {status.label}
        </span>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-3">
        {tool.tags.slice(0, 3).map((tag, index) => (
          <span
            key={index}
            className="inline-flex items-center gap-1 px-2 py-0.5 bg-muted text-muted-foreground rounded text-xs"
          >
            <Tag className="w-3 h-3" />
            {tag}
          </span>
        ))}
        {tool.tags.length > 3 && (
          <span className="inline-flex items-center px-2 py-0.5 bg-muted text-muted-foreground rounded text-xs">
            +{tool.tags.length - 3}
          </span>
        )}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between text-xs text-muted-foreground pt-3 border-t">
        <div className="flex items-center gap-1">
          <Calendar className="w-3 h-3" />
          {new Date(tool.createdDate).toLocaleDateString('de-DE', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
          })}
        </div>
        <div className="text-xs font-medium">
          {category.name}
        </div>
      </div>
    </div>
  );
}

