// @ts-check
import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'
import starlightLinksValidator from 'starlight-links-validator'

export default defineConfig({
  site: 'https://potluck-docs.potluck-web.workers.dev',
  trailingSlash: 'always',
  integrations: [
    starlight({
      title: 'Potluck guide',
      description: 'How to split expenses and plan get-togethers with Potluck.',
      favicon: '/favicon.svg',
      lastUpdated: false,
      social: [
        { icon: 'github', label: 'Potluck on GitHub', href: 'https://github.com/Fermulate/potluck' },
      ],
      editLink: {
        baseUrl: 'https://github.com/Fermulate/potluck-docs/edit/main/',
      },
      components: {
        SiteTitle: './src/components/SiteTitle.astro',
        Hero: './src/components/Hero.astro',
        Footer: './src/components/Footer.astro',
      },
      customCss: ['./src/styles/fonts.css', './src/styles/theme.css', './src/styles/content.css'],
      head: [
        { tag: 'meta', attrs: { name: 'theme-color', content: '#1d1a16' } },
      ],
      sidebar: [
        { label: 'Start here', items: ['getting-started'] },
        {
          label: 'Groups',
          items: [
            { label: 'Groups', slug: 'groups' },
            'groups/invites',
            'groups/roles',
            'groups/settings',
            'friends',
          ],
        },
        {
          label: 'Expenses',
          items: [
            'expenses',
            'expenses/splits',
            'expenses/currencies',
            'expenses/recurring',
            'expenses/receipts',
            'expenses/editing',
          ],
        },
        { label: 'Balances', items: ['balances', 'balances/settle-up'] },
        {
          label: 'Plans',
          items: ['plans', 'plans/availability', 'plans/best-time', 'plans/lock-in', 'plans/timeline'],
        },
        { label: 'You', items: ['notifications', 'account', 'privacy-and-security'] },
        { label: 'Help', items: ['faq', 'troubleshooting'] },
      ],
      plugins: [starlightLinksValidator({ errorOnInvalidHashes: true })],
    }),
  ],
})
