import { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-background flex items-center justify-center z-50">
      <div className="text-center space-y-8">
        <div className="relative">
          <Heart 
            className="w-16 h-16 text-romantic-pink animate-heart-beat mx-auto" 
            fill="currentColor"
          />
          <div className="absolute inset-0 animate-pulse-glow rounded-full"></div>
        </div>
        
        <div className="space-y-4">
          <h1 className="text-2xl font-semibold text-romantic-pink handwriting">
            Preparing love for Suha 💗
          </h1>
          
          <div className="w-64 h-2 bg-muted rounded-full overflow-hidden mx-auto">
            <div 
              className="h-full bg-gradient-to-r from-romantic-pink to-romantic-rose transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          
          <p className="text-sm text-muted-foreground">
            {progress < 30 && "Loading memories..."}
            {progress >= 30 && progress < 60 && "Sprinkling some magic..."}
            {progress >= 60 && progress < 90 && "Adding heart emojis..."}
            {progress >= 90 && "Almost ready! 💖"}
          </p>
        </div>
        
        <div className="flex justify-center space-x-4">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-3 h-3 bg-romantic-blush rounded-full animate-bounce"
              style={{ animationDelay: `${i * 0.2}s` }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};