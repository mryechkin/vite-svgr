# Vite + SVGR

This is a sample project showing how to use [SVGR](https://react-svgr.com/) with [Vite](https://vitejs.dev/) to import local SVG's as React components:

```jsx
import { ReactComponent as HeartFilled } from './assets/heart-filled.svg';

// ...

<HeartFilled />;
```

It is enabled via the [`@svgr/rollup`](https://react-svgr.com/docs/rollup/) Rollup plugin,
and is specified in `vite.config.js`:

```jsx
// vite.config.js
import svgr from '@svgr/rollup';

// ...

export default defineConfig({
  plugins: [
    svgr({
      // SVGR options
    }),
  ],
});
```

**NOTE:** Since Vite looks to be using `@rollup/plugin-url` by default, that forces SVGR to export the
URL string as the `default` export, which means that the React component itself is a named export,
and you **must** import it as such:

```jsx
import { ReactComponent as HeartFilled } from './assets/heart-filled.svg';
```
