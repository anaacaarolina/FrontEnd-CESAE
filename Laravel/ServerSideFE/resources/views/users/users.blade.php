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
    @endsection
