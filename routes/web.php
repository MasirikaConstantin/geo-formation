<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

Route::get('/', function () {
    return Inertia::render('welcome', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

Route::get('/formations', function () {
    return Inertia::render('formations');
})->name('formations');

Route::get('/formations/drone', function () {
    return Inertia::render('formations/drone');
})->name('formations.drone');

Route::get('/formations/cartographie', function () {
    return Inertia::render('formations/cartographie');
})->name('formations.cartographie');

Route::get('/formations/teledetection', function () {
    return Inertia::render('formations/teledetection');
})->name('formations.teledetection');


Route::get('/about', function () {
    return Inertia::render('about');
})->name('about');
Route::get('/blog', function () {
    return Inertia::render('blog');
})->name('blog');

Route::get('/contact', function () {
    return Inertia::render('contact');
})->name('contact');

Route::get('/temoignages', function () {
    return Inertia::render('temoignages');
})->name('temoignages');

require __DIR__.'/settings.php';
