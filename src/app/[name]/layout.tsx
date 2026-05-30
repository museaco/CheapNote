import { baseShareOptions, sharedTabs } from '@/lib/layout.shared';
import { SourceMap, SourceMapName } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { notFound } from 'next/navigation';

export default async function Layout({ children, params }: LayoutProps<'/[name]'>) {

  const { name } = await params;

  console.log({name})

  const tree = SourceMap[name as SourceMapName]?.source?.getPageTree();
  if (!tree) notFound();
  return (
    <DocsLayout tree={tree} {...baseShareOptions()} tabs={sharedTabs}>
      {children}
    </DocsLayout>
  );
}
