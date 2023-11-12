# Learn Nextjs 14

## Chapter 1 - Setup new project

- Setup Nextjs 14 with dashboard template.
- Key points from this chapter:
  - Explanation of the overall project structure.
  - Usage of Typescript.
- Improve '@/' convention for CSS file imports for better navigation.
- Fix '@/' convention for CSS file imports to allow file navigation on click.
- Confirm absolute path for TS/JS file is working fine.

## Chapter 3 - Optimizing Fonts and Images

- Justify why we need to optimize fonts and images.
- Explain how to use Google Font with nextjs.
- Explain how to use Image component with Tailwind CSS for swapping image between different screen sizes.

- Provide visual explanation for app layout and pages.
- Introduce `use client` for detecting active link.
  - Use root layout for modify html and body tag.
  - Page layout is for each page/route.

## Chapter 5 - Navigating between pages

- Explain how to use Link component and how to code splitting works.
- Nice introduction for `use client` for detecting active link.

## Chapter 6 - DB

- This chapter is about how to use @vercel/postgres to connect to Postgres DB and populate the database.
- The seed.js has been migrated to typescript and a logger has been added to the lib folder.
- Skip this chapter if already familiar with using Postgres. Consider alternatives like Prisma/Drizzle.
- Focus on `Server Components`, a [React beta feature](https://react.dev/reference/react/use-server).

## Chapter 7 - Fetching data

- Not focus on data fetching, need to refer to [nextjs documentation](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating)
- It seems the main focus is about `Server Components` which is [React beta feature](https://react.dev/reference/react/use-server).

## Chapter 8 - Static and Dynamic Rendering

- This chapter uses a unstable feature to support dynamic rendering.

```typescript
import { unstable_noStore as noStore } from "next/cache";

// Add noStore() here prevent the response from being cached.
// This is equivalent to in fetch(..., {cache: 'no-store'}).
noStore();
```

- Understand that when using Promise.all, the slowest promise determines the speed of the response.
- Learn how to use skeleton loading with Streaming in nextjs.
- Introduce new concept for route: Route Groups

## Chapter 10 - Partial Prerendering

- This is a new experimental feature in nextjs.
- Refer to blog post [here](https://vercel.com/blog/partial-prerendering-with-next-js-creating-a-new-default-rendering-model) for explanation of this feature.
- Introduce `use-debounce` library for handling debouncing for search input.
- Understand that Server action is an experimental feature in [React](https://react.dev/reference/react/use-server).

Remix has had a similar feature for some time. For comparison, refer to: [Next.js 13 vs Remix: An In-depth case study](https://prateeksurana.me/blog/nextjs-13-vs-remix-an-in-depth-case-study/)

## Chapter 11 - Search and Pagination

- This chapter is about how to implement search and pagination.
- Good to introduce `use-debounce` library for handle debouncing for search input

## Chapter 12 - Mutating Data

- Server action is experimental feature in [React](https://react.dev/reference/react/use-server)
- This chapter is about how to use server action to mutate data.

## Chapter 13 - Handling Errors

- How to handle error with try/catch and show on UI with error.tsx file.
- How to use `notFound()` to handle 404 error.

## Chapter 14 - Validation & Accessibility

- How to use experimental hook: [useFormState](https://react.dev/reference/react-dom/hooks/useFormState#useformstate) for validation.
- Introduce accessibility concept with `aria-describedby`.

## Chapter 15 - Authentication

- How to use next-auth for authentication.
- Introduce new hook for form: [useFormStatus](https://react.dev/reference/react-dom/hooks/useFormStatus).
