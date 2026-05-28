import { baseShareOptions, getSharedTabs } from '@/lib/layout.shared';
import { toolSource } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';

export default  function Layout({ children,  }: LayoutProps<'/'>) {

  return (
    <DocsLayout tree={toolSource.getPageTree()} {...baseShareOptions()} tabs={getSharedTabs()}>
      {children}
    </DocsLayout>
  );
}
