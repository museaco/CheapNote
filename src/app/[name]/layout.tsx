import { baseShareOptions, getSharedTabs } from '@/lib/layout.shared';
import { SourceMap, SourceMapName } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { notFound } from 'next/navigation';

export default async function Layout({ children, params }: LayoutProps<'/[name]'>) {

  const { name } = await params;

  const tree = SourceMap[name as SourceMapName]?.source?.getPageTree();
  if(!tree) notFound();
  return (
    <DocsLayout tree={tree} {...baseShareOptions()} tabs={getSharedTabs()}>
      {children}
    </DocsLayout>
  );
}
