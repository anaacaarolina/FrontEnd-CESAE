<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UtilController extends Controller
{
    public function home()
    {
        //codigo ficticio que vem de uma consulta à base de dados
        $nomeCompleto = 'Carolina Pinto';
        return view('utils.home', compact('nomeCompleto'));
    }
    public function hello()
    {
        $myName = 'Carolina';
        $myPass = 1234455;

        return "<h1>Olá Mundo $myName</h1>";
    }
    public  function turma($name)
    {
        //ir à base de dados e buscar toda a info da turma

        return "<h1>Turma: $name</h1>";
    }
    public function fallback()
    {
        return view('utils.fallback');
    }
}
