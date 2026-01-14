<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    const STATUSTODO = 0;
    const STATUSDONE = 1;
    const STATUSCOMPLETEDTEXT = "completed";
    const STATUS = [
        0 => 'To Do',
        1 => 'Done',
    ];


    protected $fillable = ['name', 'description', 'user_id'];
}
