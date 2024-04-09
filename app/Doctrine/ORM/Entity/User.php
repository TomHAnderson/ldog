<?php

declare(strict_types=1);

namespace App\Doctrine\ORM\Entity;

use ApiSkeletons\Doctrine\ORM\GraphQL\Attribute as GraphQL;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;

/**
 * User
 */
#[GraphQL\Entity(description: 'User', typeName: 'user')]
class User
{
    #[GraphQL\Field(description: 'User name')]
    private string $name;

    #[GraphQL\Field(description: 'User email')]
    private string $email;

    #[GraphQL\Field(description: 'User password')]
    private string $password;

    #[GraphQL\Field(description: 'Primary key')]
    private int $id;

    /** @var Collection<id, Recording> */
    #[GraphQL\Association(description: 'Recordings')]
    private Collection $recordings;

    /**
     * Constructor
     */
    public function __construct()
    {
        $this->recordings = new ArrayCollection();
    }

    /**
     * Set name.
     */
    public function setName(string $name): User
    {
        $this->name = $name;

        return $this;
    }

    /**
     * Get name.
     */
    public function getName(): string
    {
        return $this->name;
    }

    /**
     * Set email.
     */
    public function setEmail(string $email): User
    {
        $this->email = $email;

        return $this;
    }

    /**
     * Get email.
     */
    public function getEmail(): string
    {
        return $this->email;
    }

    /**
     * Set password.
     */
    public function setPassword(string $password): User
    {
        $this->password = $password;

        return $this;
    }

    /**
     * Get password.
     */
    public function getPassword(): string
    {
        return $this->password;
    }

    /**
     * Get id.
     */
    public function getId(): int
    {
        return $this->id;
    }

    /**
     * Add recording.
     */
    public function addRecording(Recording $recording): User
    {
        $this->recordings[] = $recording;

        return $this;
    }

    /**
     * Remove recording.
     *
     * @return bool TRUE if this collection contained the specified element, FALSE otherwise.
     */
    public function removeRecording(Recording $recording): bool
    {
        return $this->recordings->removeElement($recording);
    }

    /**
     * Get recordings.
     *
     * @return Collection<id, Recording>
     */
    public function getRecordings(): Collection
    {
        return $this->recordings;
    }
}