import { docsRoute, draftRoute, llmRoute } from '@/lib/shared';
import { docs, draft, llm } from 'collections/server';
import { loader } from 'fumadocs-core/source';
import { lucideIconsPlugin } from 'fumadocs-core/source/lucide-icons';

// See https://fumadocs.dev/docs/headless/source-api for more info
const source = loader({
  baseUrl: docsRoute,
  source: docs.toFumadocsSource(),
  plugins: [lucideIconsPlugin()],

});

function getPageImage(page: (typeof source)['$inferPage']) {
  const segments = [...page.slugs, 'image.png'];

  return {
    segments,
    url: ''
  };
}

function getPageMarkdownUrl(page: (typeof source)['$inferPage']) {
  const segments = [...page.slugs, 'content.md'];

  return {
    segments,
    url: ''
  };
}

// ================= tools docs =================

const draftSource = loader({
  baseUrl: draftRoute,
  source: draft.toFumadocsSource(),
  plugins: [lucideIconsPlugin()],

});

function getToolPageImage(page: (typeof draftSource)['$inferPage']) {
  const segments = [...page.slugs, 'image.png'];

  return {
    segments,
    url: ''
  };
}

function getToolPageMarkdownUrl(page: (typeof draftSource)['$inferPage']) {
  const segments = [...page.slugs, 'content.md'];

  return {
    segments,
    url: ''
  };
}

// ================= llm docs =================

const LLMSource = loader({
  baseUrl: llmRoute,
  source: llm.toFumadocsSource(),
  plugins: [lucideIconsPlugin()],
});

function getLLMPageImage(page: (typeof LLMSource)['$inferPage']) {
  const segments = [...page.slugs, 'image.png'];

  return {
    segments,
    url: ''
  };
}

function getLLMPageMarkdownUrl(page: (typeof LLMSource)['$inferPage']) {
  const segments = [...page.slugs, 'content.md'];

  return {
    segments,
    url: ''
  };
}

export const SourceMap = {
  llm: {
    source: LLMSource,
    getPageImage: getLLMPageImage,
    getPageMarkdownUrl: getLLMPageMarkdownUrl,
  },
  docs: {
    source: source,
    getPageImage: getPageImage,
    getPageMarkdownUrl: getPageMarkdownUrl,
  },
  draft: {
    source: draftSource,
    getPageImage: getToolPageImage,
    getPageMarkdownUrl: getToolPageMarkdownUrl,
  },
};

export type SourceMapName = keyof typeof SourceMap;
