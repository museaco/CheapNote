import LastModified from '@/components/last-modified';
import { getMDXComponents } from '@/components/mdx';
import { SourceMap, SourceMapName } from '@/lib/source';
import { DocsBody, DocsDescription, DocsPage, DocsTitle, MarkdownCopyButton, } from 'fumadocs-ui/layouts/docs/page';
import { createRelativeLink } from 'fumadocs-ui/mdx';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

export default async function Page(props: PageProps<'/[name]/[[...slug]]'>) {
  const params = await props.params;

  const { source, getPageMarkdownUrl } = SourceMap[params.name as SourceMapName] ?? {};
  const page = source?.getPage(params.slug);
  if (!page) notFound();

  const { lastModified, body: MDX } = page.data;
  const markdownUrl = getPageMarkdownUrl(page).url;

  return (
    <DocsPage
      toc={page.data.toc} full={page.data.full} tableOfContent={{
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
            // this allows you to link to other pages with relative file paths
            a: createRelativeLink(source, page),
          })}
        />
      </DocsBody>
      <LastModified time={lastModified} />
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return [
    // ...SourceMap.llm.source.generateParams(),
    // ...SourceMap.tools.source.generateParams(),
    // ...SourceMap.docs.source.generateParams(),
  ];
}

export async function generateMetadata(props: PageProps<'/[name]/[[...slug]]'>): Promise<Metadata> {
  const params = await props.params;

  const { source, getPageImage } = SourceMap[params.name as SourceMapName] ?? {};

  const page = source?.getPage(params.slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
    openGraph: {
      images: getPageImage(page).url,
    },
  };
}
