<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserController extends Controller
{
    public function addUsersPage()
    {
        return view('users.addUsers');
    }
    public function usersPage()
    {
        return view('users.users');
    }
}
