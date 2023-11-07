# Learn Nextjs 14

## Chapter 1 - Setup new project

- Setup Nextjs 14 with dashboard template.
- Explains overall project structure.
- Uses Typescript.

## Chapter 2 - CSS styling

- Explains how to use Tailwind CSS or CSS Modules.
- Introduces `clsx` to combine multiple class names.
- Discusses import conventions for CSS files.

## Chapter 3 - Optimizing Fonts and Images

- Justify why we need to optimize fonts and images.
- Explain how to use Google Font with nextjs.
- Explain how to use Image component with Tailwind CSS for swapping image between different screen sizes.

## Chapter 4 - Layouts and Pages

- Good visual explanation for app layout and pages.
- Introduce root layout vs page layout concept.
  - Use root layout for modify html and body tag.
  - Page layout is for each page/route.

## Chapter 8 - Static and Dynamic Rendering

- Discusses the use of an unstable feature to support dynamic rendering.

```typescript
import { unstable_noStore as noStore } from "next/cache";

// Add noStore() here prevent the response from being cached.
// This is equivalent to in fetch(..., {cache: 'no-store'}).
noStore();
```

- Explains the impact of Promise.all on the speed of the response.
- Introduces `use client` for detecting active link.

## Chapter 6 - DB

- Discusses how to use @vercel/postgres to connect to Postgres DB and populate the database.
- Migrates the seed.js to typescript and adds logger to lib folder.

## Chapter 7 - Fetching data

- Refers to [nextjs documentation](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating) for data fetching.
- Focuses on `Server Components` which is [React beta feature](https://react.dev/reference/react/use-server).

## Chapter 8 - Static and Dynamic Rendering

- This chapter uses a unstable feature to support dynamic rendering.

```typescript
import { unstable_noStore as noStore } from "next/cache";

## Chapter 3 - Optimizing Fonts and Images

- Discusses the need to optimize fonts and images.
- Explains how to use Google Font with nextjs.
- Explains how to use Image component with Tailwind CSS for swapping image between different screen sizes.

## Chapter 4 - Layouts and Pages

- Provides visual explanation for app layout and pages.
- Introduces root layout vs page layout concept.
  - Uses root layout for modifying html and body tag.
  - Page layout is for each page/route.

## Chapter 5 - Navigating between pages
noStore();
```

- When use Promise.all, the slowest promise will determine the speed of the response.
