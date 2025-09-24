import { useState } from 'react';
import { Heart, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Quote } from '@/data/quotes';
import { toast } from '@/hooks/use-toast';

interface QuoteCardProps {
  quote: Quote;
  onLike: (id: number) => void;
  isVisible: boolean;
}

export const QuoteCard = ({ quote, onLike, isVisible }: QuoteCardProps) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleLike = () => {
    setIsAnimating(true);
    onLike(quote.id);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const handleShare = () => {
    navigator.clipboard.writeText(`"${quote.text}" - ${quote.author}, ${quote.book}`);
    toast({
      title: "Quote copied!",
      description: "Quote copied to clipboard",
    });
  };

  return (
    <div className={`relative h-full w-full flex flex-col justify-center items-center p-6 md:p-12 ${
      isVisible ? 'fade-slide-up' : 'opacity-0'
    }`}>
      {/* Quote Content */}
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Quote Text */}
        <blockquote className="quote-text text-foreground leading-relaxed">
          "{quote.text}"
        </blockquote>

        {/* Author & Book */}
        <div className="space-y-2">
          <div className="author-text gradient-text">
            — {quote.author}
          </div>
          <div className="book-title text-muted-foreground">
            {quote.book}
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="absolute bottom-8 right-8 flex flex-col gap-4">
        {/* Like Button */}
        <div className="relative">
          <Button
            variant="ghost"
            size="icon"
            onClick={handleLike}
            className={`h-12 w-12 rounded-full bg-card/20 backdrop-blur-md border border-border/50 hover:bg-card/40 transition-all duration-300 ${
              isAnimating ? 'bounce-in' : ''
            }`}
          >
            <Heart 
              className={`h-6 w-6 transition-all duration-300 ${
                quote.isLiked 
                  ? 'fill-red-500 text-red-500 scale-110' 
                  : 'text-foreground hover:text-primary'
              }`} 
            />
          </Button>
          <div className="text-xs text-center mt-2 text-muted-foreground font-medium">
            {quote.likes.toLocaleString()}
          </div>
        </div>

        {/* Share Button */}
        <Button
          variant="ghost"
          size="icon"
          onClick={handleShare}
          className="h-12 w-12 rounded-full bg-card/20 backdrop-blur-md border border-border/50 hover:bg-card/40 transition-all duration-300"
        >
          <Share2 className="h-6 w-6 text-foreground hover:text-primary transition-colors" />
        </Button>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-8 left-8 opacity-20">
        <div className="text-6xl font-playfair text-primary">"</div>
      </div>
      <div className="absolute bottom-8 left-8 opacity-20 rotate-180">
        <div className="text-6xl font-playfair text-primary">"</div>
      </div>
    </div>
  );
};