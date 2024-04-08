export default {
    introspection: {
        type: 'url',
        url: 'http://localhost',
    },
    website: {
        template: 'carbon-multi-page',
        output: './public/docs',
        options: {
            siteRoot: `/docs`,
            appTitle: 'Laravel, Doctrine, and GraphQL',
            appLogo: 'https://raw.githubusercontent.com/api-skeletons/doctrine-orm-graphql/master/docs/banner.png',
            pages: [
                {
                    title: 'Welcome',
                    content: `
Laravel, Doctrine, and GraphQL Documentation
============================================

Use this template to create your GraphQL documentation.
`
                }
            ]
        }
    }
}
