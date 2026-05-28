import { createDocMetadata, createDocPage } from '@/lib/page-factory';
import { getToolPageImage, getToolPageMarkdownUrl, toolSource } from '@/lib/source';

export default createDocPage(toolSource, getToolPageMarkdownUrl);

export const generateStaticParams = () => toolSource.generateParams();

export const generateMetadata = createDocMetadata(toolSource, getToolPageImage);