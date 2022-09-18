import { defineConfig } from 'windicss/helpers'
import type { Plugin } from 'windicss/types/interfaces'

// colors
import colors from 'windicss/colors'

// themes
import defaultTheme from 'windicss/defaultTheme'

// plugins
import TypographyPlugin from 'windicss/plugin/typography'
import AspectRatioPlugin from 'windicss/plugin/aspect-ratio'
import FiltersPlugin from 'windicss/plugin/filters'

const MyTheme = {
  colors: {
    green: {
      DEFAULT: '#1a67ba',
      '50': '#1a67ba',
      '100': '#1a67ba',
      '200': '#1a67ba',
      '300': '#1a67ba',
      '400': '#1a67ba',
      '500': '#1a67ba',
      '600': '#1a67ba',
      '700': '#1a67ba',
      '800': '#1a67ba',
      '900': '#000000',
    },
    blue: {
      DEFAULT: '#0096FF',
      '50': '#B8E2FF',
      '100': '#A3D9FF',
      '200': '#7AC8FF',
      '300': '#52B8FF',
      '400': '#29A7FF',
      '500': '#0096FF',
      '600': '#0075C7',
      '700': '#00548F',
      '800': '#003357',
      '900': '#00121F',
    },
  },
}

export default defineConfig({
  darkMode: 'class',
  attributify: false,
  extract: {
    include: [
      './components/**/*.{vue,js}',
      './composables/**/*.{js,ts}',
      './layouts/**/*.vue',
      './pages/**/*.vue',
      './plugins/**/*.{js,ts}',
      './utils/**/*.{js,ts}',
      './app.vue',
    ],
  },
  theme: {
    extend: {
      maxWidth: {
        '8xl': '90rem',
      },
      colors: {
        primary: MyTheme.colors.green,
        // if want to change primary color to green
        // primary: MyTheme.colors.blue,
        green: MyTheme.colors.green,
        blue: MyTheme.colors.blue,
        slate: colors.slate,
      },
      fontFamily: {
        sans: ['Nunito', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  shortcuts: {
    'light-img': 'block dark:hidden',
    'dark-img': 'hidden dark:block',
  },
  plugins: [
    // filters plugin require for navbar blur
    FiltersPlugin as Plugin,
    TypographyPlugin as Plugin,
    AspectRatioPlugin as Plugin,
  ] as Plugin[],
})
