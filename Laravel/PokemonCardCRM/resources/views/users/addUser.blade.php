@extends('layouts.mainLayout')

@section('content')
    <h2>Olá! Aqui podes adicionar utilizadores </h2>

    <form method="POST" action="{{ route('users.store') }}">
        @csrf
        <div class="mb-3">
            <label for="exampleInputName1" class="form-label">Name</label>
            <input required name="name" type="text" class="form-control" id="exampleInputName1">
            @if ($errors->any())
                @error('name')
                    <p>Invalid Name</p>
                @enderror
            @endif
        </div>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input name="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>

            @if ($errors->any())
                @error('email')
                    <p>Invalid Email</p>
                @enderror
            @endif
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input required name="password" type="password" class="form-control" id="exampleInputPassword1">

            @if ($errors->any())
                @error('password')
                    <p>Invalid Password</p>
                @enderror
            @endif
        </div>

        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
@endsection
