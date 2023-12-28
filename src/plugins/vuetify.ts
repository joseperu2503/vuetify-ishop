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
          primary: '#EE7214',
          secondary: '#527853',
          beige: '#F9E8D9',
          peach: '#F7B787',

          'primary50': '#fff4e1',
          'primary100': '#ffe1b5',
          'primary200': '#ffce85',
          'primary300': '#ffbb55',
          'primary400': '#ffab32',
          'primary500': '#ff9d1b',
          'primary600': '#fb9119',
          'primary700': '#f48216',
          'primary800': '#ee7214',
          'primary900': '#e45911',

          'secondary50': '#ebf4ec',
          'secondary100': '#cfe4d1',
          'secondary200': '#b2d3b6',
          'secondary300': '#95c39a',
          'secondary400': '#81b786',
          'secondary500': '#6faa72',
          'secondary600': '#659b68',
          'secondary700': '#5b895d',
          'secondary800': '#527853',
          'secondary900': '#435843',
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
