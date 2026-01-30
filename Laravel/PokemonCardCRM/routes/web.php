<?php

use App\Http\Controllers\CardController;
use App\Http\Controllers\SetController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
})->name('home');

//SETS
Route::get('/sets', [SetController::class, 'allSets'])->name('sets.allSets');
Route::get('/sets/{apiId}', [SetController::class, 'viewSet'])->name('sets.viewSet');
Route::get('/delete-set/{apiId}', [SetController::class, 'deleteSet'])->name('sets.delete');

//CARDS
Route::get('/cards', [CardController::class, 'allCards'])->name('cards.allCards');
Route::get('/cards/{apiId}', [CardController::class, 'viewCard'])->name('cards.viewCard');
Route::get('/delete-card/{apiId}', [CardController::class, 'deleteCard'])->name('cards.delete');

//USERS
Route::get('/users', [UserController::class, 'allUsers'])->name('users.allUsers');
Route::get('/users/{id}', [UserController::class, 'viewUser'])->name('users.viewUser');
Route::get('/add-user',  [UserController::class, 'addUsersPage'])->name('users.addUsers');
Route::post('/create-user', [UserController::class, 'storeUser'])->name('users.store');
Route::put('/user-update', [UserController::class, 'updateUser'])->name('users.update');
Route::get('/delete-user/{id}', [UserController::class, 'deleteUser'])->name('users.delete');
