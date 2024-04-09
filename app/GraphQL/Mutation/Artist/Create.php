<?php

declare(strict_types=1);

namespace App\GraphQL\Mutation\Artist;

use ApiSkeletons\Doctrine\ORM\GraphQL\Driver;
use App\Doctrine\ORM\Entity\Artist;
use App\GraphQL\Field;
use Doctrine\Laminas\Hydrator\DoctrineObject;
use Doctrine\ORM\EntityManager;
use Exception;
use GraphQL\Error\Error;
use GraphQL\Type\Definition\ResolveInfo;

class Create implements Field
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
        return [
            'type' => $driver->type(Artist::class),
            'args' => [
                'values' => $driver->input(Artist::class, ['name'], []),
            ],
            'resolve' => static function ($source, array $args, $context, ResolveInfo $info) use ($driver) {
                $artist = new Artist();

                $driver->get(DoctrineObject::class)->hydrate($args['values'], $artist);
                $driver->get(EntityManager::class)->persist($artist);

                try {
                    $driver->get(EntityManager::class)->flush();
                } catch (Exception $e) {
                    throw new Error($e->getMessage());
                }

                return $artist;
            },
            'description' => <<<'EOF'
Create an artist.
EOF,
        ];
    }
}
