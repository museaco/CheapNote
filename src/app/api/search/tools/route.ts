import { toolSource } from '@/lib/source';
import { createTokenizer } from '@orama/tokenizers/mandarin';

import { createFromSource } from 'fumadocs-core/search/server';

export const { GET } = createFromSource(toolSource, {
  components: {
    tokenizer: createTokenizer(),
  },
  search: {
    threshold: 0,
    tolerance: 0,
  },

  buildIndex(page) {
    return {
      id: page.url,
      url: page.url,

      title: page.data.title,
      description: page.data.description,

      structuredData: page.data.structuredData,

      // 文档分组
      tag: page.slugs[0],
    };
  },
});
