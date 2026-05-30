import { SourceMap, SourceMapName } from '@/lib/source';
import { llms } from 'fumadocs-core/source';

export const revalidate = false;

export async function GET(_req: Request, { params }: RouteContext<'/llms.mdx/[name]/[[...slug]]'>) {
  const { name } = await params;
  const { source } = SourceMap[name as SourceMapName];
  return new Response(llms(source).index());
}
