import { defineConfig } from "vitepress";
import { ThemeConfig } from "../types";

const deConfig: ThemeConfig = {
  themeConfig: {
    contentImpressions: "Eindrücke",
    footerBuiltWith: "Gebaut mit",
    langMenuLabel: "Sprache",
  }
}

const enConfig: ThemeConfig = {
  themeConfig: {
    contentImpressions: "Impressions",
    footerBuiltWith: "Built with",
    langMenuLabel: "Language",
  }
}


// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/meetup/",
  lang: "de",
  appearance: true,
  head: [
    [ 'link', { rel: 'icon', href: '/meetup/favicon.ico' } ],
    [ 'link', { rel: 'apple-touch-icon-precomposed', sizes: "144x144", href: '/meetup/apple-touch-icon-144x144.png' } ],
    [ 'link', { rel: 'apple-touch-icon-precomposed', sizes: "152x152", href: '/meetup/apple-touch-icon-152x152.png' } ],
    [ 'link', { rel: 'apple-touch-icon-precomposed', sizes: "16x16", href: '/meetup/favicon-16x16.png' } ],
    [ 'link', { rel: 'apple-touch-icon-precomposed', sizes: "32x32", href: '/meetup/favicon-32x32.png' } ],
    [ 'meta', { name: 'msapplication-TileColor', content: '#FFFFFF' } ],
    [ 'meta', { name: 'msapplication-TileImage', content: '/meetup/mstile-144x144.png' } ],
    [ 'meta', { name: 'application-name', content: 'Bitcoin Beach Travemünde Meetup' } ],
    [ 'meta', { property: 'og:site', content: 'website' } ],
    [ 'meta', { name: 'twitter:card', content: 'summary_large_image' } ],
    [ 'meta', { name: 'twitter:creator', content: '@BTravemuende' } ],
  ],
  locales: {
    root: {
      lang: "de",
      label: "Deutsch",
      title: "Bitcoin Beach Travemünde Meetup",
      description: "Meetup für Bitcoiner in Lübeck-Travemünde",
      ...deConfig
    },
    en: {
      lang: "en",
      label: "English",
      title: "Bitcoin Beach Travemünde Meetup",
      description: "Meetup for Bitcoiners in Lübeck-Travemünde (Germany)",    
      ...enConfig
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    socialLinks: [
      {
        // nostr
        // icon friendly borrowed from https://github.com/simple-icons/simple-icons/pull/9433/files
        icon: {
          svg: '<svg role="img" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><title>Nostr</title><path d="M500 18.3C234 18.3 18.3 234 18.3 500S234 981.7 500 981.7 981.7 766 981.7 500 766 18.3 500 18.3zm242 397.8c-13.1 13.8-28.2 25.2-44.8 34.5-6.9 3.9-10.1 9.2-10.2 17.3-.1 15.7-2.5 31.2-9 45.7-6 13.4-15.1 23.5-29.3 28.7-20 7.3-40.6 12.2-61.4 16.6-4.2.9-8.3 1.9-12.5 2.4-14.8 1.9-26.3 9.5-35.7 20.7-12.1 14.5-23.4 29.7-33.7 45.6-.9 1.4-2.4 2.6-2 4.7 2 .6 3.7-.4 5.5-.9 29.2-8.8 58.4-17.7 87.5-26.6 6.8-2.1 13.6-4.4 20.9-4 7.4.5 13.7 3.1 17.9 9.1 9 12.8 17.6 25.8 25.7 39.2 1.3 2.2 2.1 4.5 2.1 7.1-.1 4.7-2.7 7.2-7.3 6.7-3.3-.4-6.4-1.5-8.9-3.8-5-4.6-10.8-6.2-17.5-6.4-10.3-.3-14.1-3.3-17.5-12.9-2.4-6.6-4.8-8-11.9-5.9-15.9 4.8-31.7 9.7-47.6 14.6-12.7 4-25.4 8.1-38.1 11.9-6.5 2-12.5 5-18.5 8.1-2.6 1.3-5.2 2.7-7.9 3.7-12 4.3-23-3-23.8-15.8-.4-7.5 1.5-14.6 4.6-21.3 5.7-12.2 12.3-24.1 19.4-35.5 3.9-6.2 7.8-12.4 11.6-18.7.7-1.1 1.7-2.2 1-4.7-6.6 2-12.5 4.7-18.5 7.1-9.2 3.8-17.6 8.6-25.2 15-9.9 8.3-20.3 16-30.4 24.1-4.1 3.3-7.4 6.9-9.1 12.3-2.4 7.7-7.5 13.6-15 16.7-8.4 3.5-14.4 9.5-19.6 16.6l-68.7 93.9c-9.8 13.4-19.9 26.6-31.2 38.8-4.2 4.5-7.7 9.6-10 15.5-.9 2.3-2.2 4.5-3.5 6.7-1.8 3-4.6 3.9-8 3.5-3.3-.4-4.3-2.9-5-5.7-2.3-10-.6-19.6 3.1-28.9 1.1-2.7 2.4-5.3 3.8-7.8 2.6-4.8 3.1-9.8 1.9-15.1-.7-3-1.3-6-1.6-9.1-.6-7.4 2.5-12.2 9.6-14.6 2.9-1 6-1.6 9-1.9 9.7-1 16.9-5.6 22.4-13.6 15.8-22.9 31.8-45.6 47.7-68.4 2.3-3.3 4.6-6.7 7-9.9 4.1-5.7 7.1-11.8 8.8-18.7 2.4-9.3 7.2-17.3 15.9-21.8 9.2-4.7 17.1-11.2 24.9-17.8 11.9-10.1 23.8-20.3 34.6-31.6 1.2-1.3 2.5-2.5 3.5-3.8 3.2-4 2.7-6.7-1.9-9.3-2.7-1.5-5.6-2.5-8.6-3.4-9.8-2.8-19.7-5.6-29.5-8.6-14.3-4.4-27.9-10.2-40.2-18.8-7.7-5.4-16.4-6.2-25.5-5.7-16.5.9-31.2 6.5-44.7 15.9-5 3.5-10.4 5.9-16.7 5.7-2.6-.1-5-.4-7.3-1.6-10.8-5.9-21.6-12-31.7-19.2-11.9-8.5-16.4-19.5-12.7-33.7 5.7-22.6 18.2-39.2 40.9-47.3 15.4-5.5 31.3-8 47.5-9.4 20.2-1.8 40.4-2.4 60.5-5.4 20.1-3 38.6-10.2 56.3-20.2 33-18.5 68.1-30.9 106-34.6 22.9-2.3 45.4-1.4 67.3 6.7 17.4 6.5 35.1 12 52.4 18.5 14.2 5.3 28.7 7.3 43.7 6.4 12.6-.8 23-5.8 31.8-14.7 1.5-1.5 2.5-3.4 3.6-5.3 5.4-9.6 8.1-20.1 8.9-30.9.8-11.8-3.8-21.7-11.8-30.3-9.7-10.3-20.6-19.1-31.3-28.3-14.2-12.2-24.5-26.7-27.7-45.5-2-11.7-.7-23.1 5-33.7 4.8-9 12.1-14 22.8-14.2 9.1-.2 17.1 2.3 24.1 8.1 1 .9 2.2 1.5 3.2 2.5 7.8 7.6 17 12.5 27.7 14.7 3.4.7 6.6 2.2 9.2 4.7 3.8 3.7 3.2 6.8-1.7 8.7-5.7 2.2-11.7 1.8-17.7 1.7-10-.1-20-.3-29.9 2.2-11 2.9-12.7 15.4-8.1 21.8.9 1.2 1.7 2.6 2.8 3.7 4 3.9 7.9 8 12.1 11.6 7.9 6.8 16.2 13.1 23.9 20.2 12.9 11.8 20.1 26.8 21.9 44.1 3.6 31.8-8 58.4-29.6 81.3z"/></svg>'
        },
        link: "https://snort.social/p/npub1ftluznzkjgjm9gwxurg0nxyjlxdh2yvl0rhfmey4er3h6ap2jqyqh8areq",
      },
      {
        // SimpleX
        icon: {
          svg: `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
          <svg
             width="34"
             height="34"
             viewBox="0 0 34 34"
             fill="none"
             xmlns="http://www.w3.org/2000/svg"
             xmlns:svg="http://www.w3.org/2000/svg">
            <title>SimpleX</title>
            <g
               clip-path="url(#clip0_14_10)"
               id="g2">
              <path
                 fill-rule="evenodd"
                 clip-rule="evenodd"
                 d="M 3.02972,8.59396 8.62219,14.186 14.3703,8.43848 17.1668,11.2346 11.4182,16.982 17.0112,22.5742 14.1371,25.448 8.5441,19.8557 2.79651,25.6035 0,22.8074 5.74813,17.0597 0.155656,11.4678 Z"
                 fill="#023789"
                 id="path1"
                 style="fill:#666" />
              <path
                 fill-rule="evenodd"
                 clip-rule="evenodd"
                 d="m 14.0922,25.5 2.8512,-2.8514 -0.0011,-8e-4 5.7041,-5.7022 -5.5952,-5.5937 6e-4,-5e-4 L 14.2542,8.55418 8.65961,2.95973 11.5114,0.108337 17.106,5.70288 22.8095,0 25.607,2.79722 19.903,8.5 l 5.5951,5.5943 5.7041,-5.70261 2.7975,2.79721 -5.704,5.7025 5.5957,5.5947 -2.8518,2.8514 -5.5957,-5.5947 -5.7035,5.7026 5.5957,5.5949 -2.8518,2.8514 L 16.8887,28.2968 11.1862,34 8.38867,31.2028 Z"
                 fill="url(#paint0_linear_14_10)"
                 id="path2"
                 style="fill:#808080" />
            </g>
            <defs
               id="defs3">
              <clipPath
                 id="clip0_14_10">
                <rect
                   width="34"
                   height="34"
                   fill="#ffffff"
                   id="rect3"
                   x="0"
                   y="0" />
              </clipPath>
            </defs>
          </svg>`,
        },
        link: "https://simplex.chat/contact#/?v=1-4&smp=smp%3A%2F%2Fhejn2gVIqNU6xjtGM3OwQeuk8ZEbDXVJXAlnSBJBWUA%3D%40smp16.simplex.im%2FSY7cRr2JeRskr-Oi-bScqyt5QoCWId2Y%23%2F%3Fv%3D1-2%26dh%3DMCowBQYDK2VuAyEAjYjJ8pkCsBeom93ScqgktQ8mf7sZ5nQ1fkErrVGRnHw%253D%26srv%3Dp3ktngodzi6qrf7w64mmde3syuzrv57y55hxabqcq3l5p6oi7yzze6qd.onion&data=%7B%22type%22%3A%22group%22%2C%22groupLinkId%22%3A%22KFej-ujeVAb7UXBsU6JeWg%3D%3D%22%7D",
      },
      {
        // Telegram
        icon: {
          svg: '<svg fill="#000000" width="800px" height="800px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Telegram</title><path d="m12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12c0-6.627-5.373-12-12-12zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/></svg>',
        },
        link: "https://t.me/BitcoinBeachMeetupTravemuende",
      },
      {
        icon: "github",
        link: "https://github.com/BitcoinBeachTravemuende/meetup",
      },
      {
        // 21 logo grabbed from https://github.com/BitcoinBeachTravemuende/media/blob/main/logos/21quad%2Blogo%2Btext_inkscape.svg
        icon: {
          svg: `<svg
          viewBox="0 0 46.645123 51.273293"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:svg="http://www.w3.org/2000/svg">
          <title>Einundzwanzig</title>
         <g
            style="display:inline"
            transform="translate(-10.132335,-16.308756)">
           <g
              id="g9460"
              transform="matrix(0.03988057,0,0,0.03988057,10.124763,16.302193)">
             <g
                transform="translate(664.88608,1117.481)"
                id="g9456">
               <path
                  d="M 165.81833,104.54021 C 154.57541,149.63552 108.90138,177.07992 63.800805,165.83437 18.718645,154.59146 -8.7257575,108.91479 2.5224229,63.822112 13.760081,18.721539 59.434112,-8.7254945 104.52153,2.5174248 149.61948,13.760344 177.06125,59.442267 165.81833,104.54021 Z"
                  id="Path"
                  fill="#f7931a" />
               <path
                  d="M 121.27017,72.184593 C 122.94582,60.983762 114.41762,54.96246 102.75644,50.945629 l 3.78271,-15.172943 -9.235813,-2.301721 -3.682754,14.773102 C 91.192597,47.639043 88.698847,47.068216 86.22088,46.50265 L 89.929939,31.632219 80.699381,29.330498 76.914037,44.49818 c -2.009731,-0.457713 -3.982635,-0.910166 -5.897666,-1.386293 l 0.01052,-0.04735 -12.737065,-3.18032 -2.456922,9.864517 c 0,0 6.852551,1.570431 6.707871,1.667761 3.740625,0.933841 4.416674,3.409178 4.30356,5.371559 -10.364319,41.56513 0,0 -10.364319,41.56513 -0.457714,1.136393 -1.617781,2.840976 -4.232536,2.193866 0.09207,0.13416 -6.713133,-1.67565 -6.713133,-1.67565 l -4.585027,10.57213 12.018928,2.99619 c 2.235957,0.5603 4.427195,1.14691 6.584236,1.69932 l -3.822172,15.34656 9.225297,2.30172 3.785344,-15.18346 c 2.520056,0.68394 4.966456,1.31527 7.360246,1.90977 l -3.772192,15.11244 9.235819,2.30172 3.822172,-15.31762 c 15.749032,2.9804 27.591712,1.77824 32.576582,-12.46612 4.01683,-11.469149 -0.19992,-18.084952 -8.48611,-22.399034 6.03445,-1.391555 10.58002,-5.361037 11.7927,-13.560423 z m -21.10218,29.590917 c -2.854131,11.46915 -22.164911,5.26897 -28.425591,3.71432 l 5.071677,-20.331424 c 6.260681,1.562539 26.336944,4.656052 23.353914,16.617104 z m 2.85677,-29.756641 c -2.60424,10.432713 -18.676823,5.132179 -23.890549,3.832693 l 4.59818,-18.440071 c 5.213726,1.299486 22.004449,3.724842 19.292369,14.607378 z"
                  fill="#ffffff"
                  id="path9454" />
             </g>
             <path
                d="M 203.13768,300.39904 V 231.36553 H 79.068373 V 183.98158 H 179.72062 v -69.0335 H 79.068373 V 69.606545 H 203.13768 V 0.5730392 L 9.63886,0.9815215 V 300.39904 Z m 105.17133,0 V 0.164557 H 238.8795 V 300.39904 Z m 110.51207,0 V 125.56862 l 98.59812,174.83042 h 75.18107 V 0.5730392 H 523.17076 V 175.81194 L 424.98346,1.3900038 H 349.39157 V 300.39904 Z M 130.01074,628.45476 c 15.61137,-0.27232 30.33261,-3.4721 44.16374,-9.59934 13.83113,-6.12723 25.88201,-14.36496 36.15265,-24.71317 10.27063,-10.34822 18.3502,-22.46653 24.2387,-36.35493 5.8885,-13.8884 8.69581,-28.59376 8.42192,-44.11608 V 328.22028 h -69.42951 v 185.85944 c 0,6.26339 -1.09553,12.11831 -3.2866,17.56474 -2.19107,5.44643 -5.34073,10.21205 -9.44899,14.29688 -4.10825,4.08482 -8.90122,7.35268 -14.37889,9.80357 -5.47768,2.45089 -11.22923,3.67634 -17.25467,3.67634 -12.32477,0 -23.00623,-4.22098 -32.044394,-12.66295 -9.038161,-8.98661 -13.557242,-19.47099 -13.557242,-31.45314 V 328.22028 H 14.157941 v 187.49337 c 0.273884,15.52232 3.355075,30.09153 9.243574,43.7076 5.888499,13.61608 14.310423,25.87055 25.26577,36.76341 10.681463,10.34822 22.869287,18.31362 36.563471,23.89621 13.694184,5.58259 28.210024,8.37389 43.547504,8.37389 z m 223.8999,0 V 453.62434 l 98.59813,174.83042 h 75.18107 v -299.826 h -69.42951 v 175.2389 l -98.1873,-174.42194 h -75.5919 v 299.00904 z m 271.9665,0 c 20.54127,-1.08929 39.57619,-5.65067 57.10475,-13.68416 17.52855,-8.03348 32.79757,-18.7221 45.80704,-32.06586 13.00948,-13.34375 23.21164,-28.798 30.6065,-46.36274 7.39486,-17.56473 11.09229,-36.423 11.09229,-56.57479 0,-20.42412 -3.7659,-39.62279 -11.2977,-57.59601 -7.5318,-17.97322 -17.80244,-33.76786 -30.81191,-47.38394 -13.00948,-13.61608 -28.34696,-24.6451 -46.01246,-33.08707 -17.6655,-8.44196 -36.495,-13.20759 -56.48851,-14.29688 v -0.40848 h -69.42951 v 301.45993 z m 0,-69.44199 V 396.43682 c 10.68146,1.08929 20.54127,4.01674 29.57944,8.78237 9.03816,4.76563 16.98078,10.89286 23.82788,18.3817 6.84709,7.48884 12.18782,16.06697 16.02219,25.73439 3.83437,9.66741 5.75156,19.81139 5.75156,30.43193 0,10.34821 -1.91719,20.15179 -5.75156,29.41072 -3.83437,9.25893 -9.10663,17.3605 -15.81678,24.3047 -6.71015,6.9442 -14.65278,12.66295 -23.82788,17.15625 -9.1751,4.49331 -19.10339,7.2846 -29.78485,8.37389 z M 240.93363,956.51048 V 887.47697 H 116.4535 L 242.57693,654.64207 16.622894,654.23359 v 69.44199 H 126.31331 L 0.189873,956.51048 Z m 179.11992,0 34.50935,-150.32148 39.85007,150.32148 h 68.60787 L 652.16997,654.64207 H 579.45385 L 530.56562,820.89436 486.19646,654.64207 H 417.99943 L 379.79265,821.71133 323.92038,654.64207 h -73.12694 l 100.24143,301.86841 z m 293.74025,0 12.32477,-36.35492 h 94.90069 l 11.91394,36.35492 h 73.12694 l -97.36565,-299.826 h -65.73208 l -102.70638,299.826 z M 798.83468,851.12205 H 749.94645 L 775.0068,778.4122 Z M 996.03093,956.51048 V 781.68006 l 98.59817,174.83042 h 75.181 v -299.826 h -69.4295 v 175.2389 l -98.1873,-174.42193 h -75.59188 v 299.00903 z m -755.0973,328.05572 v -69.0335 H 116.4535 L 242.57693,982.69779 16.622894,982.28931 v 69.44199 H 126.31331 L 0.189873,1284.5662 Z m 112.15536,0 V 984.33172 h -69.42951 v 300.23448 z m 168.84929,0.4085 c 7.94263,0 15.95373,-0.6127 24.0333,-1.8382 8.07956,-1.2254 15.95372,-3.1998 23.62246,-5.923 v 7.3527 h 69.84034 V 1116.68 H 509.20269 v 69.0335 h 60.39135 v 15.1138 c -7.94262,5.7188 -16.56996,9.8036 -25.882,12.2545 -9.31205,2.4509 -18.69257,3.3359 -28.14155,2.6551 -9.44899,-0.6808 -18.62409,-2.9955 -27.52531,-6.9442 -8.90122,-3.9486 -16.91232,-9.4631 -24.0333,-16.5435 -7.94262,-7.8973 -13.96806,-16.8839 -18.07632,-26.9598 -4.10825,-10.0759 -6.16238,-20.288 -6.16238,-30.6362 0,-10.3482 2.05413,-20.5603 6.16238,-30.6362 4.10826,-10.0759 10.1337,-19.0625 18.07632,-26.9598 7.94263,-7.8973 16.98079,-13.8203 27.11449,-17.769 10.13369,-3.9486 20.40433,-5.923 30.81191,-5.923 10.40758,0 20.67822,1.9744 30.81192,5.923 10.13369,3.9487 19.17185,9.8717 27.11448,17.769 l 49.29906,-49.0179 c -14.78972,-14.7053 -31.49662,-25.7344 -50.12071,-33.08704 -18.62409,-7.35268 -37.65901,-11.02902 -57.10475,-11.02902 -19.44574,0 -38.48065,3.67634 -57.10474,11.02902 -18.62409,7.35264 -35.331,18.38174 -50.12072,33.08704 -14.78972,14.7054 -25.81353,31.317 -33.07145,49.8349 -7.25792,18.5178 -10.88688,37.4442 -10.88688,56.779 0,19.3348 3.62896,38.1931 10.88688,56.5748 7.25792,18.3817 18.28173,34.9252 33.07145,49.6306 14.78972,14.7054 31.49663,25.7344 50.12072,33.0871 18.62409,7.3526 37.659,11.029 57.10474,11.029 z"
                id="path9458" />
           </g>
         </g>
       </svg>`
        },
        link: "https://portal.einundzwanzig.space/de/meetup/bitcoin-beach-luebeck-travemuende",
      },
    ]
  },
});
