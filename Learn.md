```markdown
# Learn Nextjs 14

## Chapter 1 - Setup new project (Setup Nextjs 14 with dashboard template and improved CSS file import convention)

- Setup Nextjs 14 with dashboard template.
- Key points from this chapter:
  - Explanation of the overall project structure.
  - Usage of Typescript.
- The import with '@/' convention for CSS files could be improved for better navigation.
- The '@/' convention for CSS file imports does not allow for file navigation on click.

P/S: The absolute path for TS/JS file is working fine.

- Justify why we need to optimize fonts and images.
- Explain how to use Google Font with nextjs.
- Explain how to use Image component with Tailwind CSS for swapping image between different screen sizes.
```

```markdown
## Chapter 12 - Mutating Data (Server action)

- Server action is experimental feature in [React](https://react.dev/reference/react/use-server)

- This is a new experimental feature in nextjs.
- They have a nice explanation for this feature. Refer to blog post [here](https://vercel.com/blog/partial-prerendering-with-next-js-creating-a-new-default-rendering-model).

Remix has had a similar feature for some time. For comparison, refer to: [Next.js 13 vs Remix: An In-depth case study](https://prateeksurana.me/blog/nextjs-13-vs-remix-an-in-depth-case-study/)

## Chapter 11 - Search and Pagination (Part 2)

- This chapter is about how to implement search and pagination.
- Good to introduce `use-debounce` library for handle debouncing for search input

## Chapter 12 - Mutating Data (Server action)
```

- Nice to see how to use skeleton loading with Streaming in nextjs.
- Good to introduce new concept for route: Route Groups

## Chapter 10 - Partial Prerendering

- This is a new experimental feature in nextjs.
- They have a nice explanation for this feature. Refer to blog post [here](https://vercel.com/blog/partial-prerendering-with-next-js-creating-a-new-default-rendering-model).

Remix has had a similar feature for some time. For comparison, refer to: [Next.js 13 vs Remix: An In-depth case study](https://prateeksurana.me/blog/nextjs-13-vs-remix-an-in-depth-case-study/)

## Chapter 11 - Search and Pagination

```markdown
- This chapter is about how to implement search and pagination.

- Good visual explanation for app layout and pages.
- Introduce root layout vs page layout concept.
  - Use root layout for modify html and body tag.
  - Page layout is for each page/route.

## Chapter 5 - Navigating between pages (Explained usage of Link component and code splitting, introduced `use client` for detecting active link)

- Explain how to use Link component and how to code splitting works.
- Nice introduction for `use client` for detecting active link.
- Explain how to use Image component with Tailwind CSS for swapping image between different screen sizes.

## Chapter 4 - Layouts and Pages (Part 2 - Introduced root layout and page layout concepts for app layout and pages)
```

- Nice to see how to use skeleton loading with Streaming in nextjs.
- Good to introduce new concept for route: Route Groups

## Chapter 10 - Partial Prerendering (New experimental feature in Nextjs)

- This is a new experimental feature in nextjs.
- They have a nice explanation for this feature. Refer to blog post [here](https://vercel.com/blog/partial-prerendering-with-next-js-creating-a-new-default-rendering-model).

Remix has had a similar feature for some time. For comparison, refer to: [Next.js 13 vs Remix: An In-depth case study](https://prateeksurana.me/blog/nextjs-13-vs-remix-an-in-depth-case-study/)

## Chapter 11 - Search and Pagination (Implementation and Debouncing)

- Good visual explanation for app layout and pages.
- Introduce root layout vs page layout concept.
  - Use root layout for modify html and body tag.
  - Page layout is for each page/route.

## Chapter 5 - Navigating between pages (Link component and code splitting)

- Explain how to use Link component and how to code splitting works.
- Nice introduction for `use client` for detecting active link.

## Chapter 6 - DB (Explained usage of @vercel/postgres to connect to Postgres DB and populate the database, migrated seed.js to typescript and added logger to lib folder)

- This chapter is about how to use @vercel/postgres to connect to Postgres DB and populate the database.
- The seed.js has been migrated to typescript and a logger has been added to the lib folder.
```markdown
- This chapter can be skipped if already familiar with using Postgres. Alternatives like Prisma/Drizzle can be considered.

## Chapter 7 - Fetching data

- Not focus on data fetching, need to refer to [nextjs documentation](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating)
- It seems the main focus is about `Server Components` which is [React beta feature](https://react.dev/reference/react/use-server).

- This chapter uses a unstable feature to support dynamic rendering.

## Chapter 7 - Fetching data (Part 2 - Referred to nextjs documentation for data fetching, caching, and revalidating)

- Not focus on data fetching, need to refer to [nextjs documentation](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating)
- It seems the main focus is about `Server Components` which is [React beta feature](https://react.dev/reference/react/use-server).

## Chapter 8 - Static and Dynamic Rendering
```

```typescript
- This chapter uses a unstable feature to support dynamic rendering.
noStore();
```

- When use Promise.all, the slowest promise will determine the speed of the response.

```typescript
import { unstable_noStore as noStore } from "next/cache";

## Chapter 10 - Partial Prerendering (Part 1)

- This is a new experimental feature in nextjs.
- They have a nice explanation for this feature. Refer to blog post [here](https://vercel.com/blog/partial-prerendering-with-next-js-creating-a-new-default-rendering-model).

Remix has had a similar feature for some time. For comparison, refer to: [Next.js 13 vs Remix: An In-depth case study](https://prateeksurana.me/blog/nextjs-13-vs-remix-an-in-depth-case-study/)
```

## Chapter 11 - Search and Pagination

- This chapter is about how to implement search and pagination.
- Good to introduce `use-debounce` library for handle debouncing for search input

## Chapter 12 - Mutating Data (Used server action to mutate data)

- Server action is experimental feature in [React](https://react.dev/reference/react/use-server)

## Chapter 11 - Search and Pagination (Implemented search and pagination, introduced `use-debounce` library for handle debouncing for search input)

- This chapter is about how to implement search and pagination.
- Good to introduce `use-debounce` library for handle debouncing for search input

## Chapter 12 - Mutating Data

- Server action is experimental feature in [React](https://react.dev/reference/react/use-server)

- This is a new experimental feature in nextjs.
- They have a nice explanation for this feature. Refer to blog post [here](https://vercel.com/blog/partial-prerendering-with-next-js-creating-a-new-default-rendering-model).

Remix has had a similar feature for some time. For comparison, refer to: [Next.js 13 vs Remix: An In-depth case study](https://prateeksurana.me/blog/nextjs-13-vs-remix-an-in-depth-case-study/)

## Chapter 11 - Search and Pagination (Part 2)

- This chapter is about how to implement search and pagination.
- Good to introduce `use-debounce` library for handle debouncing for search input

```typescript
## Chapter 12 - Mutating Data (Server action)

- Server action is experimental feature in [React](https://react.dev/reference/react/use-server)
noStore();
```

- When use Promise.all, the slowest promise will determine the speed of the response.

## Chapter 9 - Streaming (Used skeleton loading with Streaming in nextjs, introduced new concept for route: Route Groups)

- Nice to see how to use skeleton loading with Streaming in nextjs.
- Good to introduce new concept for route: Route Groups

## Chapter 6 - DB
```

```markdown
- This chapter is about how to use @vercel/postgres to connect to Postgres DB and populate the database.
- The seed.js has been migrated to typescript and a logger has been added to the lib folder.
- This chapter can be skipped if already familiar with using Postgres. Alternatives like Prisma/Drizzle can be considered.

## Chapter 7 - Fetching data (Part 1)

- Not focus on data fetching, need to refer to [nextjs documentation](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating)
- It seems the main focus is about `Server Components` which is [React beta feature](https://react.dev/reference/react/use-server).

## Chapter 8 - Static and Dynamic Rendering (Used unstable feature to support dynamic rendering)

- This chapter uses a unstable feature to support dynamic rendering.

## Chapter 7 - Fetching data (Referred to nextjs documentation for data fetching, caching, and revalidating)

- Not focus on data fetching, need to refer to [nextjs documentation](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating)
```
- It seems the main focus is about `Server Components` which is [React beta feature](https://react.dev/reference/react/use-server).

## Chapter 8 - Static and Dynamic Rendering

- This chapter uses a unstable feature to support dynamic rendering.
noStore();
```

- When use Promise.all, the slowest promise will determine the speed of the response.

## Chapter 9 - Streaming

- Nice to see how to use skeleton loading with Streaming in nextjs.
- Good to introduce new concept for route: Route Groups

## Chapter 10 - Partial Prerendering

- This is a new experimental feature in nextjs.
- They have a nice explanation for this feature. Refer to blog post [here](https://vercel.com/blog/partial-prerendering-with-next-js-creating-a-new-default-rendering-model).

```markdown
Remix has had a similar feature for some time. For comparison, refer to: [Next.js 13 vs Remix: An In-depth case study](https://prateeksurana.me/blog/nextjs-13-vs-remix-an-in-depth-case-study/)

## Chapter 11 - Search and Pagination

- This chapter is about how to implement search and pagination.
- Good to introduce `use-debounce` library for handle debouncing for search input

## Chapter 12 - Mutating Data (Used server action to mutate data)

- Server action is experimental feature in [React](https://react.dev/reference/react/use-server)

## Chapter 11 - Search and Pagination (Implemented search and pagination, introduced `use-debounce` library for handle debouncing for search input)

- This chapter is about how to implement search and pagination.
- Good to introduce `use-debounce` library for handle debouncing for search input
```

## Chapter 12 - Mutating Data

- Server action is experimental feature in [React](https://react.dev/reference/react/use-server)
- This chapter is about how to use server action to mutate data.

## Chapter 13 - Handling Errors

- How to handle error with try/catch and show on UI with error.tsx file.
- How to use `notFound()` to handle 404 error.

## Chapter 14 - Validation & Accessibility

- How to use experimental hook: [useFormState](https://react.dev/reference/react-dom/hooks/useFormState#useformstate) for validation.
- Nice to introduce accessibility concept with `aria-describedby`.

## Chapter 15 - Authentication (Used next-auth for authentication)

- How to use next-auth for authentication.

## Chapter 14 - Validation & Accessibility (Part 1 - Used experimental hook: [useFormState](https://react.dev/reference/react-dom/hooks/useFormState#useformstate) for validation, introduced accessibility concept with `aria-describedby`)

- How to use experimental hook: [useFormState](https://react.dev/reference/react-dom/hooks/useFormState#useformstate) for validation.
- Nice to introduce accessibility concept with `aria-describedby`.

## Chapter 15 - Authentication

- How to use next-auth for authentication.
## Chapter 13 - Handling Errors (Handled error with try/catch and showed on UI with error.tsx file, used `notFound()` to handle 404 error)

- How to handle error with try/catch and show on UI with error.tsx file.
- How to use `notFound()` to handle 404 error.

## Chapter 14 - Validation & Accessibility

- How to use experimental hook: [useFormState](https://react.dev/reference/react-dom/hooks/useFormState#useformstate) for validation.
- Nice to introduce accessibility concept with `aria-describedby`.

```typescript
import { unstable_noStore as noStore } from "next/cache";
noStore();
```
- This also bring new hook for form: [useFormStatus](https://react.dev/reference/react-dom/hooks/useFormStatus)

## Chapter 16 - Metadata

- This technique is useful for SEO.
