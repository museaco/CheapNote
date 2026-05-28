import LastModified from '@/components/last-modified';
import { getMDXComponents } from '@/components/mdx';
import { DocsBody, DocsDescription, DocsPage, DocsTitle, MarkdownCopyButton, } from 'fumadocs-ui/layouts/docs/page';
import { createRelativeLink } from 'fumadocs-ui/mdx';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type DocSource = { getPage(...args: any[]): any; $inferPage: any };

export function createDocPage<TSource extends DocSource>(
  source: TSource,
  getMarkdownUrl: (page: TSource['$inferPage']) => { url: string },
) {
  return async function Page(props: { params: Promise<{ slug?: string[] }> }) {
    const { slug, } = await props.params;
    const page = source.getPage(slug,);

    if (!page) notFound();

    const { lastModified, body: MDX } = page.data;
    const markdownUrl = getMarkdownUrl(page).url;

    return (
      <DocsPage
        translate="yes"
        toc={page.data.toc} full={page.data.full}
        tableOfContent={{
          style: 'clerk',
        }}
      >
        <DocsTitle>{page.data.title}</DocsTitle>
        <DocsDescription className="mb-0">{page.data.description}</DocsDescription>
        <div className="flex flex-row gap-2 items-center border-b pb-6">
          <MarkdownCopyButton markdownUrl={markdownUrl} />
        </div>
        <DocsBody>
          <MDX
            components={getMDXComponents({
              a: createRelativeLink(source as any, page),
            })}
          />
        </DocsBody>
        <LastModified time={lastModified} />
      </DocsPage>
    );
  };
}

export function createDocMetadata<TSource extends DocSource>(
  source: TSource,
  getImage: (page: TSource['$inferPage']) => { url: string },
) {
  return async function generateMetadata(props: {
    params: Promise<{ lang: string; slug?: string[] }>;
  }): Promise<Metadata> {
    const { slug, lang } = await props.params;
    const page = source.getPage(slug, lang);
    if (!page) notFound();

    return {
      title: page.data.title,
      description: page.data.description,
      openGraph: {
        images: getImage(page).url,
      },
    };
  };
}
