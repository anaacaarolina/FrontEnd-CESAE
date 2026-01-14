<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\GiftController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\UtilController;
use App\Http\Controllers\TasksController;
use App\Http\Controllers\DashboardController;

Route::get('/', [UtilController::class, 'home'])->name('utils.welcome');

Route::get('/welcome', function () {
    return view('welcome');
});

Route::get('/add-users',  [UserController::class, 'addUsersPage'])->name('users.addUsers');

Route::get('/users',  [UserController::class, 'usersPage'])->name('users.users');

//Rota que abre a view com toda a informação do user
Route::get('/viewuser/{id}', [UserController::class, 'viewUser'])->name('users.view');

Route::get('/deleteuser/{id}',  [UserController::class, 'deleteUser'])->name('users.delete');

//função raw que insere um user na Base de Dados (teste de dbquery builder sem frontend)
Route::get('/insertintodb', [userController::class, 'insertUserIntoDB']);

Route::get('/updatefromdb', [userController::class, 'updateUserFromDB']);

//rota que pega nos dados do formulário e os envia para o servidor
Route::post('/user-store', [UserController::class, 'storeUser'])->name('users.store');

Route::put('/user-update', [UserController::class, 'updateUser'])->name('users.update');

Route::get('/hello', [UtilController::class, 'hello'])->name('utils.hello');

Route::get('/tasks', [TasksController::class, 'allTasks'])->name('tasks.allTasks')->middleware('auth');

Route::get('/add-tasks', [TasksController::class, 'addTaskPage'])->name('tasks.addTasks');

Route::post('/task-store', [TasksController::class, 'storeTask'])->name('tasks.store');

Route::put('/task-update', [TasksController::class, 'updateTask'])->name('tasks.update');

Route::get('/insertTasks', [TasksController::class, 'insertTasks']);

Route::get('/viewtask/{id}', [TasksController::class, 'viewtask'])->name('tasks.view');

Route::get('/deletetask/{id}',  [TasksController::class, 'deletetask'])->name('tasks.delete');

Route::get('/gifts', [GiftController::class, 'giftsPage'])->name('gifts.gifts');

Route::get('/viewgift/{id}', [GiftController::class, 'viewGift'])->name('gifts.view');

Route::get('/deletegift/{id}',  [GiftController::class, 'deleteGift'])->name('gifts.delete');

Route::get('/dashboard', [DashboardController::class, 'viewDashboard'])->name('dashboard.view')->middleware('auth');

Route::get(
    '/turma/{name}',
    [UtilController::class, 'turma']
);

Route::fallback([UtilController::class, 'fallback']);
