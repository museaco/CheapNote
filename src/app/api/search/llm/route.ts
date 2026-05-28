import { LLMSource } from '@/lib/source';
import { createTokenizer } from '@orama/tokenizers/mandarin';

import { createFromSource } from 'fumadocs-core/search/server';

 const { GET : LLMGet } = createFromSource(LLMSource, {
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


export async function GET(request: Request,ctx:any) {
  const params = await ctx.params
  console.log(params)

  return  LLMGet(request)

}

