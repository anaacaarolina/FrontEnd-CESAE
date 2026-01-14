@extends('layouts.mainLayout')

@section('content')
    <h6>Info do user</h6>
    <p>Name: {{ $user->name }}</p>
    <p>Nif: {{ $user->nif }}</p>
    <p>Email: {{ $user->email }}</p>
    <p>Address: {{ $user->address }}</p>

    <form method="POST" action="{{ route('users.update') }}">
        @csrf
        @method('PUT')
        <input type="hidden" name="id" value="{{ $user->id }}">
        <div class="mb-3">
            <label for="exampleInputName1" class="form-label">Name</label>
            <input value="{{ $user->name }}" required name="name" type="text" class="form-control"
                id="exampleInputName1">
            @error('name')
                <p>Nome inválido</p>
            @enderror
        </div>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input value="{{ $user->email }}" name="email" type="email" class="form-control" id="exampleInputEmail1"
                aria-describedby="emailHelp" disabled>
        </div>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Address</label>
            <input value="{{ $user->address }}" name="address" type="text" class="form-control"
                id="exampleInputAddress1">
        </div>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Nif</label>
            <input value="{{ $user->nif }}" name="nif" type="text" class="form-control" id="exampleInputNif1">
        </div>
        <button type="submit" class="btn btn-primary">Atualizar</button>
    </form>
@endsection
