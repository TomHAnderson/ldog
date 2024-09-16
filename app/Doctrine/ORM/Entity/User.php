<?php

declare(strict_types=1);

namespace App\Doctrine\ORM\Entity;

use ApiSkeletons\Doctrine\ORM\GraphQL\Attribute as GraphQL;
use Doctrine\Common\Collections\ArrayCollection;

/**
 * User
 */
#[GraphQL\Entity(description: 'User', typeName: 'user')]
class User
{
    #[GraphQL\Field(description: 'Name')]
    public string $name;

    #[GraphQL\Field(description: 'Email')]
    public string $email;

    public string $password;

    #[GraphQL\Field(description: 'Role')]
    public string $role;

    #[GraphQL\Field(description: 'Primary key')]
    public int $id;

    #[GraphQL\Association(description: 'Recordings')]
    public ArrayCollection $recordings;

    /**
     * Constructor
     */
    public function __construct()
    {
        $this->recordings = new ArrayCollection();
    }
}
