export interface Quote {
  id: number;
  text: string;
  author: string;
  book: string;
  likes: number;
  isLiked: boolean;
}

export const sampleQuotes: Quote[] = [
  {
    id: 1,
    text: "It is our choices, Harry, that show what we truly are, far more than our abilities.",
    author: "Albus Dumbledore",
    book: "Harry Potter and the Chamber of Secrets",
    likes: 12847,
    isLiked: false,
  },
  {
    id: 2,
    text: "The only way to deal with an unfree world is to become so absolutely free that your very existence is an act of rebellion.",
    author: "Albert Camus",
    book: "The Myth of Sisyphus",
    likes: 8932,
    isLiked: false,
  },
  {
    id: 3,
    text: "We accept the love we think we deserve.",
    author: "Stephen Chbosky",
    book: "The Perks of Being a Wallflower",
    likes: 15620,
    isLiked: false,
  },
  {
    id: 4,
    text: "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness.",
    author: "Charles Dickens",
    book: "A Tale of Two Cities",
    likes: 7458,
    isLiked: false,
  },
  {
    id: 5,
    text: "The only impossible journey is the one you never begin.",
    author: "Tony Robbins",
    book: "Awaken the Giant Within",
    likes: 9876,
    isLiked: false,
  },
  {
    id: 6,
    text: "In the end, we will remember not the words of our enemies, but the silence of our friends.",
    author: "Harper Lee",
    book: "To Kill a Mockingbird",
    likes: 11234,
    isLiked: false,
  },
  {
    id: 7,
    text: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Paulo Coelho",
    book: "The Alchemist",
    likes: 14567,
    isLiked: false,
  },
  {
    id: 8,
    text: "Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.",
    author: "Bill Keane",
    book: "The Family Circus",
    likes: 6789,
    isLiked: false,
  }
];