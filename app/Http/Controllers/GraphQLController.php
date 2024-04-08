<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use ApiSkeletons\Doctrine\ORM\GraphQL\Driver;
use App\Doctrine\Entity\Artist;
use Doctrine\ORM\EntityManager;
use GraphQL\GraphQL;
use GraphQL\Type\Definition\ObjectType;
use GraphQL\Type\Definition\Type;
use GraphQL\Type\Schema;
use Illuminate\Http\Request;

class GraphQLController extends Controller
{
    /** @return mixed[] */
    public function __invoke(EntityManager $entityManager, Request $request): array
    {
        $driver = new Driver($entityManager);

        $schema = new Schema([
            'query' => new ObjectType([
                'name' => 'query',
                'fields' => [
                    'artist' => [
                        'type' => Type::listOf($driver->type(Artist::class)),
                        'args' => [
                            'filter' => $driver->filter(Artist::class),
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
