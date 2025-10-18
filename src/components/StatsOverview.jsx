import { Globe, Plug, Zap, Database, TrendingUp } from 'lucide-react';

const iconMap = {
  websites: Globe,
  apis: Plug,
  automation: Zap,
  resources: Database
};

export default function StatsOverview({ stats }) {
  const statCards = [
    {
      label: 'Gesamt',
      value: stats.total,
      icon: TrendingUp,
      color: 'text-blue-500',
      bgColor: 'bg-blue-50 dark:bg-blue-950'
    },
    {
      label: 'Websites',
      value: stats.byCategory.websites || 0,
      icon: Globe,
      color: 'text-green-500',
      bgColor: 'bg-green-50 dark:bg-green-950'
    },
    {
      label: 'APIs',
      value: stats.byCategory.apis || 0,
      icon: Plug,
      color: 'text-purple-500',
      bgColor: 'bg-purple-50 dark:bg-purple-950'
    },
    {
      label: 'Automatisierungen',
      value: stats.byCategory.automation || 0,
      icon: Zap,
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-50 dark:bg-yellow-950'
    },
    {
      label: 'Ressourcen',
      value: stats.byCategory.resources || 0,
      icon: Database,
      color: 'text-gray-500',
      bgColor: 'bg-gray-50 dark:bg-gray-950'
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
      {statCards.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <div
            key={index}
            className="bg-card border rounded-lg p-4 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between mb-2">
              <div className={`${stat.bgColor} p-2 rounded-lg`}>
                <Icon className={`w-5 h-5 ${stat.color}`} />
              </div>
            </div>
            <div className="text-2xl font-bold">{stat.value}</div>
            <div className="text-sm text-muted-foreground">{stat.label}</div>
          </div>
        );
      })}
    </div>
  );
}

