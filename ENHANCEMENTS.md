# Portfolio Website Enhancements

This React version of your portfolio includes several enhancements that make it more suitable for a resume website:

## New Features

### 1. **Experience Timeline** (`Experience.jsx`)
   - Professional work experience display with timeline visualization
   - Shows company, location, period, and responsibilities
   - Technology tags for each position
   - Responsive design that adapts on mobile

### 2. **Enhanced Skills Section** (`Skills.jsx`)
   - Animated progress bars showing skill levels
   - Organized by categories (Frontend, Backend, Tools & Others)
   - Visual representation of proficiency
   - Smooth animations on scroll

### 3. **Dark/Light Theme Toggle** (`ThemeToggle.jsx`)
   - Toggle between dark and light themes
   - Theme preference saved in localStorage
   - Smooth transitions between themes
   - Better accessibility

### 4. **Improved Animations**
   - Using Framer Motion for smooth, professional animations
   - Scroll-triggered animations
   - Hover effects on interactive elements
   - Staggered animations for lists

### 5. **Enhanced Contact Form** (`Contact.jsx`)
   - Functional form with validation
   - Success/error states
   - Better UX with loading states
   - Responsive layout

### 6. **Active Navigation Highlighting**
   - Navbar automatically highlights current section
   - Smooth scroll behavior
   - Mobile-friendly hamburger menu

### 7. **Better Project Cards**
   - Improved hover effects
   - Better image handling with fallbacks
   - More interactive overlays
   - Enhanced visual feedback

## Technical Improvements

- **Modern React Architecture**: Using React 18 with hooks
- **Component-Based**: Modular, reusable components
- **Performance**: Optimized with Vite build tool
- **Responsive Design**: Mobile-first approach
- **Accessibility**: Proper ARIA labels and semantic HTML
- **Code Quality**: Clean, maintainable code structure

## Customization Guide

### Update Your Information

1. **Personal Info**: Edit components in `src/components/`
2. **Experience**: Update `experiences` array in `Experience.jsx`
3. **Skills**: Modify `skillCategories` in `Skills.jsx`
4. **Projects**: Update `projects` array in `Projects.jsx`
5. **Contact**: Change email and links in `Contact.jsx`

### Styling

- Global styles: `src/index.css`
- Component styles: Each component has its own CSS file
- Colors: Modify CSS variables in `src/index.css`

## Getting Started

1. Install dependencies: `npm install`
2. Run development server: `npm run dev`
3. Build for production: `npm run build`

See README.md for more details.
