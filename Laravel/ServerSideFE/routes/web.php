<?php

use App\Http\Controllers\UserController;
use App\Http\Controllers\UtilController;
use Illuminate\Support\Facades\Route;

Route::get('/', [UtilController::class, 'home'])->name('utils.welcome');

Route::get('/add-users',  [UserController::class, 'addUsersPage'])->name('users.addUsers');

Route::get('/users',  [UserController::class, 'usersPage'])->name('users.users');

//função raw que insere um user na Base de Dados (teste de dbquery builder sem frontend)
Route::get('/insertintodb', [userController::class, 'insertUserIntoDB']);

Route::get('/updatefromdb', [userController::class, 'updateUserFromDB']);

Route::get('/hello', [UtilController::class, 'hello'])->name('utils.hello');

Route::get(
    '/turma/{name}',
    [UtilController::class, 'turma']
);

Route::fallback([UtilController::class, 'fallback']);
