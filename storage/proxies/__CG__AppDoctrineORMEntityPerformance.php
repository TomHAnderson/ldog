<?php

namespace DoctrineProxies\__CG__\App\Doctrine\ORM\Entity;

/**
 * DO NOT EDIT THIS FILE - IT WAS CREATED BY DOCTRINE'S PROXY GENERATOR
 */
class Performance extends \App\Doctrine\ORM\Entity\Performance implements \Doctrine\ORM\Proxy\InternalProxy
{
    use \Symfony\Component\VarExporter\LazyGhostTrait {
        initializeLazyObject as private;
        setLazyObjectAsInitialized as public __setInitialized;
        isLazyObjectInitialized as private;
        createLazyGhost as private;
        resetLazyObject as private;
    }

    public function __load(): void
    {
        $this->initializeLazyObject();
    }
    

    private const LAZY_OBJECT_PROPERTY_SCOPES = [
        'artist' => [parent::class, 'artist', null],
        'city' => [parent::class, 'city', null],
        'id' => [parent::class, 'id', null],
        'performanceDate' => [parent::class, 'performanceDate', null],
        'recordings' => [parent::class, 'recordings', null],
        'state' => [parent::class, 'state', null],
        'venue' => [parent::class, 'venue', null],
    ];

    public function __isInitialized(): bool
    {
        return isset($this->lazyObjectState) && $this->isLazyObjectInitialized();
    }

    public function __serialize(): array
    {
        $properties = (array) $this;
        unset($properties["\0" . self::class . "\0lazyObjectState"]);

        return $properties;
    }
}
