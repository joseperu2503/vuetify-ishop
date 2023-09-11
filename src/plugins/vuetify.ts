/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
// Composables
import { createVuetify } from 'vuetify'
import { mdi } from 'vuetify/iconsets/mdi'
import { fa } from 'vuetify/iconsets/fa'
import { md } from 'vuetify/iconsets/md'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    themes: {
      light: {
        colors: {
          primary: '#7cbb23',
          secondary: '#5CBBF6',
        },
      },
    },
  },
  icons: {
    sets: {
      fa,
      mdi,
      md,
    },
  },
})
