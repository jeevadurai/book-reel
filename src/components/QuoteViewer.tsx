import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { QuoteCard } from './QuoteCard';
import { Quote } from '@/data/quotes';

interface QuoteViewerProps {
  quotes: Quote[];
  onLike: (id: number) => void;
}

export const QuoteViewer = ({ quotes, onLike }: QuoteViewerProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isPlaying) {
      interval = setInterval(() => {
        nextQuote();
      }, 4000); // Auto-advance every 4 seconds
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlaying, currentIndex]);

  const nextQuote = () => {
    setIsVisible(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % quotes.length);
      setIsVisible(true);
    }, 200);
  };

  const prevQuote = () => {
    setIsVisible(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + quotes.length) % quotes.length);
      setIsVisible(true);
    }, 200);
  };

  const toggleAutoPlay = () => {
    setIsPlaying(!isPlaying);
  };

  // Handle swipe gestures for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    setTouchStart(touch.clientX);
  };

  const [touchStart, setTouchStart] = useState<number | null>(null);

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStart) return;
    
    const touch = e.changedTouches[0];
    const diff = touchStart - touch.clientX;
    
    if (Math.abs(diff) > 50) { // Minimum swipe distance
      if (diff > 0) {
        nextQuote();
      } else {
        prevQuote();
      }
    }
    
    setTouchStart(null);
  };

  return (
    <div 
      className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-background via-card to-background"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Quote Card */}
      <QuoteCard 
        quote={quotes[currentIndex]} 
        onLike={onLike}
        isVisible={isVisible}
      />

      {/* Navigation Controls */}
      <div className="absolute left-6 top-1/2 transform -translate-y-1/2">
        <Button
          variant="ghost"
          size="icon"
          onClick={prevQuote}
          className="h-14 w-14 rounded-full bg-card/20 backdrop-blur-md border border-border/50 hover:bg-card/40 transition-all duration-300"
        >
          <ChevronLeft className="h-8 w-8 text-foreground" />
        </Button>
      </div>

      <div className="absolute right-6 top-1/2 transform -translate-y-1/2">
        <Button
          variant="ghost"
          size="icon"
          onClick={nextQuote}
          className="h-14 w-14 rounded-full bg-card/20 backdrop-blur-md border border-border/50 hover:bg-card/40 transition-all duration-300"
        >
          <ChevronRight className="h-8 w-8 text-foreground" />
        </Button>
      </div>

      {/* Top Controls */}
      <div className="absolute top-6 left-6 z-10">
        <div className="flex items-center gap-4">
          {/* Auto-play Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleAutoPlay}
            className="h-12 w-12 rounded-full bg-card/20 backdrop-blur-md border border-border/50 hover:bg-card/40 transition-all duration-300"
          >
            {isPlaying ? (
              <Pause className="h-6 w-6 text-foreground" />
            ) : (
              <Play className="h-6 w-6 text-foreground" />
            )}
          </Button>

          {/* Quote Counter */}
          <div className="bg-card/20 backdrop-blur-md border border-border/50 px-4 py-2 rounded-full">
            <span className="text-sm font-medium text-foreground">
              {currentIndex + 1} / {quotes.length}
            </span>
          </div>
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
        <div className="flex gap-2">
          {quotes.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsVisible(false);
                setTimeout(() => {
                  setCurrentIndex(index);
                  setIsVisible(true);
                }, 200);
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'w-8 bg-primary' 
                  : 'w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};