@extends('layouts.mainLayout')

@section('content')
    <h1>Cartas de um determinado set</h1>

    <table class="table">
        <thead>
            <tr>
                <th scope="col">Image</th>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Supertype</th>
                <th scope="col">Rarity</th>
                <th scope="col">Price</th>
                {{-- <th scope="col">Ver</th>
                <th scope="col">Apagar</th> --}}
            </tr>
        </thead>
        <tbody>
            @foreach ($cards as $card)
                <tr>
                    <td><img src="{{ $card->imageLarge }}" class="cards-table-image" /></td>
                    <th scope="row">{{ $card->apiId }}</th>
                    <td>{{ $card->name }}</td>
                    <td>{{ $card->supertype }}</td>
                    <td>{{ $card->rarity }}</td>
                    <td>{{ $card->price }}€</td>
                    <td><a class="btn btn-info" href="{{ route('cards.viewCard', $card->apiId) }}">Ver</a></td>
                    @auth
                        @if (Auth::user()->user_type === 1)
                            <td><a class="btn btn-danger" href="{{ route('cards.delete', $card->apiId) }}">Apagar</a></td>
                        @endif
                    @else
                        <td></td>
                    @endauth
                </tr>
            @endforeach
        </tbody>
    </table>
    <div class="d-flex justify-content-center mt-4">
        {{ $cards->links() }}
    </div>
@endsection
