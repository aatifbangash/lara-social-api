<?php

use App\Http\Controllers\UsersController;
use Illuminate\Support\Facades\Route;

Route::group(['prefix' => '/users'], function () {
    Route::get('/', [UsersController::class, 'users'])->name('users');
    Route::get('/{userId}', [UsersController::class, 'user'])->name('user');
});
