import { useState } from 'react';
import { Heart, Calendar, Coffee } from 'lucide-react';
import { toast } from 'sonner';

export const FinalMessage = () => {
  const [showConfetti, setShowConfetti] = useState(false);

  const handleDateClick = () => {
    setShowConfetti(true);
    toast("Yes! I can't wait for our next adventure together! 💕", {
      duration: 4000,
      style: {
        background: 'hsl(var(--card))',
        color: 'hsl(var(--romantic-pink))',
        border: '1px solid hsl(var(--romantic-pink))',
      }
    });

    setTimeout(() => setShowConfetti(false), 3000);
  };

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Floating hearts background */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-floating-hearts opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              fontSize: `${Math.random() * 20 + 20}px`
            }}
          >
            💖
          </div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="space-y-12">
          {/* Main message */}
          <div className="space-y-6">
            <h2 className="text-5xl md:text-7xl font-bold handwriting text-transparent bg-gradient-to-r from-romantic-pink via-romantic-rose to-romantic-blush bg-clip-text">
              Suha, You're My Forever 💞
            </h2>
            
            <div className="flex justify-center space-x-4 mb-8">
              {[...Array(7)].map((_, i) => (
                <Heart
                  key={i}
                  className="w-6 h-6 text-romantic-pink animate-heart-beat"
                  fill="currentColor"
                  style={{ animationDelay: `${i * 0.3}s` }}
                />
              ))}
            </div>
          </div>

          {/* Love declaration */}
          <div className="bg-card/80 backdrop-blur-sm border border-romantic-pink/30 rounded-3xl p-8 md:p-12 shadow-romantic">
            <div className="space-y-6 text-lg md:text-xl leading-relaxed">
              <p className="cute-writing text-2xl text-romantic-pink">
                My Beautiful Suha,
              </p>
              
              <p className="text-foreground/90">
                Thank you for being the most amazing girlfriend anyone could ask for. Thank you for your patience, your love, your laughter, and for making every single day brighter just by being in it.
              </p>
              
              <p className="text-foreground/90">
                I know I messed up by forgetting our special day, but I promise to do better. You deserve to be celebrated every single day, not just on anniversaries.
              </p>
              
              <p className="text-romantic-blush font-semibold">
                Here's to many more months, years, and decades of love, laughter, and beautiful memories together. 💕
              </p>
              
              <div className="text-3xl">
                I love you more than infinity! ∞💖
              </div>
            </div>
          </div>

          {/* Date invitation */}
          <div className="space-y-6">
            <p className="text-2xl cute-writing text-romantic-blush">
              So... what do you say?
            </p>
            
            <button
              onClick={handleDateClick}
              className="btn-heart text-2xl relative group overflow-hidden"
            >
              <span className="relative z-10">
                Wanna go on a date soon? 😘
              </span>
              
              {showConfetti && (
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(15)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute text-2xl animate-bounce"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 0.5}s`
                      }}
                    >
                      {['💖', '✨', '🎉', '💕', '🌟'][Math.floor(Math.random() * 5)]}
                    </div>
                  ))}
                </div>
              )}
            </button>

            <div className="flex justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Coffee className="w-4 h-4" />
                <span>Coffee date?</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>Movie night?</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4" fill="currentColor" />
                <span>Just us?</span>
              </div>
            </div>
          </div>

          {/* Final signature */}
          <div className="pt-12 border-t border-romantic-pink/30">
            <p className="text-lg cute-writing text-romantic-pink">
              Forever and always yours,
            </p>
            <p className="text-2xl handwriting text-romantic-rose font-bold mt-2">
              Rx 💋
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              Made with infinite love on July 26, 2025 💖
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};