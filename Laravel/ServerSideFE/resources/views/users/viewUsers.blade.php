@extends('layouts.mainLayout')

@section('content')
    <h6>Info do user</h6>
    <p>Name: {{ $user->name }}</p>
    <p>Nif: {{ $user->nif }}</p>
    <p>Email: {{ $user->email }}</p>
    <p>Address: {{ $user->address }}</p>
@endsection
