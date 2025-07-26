import { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggleMusic = () => {
    if (!audioRef.current) {
      const audio = new Audio('/music/music.mp3'); // Your file here
      audio.loop = true;
      audio.volume = 0.3;
      audioRef.current = audio;
    }

    if (audioRef.current.paused) {
      audioRef.current.play().then(() => setIsPlaying(true)).catch((err) => {
        console.error('Playback error:', err);
      });
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  return (
    <button
      onClick={toggleMusic}
      className="fixed top-6 right-6 z-50 bg-card/80 backdrop-blur-sm border border-border rounded-full p-3 hover:bg-card transition-all duration-300 hover:scale-110 group"
      aria-label={isPlaying ? "Mute music" : "Play music"}
    >
      {isPlaying ? (
        <Volume2 className="w-5 h-5 text-pink-400 group-hover:text-pink-300 transition-colors" />
      ) : (
        <VolumeX className="w-5 h-5 text-muted-foreground group-hover:text-pink-400 transition-colors" />
      )}
      {isPlaying && (
        <div className="absolute inset-0 rounded-full animate-pulse-glow"></div>
      )}
    </button>
  );
};
