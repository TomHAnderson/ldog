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
            appTitle: 'Laravel, Doctrine ORM, and GraphQL',
            appLogo: 'http://localhost/ldog.svg',
	    appFavicon: 'https://apiskeletons.com/images/favicon.ico',
            pages: [
                {
                    title: 'Welcome',
                    content: `

<img
    src="http://localhost/ldog.svg"
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

Laravel, Doctrine ORM, and GraphQL
==================================

This is a template application for building GraphQL applications in Laravel
with Doctrine ORM.  Abbreviated \`ldog\`.

Source code available at https://github.com/api-skeletons/ldog

Brought to you by [API Skeletons](mailto:contact@apiskeletons.com)

<img
    src="http://localhost/erd.png"
    title="ERD"
    alt="ERD"
/>
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
                    title: 'Getting Started',
                    content: `
Getting Started
===============

* Copy \`.env.dist\` to \`.env\`
* Run \`docker-compose up -d\`
* Connect to the docker instance by running \`docker ps\` to get the instance id,
  then \`docker exec -it {instanceId} bash\`
* Run \`composer install\`
* Create the database with \`php artisan doctrine:schema:create\`
* Generate the GraphQL documentation with \`magidoc generate\`
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
                },
                {
                    title: 'License',
                    content: `
\`\`\`
The MIT License (MIT)

Copyright (c) 2024 API Skeletons, Inc. <contact@apiskeletons.com>
Copyright (c) Taylor Otwell

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
\`\`\`
                    `
                }, {
                    title: 'Example Query',
                    content: `
Example Query
=============

This query returns all Artists, Performances, and Recordings in the included sample database.

\`\`\`graphql
query {
  artists {
    edges {
      node {
        id
        name
        performances {
          edges {
            node {
              date
              venue
              city
              state
              recordings {
                edges {
                  node {
                    source
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
\`\`\`
                    `
                }
            ]
        }
    }
}
