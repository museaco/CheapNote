import { baseShareOptions } from '@/lib/layout.shared';
import { HomeLayout } from 'fumadocs-ui/layouts/home';

export default async function Layout({ children }: LayoutProps<'/'>) {
  return <HomeLayout {...baseShareOptions()}>{children}</HomeLayout>;
}
