<?php

declare(strict_types=1);

namespace App\GraphQL\Query\Performance;

use ApiSkeletons\Doctrine\ORM\GraphQL\Driver;
use App\Doctrine\ORM\Entity\Performance;
use App\GraphQL\Field;

class Connection implements Field
{
    /**
     * @param  mixed[] $variables
     *
     * @return mixed[]
     */
    public static function getDefinition(
        Driver $driver,
        array $variables = [],
        string|null $operationName = null,
    ): array {
        return $driver->completeConnection(Performance::class);
    }
}
