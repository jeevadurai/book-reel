# Book Quote Shorts 📚✨

A beautiful web application for discovering inspiring book quotes in a short-form content viewer - like Instagram reels but for literary wisdom!

## 🌟 Features

### Core Features
- **Short-form Quote Viewer**: Swipe or click through inspiring quotes from beloved books
- **Smooth Transitions**: Beautiful slide and fade animations between quotes
- **Auto-play Mode**: Automatic progression through quotes with play/pause controls
- **Navigation Controls**: Previous/next buttons and progress indicators
- **Quote Information**: Display quote text, author name, and book title

### Interactive Features
- **Like System**: Heart button with animated feedback and like counter
- **Share Functionality**: Copy quotes to clipboard with toast notifications
- **Touch Gestures**: Swipe support for mobile devices
- **Progress Tracking**: Visual indicators showing current position

### Design & UX
- **Responsive Layout**: Optimized for mobile, tablet, and desktop
- **Literary Theme**: Elegant typography with Playfair Display and Inter fonts
- **Dark Theme**: Beautiful book-inspired color palette
- **Smooth Animations**: Engaging transitions and micro-interactions
- **SEO Optimized**: Proper meta tags and semantic HTML

## 🚀 Live Demo


## 🛠️ Technology Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Shadcn/ui component library
- **Build Tool**: Vite
- **Icons**: Lucide React
- **Notifications**: Toast system for user feedback

## 📱 How to Use

1. **Navigate Quotes**: 
   - Click the left/right arrow buttons
   - Swipe left/right on mobile devices
   - Use the progress dots at the bottom

2. **Auto-play**: 
   - Click the play button to auto-advance through quotes
   - Quotes change every 4 seconds in auto-play mode

3. **Interact with Quotes**:
   - Click the heart button to like/unlike quotes
   - Click the share button to copy quotes to clipboard

4. **Progress Tracking**:
   - See current position with the counter (e.g., "3 / 8")
   - Click progress dots to jump to specific quotes

## 📂 Project Structure

```
src/
├── components/
│   ├── ui/                 # Shadcn UI components
│   ├── QuoteCard.tsx       # Individual quote display component
│   └── QuoteViewer.tsx     # Main quote viewer with navigation
├── data/
│   └── quotes.ts           # Sample quotes data
├── hooks/
│   └── use-toast.ts        # Toast notification hook
├── pages/
│   └── Index.tsx           # Main page component
├── lib/
│   └── utils.ts            # Utility functions
├── index.css               # Design system and global styles
└── main.tsx               # Application entry point
```

## 🎨 Design System

The app features a carefully crafted design system with:
- **Colors**: Literary-inspired dark theme with warm accents
- **Typography**: Playfair Display for quotes, Inter for UI
- **Gradients**: Subtle gradients for depth and elegance
- **Animations**: Smooth transitions and micro-interactions
- **Responsive**: Mobile-first approach with breakpoints

## 📦 Sample Data

The app includes 8 carefully selected quotes from popular books including:
- Harry Potter series
- Classic literature (Dickens, Camus)
- Modern favorites (The Alchemist, Perks of Being a Wallflower)
- Self-help and motivational books

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd book-quote-shorts
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:8080](http://localhost:8080) in your browser

### Build for Production

```bash
npm run build
```

## 📱 Mobile Optimization

- **Touch Gestures**: Swipe left/right to navigate
- **Responsive Design**: Adapts to all screen sizes
- **Performance**: Optimized for mobile devices
- **Accessibility**: Keyboard navigation support

## 🔧 Customization

### Adding New Quotes

Edit `src/data/quotes.ts` to add new quotes:

```typescript
{
  id: 9,
  text: "Your quote here",
  author: "Author Name",
  book: "Book Title",
  likes: 0,
  isLiked: false,
}
```

### Styling

The design system is defined in `src/index.css` and `tailwind.config.ts`. Modify these files to customize colors, fonts, and animations.

## 🎯 Assessment Requirements Met

✅ **Core Features**:
- Short quotes/snippets display (like reels)
- Navigation through clicking/tapping and auto-play
- Quote text, author name, and book title display
- Smooth slide/fade transitions

✅ **Bonus Features**:
- Like button with animated feedback
- Share functionality (copy to clipboard)
- Fully responsive layout
- Clean, structured, scalable code

✅ **Technical Requirements**:
- React.js implementation
- Clean folder structure
- Comprehensive README
- Ready for deployment
- TypeScript for type safety

## 👤 Developer

Built by **Jeeva Annadurai** for Notion Press Assessment

## 📄 License

This project is created for assessment purposes.

---

*Discover the wisdom of great books, one quote at a time* 📖✨