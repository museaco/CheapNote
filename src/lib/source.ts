import { docsRoute, gitRoute, llmRoute, toolsRoute } from '@/lib/shared';
import { docs, llm, tools ,git} from 'collections/server';
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

const toolSource = loader({
  baseUrl: toolsRoute,
  source: tools.toFumadocsSource(),
  plugins: [lucideIconsPlugin()],

});

function getToolPageImage(page: (typeof toolSource)['$inferPage']) {
  const segments = [...page.slugs, 'image.png'];

  return {
    segments,
    url: ''
  };
}

function getToolPageMarkdownUrl(page: (typeof toolSource)['$inferPage']) {
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

function getLLMPageImage(page: (typeof toolSource)['$inferPage']) {
  const segments = [...page.slugs, 'image.png'];

  return {
    segments,
    url: ''
  };
}

function getLLMPageMarkdownUrl(page: (typeof toolSource)['$inferPage']) {
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
  tools: {
    source: toolSource,
    getPageImage: getToolPageImage,
    getPageMarkdownUrl: getToolPageMarkdownUrl,
  },
  git:{
    source: loader({
      baseUrl: gitRoute,
      source: git.toFumadocsSource(),
      plugins: [lucideIconsPlugin()],
    }),
    getPageImage(page: (typeof toolSource)['$inferPage']) {
      const segments = [...page.slugs, 'image.png'];

      return {
        segments,
        url: ''
      };
    },
    getPageMarkdownUrl(page: (typeof toolSource)['$inferPage']) {
      const segments = [...page.slugs, 'content.md'];

      return {
        segments,
        url: ''
      };
    }
  }
};

export type SourceMapName = keyof typeof SourceMap;
