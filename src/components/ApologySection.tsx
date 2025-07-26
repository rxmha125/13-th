import { useState, useEffect } from 'react';
import { Heart, HeartCrack } from 'lucide-react';

export const ApologySection = () => {
  const [isHealed, setIsHealed] = useState(false);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowText(true), 500);
    const timer2 = setTimeout(() => setIsHealed(true), 3000);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        {/* Broken/Healing Heart Animation */}
        <div className="relative mx-auto w-32 h-32 mb-16">
          <div className={`absolute inset-0 transition-all duration-2000 ${isHealed ? 'opacity-0 scale-50' : 'opacity-100 scale-100'}`}>
            <HeartCrack className="w-full h-full text-romantic-deep animate-pulse" fill="currentColor" />
          </div>
          <div className={`absolute inset-0 transition-all duration-2000 ${isHealed ? 'opacity-100 scale-100' : 'opacity-0 scale-150'}`}>
            <Heart className="w-full h-full text-romantic-pink animate-heart-beat" fill="currentColor" />
            {isHealed && (
              <div className="absolute inset-0 animate-pulse-glow rounded-full"></div>
            )}
          </div>
        </div>

        <div className={`space-y-8 transition-all duration-1000 ${showText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold handwriting text-romantic-pink">
            I'm Sorry for Forgetting… 😢
          </h2>
          
          <div className="space-y-6 text-lg md:text-xl text-foreground/90 leading-relaxed max-w-3xl mx-auto">
            <p className="cute-writing text-2xl">
              My dearest Suha,
            </p>
            
            <p>
              I can't believe I forgot our special day on July 15th. I feel terrible about it, and I know saying sorry isn't enough, but it comes from the bottom of my heart. 💔
            </p>
            
            <p>
              You mean the world to me, and missing our 1 year and 1 month anniversary was the last thing I wanted to do. I've been thinking about it non-stop since I realized my mistake.
            </p>
            
            <p className="text-romantic-blush font-semibold">
              This website is my way of making it up to you – a little digital love letter to show you just how much you mean to me and how sorry I am. 💕
            </p>
            
            <p className="cute-writing text-xl text-romantic-pink">
              Please forgive me, my love. You deserve all the love and remembrance in the world.
            </p>
          </div>

          {/* Crying emoji with animation */}
          <div className="text-6xl animate-bounce">
            😭
          </div>
        </div>

        {/* Repair message when heart heals */}
        {isHealed && (
          <div className="animate-romantic-fade-in">
            <p className="text-lg text-romantic-blush cute-writing">
              ✨ But with your forgiveness, my heart can heal... ✨
            </p>
          </div>
        )}
      </div>
    </section>
  );
};