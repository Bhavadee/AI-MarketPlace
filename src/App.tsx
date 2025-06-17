import React from 'react';
import Header from './components/Header';
import AICard from './components/AICard';
import BackgroundElements from './components/BackgroundElements';
import { aiApps } from './data/aiApps';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      <BackgroundElements />
      
      <div className="relative z-10">
        <Header />
        
        <main className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto">
            {aiApps.map((app, index) => (
              <AICard key={app.id} app={app} index={index} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;