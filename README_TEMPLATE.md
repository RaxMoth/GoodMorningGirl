# React Web Template

A clean, modern, and reusable React template built with TypeScript, Vite, Tailwind CSS, and React Router. Perfect for quickly starting new web projects.

## Features

- ⚡ **Vite** - Lightning-fast build tool
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 🔀 **React Router** - Client-side routing
- 📘 **TypeScript** - Type-safe development
- ✨ **Framer Motion** - Smooth animations
- 🎯 **ESLint** - Code quality
- 📱 **Responsive Design** - Mobile-friendly layouts

## Project Structure

```
src/
├── App.tsx              # Main app component with routes
├── LandingPage.tsx      # Home page (/)
├── PageTwo.tsx          # Second page (/page-two)
├── PageThree.tsx        # Third page (/page-three)
├── PageFour.tsx         # Fourth page (/page-four)
├── PageFive.tsx         # Fifth page (/page-five)
├── components/
│   ├── Card.tsx         # Reusable card component
│   └── FeatureComponent.tsx  # Example animated component
├── main.tsx             # Entry point
├── App.css              # App styles
└── index.css            # Global styles
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone or pull this template
2. Install dependencies:
    ```bash
    npm install
    ```

### Development

Start the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build

Build for production:

```bash
npm run build
```

### Preview

Preview the production build:

```bash
npm run preview
```

### Lint

Check code quality:

```bash
npm run lint
```

## Customization Guide

### Adding New Pages

1. Create a new file in `src/` (e.g., `PageSix.tsx`)
2. Create your component following the existing pattern
3. Import it in `App.tsx`
4. Add a route in the Routes section

Example:

```tsx
import PageSix from "./PageSix";

// Inside Routes
<Route path="/page-six" element={<PageSix />} />;
```

### Using the Card Component

The `Card` component is a reusable container for displaying content:

```tsx
import Card from "./components/Card";

<Card
    title="My Title"
    description="My description"
    image="https://example.com/image.jpg"
/>;
```

### Styling with Tailwind CSS

Customize colors, spacing, and other styles in `tailwind.config.js`:

```js
export default {
    theme: {
        extend: {
            colors: {
                primary: "#your-color",
            },
        },
    },
};
```

### Adding Animations

Use Framer Motion for animations (already installed):

```tsx
import { motion } from "framer-motion";

<motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
>
    Content
</motion.div>;
```

## Dependencies

- **react** - UI library
- **react-dom** - React rendering
- **react-router-dom** - Routing
- **framer-motion** - Animation library
- **tailwindcss** - CSS framework
- **vite** - Build tool
- **typescript** - Type safety

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Tips for Success

- Keep components small and focused
- Use TypeScript interfaces for props
- Follow the existing naming conventions (PageX.tsx)
- Leverage Tailwind classes for quick styling
- Test on multiple devices before deploying

## Deployment

This template is ready to deploy to any static hosting service:

- Vercel (includes `vercel.json`)
- Netlify
- GitHub Pages
- AWS S3
- Any other static host

## Next Steps

1. Update `package.json` with your project name and description
2. Customize the pages with your content
3. Modify colors and branding in Tailwind config
4. Add your own components
5. Deploy to your hosting platform

## License

MIT

---

Happy coding! Feel free to customize this template to fit your needs.
