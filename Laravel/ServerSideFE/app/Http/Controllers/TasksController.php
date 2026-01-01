<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;


class TasksController extends Controller
{

    public function allTasks()
    {
        $tasks = DB::table('tasks')
            ->join('users', 'tasks.user_id', 'users.id')
            ->select('tasks.*', 'users.name as userName')
            ->get();

        // dd($tasks);

        return view('tasks.allTasks', compact('tasks'));
    }


    public function insertTasks()
    {
        DB::table('tasks')
            ->insert(
                [
                    'name' => 'Prepare meeting notes',
                    'description' => 'summarize last week',
                    'due_at' => '2025-12-15',
                    'status' => '1',
                    'user_id' => '5'
                ],
                [
                    'name' => 'Call the bank',
                    'description' => 'Ask about account update',
                    'due_at' => '2025-12-13',
                    'status' => '2',
                    'user_id' => '4'
                ],
            );
        return response()->json('task inserida com sucesso');
    }
    public function viewTask($id)
    {
        // query que vai buscar o user que estou a clicar
        // $task = DB::table('tasks')
        //     ->where('id', $id)
        //     ->first();

        $task = DB::table('tasks')
            ->join('users', 'tasks.user_id', 'users.id')
            ->select('tasks.*', 'users.name as userName')
            ->first();


        //COM MODELO
        // $task = Task::where('id',$id)
        //         ->first();
        // dd($task);
        return view('tasks.viewTasks', compact('task'));
    }


    public function deleteTask($id)
    {
        $task = DB::table('tasks')
            ->where('id', $id)
            ->delete();

        return back();
    }
    // p
    //
}
