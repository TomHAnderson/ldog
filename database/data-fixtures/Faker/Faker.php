<?php

declare(strict_types=1);

namespace Database\DataFixtures\Faker;

use App\Doctrine\ORM\Entity\Artist as ArtistEntity;
use DateTime;
use Doctrine\Common\DataFixtures\FixtureInterface;
use Doctrine\Laminas\Hydrator\DoctrineObject;
use Doctrine\Persistence\ObjectManager;
use Exception;

/**
 * DataFixtures MAY be used to "fake" data.
 * Sometimes unit tests are dependent on fake data.
 */
final class Faker implements
    FixtureInterface
{
    public function load(ObjectManager $manager): void
    {
        $data = [
            [
                'name' => 'Grateful Dead',
                'performances' => [
                    [
                        'performanceDate' => DateTime::createFromFormat('Y-m-d', '1995-02-21'),
                        'venue' => 'Delta Center',
                        'city' => 'Salt Lake City',
                        'state' => 'UT',
                        'recordings' => [
                            [
                                'source' => 'SBD> D> CD-R> EAC> SHN; via Jay Serafin, Brian '
                                    . 'Walker; see info file and pub comments for notes; '
                                    . 'possibly "click track" audible on a couple tracks',
                            ],
                            ['source' => 'DSBD > 1C > DAT; Seeded to etree by Dan Stephens'],
                        ],
                    ],
                    [
                        'performanceDate' => DateTime::createFromFormat('Y-m-d', '1969-11-08'),
                        'venue' => 'Fillmore Auditorium',
                        'city' => 'San Francisco',
                        'state' => 'CA',
                    ],
                    [
                        'performanceDate' => DateTime::createFromFormat('Y-m-d', '1977-05-08'),
                        'venue' => 'Barton Hall, Cornell University',
                        'city' => 'Ithaca',
                        'state' => 'NY',
                    ],
                    [
                        'performanceDate' => DateTime::createFromFormat('Y-m-d', '1995-07-09'),
                        'venue' => 'Soldier Field',
                        'city' => 'Chicago',
                        'state' => 'IL',
                    ],
                    [
                        'performanceDate' => DateTime::createFromFormat('Y-m-d', '1995-08-09'),
                    ],
                ],
            ],
            [
                'name' => 'Phish',
                'performances' => [
                    [
                        'performanceDate' => DateTime::createFromFormat('Y-m-d', '1998-11-02'),
                        'venue' => 'The E Centre',
                        'city' => 'West Valley City',
                        'state' => 'UT',
                        'recordings' => [
                            ['source' => 'AKG480 > Aerco preamp > SBM-1'],
                        ],
                    ],
                    [
                        'performanceDate' => DateTime::createFromFormat('Y-m-d', '1999-12-31'),
                        'city' => 'Big Cypress',
                        'state' => 'FL',
                    ],
                ],
            ],
            [
                'name' => 'String Cheese Incident',
                'performances' => [
                    [
                        'performanceDate' => DateTime::createFromFormat('Y-m-d', '2002-06-21'),
                        'venue' => 'Bonnaroo',
                        'city' => 'Manchester',
                        'state' => 'TN',
                    ],
                ],
            ],
            [
                'name' => 'The Beatles',
                'performances' => [
                    [
                        'venue' => 'The Ed Sullivan Show',
                        'city' => 'New York',
                        'state' => 'NY',
                        'performanceDate' => DateTime::createFromFormat('Y-m-d', '1964-02-09'),
                    ],
                ],
            ],
        ];

        /**
         * Use the DoctrineObject hydrator to hydrate the entity.
         * This maintains a consistent pattern in all DataFixtures.
         */
        $hydrator = new DoctrineObject($manager);

        foreach ($data as $row) {
            $artist = $manager
                ->getRepository(ArtistEntity::class)
                ->findOneBy(['name' => $row['name']]);

            if ($artist) {
                throw new Exception('Faker data already exists in the database.  Aborting.');
            }

            $artist = new ArtistEntity();

            // Magic?  No!  The hydrator understands the entity and its associations.
            $hydrator->hydrate($row, $artist);
            $manager->persist($artist);

            foreach ($artist->getPerformances() as $performance) {
                $manager->persist($performance);

                foreach ($performance->getRecordings() as $recording) {
                    $manager->persist($recording);
                }
            }
        }

        $manager->flush();
    }
}
