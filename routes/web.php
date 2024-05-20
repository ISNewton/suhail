<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/auth/register', function () {
    return Inertia::render('Auth/Register');
})->name('home');

Route::post('auth/register', [AuthController::class, 'register'])->name('auth.register');

