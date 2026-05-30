import { docsContentRoute, docsRoute, draftContentRoute, draftRoute, llmContentRoute, llmRoute } from '@/lib/shared';
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
    url: `${docsContentRoute}/${segments.join('/')}`,
  };
}

// ================= tools docs =================

const draftSource = loader({
  baseUrl: draftRoute,
  source: draft.toFumadocsSource(),
  plugins: [lucideIconsPlugin()],

});

function getDraftPageImage(page: (typeof draftSource)['$inferPage']) {
  const segments = [...page.slugs, 'image.png'];

  return {
    segments,
    url: ''
  };
}

function getDraftPageMarkdownUrl(page: (typeof draftSource)['$inferPage']) {
  const segments = [...page.slugs, 'content.md'];

  return {
    segments,
    url: `${draftContentRoute}/${segments.join('/')}`,
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
    url: `${llmContentRoute}/${segments.join('/')}`,
  };
}

export const SourceMap = {
  llm: {
    source: LLMSource,
    getPageImage: getLLMPageImage,
    getPageMarkdownUrl: getLLMPageMarkdownUrl,
    async getLLMText(page: (typeof LLMSource)['$inferPage']) {
      const processed = await page.data.getText('processed');

      return `# ${page.data.title} (${page.url})

${processed}`;
    }
  },
  docs: {
    source: source,
    getPageImage: getPageImage,
    getPageMarkdownUrl: getPageMarkdownUrl,
    async getLLMText(page: (typeof source)['$inferPage']) {
      const processed = await page.data.getText('processed');

      return `# ${page.data.title} (${page.url})

${processed}`;
    }
  },
  draft: {
    source: draftSource,
    getPageImage: getDraftPageImage,
    getPageMarkdownUrl: getDraftPageMarkdownUrl,
    async getLLMText(page: (typeof draftSource)['$inferPage']) {
      const processed = await page.data.getText('processed');

      return `# ${page.data.title} (${page.url})

${processed}`;
    }
  },
};

export type SourceMapName = keyof typeof SourceMap;
