import { useState } from 'react';
import { Mail, Heart } from 'lucide-react';
import loveLetterBg from '@/assets/love-letter-bg.jpg';

export const LoveLetter = () => {
  const [isOpen, setIsOpen] = useState(false);

  const letterContent = `My Dearest Suha,

As I write this letter, my heart is overflowing with love for you. It's been over a year since you came into my life, and every single day has been more beautiful because of you.

You are my sunshine on cloudy days, my anchor in stormy weather, and my greatest joy in moments of happiness. Your laugh is my favorite sound, your smile is my favorite sight, and your hand in mine is my favorite feeling.

I love the way you scrunch your nose when you're concentrating, how you get excited about the little things, and how you make everyone around you feel special. You have this incredible gift of making ordinary moments feel magical.

Thank you for being patient with me, for loving me with all my flaws, and for choosing to build this beautiful life together. Thank you for being my best friend, my biggest supporter, and my greatest love.

I promise to keep falling in love with you every single day, to support your dreams, to make you laugh when you're sad, and to hold you close when you need comfort.

You are my forever, my always, and my everything.

With all my love and devotion,
Your Rx 💕

P.S. I love you more than words can express, more than stars in the sky, and more than there are grains of sand on all the beaches in the world. 🌟💖`;

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold handwriting text-romantic-pink mb-8">
          A Letter From My Heart 💌
        </h2>

        {!isOpen ? (
          <div className="relative mx-auto max-w-md">
            <div className="bg-card/90 backdrop-blur-sm border border-romantic-pink/30 rounded-2xl p-8 hover:shadow-romantic transition-all duration-300 cursor-pointer group"
                 onClick={() => setIsOpen(true)}>
              <div className="text-center space-y-6">
                <Mail className="w-16 h-16 text-romantic-pink mx-auto group-hover:animate-bounce" />
                
                <div>
                  <h3 className="text-2xl font-semibold text-romantic-pink cute-writing mb-2">
                    For: My Beautiful Suha
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    From: Your loving Rx
                  </p>
                </div>

                <div className="space-y-2">
                  <p className="text-romantic-blush font-medium">
                    Click to open your love letter 💕
                  </p>
                  <div className="flex justify-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Heart 
                        key={i}
                        className="w-4 h-4 text-romantic-pink animate-heart-beat" 
                        fill="currentColor"
                        style={{ animationDelay: `${i * 0.2}s` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div 
            className="relative mx-auto max-w-3xl bg-card/95 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden animate-romantic-fade-in"
            style={{
              backgroundImage: `url(${loveLetterBg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundBlendMode: 'soft-light'
            }}
          >
            <div className="absolute inset-0 bg-background/80"></div>
            
            <div className="relative z-10 p-8 md:p-12">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 text-romantic-pink">
                  <Heart className="w-6 h-6" fill="currentColor" />
                  <span className="text-lg font-semibold cute-writing">Love Letter</span>
                  <Heart className="w-6 h-6" fill="currentColor" />
                </div>
              </div>

              <div className="prose prose-lg max-w-none">
                <div className="whitespace-pre-line text-left leading-relaxed text-foreground/90 handwriting text-lg">
                  {letterContent}
                </div>
              </div>

              <div className="mt-8 text-center">
                <button
                  onClick={() => setIsOpen(false)}
                  className="btn-romantic"
                >
                  Close Letter 💕
                </button>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-4 right-4 text-2xl animate-sparkle">✨</div>
            <div className="absolute bottom-4 left-4 text-2xl animate-float">🌹</div>
          </div>
        )}
      </div>
    </section>
  );
};