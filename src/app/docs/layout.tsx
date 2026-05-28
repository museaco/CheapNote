import { baseShareOptions, getSharedTabs } from '@/lib/layout.shared';
import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';

export default async function Layout({ children }: LayoutProps<'/'>) {

  return (
    <DocsLayout tree={source.getPageTree()} {...baseShareOptions()} tabs={getSharedTabs()}>
      {children}
    </DocsLayout>
  );
}
