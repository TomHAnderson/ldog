export default {
    introspection: {
        type: 'url',
        url: 'http://localhost:8080',
    },
    website: {
        template: 'carbon-multi-page',
        output: './public/docs',
        options: {
            siteRoot: `/docs`,
            appTitle: 'Laravel, Doctrine, and GraphQL',
            appLogo: 'http://localhost/laravel-doctrine-orm-graphql.svg',
	    appFavicon: 'https://apiskeletons.com/images/favicon.ico',
            pages: [
                {
                    title: 'Welcome',
                    content: `

<img
    src="http://localhost/laravel-doctrine-orm-graphql.svg"
    title="Laravel, Doctrine ORM, and GraphQL"
    alt="Laravel, Doctrine ORM, and GraphQL"
    width="600px"
    style="
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 50%;
    "
/>

Laravel, Doctrine ORM, and GraphQL Documentation
============================================

This is a template application for building GraphQL applications in Laravel
with Doctrine ORM.  Abbreviated \`ldog\`.

This template application uses Laravel 10.x because that is the latest version
supported by https://www.laraveldoctrine.org.
                    `
                },
                {
                    title: 'Install',
                    content: `
Install
=======

To create a new project run
\`\`\`
composer create-project api-skeletons/laravel-doctrine-orm-graphql
\`\`\`
                    `
                },
                {
                    title: 'Doctrine ERD with Skipper',
                    content: `
Doctrine ERD with Skipper
=========================

Included is an ERD you can use to extend your project's database.  The ERD is created with [Skipper](https://skipper18.com).
Find it at \`~/ldog.skipper\`.  The export path is set to \`~/config/doctrine-orm-metadata\`.

This an an immensely powerful tool and every Doctrine ORM project should use it.
                    `
                },
                {
                    title: 'GraphQL Documentation',
                    content: `
GraphQL Documentation
=====================

GraphQL documentation is created with \`magidoc\`.  Inside the container and from the  root of the project,
\`/var/www\`, run \`magidoc generate\` to create the documentation.

Configuration is done via the \`~/magidoc.mjs\` file.
                    `
                },
                {
                    title: 'Code Quality Tools',
                    content: `
Code Quality
------------

To ensure code quality, run \`composer test\` to run the following:

* [Parallel Lint](https://github.com/php-parallel-lint/PHP-Parallel-Lint)
* [Doctrine Coding Standard](https://www.doctrine-project.org/projects/doctrine-coding-standard/en/11.0/reference/index.html)
* [Psalm](https://psalm.dev/docs/)
* [PHPUnit](https://docs.phpunit.de/en/10.5/)
                    `
                },
                {
                    title: 'Help Resources',
                    content: `
Help Resources
--------------

* Laravel - https://laravel.com/docs/10.x
* Doctrine - https://www.doctrine-project.org/projects/doctrine-orm/en/2.10/index.html
* Laravel Doctrine Adapter - https://www.laraveldoctrine.org/
* GraphQL Documentation - https://graphql.org/learn/
* GraphQL-php - https://webonyx.github.io/graphql-php/
* GraphQL Type Driver for Doctrine ORM - https://doctrine-orm-graphql.apiskeletons.dev/en/latest/
* Skipper - https://www.skipper18.com/help/
* magidoc - https://magidoc.js.org/introduction/welcome
                    `
                }
            ]
        }
    }
}
