// @ts-check
import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'
import starlightLinksValidator from 'starlight-links-validator'

export default defineConfig({
  site: 'https://docs.potluck.fermulate.com',
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
        // favicon.ico is the 48 px icon Google needs for search results; browsers keep the SVG.
        { tag: 'link', attrs: { rel: 'icon', href: '/favicon.ico', sizes: '32x32' } },
        // The site name Google shows above search results, in place of the bare domain.
        {
          tag: 'script',
          attrs: { type: 'application/ld+json' },
          content: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'Potluck guide',
            alternateName: ['Potluck docs', 'Potluck help'],
            url: 'https://docs.potluck.fermulate.com/',
            publisher: { '@type': 'Organization', name: 'Fermulate', url: 'https://fermulate.com/' },
          }),
        },
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
            'expenses/search-and-totals',
          ],
        },
        { label: 'Balances', items: ['balances', 'balances/settle-up'] },
        {
          label: 'Plans',
          items: [
            'plans',
            'plans/availability',
            'plans/best-time',
            'plans/lock-in',
            'plans/timeline',
            'plans/quick-polls',
          ],
        },
        { label: 'You', items: ['notifications', 'account', 'privacy-and-security'] },
        { label: 'Help', items: ['faq', 'troubleshooting'] },
      ],
      plugins: [starlightLinksValidator({ errorOnInvalidHashes: true })],
    }),
  ],
})
