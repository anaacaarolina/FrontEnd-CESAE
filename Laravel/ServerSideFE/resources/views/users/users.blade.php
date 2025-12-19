    @extends('layouts.mainLayout')

    @section('content')
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
                    <th scope="col">Nome</th>
                    <th scope="col">Email</th>
                    <th scope="col">Nif</th>
                    <th scope="col">Ver</th>
                    <th scope="col">Apagar</th>
                </tr>
            </thead>
            <tbody>
                @foreach ($users as $user)
                    <tr>
                        <th scope="row">{{ $user->id }}</th>
                        <td>{{ $user->name }}</td>
                        <td>{{ $user->email }}</td>
                        <td>{{ $user->nif }}</td>
                        <td><a class="btn btn-info" href="{{ route('users.view', $user->id) }}">Ver</a></td>
                        <td><a class="btn btn-danger" href="{{ route('users.delete', $user->id) }}">Apagar</a></td>

                    </tr>
                @endforeach
            </tbody>
        </table>
    @endsection
