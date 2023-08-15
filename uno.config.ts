import { defineConfig } from 'unocss'
import { presetUno, presetIcons } from 'unocss'
import transformerDirectives from '@unocss/transformer-directives'
import { FileSystemIconLoader } from '@iconify/utils/lib/loader/node-loaders'

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({
      collections: {
        custom: FileSystemIconLoader('./assets/icons'),
      },
      extraProperties: {
        color: '',
      },
    }),
  ],
  theme: {
    breakpoints: {
      xxl: '1280px',
      xl: '1024px',
      lg: '960px',
      sm: '768px',
      xs: '640px',
      xxs: '460px',
    },
    colors: {
      'accent-dark': '#262626',
      'accent-light': '#fff',
      'accent-blue': '#001BEB',
      'accent-red': '#FF695E',
      'accent-yellow': '#F9A826',
      'accent-purple': '#6C63FF',
      'accent-sand': '#b7ab98',
      'accent-emerald': '#50c878',
      'accent-pink': '#ffc0cb',
    },
    fontFamily: {
      mak: ['"Mak"', 'Arial', 'Helvetica', 'sans-serif'],
      'neue-machina': ['"Neue Machina"', 'Arial', 'Helvetica', 'sans-serif'],
    },
  },
  transformers: [transformerDirectives()],
})
