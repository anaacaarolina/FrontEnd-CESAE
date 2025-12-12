@extends('layouts.mainLayout')

@section('content')
    <h2>Todas as tarefas</h2>
    <table>
        <thead>
            <tr>
                <th scope="col">id</th>
                <th scope="col">Nome</th>
                <th scope="col">Descrição</th>
                <th scope="col">Data de conclusão</th>
                <th scope="col">Status</th>
                <th scope="col">User</th>
            </tr>
        </thead>
        <tbody>
            @foreach ($tasks as $task)
                <tr>

                    <th scope="row">{{ $task->id }}</th>
                    <td>{{ $task->name }}</td>
                    <td>{{ $task->description }}</td>
                    <td>{{ $task->due_at }}</td>
                    @if ($task->status === 1)
                        <td>Terminado</td>
                    @endif
                    @if ($task->status === 0)
                        <td>Por fazer</td>
                    @endif
                    <td>{{ $task->userName }}</td>
                </tr>
            @endforeach
        </tbody>
    </table>
@endsection
