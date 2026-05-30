import { NextRequest, NextResponse } from 'next/server';
import { isMarkdownPreferred, rewritePath } from 'fumadocs-core/negotiation';
import {
  docsContentRoute,
  docsRoute,
  draftContentRoute,
  draftRoute,
  llmContentRoute,
  llmRoute,
} from '@/lib/shared';

const routes = [
  { route: docsRoute, content: docsContentRoute },
  { route: draftRoute, content: draftContentRoute },
  { route: llmRoute, content: llmContentRoute },
];

const suffixRewrites = routes.map(({ route, content }) =>
  rewritePath(`${route}{/*path}.md`, `${content}{/*path}/content.md`),
);

const docsRewrites = routes.map(({ route, content }) =>
  rewritePath(`${route}{/*path}`, `${content}{/*path}/content.md`),
);

export default function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  for (const { rewrite } of suffixRewrites) {
    const result = rewrite(pathname);
    if (result) {
      return NextResponse.rewrite(new URL(result, request.nextUrl));
    }
  }

  if (isMarkdownPreferred(request)) {
    for (const { rewrite } of docsRewrites) {
      const result = rewrite(pathname);
      if (result) {
        return NextResponse.rewrite(new URL(result, request.nextUrl));
      }
    }
  }

  return NextResponse.next();
}
