import './global.css';
import 'katex/dist/katex.css';
import SearchDialog from '@/components/search';
import { translations } from '@/lib/layout.shared';
import { i18nProvider } from 'fumadocs-ui/i18n';
import { RootProvider } from 'fumadocs-ui/provider/next';
import { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://acme.com'),
  alternates: {
    canonical: '/',
    languages: {
      'zh-CN': 'zh-CN',
    },
  },
  openGraph: {
    images: '/og-image.png',
  },
};
export default async function Layout({ children, }: {
  children: React.ReactNode;
}) {

  return (
    <html lang="zh-CN" suppressHydrationWarning>
    <body className="flex flex-col min-h-screen">
    <RootProvider
      i18n={i18nProvider(translations, 'cn')}
      search={{
        SearchDialog,
      }}
    >
      {children}
    </RootProvider>
    </body>
    </html>
  );
}
