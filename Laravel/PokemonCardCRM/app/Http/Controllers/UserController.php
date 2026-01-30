<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    //
    public function allUsers()
    {
        $users = DB::table('users')
            ->get();

        return view('users.allUsers', compact('users'));
    }
    public function addUsersPage()
    {
        return view('users.addUser');
    }
    public function storeUser(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:50',
            'email' => 'required|email|unique:users',
            'password' => 'required|min:8'
        ]);
        DB::table('users')->insert([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'user_type' => 0
        ]);

        return redirect()->route('home')->with('message', 'Successfully added user');
    }
    public function viewUser($id)
    {
        $user = DB::table('users')
            ->where('id', $id)
            ->first();

        return view('users.viewUser', compact('user'));
    }
    public function deleteUser($id)
    {
        $user = DB::table('users')
            ->where('id', $id)
            ->delete();

        return back();
    }
    public function updateUser(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:50',
        ]);


        DB::table('users')
            ->where('id', $request->id)
            ->update([
                'name' => $request->name,
            ]);

        return redirect()->route('users.allUsers')->with('message', 'Contacto atualizado com sucesso');
    }
}
