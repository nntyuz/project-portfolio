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
      xxs: '460px',
      xs: '640px',
      sm: '768px',
      lg: '960px',
      xl: '1024px',
      xxl: '1280px',
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
