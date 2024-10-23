<?php

declare(strict_types=1);

use App\Http\Controllers\GraphQLController;
use Illuminate\Support\Facades\Route;

// Open API endpoint for GraphQL
Route::post('/', GraphQLController::class)
    ->name('graphql');
