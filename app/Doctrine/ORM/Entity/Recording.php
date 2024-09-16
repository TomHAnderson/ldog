<?php

declare(strict_types=1);

namespace App\Doctrine\ORM\Entity;

use ApiSkeletons\Doctrine\ORM\GraphQL\Attribute as GraphQL;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;

/**
 * Recording
 */
#[GraphQL\Entity(typeName: 'recording', description: 'Performance recordings')]
class Recording
{
    #[GraphQL\Field(description: 'Source')]
    public string $source;

    #[GraphQL\Field(description: 'Primary key')]
    public int $id;

    #[GraphQL\Association(description: 'Performance entity')]
    public Performance $performance;

    /** @var mixed[]> */
    #[GraphQL\Association(description: 'Users')]
    public Collection $users;

    /**
     * Constructor
     */
    public function __construct()
    {
        $this->users = new ArrayCollection();
    }
}
