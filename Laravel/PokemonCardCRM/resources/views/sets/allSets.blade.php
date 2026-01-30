@extends('layouts.mainLayout')

@section('content')
    <h1>All Sets!</h1>

    <table class="table">
        <thead>
            <tr>
                <th scope="col">Symbol</th>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Series</th>
                <th scope="col">Release Date</th>
                <th scope="col">Card Total</th>
                <th scope="col"> </th>
                <th scope="col"> </th>
            </tr>
        </thead>
        <tbody>
            @foreach ($sets as $set)
                <tr>
                    <td><img src="{{ $set->logo }}" class="sets-table-image" /></td>
                    <th scope="row">{{ $set->apiId }}</th>
                    <td>{{ $set->name }}</td>
                    <td>{{ $set->series }}</td>
                    <td>{{ $set->releaseDate }}</td>
                    <td>{{ $set->total }}</td>
                    <td><a class="btn btn-info" href="{{ route('sets.viewSet', $set->apiId) }}">Ver</a></td>
                    @auth
                        @if (Auth::user()->user_type === 1)
                            <td><a class="btn btn-danger" href="{{ route('sets.delete', $set->apiId) }}">Apagar</a></td>
                        @endif
                    @else
                        <td></td>
                    @endauth

                </tr>
            @endforeach
        </tbody>
    </table>

    {{-- apiId
    name
    series
    total
    releaseDate
    symbol --}}
@endsection
