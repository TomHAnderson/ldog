<?php

namespace App\GraphQL\Mutation\Artist;

use ApiSkeletons\Doctrine\ORM\GraphQL\Driver;
use App\Doctrine\ORM\Entity\Artist;
use App\GraphQL\Field;
use Doctrine\Laminas\Hydrator\DoctrineObject;
use Doctrine\ORM\EntityManager;
use GraphQL\Type\Definition\ResolveInfo;

class Create implements Field
{
    public static function getDefinition(
        Driver $driver,
        array $variables = [],
        ?string $operationName = null
    ): array {
        return [
            'type' => $driver->type(Artist::class),
            'args' => [
                'values' => $driver->input(Artist::class, ['name']),
            ],
            'resolve' => function($source, array $args, $context, ResolveInfo $info) use ($driver) {
                $artist = new Artist();

                $driver->get(DoctrineObject::class)->hydrate($args['values'], $artist);
                $driver->get(EntityManager::class)->persist($artist);
                $driver->get(EntityManager::class)->flush();

                return $artist;
            },
            'description' => <<<EOF
Fetch a single artist.
EOF,
        ];
    }
}
