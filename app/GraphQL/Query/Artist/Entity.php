<?php

namespace App\GraphQL\Query\Artist;

use ApiSkeletons\Doctrine\ORM\GraphQL\Driver;
use App\Doctrine\ORM\Entity\Artist;
use App\GraphQL\Field;
use Doctrine\ORM\EntityManager;
use GraphQL\Type\Definition\ResolveInfo;
use GraphQL\Type\Definition\Type;

class Entity implements Field
{
    public static function getDefinition(
        Driver $driver,
        array $variables = [],
        ?string $operationName = null
    ): array {
        return [
            'type' => $driver->type(Artist::class),
            'args' => [
                'id' => Type::int(),
            ],
            'resolve' => function($source, array $args, $context, ResolveInfo $info) use ($driver) {
                $entityManager = $driver->get(EntityManager::class);

                return $entityManager->getRepository(Artist::class)->find($args['id']);
            },
            'description' => <<<EOF
Fetch a single artist.
EOF,
        ];
    }
}
