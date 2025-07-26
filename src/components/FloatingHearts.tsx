import { Heart, Star, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';

export const FloatingHearts = () => {
  const [hearts, setHearts] = useState<Array<{ id: number; type: 'heart' | 'star' | 'sparkle'; delay: number; left: string }>>([]);

  useEffect(() => {
    const generateHeart = () => {
      const types = ['heart', 'star', 'sparkle'] as const;
      const newHeart = {
        id: Date.now() + Math.random(),
        type: types[Math.floor(Math.random() * types.length)],
        delay: Math.random() * 4,
        left: `${Math.random() * 100}%`
      };
      
      setHearts(prev => [...prev.slice(-10), newHeart]);
    };

    const interval = setInterval(generateHeart, 2000);
    return () => clearInterval(interval);
  }, []);

  const getIcon = (type: string) => {
    switch (type) {
      case 'heart':
        return <Heart className="w-6 h-6 text-romantic-pink" fill="currentColor" />;
      case 'star':
        return <Star className="w-5 h-5 text-romantic-blush" fill="currentColor" />;
      case 'sparkle':
        return <Sparkles className="w-4 h-4 text-primary-glow" fill="currentColor" />;
      default:
        return <Heart className="w-6 h-6 text-romantic-pink" fill="currentColor" />;
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute animate-floating-hearts opacity-70"
          style={{
            left: heart.left,
            animationDelay: `${heart.delay}s`,
            bottom: '-50px'
          }}
        >
          {getIcon(heart.type)}
        </div>
      ))}
    </div>
  );
};