# Justine Arriaga's portfolio

Personal portfolio built with React, TypeScript, PrimeReact, and Vite.

## Development

Use Node.js 20.19+ or 22.12+ and install the dependencies:

```sh
npm ci
npm run dev
```

## Checks and production build

```sh
npm run typecheck  # Check application and tooling types without emitting files
npm run lint       # Lint TypeScript and React components
npm run build      # Check types, then build the site into dist/
npm run preview    # Serve the production build locally
```

React components use `.tsx`; utilities, shared models, and tooling configurations use `.ts`. All portfolio content, including profile details, projects, and skills, lives in `src/json/profile.json`. Public images, icons, and CVs live in `public/assets/`.

The compiler uses strict checks, including unchecked indexed access and exact optional properties. Declaration checking is skipped because PrimeReact 10's declarations conflict with React 19's types; application code is still checked. TypeScript is pinned to the 6.0 release series supported by the ESLint parser.
