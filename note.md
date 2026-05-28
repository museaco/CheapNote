# How to Add a New Document Collection

Example: adding a `/blog` collection alongside `/docs` and `/tools`.

## Step 1: Create content directory

```
content/blog/
├── index.mdx
├── some-post.mdx
└── meta.json
```

## Step 2: Define collection in `source.config.ts`

```ts
// source.config.ts
import { defineConfig, defineDocs } from 'fumadocs-mdx/config';
import { metaSchema, pageSchema } from 'fumadocs-core/source/schema';

export const docs = defineDocs({ ... });   // existing
export const tools = defineDocs({ ... });  // existing

export const blog = defineDocs({
  dir: 'content/blog',
  docs: {
    schema: pageSchema,
    postprocess: {
      includeProcessedMarkdown: true,
    },
  },
  meta: {
    schema: metaSchema,
  },
});

export default defineConfig({ ... });
```

## Step 3: Add route constants in `src/lib/shared.ts`

```ts
// src/lib/shared.ts
export const blogRoute = '/blog';
export const blogImageRoute = '/og/blog';
export const blogContentRoute = '/llms.mdx/blog';
```

## Step 4: Add source loader in `src/lib/source.ts`

```ts
// src/lib/source.ts
import { docs, tools, blog } from 'collections/server';

export const blogSource = loader({
  baseUrl: blogRoute,
  source: blog.toFumadocsSource(),
  plugins: [lucideIconsPlugin()],
});

export function getBlogPageImage(page: (typeof blogSource)['$inferPage']) {
  const segments = [...page.slugs, 'image.png'];
  return {
    segments,
    url: `${blogImageRoute}/${segments.join('/')}`,
  };
}

export function getBlogPageMarkdownUrl(page: (typeof blogSource)['$inferPage']) {
  const segments = [...page.slugs, 'content.md'];
  return {
    segments,
    url: `${blogContentRoute}/${segments.join('/')}`,
  };
}
```

## Step 5: Create route directory

```
src/app/blog/
├── layout.tsx
└── [[...slug]]/
    └── page.tsx
```

## Step 6: Create `src/app/blog/layout.tsx`

```tsx
import { blogSource } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions, sharedTabs } from './layout.shared';

export default function Layout({ children }: LayoutProps<'/blog'>) {
  return (
    <DocsLayout tree={blogSource.getPageTree()} {...baseOptions()} tabs={sharedTabs}>
      {children}
    </DocsLayout>
  );
}
```

## Step 7: Create `src/app/blog/[[...slug]]/page.tsx`

```tsx
import { createDocMetadata, createDocPage } from '@/lib/page-factory';
import { blogSource, getBlogPageImage, getBlogPageMarkdownUrl } from '@/lib/source';

export default createDocPage(blogSource, getBlogPageImage, getBlogPageMarkdownUrl);

export const generateStaticParams = () => blogSource.generateParams();

export const generateMetadata = createDocMetadata(blogSource, getBlogPageImage);
```

## Step 8: Add tab to `src/lib/layout.shared.tsx`

```tsx
export const sharedTabs: LayoutTab[] = [
  { url: '/docs', title: 'Docs', description: 'Documentation' },
  { url: '/tools', title: 'Tools', description: 'Tools & Utilities' },
  { url: '/blog', title: 'Blog', description: 'Blog Posts' },  // <-- add this
];
```

## Step 9: Restart dev server

The `.source/server.ts` is auto-generated when the dev server starts. Run `npm run dev` (or `pnpm dev`) and the new collection will be available at `/blog`.

# React Doctor: cheapreminder
Score: 90/100
34 issues found

WARN unused-file (脳19)
Unused file 鈥?not reachable from any entry point
- src/components/files.tsx
- src/components/image-zoom.tsx
- src/components/last-modified.tsx
- +16 more files
  WARN require-pnpm-hardening (脳2)
  pnpm-workspace.yaml is missing `minimumReleaseAge` 鈥?newly published versions can ship malware that gets caught and unpublished within hours
- pnpm-workspace.yaml
  ERROR only-export-components (脳2)
  Fast refresh only works when a file only exports components. Move non-component exports to a separate file.
- file:///D:/Users/Sherlock/WebstormProjects/Fumadocs/cheapreminder/src/components/ui/button.tsx:66
- file:///D:/Users/Sherlock/WebstormProjects/Fumadocs/cheapreminder/src/components/ui/tabs.tsx:89
  WARN no-multi-comp (脳2)
  Declare only one React component per file. Found extra component: File.
- file:///D:/Users/Sherlock/WebstormProjects/Fumadocs/cheapreminder/src/components/files.tsx:39
  WARN nextjs-missing-metadata (脳2)
  Page without metadata or generateMetadata export 鈥?hurts SEO
- file:///D:/Users/Sherlock/WebstormProjects/Fumadocs/cheapreminder/src/app/page.tsx:1
- file:///D:/Users/Sherlock/WebstormProjects/Fumadocs/cheapreminder/src/app/%5Blang%5D/%28home%29/page.tsx:1
  WARN no-initialize-state (脳1)
  Avoid initializing state in an effect. Instead, initialize "mounted"'s `useState()` with "true". For SSR hydration, prefer `useSyncExternalStore()`.
- file:///D:/Users/Sherlock/WebstormProjects/Fumadocs/cheapreminder/src/components/ui/collapsible.tsx:18
  WARN rendering-hydration-no-flicker (脳1)
  useEffect(setState, []) on mount causes a flash 鈥?consider useSyncExternalStore or suppressHydrationWarning
- file:///D:/Users/Sherlock/WebstormProjects/Fumadocs/cheapreminder/src/components/ui/collapsible.tsx:17
  WARN jsx-pascal-case (脳1)
  JSX component `MDX` must be in PascalCase.
- file:///D:/Users/Sherlock/WebstormProjects/Fumadocs/cheapreminder/src/lib/page-factory.tsx:40
  WARN nextjs-no-img-element (脳1)
  Use next/image instead of <img> 鈥?provides automatic optimization, lazy loading, and responsive srcset
- file:///D:/Users/Sherlock/WebstormProjects/Fumadocs/cheapreminder/src/components/product-cards/product-card-01.tsx:24
  WARN no-react19-deprecated-apis (脳1)
  useContext is superseded by `use()` on React 19+ 鈥?`use()` reads context conditionally inside hooks, branches, and loops; switch to `import { use } from 'react'`
- file:///D:/Users/Sherlock/WebstormProjects/Fumadocs/cheapreminder/src/components/tabs.tsx:4

+2 more rules

Full trace: C:\Users\Sherlock\AppData\Local\Temp\react-doctor-116144bb-54ff-4cfa-b6e5-24b553298731

## How to fix
1. Run `npx react-doctor@latest --verbose` to see full details
2. Fix errors first, then warnings. Start with high-count rules.
3. Read the code before acting. Treat findings as hypotheses, not commands.
4. Fix root causes, not symptoms. Don't suppress rules without evidence.
5. Run `npx react-doctor@latest --verbose --diff` after changes to verify.
6. Split unrelated fixes into separate PRs.
