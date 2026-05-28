import { i18n } from '@/lib/i18n';
import { zhCN } from '@fumadocs/language/zh-cn';
import { uiTranslations } from 'fumadocs-ui/i18n';
import type { BaseLayoutProps, LayoutTab } from 'fumadocs-ui/layouts/shared';
import { appName, gitConfig } from './shared';

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

export const getSharedTabs: () => LayoutTab[] = () => {

  return [
    { url: `/docs`, title: '文档', description: 't.docsTabsDescription' },
    { url: `/tools`, title: '工具', description: 't.toolsTabsDescription' },
    { url: `/llm`, title: 'AI&智能体', description: '大语言模型和智能体' },
    { url: `/git`, title: 'Git', description: 'Git' },
  ];
};


