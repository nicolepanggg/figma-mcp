# ArticleHub - Online Article Reading Website

A modern, responsive website for reading articles online built with HTML5, CSS3, and JavaScript.

## Features

### 🌟 Core Features
- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- **Article Reading**: Clean, distraction-free reading experience with modal popups
- **Search Functionality**: Search articles by title, content, category, or author
- **Category Filtering**: Browse articles by categories (Technology, Health, Business, Lifestyle, etc.)
- **Sorting Options**: Sort articles by newest, oldest, or most popular
- **Featured Articles**: Highlight important or trending articles
- **Load More**: Pagination with "Load More" functionality for better performance

### 🎨 User Interface
- **Modern Design**: Clean, minimalist design with smooth animations
- **Dark/Light Theme**: Professional color scheme with CSS custom properties
- **Interactive Elements**: Hover effects, smooth transitions, and micro-interactions
- **Mobile Navigation**: Hamburger menu for mobile devices
- **Loading States**: Loading spinner for better user experience

### 📱 Interactive Features
- **Article Modal**: Full-screen reading experience with article details
- **Like System**: Like articles with persistent storage
- **Bookmark System**: Save articles for later reading
- **Share Functionality**: Share articles via Web Share API or clipboard
- **Newsletter Subscription**: Email subscription form
- **Social Media Links**: Connect with social media platforms

### 🎵 Audio Features
- **Text-to-Speech**: Read articles aloud with natural voice synthesis
- **Multi-language Support**: Support for English and Traditional Chinese (Cantonese priority)
- **Audio Download**: Download article audio as MP3 files for offline listening
- **Voice Selection**: Automatic selection of appropriate voices based on language
- **Audio Quality**: High-quality MP3 conversion with fallback to WebM/WAV

### 🔧 Technical Features
- **Local Storage**: Persist user preferences and interactions
- **Lazy Loading**: Optimize image loading for better performance
- **Debounced Search**: Optimized search with debouncing
- **Keyboard Navigation**: Support for keyboard shortcuts (ESC to close modal)
- **SEO Friendly**: Semantic HTML structure
- **Print Styles**: Optimized for printing

## File Structure

```
ArticleHub/
│
├── index.html          # Main HTML file
├── styles.css          # CSS styles and responsive design
├── script.js           # JavaScript functionality
└── README.md           # Project documentation
```

## Technologies Used

- **HTML5**: Semantic markup and modern HTML features
- **CSS3**: 
  - CSS Grid and Flexbox for layouts
  - CSS Custom Properties (variables)
  - CSS Animations and Transitions
  - Media Queries for responsive design
- **JavaScript (ES6+)**:
  - Modern JavaScript features
  - Local Storage API
  - Intersection Observer API
  - Web Share API
  - Event handling and DOM manipulation

## Sample Content

The website includes sample articles covering various topics:
- Artificial Intelligence in Healthcare
- Sustainable Living
- Remote Work Trends
- Mindfulness and Mental Health
- Sleep Science
- Cryptocurrency

## Getting Started

1. **Clone or Download**: Get the project files
2. **Open**: Open `index.html` in your web browser
3. **Explore**: Browse articles, use search, and test all features

No build process or dependencies required - it's a pure HTML/CSS/JavaScript website!

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Opera

## Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px
- **Small Mobile**: Below 480px

## Customization

### Adding New Articles

To add new articles, edit the `articlesData` array in `script.js`:

```javascript
const newArticle = {
    id: 7,
    title: "Your Article Title",
    excerpt: "Brief description of the article...",
    content: `<h2>Your HTML content here</h2><p>Article body...</p>`,
    category: "Technology",
    author: "Author Name",
    authorAvatar: "https://example.com/avatar.jpg",
    date: "2025-01-20",
    readTime: "5 min read",
    likes: 0,
    image: "https://example.com/article-image.jpg",
    featured: false
};
```

### Adding New Categories

Edit the `categoriesData` array in `script.js`:

```javascript
const newCategory = {
    name: "Category Name",
    icon: "fas fa-icon-name",
    count: 0,
    description: "Category description"
};
```

### Styling Customization

Modify CSS custom properties in `styles.css`:

```css
:root {
    --primary-color: #your-color;
    --secondary-color: #your-color;
    --accent-color: #your-color;
    /* ... other variables */
}
```

## Performance Optimization

- **Image Optimization**: Uses optimized images from Unsplash
- **Lazy Loading**: Images load only when needed
- **Debounced Search**: Reduces API calls and improves performance
- **Efficient DOM Manipulation**: Minimal reflows and repaints
- **CSS Optimization**: Efficient selectors and minimal specificity

## Accessibility Features

- **Semantic HTML**: Proper heading hierarchy and landmarks
- **Keyboard Navigation**: Full keyboard accessibility
- **ARIA Labels**: Screen reader support
- **Color Contrast**: WCAG compliant color combinations
- **Focus Indicators**: Clear focus states for interactive elements

## Audio Download Setup Guide

### 🎧 System Requirements
To use the audio download feature, you need to enable system audio recording:

### Windows Setup (Recommended)
1. **Enable Stereo Mix:**
   - Right-click the sound icon in system tray
   - Select "Recording devices" or "Sound settings"
   - In Recording tab, right-click empty area
   - Check "Show Disabled Devices" and "Show Disconnected Devices"
   - Find "Stereo Mix" and right-click → "Enable"
   - Right-click "Stereo Mix" → "Set as Default Device"

2. **Browser Permissions:**
   - Allow microphone access when prompted
   - Ensure speakers/headphones are on during recording
   - The feature records system audio through Stereo Mix

### Alternative Methods
- **VB-Audio Cable**: Install virtual audio driver for more control
- **OBS Virtual Audio**: Use OBS Studio's virtual audio output
- **Voicemeeter**: Advanced audio routing software

### Troubleshooting
- **No audio recorded**: Check if Stereo Mix is enabled and set as default
- **Permission denied**: Allow microphone access in browser settings
- **Low quality**: Adjust Stereo Mix levels in sound settings
- **No Stereo Mix option**: Update audio drivers or use virtual audio cable

### 🎯 Usage Tips
- Keep speaker volume audible during recording
- Close other audio applications to avoid interference
- Use headphones to prevent audio feedback
- The system will guide you through setup on first use

## Future Enhancements

Potential features to add:
- Server-side TTS with direct MP3 generation
- Multiple voice options and speed controls
- Batch audio download for multiple articles
- Audio playlist creation
- Background audio generation
- Cloud TTS integration (Google/Azure)
- User authentication system
- Comment system for articles
- Advanced search with filters
- Reading progress indicator
- Dark/light theme toggle

## License

This project is open source and available under the MIT License.

## Support

For questions or support, please create an issue or contact the development team.

---

**Enjoy reading with ArticleHub!** 📚✨