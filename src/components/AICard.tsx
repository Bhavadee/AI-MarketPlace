import React, { useState, useEffect } from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface AIApp {
  id: number;
  name: string;
  description: string;
  benefit: string;
  category: string;
  icon: typeof LucideIcon;
  gradient: string;
  hoverGradient: string;
  image?: string;
}

interface AICardProps {
  app: AIApp;
  index: number;
}

const AICard: React.FC<AICardProps> = ({ app, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = app.icon;

  return (
    <div
      className="relative group cursor-pointer transition-all duration-500 transform hover:scale-105 hover:-translate-y-2"
      style={{ animationDelay: `${index * 100}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glow effect */}
      <div
        className={`absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-all duration-500 ${app.gradient}`}
      ></div>

      {/* Main card */}
      <div
        className={`relative h-64 rounded-2xl p-6 backdrop-blur-sm border border-white/20 overflow-hidden transition-all duration-500 ${
          isHovered ? app.hoverGradient : app.gradient
        }`}
      >
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-700"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/50 rounded-full transform -translate-x-12 translate-y-12 group-hover:scale-125 transition-transform duration-500"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 rounded-xl bg-white/20 backdrop-blur group-hover:bg-white/30 transition-all duration-300 group-hover:rotate-12">
              <Icon className="w-8 h-8 text-white" />
            </div>
            <div className="px-3 py-1 rounded-full text-xs font-semibold bg-white/20 text-white">
              {app.category}
            </div>
          </div>

          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-200 transition-colors duration-300">
            {app.name}
          </h3>

          <p className="text-white/80 text-sm flex-grow">{app.description}</p>

          {/* Hover overlay with carousel */}
          <div
            className={`absolute inset-0 bg-white backdrop-blur-sm rounded-2xl p-6 flex items-center justify-center transition-all duration-300 ${
              isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            <CarouselContent app={app} />
          </div>
        </div>
      </div>
    </div>
  );
};

const CarouselContent: React.FC<{ app: AIApp }> = ({ app }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % 2); // 3 slides: icon, image, text
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full text-center transition-all duration-100">
    
      {index === 0 && app.image && (
        <img
          src={app.image}
          alt={app.name}
          className="w-64 h-54 object-contain mx-auto animate-fade-in"
        />
      )}
      {index === 1 && (
        <p className="text-black font-semibold text-lg animate-fade-in">
          🚀 {app.benefit}
        </p>
      )}
    </div>
  );
};

export default AICard;
