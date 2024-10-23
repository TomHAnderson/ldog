<?php

declare(strict_types=1);

namespace App\Doctrine\ORM\Entity;

use ApiSkeletons\Doctrine\ORM\GraphQL\Attribute as GraphQL;
use DateTime;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;

/**
 * Performance
 */
#[GraphQL\Entity(typeName: 'performance', description: 'Performances')]
class Performance
{
    #[GraphQL\Field(description: 'Venue name')]
    public string|null $venue = null;

    #[GraphQL\Field(description: 'City name')]
    public string|null $city = null;

    #[GraphQL\Field(description: 'State name')]
    public string|null $state = null;

    #[GraphQL\Field(description: 'Performance date', alias: 'date')]
    public DateTime $performanceDate;

    #[GraphQL\Field(description: 'Primary key')]
    public int $id;

    /** @var mixed[]]> */
    #[GraphQL\Association(description: 'Recordings by artist')]
    public Collection $recordings;

    #[GraphQL\Association(description: 'Artist entity')]
    public Artist $artist;

    /**
     * Constructor
     */
    public function __construct()
    {
        $this->recordings = new ArrayCollection();
    }
}
