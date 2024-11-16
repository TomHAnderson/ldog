<?php

declare(strict_types=1);

namespace App\Doctrine\ORM\Entity;

use ApiSkeletons\Doctrine\ORM\GraphQL\Attribute as GraphQL;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * Artist
 */
#[GraphQL\Entity(typeName: 'artist', description: 'Artists')]
#[ORM\Entity]
class Artist
{
    #[GraphQL\Field(description: 'Primary key')]
    #[ORM\Id]
    #[ORM\Column(type: 'bigint')]
    #[ORM\GeneratedValue(strategy: 'AUTO')]
    public int $id;

    #[GraphQL\Field(description: 'Artist name')]
    #[ORM\Column(type: 'string', unique: true, nullable: false)]
    public string $name;

    /** @var mixed[]]> */
    #[GraphQL\Association(description: 'Performances')]
    #[ORM\OneToMany(targetEntity: Performance::class, mappedBy: 'artist')]
    public Collection $performances;

    /**
     * Constructor
     */
    public function __construct()
    {
        $this->performances = new ArrayCollection();
    }
}
