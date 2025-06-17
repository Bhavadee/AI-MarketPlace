import React from 'react';
import { Sparkles, Zap } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="text-center py-12 md:py-16">
      <div className="relative">
        {/* <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-32 h-32 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        </div> */}
        
        <div className="relative z-10">
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="w-8 h-8 md:w-12 md:h-12 text-black-400 mr-4 animate-spin" style={{animationDuration: '3s'}} />
           <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-black ">
  AI Marketplace
</h1>

            <Zap className="w-8 h-8 md:w-12 md:h-12 text-black-400 ml-4 animate-bounce" />
          </div>
          
          <div className="text-2xl md:text-4xl font-semibold text-text mb-4">
            For <span className="bg-gradient-to-r text-Red bg-clip-text ">c</span><span className="bg-gradient-to-r text-black bg-clip-text ">prime</span>
          </div>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-4">
            Discover powerful AI applications that transform your workflow
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;