// @ts-check
import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'

export default defineConfig({
  site: 'https://potluck-docs.potluck-web.workers.dev',
  integrations: [
    starlight({
      title: 'Potluck guide',
      description: 'How to split expenses and plan get-togethers with Potluck.',
    }),
  ],
})
