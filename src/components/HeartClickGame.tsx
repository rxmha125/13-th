import { useState, useEffect } from 'react';
import { Heart, Star } from 'lucide-react';
import { toast } from 'sonner';

interface FloatingHeart {
  id: number;
  x: number;
  y: number;
  message: string;
}

const compliments = [
  "You're absolutely beautiful! 💖",
  "Your smile lights up my world! ✨",
  "I love your laugh so much! 😊",
  "You make me so happy! 💕",
  "You're my favorite person! 🥰",
  "Your eyes are stunning! 👀",
  "You're incredibly sweet! 🍯",
  "I'm so lucky to have you! 🍀",
  "You're perfect just as you are! 💝",
  "You make my heart skip a beat! 💓",
  "You're my sunshine! ☀️",
  "I adore you so much! 🥺",
  "You're my everything! 🌟",
  "You smell amazing! 🌸",
  "Your hugs are the best! 🤗",
  "You're so smart and funny! 🧠",
  "I love your style! 👗",
  "You make every day better! 📅",
  "You're my dream come true! 💭",
  "I can't stop thinking about you! 💭"
];

export const HeartClickGame = () => {
  const [hearts, setHearts] = useState<FloatingHeart[]>([]);
  const [score, setScore] = useState(0);
  const [gameActive, setGameActive] = useState(false);

  useEffect(() => {
    if (!gameActive) return;

    const interval = setInterval(() => {
      const newHeart: FloatingHeart = {
        id: Date.now(),
        x: Math.random() * 80 + 10, // 10% to 90% of width
        y: Math.random() * 70 + 15, // 15% to 85% of height
        message: compliments[Math.floor(Math.random() * compliments.length)]
      };

      setHearts(prev => [...prev, newHeart]);

      // Remove heart after 3 seconds if not clicked
      setTimeout(() => {
        setHearts(prev => prev.filter(h => h.id !== newHeart.id));
      }, 3000);
    }, 1500);

    return () => clearInterval(interval);
  }, [gameActive]);

  const handleHeartClick = (heart: FloatingHeart) => {
    setScore(prev => prev + 1);
    setHearts(prev => prev.filter(h => h.id !== heart.id));
    
    toast(heart.message, {
      duration: 2000,
      style: {
        background: 'hsl(var(--card))',
        color: 'hsl(var(--romantic-pink))',
        border: '1px solid hsl(var(--romantic-pink))',
      }
    });
  };

  const startGame = () => {
    setGameActive(true);
    setScore(0);
    setHearts([]);
    
    // Game lasts 30 seconds
    setTimeout(() => {
      setGameActive(false);
      setHearts([]);
      toast(`Game over! You caught ${score} hearts! 💖`, {
        duration: 3000,
        style: {
          background: 'hsl(var(--card))',
          color: 'hsl(var(--romantic-pink))',
          border: '1px solid hsl(var(--romantic-pink))',
        }
      });
    }, 30000);
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold handwriting text-romantic-pink mb-8">
          Click the Hearts! 💕
        </h2>
        
        <p className="text-lg text-foreground/80 mb-8 cute-writing">
          Click the floating hearts to see sweet messages and compliments!
        </p>

        <div className="mb-8">
          {!gameActive ? (
            <button
              onClick={startGame}
              className="btn-heart text-xl"
            >
              Start Game! 💖
            </button>
          ) : (
            <div className="space-y-4">
              <div className="text-2xl font-bold text-romantic-pink">
                Hearts Caught: {score} 💕
              </div>
              <div className="text-sm text-muted-foreground">
                Game ends in 30 seconds!
              </div>
            </div>
          )}
        </div>

        {/* Game Area */}
        <div className="relative w-full h-96 bg-card/30 backdrop-blur-sm border border-romantic-pink/30 rounded-3xl overflow-hidden">
          {!gameActive && hearts.length === 0 && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center space-y-4">
                <Star className="w-12 h-12 text-romantic-blush mx-auto animate-sparkle" />
                <p className="text-muted-foreground cute-writing">
                  Click "Start Game" to begin! 💖
                </p>
              </div>
            </div>
          )}

          {hearts.map((heart) => (
            <button
              key={heart.id}
              onClick={() => handleHeartClick(heart)}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 hover:scale-110 transition-transform duration-200 animate-pulse-glow"
              style={{
                left: `${heart.x}%`,
                top: `${heart.y}%`,
              }}
            >
              <Heart 
                className="w-8 h-8 text-romantic-pink hover:text-romantic-rose cursor-pointer" 
                fill="currentColor"
              />
            </button>
          ))}
        </div>

        {score > 0 && (
          <div className="mt-8 p-4 bg-card/50 backdrop-blur-sm rounded-2xl border border-romantic-pink/30">
            <p className="text-romantic-blush cute-writing">
              You're doing great! Keep clicking those hearts! 💕
            </p>
          </div>
        )}
      </div>
    </section>
  );
};