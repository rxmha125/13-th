import { useState } from 'react';
import { Calendar, MapPin, Camera, Heart } from 'lucide-react';

interface Memory {
  id: number;
  date: string;
  title: string;
  description: string;
  location?: string;
  image?: string;
  special: boolean;
}

const memories: Memory[] = [
  {
    id: 1,
    date: "June 15, 2024",
    title: "Our First Day Together 💕",
    description: "The day that started our beautiful journey. I still remember how nervous and excited I was!",
    location: "Where our love story began",
    special: true
  },
  {
    id: 2,
    date: "July 2024",
    title: "First Month Together 🌟",
    description: "Our first month milestone - already feeling like we were meant to be.",
    special: false
  },
  {
    id: 3,
    date: "September 2024",
    title: "First 'I Love You' 💖",
    description: "The moment we both knew this was real and special. My heart was racing!",
    special: true
  },
  {
    id: 4,
    date: "December 2024",
    title: "First Holiday Season ❄️",
    description: "Spending the holidays together, making new traditions and memories.",
    special: false
  },
  {
    id: 5,
    date: "March 2025",
    title: "Six Months Strong 💪",
    description: "Half a year of laughter, love, and growing together. You make every day brighter!",
    special: true
  },
  {
    id: 6,
    date: "June 15, 2025",
    title: "One Year Anniversary! 🎉",
    description: "A whole year of love, growth, and happiness. Here's to many more!",
    special: true
  }
];

export const MemoryTimeline = () => {
  const [hoveredMemory, setHoveredMemory] = useState<number | null>(null);

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold handwriting text-romantic-pink text-center mb-16">
          Our Beautiful Journey Together ✨
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-romantic-pink via-romantic-rose to-romantic-blush"></div>

          <div className="space-y-16">
            {memories.map((memory, index) => (
              <div
                key={memory.id}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
                onMouseEnter={() => setHoveredMemory(memory.id)}
                onMouseLeave={() => setHoveredMemory(null)}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                  <div className={`w-6 h-6 rounded-full border-4 border-background transition-all duration-300 ${
                    memory.special 
                      ? 'bg-romantic-pink shadow-glow' 
                      : 'bg-romantic-blush'
                  } ${
                    hoveredMemory === memory.id ? 'scale-125' : 'scale-100'
                  }`}></div>
                  
                  {memory.special && (
                    <Heart 
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 text-background" 
                      fill="currentColor"
                    />
                  )}
                </div>

                {/* Memory card */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <div className={`bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-6 transition-all duration-300 hover:shadow-romantic hover:scale-105 ${
                    memory.special ? 'border-romantic-pink/50' : ''
                  }`}>
                    <div className="flex items-center gap-2 text-romantic-blush mb-3">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm font-medium">{memory.date}</span>
                    </div>

                    <h3 className="text-xl font-semibold text-romantic-pink mb-3 cute-writing">
                      {memory.title}
                    </h3>

                    <p className="text-foreground/80 leading-relaxed mb-4">
                      {memory.description}
                    </p>

                    {memory.location && (
                      <div className="flex items-center gap-2 text-muted-foreground text-sm">
                        <MapPin className="w-3 h-3" />
                        <span>{memory.location}</span>
                      </div>
                    )}

                    {/* Placeholder for photo */}
                    <div className="mt-4 bg-muted/30 rounded-lg p-4 border-2 border-dashed border-muted-foreground/30 text-center">
                      <Camera className="w-6 h-6 text-muted-foreground mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">
                        Photo from this memory 📸
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <p className="text-lg text-romantic-blush cute-writing">
            ...and many more beautiful memories to come! 💖
          </p>
        </div>
      </div>
    </section>
  );
};