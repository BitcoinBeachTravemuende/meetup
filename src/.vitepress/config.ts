import { defineConfig } from "vitepress";
import type {DefaultTheme, LocaleSpecificConfig } from "vitepress";

type LocaleConfig = {
  contentImpressions: string;
  footerBuiltWith: string;
};

const deConfig: LocaleSpecificConfig<DefaultTheme.Config & LocaleConfig> = {
  themeConfig: {
    contentImpressions: "Eindrücke",
    footerBuiltWith: "Gebaut mit",
    langMenuLabel: "Sprache",
  }
}

const enConfig: LocaleSpecificConfig<DefaultTheme.Config & LocaleConfig> = {
  themeConfig: {
    contentImpressions: "Impressions",
    footerBuiltWith: "Built with",
    langMenuLabel: "Language",
  }
}


// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "de",
  appearance: true,
  locales: {
    root: {
      lang: "de",
      label: "Deutsch",
      title: "Bitcoin Beach Travemünde Meetup",
      description: "Meetup für Bitcoiners von Bitcoiners",
      ...deConfig
    },
    en: {
      lang: "en",
      label: "English",
      title: "Bitcoin Beach Travemünde (Germany) Meetup",
      description: "Meetup for Bitcoiners from Bitcoiners",
      
      ...enConfig
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    socialLinks: [
      {
        icon: {
          svg: '<svg fill="#000000" width="800px" height="800px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12c0-6.627-5.373-12-12-12zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/></svg>',
          // svg: '<svg width="800px" height="800px" viewBox="0 0 240 240" id="svg2" xmlns="http://www.w3.org/2000/svg"><style>.st0{fill:url(#path2995-1-0_1_)}.st1{fill:#c8daea}.st2{fill:#a9c9dd}.st3{fill:url(#path2991_1_)}</style><linearGradient id="path2995-1-0_1_" gradientUnits="userSpaceOnUse" x1="-683.305" y1="534.845" x2="-693.305" y2="511.512" gradientTransform="matrix(6 0 0 -6 4255 3247)"><stop offset="0" stop-color="#37aee2"/><stop offset="1" stop-color="#1e96c8"/></linearGradient><path id="path2995-1-0" class="st0" d="M240 120c0 66.3-53.7 120-120 120S0 186.3 0 120 53.7 0 120 0s120 53.7 120 120z"/><path id="path2993" class="st1" d="M98 175c-3.9 0-3.2-1.5-4.6-5.2L82 132.2 152.8 88l8.3 2.2-6.9 18.8L98 175z"/><path id="path2989" class="st2" d="M98 175c3 0 4.3-1.4 6-3 2.6-2.5 36-35 36-35l-20.5-5-19 12-2.5 30v1z"/><linearGradient id="path2991_1_" gradientUnits="userSpaceOnUse" x1="128.991" y1="118.245" x2="153.991" y2="78.245" gradientTransform="matrix(1 0 0 -1 0 242)"><stop offset="0" stop-color="#eff7fc"/><stop offset="1" stop-color="#ffffff"/></linearGradient><path id="path2991" class="st3" d="M100 144.4l48.4 35.7c5.5 3 9.5 1.5 10.9-5.1L179 82.2c2-8.1-3.1-11.7-8.4-9.3L55 117.5c-7.9 3.2-7.8 7.6-1.4 9.5l29.7 9.3L152 93c3.2-2 6.2-.9 3.8 1.3L100 144.4z"/></svg>',
        },
        link: "https://t.me/BitcoinBeachMeetupTravemuende",
      },
      {
        icon: "github",
        link: "https://github.com/BitcoinBeachTravemuende/meetup",
      },
      {
        icon: "twitter",
        link: "https://twitter.com/BTravemuende",
      },
    ]
  },
});
