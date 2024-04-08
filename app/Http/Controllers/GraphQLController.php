<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use ApiSkeletons\Doctrine\ORM\GraphQL\Config;
use ApiSkeletons\Doctrine\ORM\GraphQL\Driver;
use App\GraphQL\Mutation;
use App\GraphQL\Query;
use Doctrine\Laminas\Hydrator\DoctrineObject;
use Doctrine\ORM\EntityManager;
use GraphQL\GraphQL;
use GraphQL\Type\Definition\ObjectType;
use GraphQL\Type\Schema;
use GraphQL\Validator\DocumentValidator;
use GraphQL\Validator\Rules\QueryComplexity;
use Illuminate\Http\Request;

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
        ]));

        // Because the hydrator is used in mutation fields, set it in the Driver
        // container for easy access.
        $driver->set(DoctrineObject::class, new DoctrineObject($entityManager));

        $schema = new Schema([
            'query' => new ObjectType([
                'name' => 'query',
                'fields' => [
                    'artist' => Query\Artist\Entity::getDefinition($driver, $variables, $operationName),
                    'artists' => Query\Artist\Connection::getDefinition($driver, $variables, $operationName),
                ],
            ]),
            'mutation' => new ObjectType([
                'name' => 'mutation',
                'fields' => [
                    'artistCreate' => Mutation\Artist\Create::getDefinition($driver, $variables, $operationName),
                ],
            ]),
        ]);

        // Limit query complexity
        DocumentValidator::addRule(new QueryComplexity(350));

        $result = GraphQL::executeQuery(
            schema: $schema,
            source: $query,
            variableValues: $variables,
            operationName: $operationName,
        );

        return $result->toArray();
    }
}
