<?php

namespace Tests\Feature;

use Tests\TestCase;

class ArtistTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function testArtistsConnection()
    {
        $response = $this->postJson('/', [
            'query' => '{
              artists {
                edges {
                  node {
                    id
                    name
                  }
                }
              }
            }',
            'variables' => [],
            'operationName' => null,
        ], [
            'Content-Type' => 'application/json',
        ]);

        $response->assertStatus(200);

        $data = $response->json();

        $this->assertFalse(isset($data['errors']));
        $this->assertGreaterThanOrEqual(1, count($data['data']['acts']['edges']));
    }
}
