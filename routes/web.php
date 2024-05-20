<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/auth/register', function () {
    return Inertia::render('Auth/Register');
})->name('home');

Route::get('auth/login', function() {

    return Inertia::render('Auth/Login');
})->name('auth.login');

Route::post('auth/register', [AuthController::class, 'register'])->name('auth.register');

Route::post('auth/login', [AuthController::class, 'login'])->name('auth.login');

