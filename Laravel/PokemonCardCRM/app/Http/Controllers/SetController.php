<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;


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
    public function addSetPage()
    {
        return view('sets.addSet');
    }

    public function storeSet(Request $request)
    {
        //

        $request->validate([
            'apiId' => 'required|string',
            'name' => 'required|string|max:50',
            'series' => 'required|string',
            'releaseDate' => 'required',
            'logo' => 'required|max:2048'
        ]);
        $logo = null;

        if ($request->hasFile('logo')) {
            $logo = Storage::putFile('setLogos', $request->logo);
        }

        DB::table('sets')
            ->insert([
                'apiId' => $request->apiId,
                'name' => $request->name,
                'series' => $request->series,
                'releaseDate' => $request->releaseDate,
                'logo' => $logo
            ]);
        return redirect()->route('sets.allSets')->with('message', "Successfully added set");
    }

    public function deleteSet($apiId)
    {
        $set = DB::table('sets')
            ->where('apiId', $apiId)
            ->delete();

        return back();
    }
}
