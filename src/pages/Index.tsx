import { useState, useEffect } from 'react';
import { LoadingScreen } from '@/components/LoadingScreen';
import { FloatingHearts } from '@/components/FloatingHearts';
import { MusicPlayer } from '@/components/MusicPlayer';
import { WelcomeSection } from '@/components/WelcomeSection';
import { ApologySection } from '@/components/ApologySection';
import { MemoryTimeline } from '@/components/MemoryTimeline';
import { LoveLetter } from '@/components/LoveLetter';
import { HeartClickGame } from '@/components/HeartClickGame';
import { FinalMessage } from '@/components/FinalMessage';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      
      {!isLoading && (
        <div className="relative">
          {/* Background floating hearts */}
          <FloatingHearts />
          
          {/* Music player */}
          <MusicPlayer />
          
          {/* Main content */}
          <main className="relative z-20">
            <WelcomeSection />
            <ApologySection />
            <MemoryTimeline />
            <LoveLetter />
            <HeartClickGame />
            <FinalMessage />
          </main>
        </div>
      )}
    </>
  );
};

export default Index;
