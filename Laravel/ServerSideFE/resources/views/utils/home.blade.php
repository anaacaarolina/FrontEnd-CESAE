@php
    //qualquer código de php que eu quiser; funções, variáveis, etc.
@endphp
@extends('layouts.mainLayout')

@section('content')
    <h3>Homepage da {{ $nomeCompleto ? $nomeCompleto : 'escola' }}</h3>

    @if ($nomeCompleto)
        <h5>Olá, {{ $nomeCompleto }}!</h5>
        <img src="{{ asset('images/cat.webp') }}" style="width: 200px">
    @else
        <h5>Olá, user</h5>
        <img src="{{ asset('images/no_image.png') }}" style="width: 200px">
    @endif
    <ul>
        <li><a href="{{ route('utils.hello') }}">Olá Mundo</a></li>
        <li><a href="{{ route('users.users') }}">Todos os Utilizador</a></li>
        <li><a href="{{ route('users.addUsers') }}">Adicionar Utilizador</a></li>
        <li><a href="{{ route('tasks.allTasks') }}">Todas as Tarefas</a></li>
        <b>
            <li><a href="{{ route('gifts.gifts') }}">Lista de Prendas</a></li>
        </b>
    </ul>
@endsection
