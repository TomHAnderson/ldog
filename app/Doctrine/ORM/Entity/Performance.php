<?php

declare(strict_types=1);

namespace App\Doctrine\ORM\Entity;

use ApiSkeletons\Doctrine\ORM\GraphQL\Attribute as GraphQL;
use DateTime;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * Performance
 */
#[GraphQL\Entity(typeName: 'performance', description: 'Performances')]
#[ORM\Entity]
class Performance
{
    #[GraphQL\Field(description: 'Primary key')]
    #[ORM\Id]
    #[ORM\Column(type: 'integer')]
    #[ORM\GeneratedValue(strategy: 'AUTO')]
    public int $id;

    #[GraphQL\Field(description: 'Venue name')]
    #[ORM\Column(type: 'string', nullable: true)]
    public string|null $venue = null;

    #[GraphQL\Field(description: 'City name')]
    #[ORM\Column(type: 'string', nullable: true)]
    public string|null $city = null;

    #[GraphQL\Field(description: 'State name')]
    #[ORM\Column(type: 'string', nullable: true)]
    public string|null $state = null;

    #[GraphQL\Field(description: 'Performance date', alias: 'date')]
    #[ORM\Column(type: 'date', nullable: false)]
    public DateTime $performanceDate;

    /** @var mixed[]]> */
    #[GraphQL\Association(description: 'Recordings by artist')]
    #[ORM\OneToMany(targetEntity: Recording::class, mappedBy: 'performance')]
    public Collection $recordings;

    #[GraphQL\Association(description: 'Artist entity')]
    #[ORM\ManyToOne(targetEntity: Artist::class, inversedBy: 'performances')]
    #[ORM\JoinColumn(name: 'artist_id', referencedColumnName: 'id', nullable: false)]
    public Artist $artist;

    /**
     * Constructor
     */
    public function __construct()
    {
        $this->recordings = new ArrayCollection();
    }
}
