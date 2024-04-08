<?php

namespace App\GraphQL\Query\Artist;

use ApiSkeletons\Doctrine\ORM\GraphQL\Driver;
use App\Doctrine\ORM\Entity\Artist;
use App\GraphQL\Field;

class Connection implements Field
{
    public static function getDefinition(
        Driver $driver,
        array $variables = [],
        ?string $operationName = null
    ): array {
        return [
            'type' => $driver->connection(Artist::class),
            'args' => [
                'filter' => $driver->filter(Artist::class),
            ],
            'resolve' => $driver->resolve(Artist::class),
            'description' => <<<EOF
Fetch artists
EOF,
        ];
    }
}
