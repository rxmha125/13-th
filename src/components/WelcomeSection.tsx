import { useEffect, useState } from 'react';
import starryBg from '@/assets/starry-background.jpg';

export const WelcomeSection = () => {
  const [textVisible, setTextVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setTextVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${starryBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-background/40"></div>
      
      {/* Content */}
      <div className="relative z-20 text-center space-y-8 px-4">
        <div 
          className={`transition-all duration-1000 ${
            textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold handwriting text-romantic-pink mb-4">
            Hey Suha,
          </h1>
          <h2 className="text-2xl md:text-5xl lg:text-6xl font-semibold handwriting text-romantic-blush mb-6">
            Happy 1 Year & 1 Month 💖
          </h2>
          <p className="text-lg md:text-2xl text-foreground/90 cute-writing">
            From your Rx 💋
          </p>
        </div>

        {/* Floating decorative elements */}
        <div className="absolute top-10 left-10 animate-float">
          <div className="text-4xl">✨</div>
        </div>
        <div className="absolute top-20 right-20 animate-float" style={{ animationDelay: '1s' }}>
          <div className="text-3xl">💕</div>
        </div>
        <div className="absolute bottom-20 left-20 animate-float" style={{ animationDelay: '2s' }}>
          <div className="text-5xl">🌟</div>
        </div>
        <div className="absolute bottom-10 right-10 animate-float" style={{ animationDelay: '0.5s' }}>
          <div className="text-4xl">💝</div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-romantic-blush animate-bounce">
        <div className="text-2xl">↓</div>
        <p className="text-sm mt-2">Scroll for more love</p>
      </div>
    </section>
  );
};