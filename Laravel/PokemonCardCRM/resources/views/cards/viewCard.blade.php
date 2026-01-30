@extends('layouts.mainLayout')

@section('content')
    <h2>{{ $card->name }}</h2>
    <h4>{{ $card->supertype }}</h4>
    <img src="{{ $card->imageLarge }}">
    @if ($card->hp)
        <p><strong>HP:</strong> {{ $card->hp }}</p>
    @endif
    <p><strong>Number:</strong> {{ $card->number }}</p>
    <p><strong>Artist:</strong> {{ $card->artist }}</p>
    <p><strong>Rarity:</strong> {{ $card->rarity }}</p>
    @if ($card->evolvesFrom)
        <p><strong>Evolves from:</strong> {{ $card->evolvesFrom }}</p>
    @endif
    @if ($card->flavorText)
        <p><strong>Flavor text:</strong> {{ $card->flavorText }}</p>
    @endif
    <p><strong>Price</strong> {{ $card->price }}</p>


    @if ($types->count())
        <h3>Types</h3>
        <ul>
            @foreach ($types as $type)
                <li>{{ $type->name }}</li>
            @endforeach
        </ul>
    @endif

    @if ($abilities->count())
        <h3>Abilities</h3>
        @foreach ($abilities as $ability)
            <h5>{{ $ability->abilityName }}</h5>
            <p><i>{{ $ability->abilityType }}</i></p>
            <p>{{ $ability->abilityDescription }}</p>
        @endforeach
    @endif

    @if ($attacks->count())
        <h3>Attacks</h3>
        @foreach ($attacks as $attack)
            <h5>{{ $attack->attackName }}</h5>
            <p><strong>Damage:</strong> {{ $attack->attackDamage }}</p>
            <p>{{ $attack->attackDescription }}</p>
            @if (@isset($attackCosts[$attack->id]))
                <p><strong>Cost: </strong>
                    @foreach ($attackCosts[$attack->id] as $cost)
                        {{ $cost->name }} x{{ $cost->quantity }}
                    @endforeach
                </p>
            @endif
        @endforeach
    @endif
    @if ($weaknesses->count())
        <h3>Weaknesses</h3>
        <ul>
            @foreach ($weaknesses as $weakness)
                <li>{{ $weakness->weaknessType }} {{ $weakness->weaknessValue }}</li>
            @endforeach
        </ul>
    @endif
    @if ($resistances->count())
        <h3>Resistances</h3>
        <ul>
            @foreach ($resistances as $resistance)
                <li>{{ $resistance->resistanceType }} {{ $resistance->resistanceValue }}</li>
            @endforeach
        </ul>
    @endif
    @if ($card->convertedRetreatCost)
        <h3>Retreat Cost</h3>
        <p>{{ $card->convertedRetreatCost }}</p>
        @if ($retreatCosts->count())
            <ul>
                @foreach ($retreatCosts as $cost)
                    <li>{{ $cost->name }}</li>
                @endforeach
            </ul>
        @endif
    @endif
    @if ($rules->count())
        <div class="card-section">
            <h3>Rules</h3>
            <ul>
                @foreach ($rules as $rule)
                    <li>{{ $rule->ruleText }}</li>
                @endforeach
            </ul>
        </div>
    @endif
    @if ($card->price)
        <div class="card-section">
            <h3>Market Price</h3>
            <p>€{{ number_format($card->price, 2) }}</p>
        </div>
    @endif
@endsection

{{-- CARD
name
supertype
imageLarge
number
artist
rarity
evolvesFrom
flavorText
price


TYPE
name

SUBTYPE
name

ABILITIES
abilityName
abilityType
abilityDescription

ATTACKS
attackName
attackDamage
attackDescription
attackCosts

WEAKNESSES

RESISTANCES

RETREAT COST

RULES --}}
