import { useState, useMemo } from 'react';
import './App.css';
import { toolsData, categories, getStats } from './data/tools';
import Header from './components/Header';
import StatsOverview from './components/StatsOverview';
import CategoryFilter from './components/CategoryFilter';
import SearchBar from './components/SearchBar';
import ToolCard from './components/ToolCard';
import ToolDetailModal from './components/ToolDetailModal';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTool, setSelectedTool] = useState(null);
  const stats = getStats();

  // Filter tools based on category and search
  const filteredTools = useMemo(() => {
    return toolsData.filter(tool => {
      const matchesCategory = selectedCategory === 'all' || tool.category === selectedCategory;
      const matchesSearch = searchQuery === '' || 
        tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Stats Overview */}
        <StatsOverview stats={stats} />

        {/* Search and Filter */}
        <div className="mb-8 space-y-4">
          <SearchBar 
            searchQuery={searchQuery} 
            setSearchQuery={setSearchQuery} 
          />
          <CategoryFilter 
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            stats={stats}
          />
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTools.map(tool => (
            <ToolCard 
              key={tool.id} 
              tool={tool} 
              category={categories[tool.category]}
              onClick={() => setSelectedTool(tool)}
            />
          ))}
        </div>

        {/* Empty State */}
        {filteredTools.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">
              Keine Tools gefunden. Versuchen Sie eine andere Suche oder Kategorie.
            </p>
          </div>
        )}

        {/* Results Count */}
        {filteredTools.length > 0 && (
          <div className="mt-8 text-center text-sm text-muted-foreground">
            {filteredTools.length} {filteredTools.length === 1 ? 'Tool' : 'Tools'} gefunden
          </div>
        )}
      </main>

      {/* Tool Detail Modal */}
      {selectedTool && (
        <ToolDetailModal 
          tool={selectedTool}
          category={categories[selectedTool.category]}
          onClose={() => setSelectedTool(null)}
        />
      )}
    </div>
  );
}

export default App;

