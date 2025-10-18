import { Globe, Plug, Zap, FileText, Database, LayoutGrid } from 'lucide-react';

const iconMap = {
  Globe,
  Plug,
  Zap,
  FileText,
  Database,
  LayoutGrid
};

export default function CategoryFilter({ categories, selectedCategory, setSelectedCategory, stats }) {
  const allCategory = {
    name: 'Alle',
    icon: 'LayoutGrid',
    color: 'blue'
  };

  const colorClasses = {
    blue: 'bg-blue-100 text-blue-700 border-blue-300 dark:bg-blue-950 dark:text-blue-300 dark:border-blue-700',
    green: 'bg-green-100 text-green-700 border-green-300 dark:bg-green-950 dark:text-green-300 dark:border-green-700',
    yellow: 'bg-yellow-100 text-yellow-700 border-yellow-300 dark:bg-yellow-950 dark:text-yellow-300 dark:border-yellow-700',
    purple: 'bg-purple-100 text-purple-700 border-purple-300 dark:bg-purple-950 dark:text-purple-300 dark:border-purple-700',
    gray: 'bg-gray-100 text-gray-700 border-gray-300 dark:bg-gray-950 dark:text-gray-300 dark:border-gray-700'
  };

  const renderCategoryButton = (key, category, count) => {
    const Icon = iconMap[category.icon];
    const isSelected = selectedCategory === key;
    const colorClass = isSelected 
      ? colorClasses[category.color] 
      : 'bg-card border hover:bg-accent';

    return (
      <button
        key={key}
        onClick={() => setSelectedCategory(key)}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all ${colorClass} ${
          isSelected ? 'ring-2 ring-offset-2 ring-ring' : ''
        }`}
      >
        <Icon className="w-4 h-4" />
        <span className="font-medium">{category.name}</span>
        <span className={`text-xs px-2 py-0.5 rounded-full ${
          isSelected ? 'bg-white/20' : 'bg-muted'
        }`}>
          {count}
        </span>
      </button>
    );
  };

  return (
    <div className="flex flex-wrap gap-3">
      {renderCategoryButton('all', allCategory, stats.total)}
      {Object.entries(categories).map(([key, category]) => 
        renderCategoryButton(key, category, stats.byCategory[key] || 0)
      )}
    </div>
  );
}

