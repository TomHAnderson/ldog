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
            appTitle: 'LDOG Stack',
            appLogo: 'https://raw.githubusercontent.com/API-Skeletons/ldog/main/public/ldog.svg',
	    appFavicon: 'https://apiskeletons.com/images/favicon.ico',
            pages: [
                {
                    title: 'Welcome',
                    content: `
LDOG Stack
==========

Laravel, Doctrine ORM, and GraphQL
----------------------------------

This is a template application for building GraphQL applications in
Laravel with Doctrine ORM.  **Known as the LDOG (el-dog) Stack.**

To create a new project run
\`\`\`
composer create-project api-skeletons/ldog
\`\`\`

Source code available at https://github.com/api-skeletons/ldog

This site is the ldog project running on Google Cloud.  It includes an example
Doctrine ORM schema and database served as GraphQL.

You may explore the GraphQL with [graphiql](https://ldog.apiskeletons.dev/graphiql)
or POST to this server's GraphQL endpoint at https://ldog.apisketons.dev


Features
--------

* Dockerfile suitable to immediate deployment to Cloud Run
* docker-compose.yml file - no Laravel Sail integration
* Doctrine ORM configured for XML metadata and no database naming strategy
* Includes the [doctrine-orm-graphql](https://github.com/api-skeletons/doctrine-orm-graphql)
  type driver
* The [GraphQLController](https://github.com/API-Skeletons/ldog/blob/main/app/Http/Controllers/GraphQLController.php)
  is pre-configured with example endpoints for connection, entity, and mutation
* The Doctrine [entities](https://github.com/API-Skeletons/ldog/blob/main/app/Doctrine/ORM/Entity/Artist.php)
  have default configuration for doctrine-orm-graphql.
* The Laravel code has been modified so the entire project passes the
  [Doctrine Coding Standard](https://www.doctrine-project.org/projects/doctrine-coding-standard/en/11.0/reference/index.html)
* Code quality tools include parallel-lint, phpcs, psalm, and phpunit
* An unit test is included that tests the GraphQL endpoints


Why use this template application?
----------------------------------

This template application is based on Laravel 10.x.  Nothing has been taken away from that
default Laravel release but a lot has been added.

There are many GraphQL solutions available including those that integrate with Laravel
and Eloquent.  But Doctrine ORM is the superior ORM because it is a
[data mapper pattern](https://www.thoughtfulcode.com/orm-active-record-vs-data-mapper/).

The [doctrine-orm-graphql](https://github.com/api-skeletons/doctrine-orm-graphql) library
creates the types for your Doctrine entities and has numerous other features.

A [Skipper](https://skipper18.com) diagram is included and the example database metadata
is exported from it as XML.  Tha advantages of XML metadata over annotations or attributes
are many and not needing to edit the XML manually is a big benefit.


Convert an existing database to GraphQL
---------------------------------------

Using skipper, import a new external model and import your database.  Change the
Export Data Format to XML and set the path to \`~/config/doctrine-orm-metadata\`.
Export from Skipper and build your entities.  Turn on \`globalEnable\` in the driver
and create at least one endpoint.


Support
-------

Support for this template application is available through
[API Skeletons](mailto:contact@apiskeletons.com).


---

A project of [API Skeletons](mailto:contact@apiskeletons.com)
* https://github.com/api-skeletons/ldog
                    `
                },
                {
                    title: 'Getting Started',
                    content: `
Getting Started
===============

* Copy \`.env.example\` or \`.env.dev\` to \`.env\`
* Run \`docker-compose up -d\`
* Connect to the docker instance by running \`docker ps\` to get the instance id,
  then \`docker exec -it {instanceId} bash\`
* Run \`composer install\`
* Create the database with \`php artisan doctrine:schema:create\`
* Generate the GraphQL documentation with \`magidoc generate\`

---

A project of [API Skeletons](mailto:contact@apiskeletons.com)
* https://github.com/api-skeletons/ldog
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

This is the ERD for the entities used in developing the stack.

<img
    src="https://raw.githubusercontent.com/API-Skeletons/ldog/main/public/erd.png"
    title="ERD"
    alt="ERD"
/>

---

A project of [API Skeletons](mailto:contact@apiskeletons.com)
* https://github.com/api-skeletons/ldog
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

---

A project of [API Skeletons](mailto:contact@apiskeletons.com)
* https://github.com/api-skeletons/ldog
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

---

A project of [API Skeletons](mailto:contact@apiskeletons.com)
* https://github.com/api-skeletons/ldog
                    `
                },
                {
                    title: 'Fixtures',
                    content: `
Fixtures
--------

Included with LDOG is a Doctrine fixture library.  There are two included fixtures.  To rebuild the
SQLite database, copy \`.env.dev\` to \`.env\`, delete the \`~/database/database.sqlite\` file, and run

\`\`\`
rm database/database.sqlite
php artisan doctrine:schema:create
php artisan doctrine:data-fixture:import faker
\`\`\`

---

A project of [API Skeletons](mailto:contact@apiskeletons.com)
* https://github.com/api-skeletons/ldog
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
* migrations - https://laraveldoctrine.org/docs/1.8/migrations
* data fixtures - https://github.com/API-Skeletons/laravel-doctrine-data-fixtures/blob/main/README.md

---

A project of [API Skeletons](mailto:contact@apiskeletons.com)
* https://github.com/api-skeletons/ldog
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

You may try it out with [graphiql](https://ldog.apiskeletons.dev/graphiql)

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

---

A project of [API Skeletons](mailto:contact@apiskeletons.com)
* https://github.com/api-skeletons/ldog
                    `
                }
            ]
        }
    }
}
