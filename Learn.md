# Learn Nextjs 14

## Chapter 1 - Setup new project

- Setup Nextjs 14 with dashboard template.
- A few points I like about this chapter:
  - Explain overall project structure.
  - Use Typescript.

## Chapter 2 - CSS styling

- Explain how to use Tailwind CSS or CSS Modules.
- Good to introduce `clsx` to combine multiple class names.
- I don't like the import with '@/' convention for CSS file as it's not working nice. It doesn't jump to file on click.

P/S: The absolute path for TS/JS file is working fine.

## Chapter 3 - Optimizing Fonts and Images

- Justify why we need to optimize fonts and images.
- Explain how to use Google Font with nextjs.
- Explain how to use Image component with Tailwind CSS for swapping image between different screen sizes.

## Chapter 4 - Layouts and Pages

- Good visual explanation for app layout and pages.
- Introduce root layout vs page layout concept.
  - Use root layout for modify html and body tag.
  - Page layout is for each page/route.

## Chapter 5 - Navigating between pages

- Explain how to use Link component and how to code splitting works.
- Nice introduction for `use client` for detecting active link.

## Chapter 6 - DB

- This chapter is about how to use @vercel/postgres to connect to Postgres DB and populate the database.
- I have migrated the seed.js to typescript and also add logger to lib folder.
- Skip this chapter if already know how to use Postgres. Or use something like Prisma/Drizzle instead.

## Chapter 7 - Fetching data

- Not focus on data fetching, need to refer to [nextjs documentation](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating)
- It seems the main focus is about `Server Components` which is [React beta feature](https://react.dev/reference/react/use-server).
