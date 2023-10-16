import { DefaultTheme, LocaleSpecificConfig } from "vitepress";

export type LocaleConfig = {
  contentImpressions: string;
  footerBuiltWith: string;
};

export type ThemeConfig = LocaleSpecificConfig<DefaultTheme.Config & LocaleConfig>
