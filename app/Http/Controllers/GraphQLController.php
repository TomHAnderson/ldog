<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use ApiSkeletons\Doctrine\ORM\GraphQL\Config;
use ApiSkeletons\Doctrine\ORM\GraphQL\Driver;
use App\Doctrine\Entity\Artist;
use Doctrine\ORM\EntityManager;
use GraphQL\GraphQL;
use GraphQL\Type\Definition\ObjectType;
use GraphQL\Type\Definition\Type;
use GraphQL\Type\Schema;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redis;

class GraphQLController extends Controller
{
    /** @return mixed[] */
    public function __invoke(EntityManager $entityManager, Request $request): array
    {
        $query = $request->json('query');
        $variables = $request->json('variables') ?? [];
        $operationName = $request->json('operationName');

        $driver = new Driver($entityManager, new Config([
            'entityPrefix' => 'App\\Doctrine\\Entity\\',
            'groupSuffix' => '',
            'sortFields' => true,
            'limit' => 100,
            'useHydratorCache' => true,
            'globalEnable' => true,
        ]));

        $schema = new Schema([
            'query' => new ObjectType([
                'name' => 'query',
                'fields' => [
                    'artists' => [
                        'type' => $driver->connection(Artist::class),
                        'args' => [
                            'filter' => $driver->filter(Artist::class),
                        ],
                        'resolve' => $driver->resolve(Artist::class),
                    ],
                    'artist' => [
                        'type' => $driver->type(Artist::class),
                        'args' => [
                            'id' => Type::int(),
                        ],
                        'resolve' => $driver->resolve(Artist::class),
                    ],
                ],
            ]),
        ]);

        $query  = $request->get('query');
        $result = GraphQL::executeQuery($schema, $query);

        return $result->toArray();
    }
}
