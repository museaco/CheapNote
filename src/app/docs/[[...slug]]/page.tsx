import { createDocMetadata, createDocPage } from '@/lib/page-factory';
import { getPageImage, getPageMarkdownUrl, source } from '@/lib/source';

export default createDocPage(source, getPageMarkdownUrl);

export const generateStaticParams = () => source.generateParams();

export const generateMetadata = createDocMetadata(source, getPageImage);