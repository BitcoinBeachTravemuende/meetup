// https://vitepress.dev/guide/custom-theme
import DefaultTheme from 'vitepress/theme'
import './custom.css'
import Layout from './Layout.vue'
import TextContents from './component/TextContents.vue'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app, router, siteData }) {
    app.component('content', TextContents)
  }
}
