import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'

export type LocaleConfig = {
  contentImpressions: string
  footerBuiltWith: string
}

export type ThemeConfig = LocaleSpecificConfig<DefaultTheme.Config & LocaleConfig>

export type TextContent = {
  title: string
  text: string
}
