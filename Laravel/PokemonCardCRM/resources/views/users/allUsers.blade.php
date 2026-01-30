    @extends('layouts.mainLayout')

    @section('content')
        <h2>Users</h2>

        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nome</th>
                    <th scope="col">Email</th>
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
                        <td>{{ $user->name }}</td>
                        <td>{{ $user->email }}</td>
                        @if (Route::has('login'))
                            @auth
                                <td><a class="btn btn-info" href="{{ route('users.viewUser', $user->id) }}">Ver</a></td>
                                @if (Auth::user()->user_type === 1)
                                    <td><a class="btn btn-danger" href="{{ route('users.delete', $user->id) }}">Apagar</a>
                                    </td>
                                @endif
                            @else
                                <td></td>
                                <td></td>
                            @endauth
                        @endif
                    </tr>
                @endforeach
            </tbody>
        </table>
    @endsection
