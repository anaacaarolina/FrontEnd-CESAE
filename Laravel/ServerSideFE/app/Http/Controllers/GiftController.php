<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class GiftController extends Controller
{
    //

    public function giftsPage()
    {

        $gifts = DB::table('gifts')
            ->join('users', 'gifts.user_id', 'users.id')
            ->select('gifts.*', 'users.name as userName', DB::raw('ROUND(gifts.valor - gifts.valor_gasto, 2) as diferenca'))
            ->get();
        return view('gifts.gifts', compact('gifts'));
    }
    public function viewGift($id)
    {
        $gift = DB::table('gifts')
            ->join('users', 'gifts.user_id', 'users.id')
            ->select('gifts.*', 'users.name as userName', DB::raw('ROUND(gifts.valor - gifts.valor_gasto, 2) as diferenca'))
            ->first();

        return view('gifts.viewGifts', compact('gift'));
    }

    public function deleteGift($id)
    {
        $gift = DB::table('gifts')
            ->where('id', $id)
            ->delete();

        return back();
    }
}
