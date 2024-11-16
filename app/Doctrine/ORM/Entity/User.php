<?php

declare(strict_types=1);

namespace App\Doctrine\ORM\Entity;

use ApiSkeletons\Doctrine\ORM\GraphQL\Attribute as GraphQL;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;

/**
 * User
 */
#[GraphQL\Entity(description: 'User', typeName: 'user')]
#[ORM\Entity]
class User
{
    #[GraphQL\Field(description: 'Primary key')]
    #[ORM\Id]
    #[ORM\Column(type: 'integer')]
    #[ORM\GeneratedValue(strategy: 'AUTO')]
    public int $id;

    #[GraphQL\Field(description: 'Name')]
    #[ORM\Column(type: 'string', nullable: false)]
    public string $name;

    #[GraphQL\Field(description: 'Email')]
    #[ORM\Column(type: 'string', unique: true, nullable: false)]
    public string $email;

    #[ORM\Column(type: 'string', nullable: false)]
    public string $password;

    #[GraphQL\Field(description: 'Role')]
    #[ORM\Column(type: 'string', nullable: false)]
    public string $role;

    #[GraphQL\Association(description: 'Recordings')]
    #[ORM\ManyToMany(targetEntity: Recording::class, inversedBy: 'users')]
    #[ORM\JoinTable(name: 'RecordingToUser')]
    #[ORM\JoinColumn(name: 'user_id', referencedColumnName: 'id', nullable: false)]
    #[ORM\InverseJoinColumn(name: 'recording_id', referencedColumnName: 'id', nullable: false)]
    public ArrayCollection $recordings;

    /**
     * Constructor
     */
    public function __construct()
    {
        $this->recordings = new ArrayCollection();
    }
}
