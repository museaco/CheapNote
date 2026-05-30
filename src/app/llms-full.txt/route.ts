import {  SourceMap, SourceMapName } from '@/lib/source';
import type { NextRequest } from 'next/server'

export const revalidate = false;

export async function GET(_req: NextRequest, ctx: RouteContext<'/llms.mdx/[name]/[[...slug]]'>) {

  const params = await ctx.params;

  const { getLLMText,source } = SourceMap[params.name as SourceMapName];

  const scan = source.getPages().map(getLLMText);
  const scanned = await Promise.all(scan);

  return new Response(scanned.join('\n\n'));
}
