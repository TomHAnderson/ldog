<?php

namespace App\GraphQL;

use ApiSkeletons\Doctrine\ORM\GraphQL\Driver;

interface Field
{
    public static function getDefinition(Driver $driver, array $variables = [], ?string $operationName = null): array;
}
