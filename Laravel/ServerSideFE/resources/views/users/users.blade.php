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

        <table>
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nome</th>
                    <th scope="col">Email</th>
                    <th scope="col">Nif</th>
                </tr>
            </thead>
            <tbody>
                @foreach ($users as $user)
                    <tr>
                        <td scope="row">{{ $user->id }}</td>
                        <td scope="row">{{ $user->name }}</td>
                        <td scope="row">{{ $user->email }}</td>
                        <td scope="row">{{ $user->nif }}</td>
                    </tr>
                @endforeach
            </tbody>
        </table>
    @endsection
