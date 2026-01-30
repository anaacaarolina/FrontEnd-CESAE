<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CardController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }

    public function allCards()
    {
        $cards = DB::table('cards')
            ->orderBy('id')
            ->paginate(50);

        return view("cards.allCards", compact('cards'));
    }
    public function viewCard($apiId)
    {
        $card = DB::table('cards')
            ->where('apiId', $apiId)
            ->first();

        // dd($card);

        $cardId = $card->id;

        //abilities
        $abilities = DB::table('abilities')
            ->where('cardId', $cardId)
            ->get();

        //attacks
        $attacks = DB::table('attacks')
            ->where('cardId', $cardId)
            ->get();

        //attack costs
        $attackCosts = DB::table('attack_costs')
            ->join('energy_types', 'attack_costs.typeId', 'energy_types.id')
            ->whereIn(
                'attack_costs.attackId',
                $attacks->pluck('id')
            )
            ->select('attack_costs.attackId', 'energy_types.name', 'attack_costs.quantity')
            ->get()
            ->groupBy('attackId');

        //types
        $types = DB::table('card_to_types')
            ->join('energy_types', 'card_to_types.typeId', 'energy_types.id')
            ->where('card_to_types.cardId', $cardId)
            ->select('energy_types.name')
            ->get();

        //subtypes
        $subtypes = DB::table('card_to_subtypes')
            ->join('subtypes', 'card_to_subtypes.subtypeId', 'subtypes.id')
            ->where('card_to_subtypes.cardId', $cardId)
            ->select('subtypes.name')
            ->get();

        //resistances
        $resistances = DB::table('resistances')
            ->where('cardId', $cardId)
            ->get();

        //weaknesses
        $weaknesses = DB::table('weaknesses')
            ->where('cardId', $cardId)
            ->get();

        //retreat costs
        $retreatCosts = DB::table('card_to_retreat_costs')
            ->join('energy_types', 'card_to_retreat_costs.typeId', 'energy_types.id')
            ->where('card_to_retreat_costs.cardId', $cardId)
            ->select('energy_types.name')
            ->get();

        //rules
        $rules = DB::table('card_to_rules')
            ->join('rules', 'card_to_rules.ruleId', 'rules.id')
            ->where('card_to_rules.cardId', $cardId)
            ->select('rules.ruleText')
            ->get();

        return view('cards.viewCard', compact(
            'card',
            'abilities',
            'attacks',
            'attackCosts',
            'types',
            'subtypes',
            'resistances',
            'weaknesses',
            'retreatCosts',
            'rules'
        ));
    }
}
