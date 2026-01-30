@extends('layouts.mainLayout')

@section('content')
    <h2>Olá! Aqui podes adicionar utilizadores </h2>

    <form method="POST" action="{{ route('users.store') }}">
        @csrf
        <div class="mb-3">
            <label for="exampleInputName1" class="form-label">Name</label>
            <input required name="name" type="text" class="form-control" id="exampleInputName1">
            @error('name')
                <p>Nome inválido</p>
            @enderror
        </div>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input name="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            @error('email')
                <p>Email inválido</p>
            @enderror
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input required name="password" type="password" class="form-control" id="exampleInputPassword1">
            @error('password')
                <p>Password inválida</p>
            @enderror
        </div>
        <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
@endsection
