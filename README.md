# Portfolio Website - React Version

A modern, responsive portfolio website built with React, featuring enhanced resume-focused components and interactions.

## Features

- ✨ **Modern React Architecture** - Built with React 18 and Vite
- 🎨 **Dark/Light Theme Toggle** - Switch between themes with persistent storage
- 📱 **Fully Responsive** - Works seamlessly on all devices
- 🎭 **Smooth Animations** - Powered by Framer Motion
- 💼 **Experience Timeline** - Professional work experience display
- 📊 **Skills Visualization** - Animated skill bars with progress indicators
- 🚀 **Enhanced Projects** - Interactive project cards with hover effects
- 📧 **Contact Form** - Functional contact form with validation
- 🎯 **Active Navigation** - Highlights current section while scrolling

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── BackgroundAnimation.jsx
│   │   ├── Contact.jsx
│   │   ├── Experience.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   └── ThemeToggle.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
│   ├── profile.JPEG
│   ├── Project1.png
│   ├── Project2.png
│   └── favicon.ico
├── package.json
├── vite.config.js
└── index.html
```

## Customization

### Update Personal Information

1. **Hero Section**: Edit `src/components/Hero.jsx`
2. **About Section**: Edit `src/components/About.jsx`
3. **Experience**: Update the `experiences` array in `src/components/Experience.jsx`
4. **Skills**: Modify the `skillCategories` array in `src/components/Skills.jsx`
5. **Projects**: Update the `projects` array in `src/components/Projects.jsx`
6. **Contact**: Edit contact information in `src/components/Contact.jsx`

### Styling

- Global styles: `src/index.css`
- Component-specific styles: Each component has its own `.css` file
- Theme colors: Modify CSS variables in `src/index.css`

## Technologies Used

- **React** - UI library
- **Vite** - Build tool
- **Framer Motion** - Animation library
- **React Icons** - Icon library

## License

This project is open source and available under the MIT License.

## Contact

Adam Decker
- LinkedIn: [adamdeckerzer0](https://www.linkedin.com/in/adamdeckerzer0/)
- GitHub: [Numbuh](https://github.com/Numbuh)
