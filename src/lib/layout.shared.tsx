import { i18n } from '@/lib/i18n';
import { zhCN } from '@fumadocs/language/zh-cn';
import { uiTranslations } from 'fumadocs-ui/i18n';
import type { BaseLayoutProps, LayoutTab } from 'fumadocs-ui/layouts/shared';
import { Bot, Container, Signature } from 'lucide-react';
import { appName, docsRoute, draftRoute, gitConfig, llmRoute } from './shared';

export function baseShareOptions(): BaseLayoutProps {
  return {
    nav: {
      title: appName,
    },
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
  };
}

export const translations = i18n
  .translations()
  .extend(uiTranslations())
  .preset('cn', zhCN());

export const sharedTabs: LayoutTab[] = [
  { url: docsRoute, title: '文档', description: '', icon: <Container size={18}/> },
  { url: draftRoute, title: '草稿', description: '', icon: <Signature size={18} /> },
  { url: llmRoute, title: 'AI&智能体', description: '', icon: <Bot size={18} /> }
];

