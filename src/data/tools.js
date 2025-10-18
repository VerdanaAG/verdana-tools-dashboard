// Zentrale Datenbank aller Manus-Tools und Projekte

export const toolsData = [
  // Websites
  {
    id: 'haus-sanierung-ch',
    name: 'haus-sanierung.ch',
    description: 'Professionelle Haussanierungs-Website für Verdana AG mit 14 AI-Bildern, 10 SEO-Artikeln und Kontaktformular',
    category: 'websites',
    url: 'https://haus-sanierung.ch',
    status: 'live',
    tags: ['React', 'Tailwind CSS', 'Formspree', 'SEO', 'Cloudflare Pages'],
    createdDate: '2025-10-16',
    features: [
      '14 professionelle AI-generierte Bilder',
      '10 SEO-optimierte Blog-Artikel',
      '8 Service-Bereiche mit Detailseiten',
      'Funktionierendes Kontaktformular',
      'Responsive Design'
    ],
    resources: {
      github: 'https://github.com/VerdanaAG/haus-sanierung-ch',
      cloudflare: 'https://dash.cloudflare.com/ca7c3e3a35b3107c64ded0281eefb682/pages/view/haus-sanierung',
      formspree: 'https://formspree.io/forms/xwprakga/overview'
    }
  },
  {
    id: 'dachberater-ch',
    name: 'dachberater.ch',
    description: 'Professionelle Dachberatungs-Website für Verdana AG',
    category: 'websites',
    url: 'https://dachberater.ch',
    status: 'live',
    tags: ['React', 'Tailwind CSS', 'Cloudflare Pages'],
    createdDate: '2025-10-15',
    features: [
      'Dachsanierungs-Informationen',
      'Kontaktformular',
      'Service-Übersicht'
    ]
  },
  
  // APIs & Integrationen
  {
    id: 'formspree-haus-sanierung',
    name: 'Formspree Integration - haus-sanierung.ch',
    description: 'Kontaktformular-Integration für haus-sanierung.ch',
    category: 'apis',
    url: 'https://formspree.io/forms/xwprakga/overview',
    status: 'live',
    tags: ['Formspree', 'E-Mail', 'Lead-Generierung'],
    createdDate: '2025-10-16',
    features: [
      'Formular-ID: xwprakga',
      'E-Mail: info@verdana-ag.ch',
      'Automatische E-Mail-Benachrichtigungen'
    ],
    credentials: {
      email: 'info@verdana-ag.ch',
      password: 'Verdana2025!'
    }
  },
  {
    id: 'cloudflare-mcp',
    name: 'Cloudflare MCP Server',
    description: 'Model Context Protocol Server für Cloudflare Workers, Pages, D1, R2, KV',
    category: 'apis',
    url: 'https://dash.cloudflare.com/ca7c3e3a35b3107c64ded0281eefb682',
    status: 'live',
    tags: ['MCP', 'Cloudflare', 'Workers', 'Pages', 'D1', 'R2'],
    createdDate: '2025-10-01',
    features: [
      'D1 Datenbank-Zugriff',
      'R2 Object Storage',
      'KV Store',
      'Workers Bindings',
      'Pages Deployment'
    ]
  },
  {
    id: 'monday-mcp',
    name: 'Monday.com MCP Server',
    description: 'Project Management und Team Collaboration via MCP',
    category: 'apis',
    url: 'https://monday.com',
    status: 'live',
    tags: ['MCP', 'Monday.com', 'Project Management'],
    createdDate: '2025-10-01',
    features: [
      'Items erstellen und aktualisieren',
      'Boards verwalten',
      'Team-Informationen',
      'Workflow-Automatisierung'
    ]
  },
  {
    id: 'explorium-mcp',
    name: 'Explorium MCP Server',
    description: 'Business Intelligence und Prospect Discovery',
    category: 'apis',
    url: 'https://explorium.ai',
    status: 'live',
    tags: ['MCP', 'Explorium', 'Business Intelligence', 'Lead Generation'],
    createdDate: '2025-10-01',
    features: [
      'Company Research',
      'Prospect Discovery',
      'Data Enrichment',
      'Business Matching'
    ]
  },
  {
    id: 'todoist-mcp',
    name: 'Todoist MCP Server',
    description: 'To-Do-Listen und Aufgabenverwaltung',
    category: 'apis',
    url: 'https://todoist.com',
    status: 'live',
    tags: ['MCP', 'Todoist', 'Task Management'],
    createdDate: '2025-10-01',
    features: [
      'Aufgaben erstellen',
      'Projekte verwalten',
      'Labels und Filter',
      'Automatisierung'
    ]
  },
  {
    id: 'zapier-mcp',
    name: 'Zapier MCP Server',
    description: 'Business Process Automation und Workflow-Integration',
    category: 'apis',
    url: 'https://zapier.com',
    status: 'live',
    tags: ['MCP', 'Zapier', 'Automation', 'Integration'],
    createdDate: '2025-10-01',
    features: [
      'Daten suchen',
      'Actions ausführen',
      'Workflows automatisieren',
      'App-Integration'
    ]
  },
  {
    id: 'jotform-mcp',
    name: 'Jotform MCP Server',
    description: 'Formular-Management und Submission-Handling',
    category: 'apis',
    url: 'https://jotform.com',
    status: 'live',
    tags: ['MCP', 'Jotform', 'Forms', 'Data Collection'],
    createdDate: '2025-10-01',
    features: [
      'Formulare erstellen',
      'Submissions abrufen',
      'Formulare bearbeiten',
      'E-Mail-Versand'
    ]
  },
  {
    id: 'wix-mcp',
    name: 'Wix MCP Server',
    description: 'Web App Development und Content Management',
    category: 'apis',
    url: 'https://wix.com',
    status: 'live',
    tags: ['MCP', 'Wix', 'Website Builder', 'CMS'],
    createdDate: '2025-10-01',
    features: [
      'Sites erstellen',
      'Apps entwickeln',
      'Content verwalten',
      'E-Commerce'
    ]
  },
  {
    id: 'make-mcp',
    name: 'Make MCP Server',
    description: 'Scenario-basierte Automation (früher Integromat)',
    category: 'apis',
    url: 'https://make.com',
    status: 'live',
    tags: ['MCP', 'Make', 'Automation', 'Scenarios'],
    createdDate: '2025-10-01',
    features: [
      'Scenarios entdecken',
      'On-demand Scenarios ausführen',
      'Workflow-Automatisierung'
    ]
  },

  // Automatisierungen
  {
    id: 'wrangler-deployment',
    name: 'Wrangler Deployment Script',
    description: 'Automatisches Deployment-Script für Cloudflare Pages',
    category: 'automation',
    url: null,
    status: 'live',
    tags: ['Wrangler', 'Cloudflare', 'Deployment', 'CI/CD'],
    createdDate: '2025-10-16',
    features: [
      'Ein-Befehl-Deployment',
      'Automatisches Build',
      'Asset-Kopierung',
      'OAuth-Authentifizierung'
    ],
    resources: {
      script: '/home/ubuntu/haus-sanierung/deploy.sh',
      github: 'https://github.com/VerdanaAG/haus-sanierung-ch'
    }
  },
  {
    id: 'github-actions-workflow',
    name: 'GitHub Actions Deployment Workflow',
    description: 'Automatisches Deployment bei jedem Git Push',
    category: 'automation',
    url: 'https://github.com/VerdanaAG/haus-sanierung-ch/actions',
    status: 'configured',
    tags: ['GitHub Actions', 'CI/CD', 'Automation'],
    createdDate: '2025-10-16',
    features: [
      'Automatisches Build',
      'Cloudflare Pages Deployment',
      'Branch-basiertes Deployment'
    ]
  },

  // Ressourcen
  {
    id: 'github-verdana',
    name: 'GitHub Organization - VerdanaAG',
    description: 'GitHub Organization für alle Verdana AG Repositories',
    category: 'resources',
    url: 'https://github.com/VerdanaAG',
    status: 'live',
    tags: ['GitHub', 'Version Control', 'Code Repository'],
    createdDate: '2025-10-16',
    features: [
      'haus-sanierung-ch Repository',
      'Weitere Projekte',
      'Code-Versionierung'
    ]
  },
  {
    id: 'cloudflare-account',
    name: 'Cloudflare Account - Verdana AG',
    description: 'Cloudflare Account für Hosting, Workers, Pages, D1, R2',
    category: 'resources',
    url: 'https://dash.cloudflare.com/ca7c3e3a35b3107c64ded0281eefb682',
    status: 'live',
    tags: ['Cloudflare', 'Hosting', 'CDN', 'Edge Computing'],
    createdDate: '2025-10-01',
    features: [
      'Pages Hosting',
      'Workers (Serverless)',
      'D1 Database',
      'R2 Object Storage',
      'KV Store'
    ],
    credentials: {
      email: 'marketing@verdana-ag.ch',
      accountId: 'ca7c3e3a35b3107c64ded0281eefb682'
    }
  },
  {
    id: 'manus-platform',
    name: 'Manus AI Platform',
    description: 'AI-Plattform für autonome Task-Ausführung',
    category: 'resources',
    url: 'https://manus.im',
    status: 'live',
    tags: ['Manus', 'AI', 'Automation', 'Development'],
    createdDate: '2025-10-01',
    features: [
      'Autonome AI-Agents',
      'Multi-Tool-Integration',
      'Code-Generierung',
      'Website-Entwicklung',
      'API-Integration'
    ]
  }
];

// Kategorien
export const categories = {
  websites: {
    name: 'Websites',
    description: 'Live-Websites und Web-Applikationen',
    icon: 'Globe',
    color: 'blue'
  },
  apis: {
    name: 'APIs & Integrationen',
    description: 'API-Integrationen und externe Services',
    icon: 'Plug',
    color: 'green'
  },
  automation: {
    name: 'Automatisierungen',
    description: 'Workflows, Scripts und CI/CD',
    icon: 'Zap',
    color: 'yellow'
  },
  documents: {
    name: 'Dokumente',
    description: 'Reports, Analysen und Dokumentation',
    icon: 'FileText',
    color: 'purple'
  },
  resources: {
    name: 'Ressourcen',
    description: 'Accounts, Repositories und Plattformen',
    icon: 'Database',
    color: 'gray'
  }
};

// Status-Definitionen
export const statusConfig = {
  live: {
    label: 'Live',
    color: 'green',
    description: 'Aktiv und in Produktion'
  },
  configured: {
    label: 'Konfiguriert',
    color: 'blue',
    description: 'Eingerichtet, aber nicht aktiv verwendet'
  },
  development: {
    label: 'In Entwicklung',
    color: 'yellow',
    description: 'Wird gerade entwickelt'
  },
  archived: {
    label: 'Archiviert',
    color: 'gray',
    description: 'Nicht mehr aktiv, aber verfügbar'
  }
};

// Statistiken berechnen
export const getStats = () => {
  const stats = {
    total: toolsData.length,
    byCategory: {},
    byStatus: {},
    recentlyAdded: toolsData
      .sort((a, b) => new Date(b.createdDate) - new Date(a.createdDate))
      .slice(0, 5)
  };

  // Zähle nach Kategorie
  Object.keys(categories).forEach(cat => {
    stats.byCategory[cat] = toolsData.filter(t => t.category === cat).length;
  });

  // Zähle nach Status
  Object.keys(statusConfig).forEach(status => {
    stats.byStatus[status] = toolsData.filter(t => t.status === status).length;
  });

  return stats;
};

