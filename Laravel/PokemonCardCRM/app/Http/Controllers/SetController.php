<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;


class SetController extends Controller
{
    public function allSets()
    {
        $sets = DB::table('sets')
            ->get();

        return view("sets.allSets", compact('sets'));
    }
    public function viewSet($apiId)
    {
        $set = DB::table('sets')
            ->where('apiId', $apiId)
            ->first();

        $cards = DB::table('cards')
            ->where('setId', $set->id)
            ->get();

        return view('sets.viewSet', compact('cards'));
    }
    public function deleteSet($apiId)
    {
        $set = DB::table('sets')
            ->where('apiId', $apiId)
            ->delete();

        return back();
    }
}
