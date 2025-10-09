# GGT Event Gallery Website

A responsive, accessible, and modern website for the GGT Event Gallery, built from Figma design specifications using HTML5, CSS3, and JavaScript.

## Features

### 🎨 Design & UI
- **Pixel-perfect implementation** of Figma design
- **Responsive design** that works on all devices
- **Modern CSS Grid** and Flexbox layouts
- **Smooth animations** and hover effects
- **Custom typography** using Instrument Sans font

### 🖼️ Gallery Functionality
- **Image modal viewer** with navigation
- **Category filtering** (Event Gallery, Workshop, Interschool Activity, Competition)
- **Lazy loading** for optimal performance
- **Keyboard navigation** support
- **Touch gestures** for mobile devices

### ⚡ Performance
- **Optimized images** downloaded directly from Figma
- **Service Worker** for offline functionality
- **Progressive Web App (PWA)** capabilities
- **Lazy loading** implementation
- **Efficient CSS** with modern techniques

### ♿ Accessibility
- **WCAG 2.1 AA compliant**
- **Screen reader** compatible
- **Keyboard navigation** throughout
- **High contrast** mode support
- **Reduced motion** preferences respected
- **ARIA labels** and semantic HTML

### 🔧 Technical Features
- **Vanilla JavaScript** (no dependencies)
- **ES6+ features** with fallbacks
- **Modular code structure**
- **Error handling** and logging
- **Performance monitoring**
- **Cross-browser compatibility**

## File Structure

```
mcbTest/
├── index.html          # Main HTML file
├── styles.css          # CSS styles
├── script.js           # JavaScript functionality
├── sw.js              # Service Worker
├── manifest.json      # PWA manifest
├── setting.json       # Figma MCP configuration
└── images/            # Image assets
    ├── header-logo.png
    ├── header-logo2.png
    ├── gallery-1.png
    ├── gallery-2.png
    ├── gallery-3.png
    ├── gallery-4.png
    ├── gallery-5.png
    ├── gallery-6.png
    ├── gallery-7.png
    ├── gallery-8.png
    └── gallery-9.png
```

## Installation & Setup

1. **Download/Clone** the project files
2. **Open index.html** in a web browser
3. Or **serve via HTTP server** for full PWA functionality:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js (with http-server)
   npx http-server
   
   # Using PHP
   php -S localhost:8000
   ```

## Browser Support

- **Chrome** 70+
- **Firefox** 65+
- **Safari** 12+
- **Edge** 79+
- **Mobile browsers** (iOS Safari, Chrome Mobile)

## Design Specifications

### Colors
- **Primary Blue**: #42B5E3
- **Secondary Green**: #6DC2B6
- **Footer Blue**: #303994
- **Text Black**: #262626
- **Background White**: #FFFFFF
- **Light Gray**: #FAFAFA

### Typography
- **Font Family**: Instrument Sans
- **Weights**: 400 (Regular), 700 (Bold)
- **Sizes**: 16px (footnote), 18px (paragraph), 24px (H5), 48px (H1)

### Layout
- **Max Width**: 1440px
- **Container Padding**: 60px (desktop), 40px (tablet), 20px (mobile)
- **Grid Gap**: 24px (desktop), 20px (tablet), 15px (mobile)

## Features in Detail

### Gallery Modal
- Click any image to open in full-screen modal
- Navigate with arrow keys or buttons
- Close with Escape key or click outside
- Touch/swipe support on mobile

### Category Filters
- Filter images by category
- Smooth transition animations
- Active state styling
- Keyboard accessible

### Navigation
- Sticky header with smooth scrolling
- Dropdown menus (placeholder functionality)
- Language selector with rotation
- Responsive mobile menu

### Performance Optimizations
- Images lazy loaded below the fold
- Service Worker caches resources
- Critical CSS inlined
- Preload important assets

## Customization

### Adding New Images
1. Add images to the `images/` folder
2. Update the gallery HTML in `index.html`
3. Add new image paths to `sw.js` cache list

### Modifying Colors
1. Update CSS custom properties in `styles.css`
2. Change theme color in `manifest.json`
3. Update meta theme-color in HTML

### Adding New Categories
1. Add filter buttons in HTML
2. Implement filtering logic in `script.js`
3. Add data attributes to gallery items

## Development

### Code Structure
- **HTML**: Semantic, accessible markup
- **CSS**: BEM methodology, mobile-first approach
- **JavaScript**: ES6 classes, modular design

### Key Classes
- `GalleryModal`: Handles image modal functionality
- `GalleryFilter`: Manages category filtering
- `NavigationDropdown`: Navigation interactions
- `LanguageSelector`: Language switching
- `AccessibilityEnhancer`: A11y improvements

## Testing

### Manual Testing Checklist
- [ ] All images load correctly
- [ ] Modal opens and closes properly
- [ ] Filter buttons work
- [ ] Responsive design on all screen sizes
- [ ] Keyboard navigation works
- [ ] Touch gestures work on mobile

### Accessibility Testing
- [ ] Screen reader compatibility
- [ ] Keyboard-only navigation
- [ ] Color contrast ratios
- [ ] Focus indicators visible
- [ ] Skip links functional

## Deployment

### Static Hosting
Deploy to any static hosting service:
- **Netlify**: Drag and drop folder
- **Vercel**: Connect Git repository
- **GitHub Pages**: Push to gh-pages branch
- **AWS S3**: Upload as static website

### HTTPS Required
For PWA features to work, the site must be served over HTTPS.

## Credits

- **Design**: Original Figma design
- **Images**: Downloaded via Figma Developer MCP
- **Fonts**: Google Fonts (Instrument Sans)
- **Icons**: Custom SVG icons

## License

This project is created for educational/demonstration purposes based on the provided Figma design.

## Support

For issues or questions, please refer to the code comments or create an issue in the project repository.