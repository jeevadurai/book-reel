import { useState } from 'react';
import { QuoteViewer } from '@/components/QuoteViewer';
import { sampleQuotes, Quote } from '@/data/quotes';
import { toast } from '@/hooks/use-toast';

const Index = () => {
  const [quotes, setQuotes] = useState<Quote[]>(sampleQuotes);

  const handleLike = (quoteId: number) => {
    setQuotes(prevQuotes => 
      prevQuotes.map(quote => 
        quote.id === quoteId 
          ? { 
              ...quote, 
              isLiked: !quote.isLiked,
              likes: quote.isLiked ? quote.likes - 1 : quote.likes + 1
            }
          : quote
      )
    );

    const quote = quotes.find(q => q.id === quoteId);
    if (quote) {
      toast({
        title: quote.isLiked ? "Removed from favorites" : "Added to favorites",
        description: quote.isLiked ? "Quote removed from your favorites" : "Quote added to your favorites",
      });
    }
  };

  return (
    <>
      {/* SEO Meta Tags */}
      <title>Book Quote Shorts - Discover Literary Wisdom</title>
      <meta name="description" content="Discover inspiring quotes from beloved books in a beautiful short-form viewer. Like Instagram reels but for literary quotes and wisdom." />
      
      <main className="min-h-screen">
        <QuoteViewer quotes={quotes} onLike={handleLike} />
      </main>
    </>
  );
};

export default Index;
