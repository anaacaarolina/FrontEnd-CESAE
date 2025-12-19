<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

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
