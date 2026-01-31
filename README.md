# Sparkle - Lightweight Browser Game

A minimalist browser-based game built with **React**, **TypeScript**, and **Vite** for maximum performance and minimal bundle size.

## Quick Start

### Prerequisites
- Node.js 16+ (comes with npm)

### Installation & Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The game will be available at `http://localhost:5173`

### Production Build

```bash
# Create optimized production build
npm run build

# Preview production build locally
npm run preview
```

## Project Structure

```
sparkle/
├── src/
│   ├── components/         # React game components
│   ├── hooks/              # Custom React hooks
│   ├── utils/              # Game logic & utilities
│   ├── App.tsx             # Main game container
│   ├── App.css             # Root styles
│   └── main.tsx            # Entry point
├── public/                 # Static assets
├── vite.config.ts          # Vite configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies & scripts
```

## Technology Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Fast build tool
- **CSS Modules** - Component-scoped styling

## Key Features

✨ **Lightweight** - Minimal dependencies, optimized for fast loading
⚡ **Fast Development** - Instant HMR (Hot Module Replacement)
🎮 **Game-Ready** - Built-in game loop patterns
📱 **Responsive** - Works on desktop and mobile browsers

## Development Workflow

### Adding a Game Component

1. Create in `src/components/GameComponent.tsx`
2. Add component styles in `src/components/GameComponent.module.css`
3. Import and use in `src/App.tsx`

### Game Loop Pattern

Use `useEffect` with `requestAnimationFrame` for smooth 60 FPS gameplay:

```typescript
import { useEffect, useState } from 'react';

export function GameCanvas() {
  const [gameState, setGameState] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let animationId: number;
    
    const gameLoop = () => {
      // Update game logic
      setGameState(prev => ({
        x: prev.x + 1,
        y: prev.y + 1
      }));
      animationId = requestAnimationFrame(gameLoop);
    };

    animationId = requestAnimationFrame(gameLoop);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return <div style={{ left: `${gameState.x}px` }}>Game Element</div>;
}
```

## Bundle Size

The production build is optimized for minimal size:
- Tree-shaking removes unused code
- CSS minification
- JavaScript minification and splitting

Check bundle size:
```bash
npm run build  # See output for dist/ file sizes
```

## Debugging

### Browser DevTools
- **Console**: Check for errors and logs
- **Performance**: Monitor frame rates and memory
- **React DevTools**: Inspect component state and props

### Vite HMR
Changes automatically reload in the browser during development

## Deployment

The `dist/` folder contains the production build ready for deployment:

- **Vercel**: Connect GitHub repo, auto-deploys `dist/`
- **Netlify**: Drop `dist/` folder or connect GitHub
- **GitHub Pages**: Configure to serve from `dist/`

## Scripts Reference

| Script | Purpose |
|--------|---------|
| `npm run dev` | Start dev server with HMR |
| `npm run build` | Create production build |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint (if configured) |

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
