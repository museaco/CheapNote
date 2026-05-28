import { docs, tools } from 'collections/server';
import { loader } from 'fumadocs-core/source';
import { lucideIconsPlugin } from 'fumadocs-core/source/lucide-icons';
import { docsRoute, toolsRoute } from './shared';

// See https://fumadocs.dev/docs/headless/source-api for more info
export const source = loader({
  baseUrl: docsRoute,
  source: docs.toFumadocsSource(),
  plugins: [lucideIconsPlugin()],

});

export function getPageImage(page: (typeof source)['$inferPage']) {
  const segments = [...page.slugs, 'image.png'];

  return {
    segments,
    url: ''
  };
}

export function getPageMarkdownUrl(page: (typeof source)['$inferPage']) {
  const segments = [...page.slugs, 'content.md'];

  return {
    segments,
    url: ''
  };
}

// ================= tools docs =================

export const toolSource = loader({
  baseUrl: toolsRoute,
  source: tools.toFumadocsSource(),
  plugins: [lucideIconsPlugin()],

});

export function getToolPageImage(page: (typeof toolSource)['$inferPage']) {
  const segments = [...page.slugs, 'image.png'];

  return {
    segments,
    url: ''
  };
}

export function getToolPageMarkdownUrl(page: (typeof toolSource)['$inferPage']) {
  const segments = [...page.slugs, 'content.md'];

  return {
    segments,
    url: ''
  };
}
