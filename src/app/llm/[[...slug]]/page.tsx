import { createDocMetadata, createDocPage } from '@/lib/page-factory';
import { getLLMPageMarkdownUrl, getLLMPageImage, LLMSource } from '@/lib/source';

export default createDocPage(LLMSource, getLLMPageMarkdownUrl);

export const generateStaticParams = () => LLMSource.generateParams();

export const generateMetadata = createDocMetadata(LLMSource, getLLMPageImage);
