@extends('layouts.mainLayout')

@section('content')
    <h6>Info da tarefa</h6>
    <p>Nome: {{ $task->name }}</p>
    <p>Descrição: {{ $task->description }}</p>
    <p>Data: {{ $task->due_at }}</p>
    <p>Responsável: {{ $task->userName }}</p>
@endsection
