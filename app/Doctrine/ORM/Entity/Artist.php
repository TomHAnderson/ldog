<?php

declare(strict_types=1);

namespace App\Doctrine\ORM\Entity;

use ApiSkeletons\Doctrine\ORM\GraphQL\Attribute as GraphQL;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;

/**
 * Artist
 */
#[GraphQL\Entity(typeName: 'artist', description: 'Artists')]
class Artist
{
    #[GraphQL\Field(description: 'Artist name')]
    public string $name;

    #[GraphQL\Field(description: 'Primary key')]
    public int $id;

    /** @var mixed[]]> */
    #[GraphQL\Association(description: 'Performances')]
    public Collection $performances;

    /**
     * Constructor
     */
    public function __construct()
    {
        $this->performances = new ArrayCollection();
    }
}
