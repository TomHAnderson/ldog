import { fileURLToPath } from 'node:url'

const { pages } = await import(`./pages.mjs?id=${Math.random()}`)

export default {
    introspection: {
        type: 'none',
    },
    website: {
        template: 'carbon-multi-page',
        output: '../../public/docs',
        options: {
            siteRoot: `/docs`,
            appTitle: 'LDOG Stack',
            appFavicon: 'https://apiskeletons.com/images/favicon.ico',
            appLogo: 'https://raw.githubusercontent.com/API-Skeletons/ldog/2.0.x/public/ldog.svg',
            siteMeta: {
                description:
                    'A PHP Stack with Laravel, Doctrine ORM, and GraphQL.',
                'og:description':
                    'A PHP Stack with Laravel, Doctrine ORM, and GraphQL.',
                keywords:
                    'laravel,doctrine,orm,graphql',
                author: 'API Skeletons, Inc. <contact@apiskeletons.com>',
                'og:title': 'LDOG Stack',
                'og:type': 'article',
                'og:image':
                    'https://raw.githubusercontent.com/API-Skeletons/ldog/main/public/ldog.svg',
            },
            pages: pages,
        }
    }
}
