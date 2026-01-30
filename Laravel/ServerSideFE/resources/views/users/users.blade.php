    @extends('layouts.mainLayout')

    @section('content')
        @if (session('message'))
            <div class="alert alert-success">{{ session('message') }}</div>
        @endif
        <h2>Olá! Aqui tens uma lista com todos os utilizadores </h2>
        <p>Nome: {{ $cesaeInformation['name'] }}</p>
        <p>Morada: {{ $cesaeInformation['address'] }}</p>
        <p>Email: {{ $cesaeInformation['email'] }}</p>

        <h2>Students</h2>
        <ul>
            @foreach ($students as $student)
                <li>{{ $student['name'] }}: {{ $student['email'] }}</li>
            @endforeach
        </ul>

        <h4>Users que são carregados da base de dados (tabela de users)</h4>

        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Photo</th>
                    <th scope="col">Nome</th>
                    <th scope="col">Email</th>
                    <th scope="col">Nif</th>
                    @if (Route::has('login'))
                        @auth
                            <th scope="col">Ver</th>
                            @if (Auth::user()->email == 'admin@gmail.com')
                                <th scope="col">Apagar</th>
                            @endif
                        @else
                            <th></th>
                            <th></th>
                        @endauth
                    @endif
                </tr>
            </thead>
            <tbody>
                @foreach ($users as $user)
                    <tr>
                        <th scope="row">{{ $user->id }}</th>
                        <td><img width="30px" height="30px"
                                src="{{ $user->photo ? asset('storage/' . $user->photo) : asset('images/no_image.png') }}">
                        </td>
                        <td>{{ $user->name }}</td>
                        <td>{{ $user->email }}</td>
                        <td>{{ $user->nif }}</td>
                        @if (Route::has('login'))
                            @auth
                                <td><a class="btn btn-info" href="{{ route('users.view', $user->id) }}">Ver</a></td>
                                @if (Auth::user()->email == 'admin@gmail.com')
                                    <td><a class="btn btn-danger" href="{{ route('users.delete', $user->id) }}">Apagar</a></td>
                                @endif
                            @else
                                <th></th>
                                <th></th>
                            @endauth
                        @endif
                    </tr>
                @endforeach
            </tbody>
        </table>
    @endsection
