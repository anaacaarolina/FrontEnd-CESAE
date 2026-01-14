<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function addUsersPage()
    {
        $pageAdmin = "António";
        return view('users.addUsers', compact('pageAdmin'));
    }
    public function usersPage()
    {
        $cesaeInformation  = [
            'name' => 'Cesae',
            'address' => 'Rua Ciríaco Cardoso 186, 4150-212 Porto',
            'email' => 'geral@cesae.pt'
        ];

        $students = [
            [
                'name' => 'Carolina',
                'email' => 'carolina@email.com',
            ],
            [
                'name' => 'Raquel',
                'email' => 'raquel@email.com',
            ],
            [
                'name' => 'Beatriz',
                'email' => 'beatriz@email.com',
            ],
            [
                'name' => 'Diana',
                'email' => 'diana@email.com',
            ],
            [
                'name' => 'Inês',
                'email' => 'ines@email.com',
            ]
        ];

        $users = User::get();

        // dd($cesaeInformation);
        return view('users.users', compact('cesaeInformation', 'students', 'users'));
    }

    //função que recebe os dados do formulário, valida e insere na base de dados
    public function storeUser(Request $request)
    {
        // dd($request->all());

        $request->validate([
            'name' => 'required|string|max:50',
            'email' => 'required|email|unique:users',
            'password' => 'required|min:8'
        ]);
        User::insert([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password)
        ]);

        return redirect()->route('users.users')->with('message', 'Contacto adicionado com sucesso');
    }
    public function insertUserIntoDB()
    {
        //validar se dados estão em conformidade com a estrutura da base de dados

        //se passar em todas as validações, insere então na base de dados
        DB::table('users')
            ->updateOrInsert([
                'name' => 'Rafaela',
                'email' => 'rafaela4@email.com',
                'password' => 'rafaela12345'
            ]);
        return response()->json('user inserido com sucesso');
    }

    public function viewUser($id)
    {
        //query que vai buscar o user que estou a clicar
        $user = DB::table('users')
            ->where('id', $id)
            ->first();


        //COM MODELO
        // $user = User::where('id',$id)
        //         ->first();

        return view('users.viewUsers', compact('user'));
    }

    public function deleteUser($id)
    {
        $user = DB::table('tasks')
            ->where('user_id', $id)
            ->delete();


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
                'address' => $request->address,
                'nif' => $request->nif,

            ]);

        return redirect()->route('users.users')->with('message', 'Contacto atualizado com sucesso');
    }
    // public function updateUserFromDB()
    // {
    //     DB::table('users')
    //         ->where('id', 8)
    //         ->update([
    //             'email_verified_at' => now()
    //         ]);
    //     return response()->json('user modificado com sucesso');
    // }
    // public function updateOrInsert()
}
