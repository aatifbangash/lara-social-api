<?php

use App\Livewire\Admin\Login;
use App\Livewire\Home;
use Illuminate\Support\Facades\Route;

Route::get('/', Home::class)->name('home');

Route::prefix('admin')->group(function () {

    Route::get('/', Home::class)->name('home');
    Route::get('/login', Login::class)->name('admin-login');

});
