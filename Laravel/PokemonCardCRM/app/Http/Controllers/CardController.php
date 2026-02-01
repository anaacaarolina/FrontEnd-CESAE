<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

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
    public function storeCard(Request $request)
    {
        //
        $request->validate([
            'apiId' => 'required|string',
            'setId' => 'required',
            'name' => 'required|string',
            'supertype' => 'required',
            'rarity' => 'required',
            'imageLarge' => 'image|max:2048'
        ]);
        $image = null;

        if ($request->hasFile('imageLarge')) {
            $image = Storage::putFile('cardImages', $request->file('imageLarge'));
        }

        DB::table('cards')
            ->insert([
                'apiId' => $request->apiId,
                'setId' => $request->setId,
                'name' => $request->name,
                'supertype' => $request->supertype,
                'rarity' => $request->rarity,
                'flavorText' => $request->flavorText,
                'imageLarge' => $image
            ]);
        return redirect()->route('cards.allCards')->with('message', "Successfully added card");
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
    public function updateCard(Request $request, $apiId)
    {
        $card = DB::table('cards')->where('apiId', $apiId)->first();

        if (!$card) {
            abort(404);
        }

        $request->validate([
            'name'       => 'required|string',
            'supertype'  => 'required|string',
            'rarity'     => 'required|string',
            'flavorText' => 'nullable|string',
            'price'      => 'nullable|numeric',
            'imageLarge' => 'nullable|image|max:2048',
        ]);

        $image = $card->imageLarge;

        if ($request->hasFile('imageLarge')) {
            if ($image && !str_starts_with($image, 'http')) {
                Storage::delete($image);
            }

            $image = Storage::putFile('cardImages', $request->file('imageLarge'));
        }

        DB::table('cards')
            ->where('apiId', $apiId)
            ->update([
                'name'       => $request->name,
                'supertype'  => $request->supertype,
                'rarity'     => $request->rarity,
                'flavorText' => $request->flavorText,
                'price'      => $request->price,
                'imageLarge' => $image,
            ]);

        return redirect()
            ->route('cards.viewCard', $apiId)
            ->with('message', 'Card updated successfully');
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
        $query = DB::table('cards')
            ->orderBy('id');

        if (request()->filled('id')) {
            $query->where('id', request()->query('id'));
        }
        if (request()->filled('search')) {
            $search = request()->query('search');

            $query->where(function ($q) use ($search) {
                $q->where('name', 'LIKE', "%{$search}%")
                    ->orWhere('flavorText', 'LIKE', "%{$search}%")
                    ->orWhere('apiId', 'LIKE', "%{$search}%")
                    ->orWhere('number', 'LIKE', "%{$search}%")
                    ->orWhere('rarity', 'LIKE', "%{$search}%")
                    ->orWhere('artist', 'LIKE', "%{$search}%")
                    ->orWhere('price', 'LIKE', "%{$search}%");
            });
        }

        $cards = $query->paginate(50)->withQueryString();

        return view("cards.allCards", compact('cards'));
    }
    public function addCardPage()
    {
        $sets = DB::table('sets')
            ->select('sets.name', 'sets.id')
            ->get();

        return view('cards.addCard', compact('sets'));
    }

    public function editCardPage($apiId)
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
        return view('cards.editCard', compact(
            'card',
            'abilities',
            'attacks',
            'attackCosts',
            'types',
            'subtypes',
            'resistances',
            'weaknesses',
            'retreatCosts',
            'rules',
        ));
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
            'rules',
        ));
    }
}
