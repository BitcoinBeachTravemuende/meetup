// https://vitepress.dev/guide/custom-theme
import DefaultTheme from 'vitepress/theme'
import './custom.css'
import Layout from './Layout.vue'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp() {}
}
