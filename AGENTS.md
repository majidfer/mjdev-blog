# Repository Guidelines

## Project Structure & Module Organization
This is an Astro + React blog site. Route files live in `src/pages` (`index.astro`, `blog/[slug].astro`, `contact-us/index.astro`), shared layouts are in `src/layouts`, and reusable UI lives in `src/components` with subfolders for `blocks/`, `layout/`, `astro/`, and `ui/`. Blog content is stored as MDX in `src/content/blog`. Static files belong in `public/`, while shared SVG assets and icons live in `src/assets/svg`.

## Build, Test, and Development Commands
Use `pnpm` from the repository root.
- `pnpm run dev`: start the local Astro dev server.
- `pnpm build`: create the production build.
- `pnpm run preview`: preview the built site locally.
- `pnpm run lint`: run ESLint across the codebase.
- `pnpm run lint:fix`: auto-fix lint issues where possible.
- `pnpm run format`: format Astro, JS, TS, JSX, CSS files with Prettier.
- `pnpm run check-types`: run `tsc --noEmit` for type checking.

## Coding Style & Naming Conventions
Formatting is enforced by Prettier and EditorConfig: 2-space indentation, LF line endings, single quotes, semicolons off, and `printWidth: 100`. ESLint is configured for Astro, React, TypeScript, and hooks rules. Prefer clear, descriptive names for components and files; keep component files in `PascalCase` and utility files in `camelCase`. Follow the existing folder pattern for feature blocks, e.g. `src/components/blocks/hero-section/hero-section.tsx`.

## Testing & Validation
There is no dedicated automated test suite in `package.json`. Before opening a PR, validate changes with `pnpm run lint`, `pnpm run check-types`, and `pnpm build`. For content or layout changes, also verify the relevant page in `pnpm run preview`.

## Commit & Pull Request Guidelines
Recent commits are short, imperative, and often scoped by intent, such as `Refine footer` or `chore: sync site metadata and prune legacy posts`. Keep commit messages concise and action-oriented. PRs should include a brief summary, linked issue if applicable, and screenshots or screen recordings for UI changes. Mention any validation you ran, especially lint, type check, and build output.

## Configuration Tips
Copy `.env.example` to `.env` for local secrets and keep credentials out of git. Update site-wide metadata in `src/consts.ts` rather than scattering values across pages.
