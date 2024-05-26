<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\TestController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/auth/register', function () {
    return Inertia::render('Auth/Register');
})->name('home');

Route::get('auth/login', function() {

    return Inertia::render('Auth/Login');
})->name('login');

Route::post('auth/register', [AuthController::class, 'register'])->name('auth.register');

Route::post('auth/login', [AuthController::class, 'login'])->name('auth.login');



//Route::group(['middleware' => 'auth'], function() {

    Route::get('dashboard', [DashboardController::class, 'index'])->name('dashboard.index');
    Route::resource('dashboard/tests', TestController::class);
//});

