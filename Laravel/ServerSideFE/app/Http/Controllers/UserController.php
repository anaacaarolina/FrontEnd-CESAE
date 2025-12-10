<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

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
        // dd($cesaeInformation);
        return view('users.users', compact('cesaeInformation', 'students'));
    }
}
