import { baseShareOptions, getSharedTabs } from '@/lib/layout.shared';
import { LLMSource } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';

export default  function Layout({ children,  }: LayoutProps<'/'>) {

  return (
    <DocsLayout tree={LLMSource.getPageTree()} {...baseShareOptions()} tabs={getSharedTabs()}>
      {children}
    </DocsLayout>
  );
}
