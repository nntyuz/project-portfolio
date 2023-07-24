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
      'accent-sand': '#b7ab98',
      'accent-red': '#E73C37'
    },
  },
  transformers: [transformerDirectives()],
})
