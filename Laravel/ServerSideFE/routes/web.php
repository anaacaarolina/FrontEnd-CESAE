<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('utils.home');
})->name('utils.welcome');

Route::get('/users', function () {
    return view('users.users');
})->name('users.users');

Route::get('/add-users', function () {
    return view('users.addUsers');
})->name('users.addUsers');

Route::get('/hello', function () {
    $myName = 'Carolina';
    $myPass = 1234455;

    return "<h1>Olá Mundo $myName</h1>";
})->name('utils.hello');

Route::get('/turma/{name}', function ($name) {
    //ir à base de dados e buscar toda a info da turma

    return "<h1>Turma: $name</h1>";
});



Route::fallback(function () {
    return view('utils.fallback');
});
