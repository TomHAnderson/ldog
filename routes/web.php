<?php

use Illuminate\Support\Facades\Route;

Route::get('/', static function () {
    return redirect('/docs/introduction/welcome');
});
