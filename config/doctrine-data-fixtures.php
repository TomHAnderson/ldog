<?php

declare(strict_types=1);

use Doctrine\Common\DataFixtures\Executor\ORMExecutor;
use Doctrine\Common\DataFixtures\Purger\ORMPurger;

/**
 * In the default values listed below, ORM fixtures are configured.  You may
 * configure other Doctrine fixture group types:
 *
 * ORMExecutor | PHPCRExecutor | MongoDBExecutor
 * ORMPurger   | PHPCRPurger   | MongoDBPurger
 */

// The order of fixtures in the fixtures array is not the order in which
// they will be executed.  See
// https://github.com/doctrine/data-fixtures#fixture-ordering
/**
Fixture1::class,
Fixture2::class,
*/

return [
    'default' => [  // Group name
        'objectManager' => 'Doctrine\ORM\EntityManager',
        'executor' => ORMExecutor::class,
        'purger' => ORMPurger::class,
        'fixtures' => [],
    ],
];
