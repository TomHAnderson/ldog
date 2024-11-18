<?php

declare(strict_types=1);

namespace App\Doctrine\ORM\Entity;

use ApiSkeletons\Doctrine\ORM\GraphQL\Attribute as GraphQL;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * Recording
 */
#[GraphQL\Entity(typeName: 'recording', description: 'Performance recordings')]
#[ORM\Entity]
class Recording
{
    #[GraphQL\Field(description: 'Primary key')]
    #[ORM\Id]
    #[ORM\Column(type: 'integer')]
    #[ORM\GeneratedValue(strategy: 'AUTO')]
    public int $id;

    #[GraphQL\Field(description: 'Source')]
    #[ORM\Column(type: 'text', nullable: false)]
    public string $source;

    #[GraphQL\Association(description: 'Performance entity')]
    #[ORM\ManyToOne(targetEntity: Performance::class, inversedBy: 'recordings')]
    #[ORM\JoinColumn(name: 'performance_id', referencedColumnName: 'id', nullable: false)]
    public Performance $performance;

    /** @var mixed[]> */
    #[GraphQL\Association(description: 'Users')]
    #[ORM\ManyToMany(targetEntity: User::class, mappedBy: 'recordings')]
    public Collection $users;

    /**
     * Constructor
     */
    public function __construct()
    {
        $this->users = new ArrayCollection();
    }
}
