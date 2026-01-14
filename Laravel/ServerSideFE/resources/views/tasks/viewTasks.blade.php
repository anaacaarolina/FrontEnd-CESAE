@extends('layouts.mainLayout')

@section('content')
    <h6>Info da tarefa</h6>
    <p>Nome: {{ $task->name }}</p>
    <p>Descrição: {{ $task->description }}</p>
    <p>Data: {{ $task->due_at }}</p>
    <p>Responsável: {{ $task->userName }}</p>

    <form method="POST" action="{{ route('tasks.update') }}">
        @csrf
        @method('PUT')
        <div class="mb-3">
            <input type="hidden" name="id" value="{{ $task->id }}">
            <label for="exampleInputName1" class="form-label">Name</label>
            <input value="{{ $task->name }}" required name="name" type="text" class="form-control"
                id="exampleInputName1" disabled>
            @error('name')
                <p>Nome inválido</p>
            @enderror
        </div>
        <div class="mb-3">
            <label for="exampleInputdescription1" class="form-label">Description</label>
            <input value="{{ $task->description }}" name="description" type="text" class="form-control"
                id="exampleInputdescription1">
            @error('description')
                <p>Descrição inválida</p>
            @enderror
        </div>
        <div class="mb-3">
            <label for="exampleInputUser1" class="form-label">User</label>
            <select name="userId">
                <option value="">--Please choose an option--</option>
                @foreach ($users as $user)
                    {{-- Add "selected" depending on the responsible user of the task --}}
                    <option value="{{ $user->id }}" {{ $task->user_id == $user->id ? 'selected' : '' }}>
                        {{ $user->name }}</option>
                @endforeach
            </select>
            @error('userId')
                <p>User inválido</p>
            @enderror
        </div>
        <div class="mb-3">
            <label for="exampleInputStatus1" class="form-label">Status</label>
            {{-- Checkbox to modify status of task --}}
            @if ($task->status == \App\Models\Task::STATUSTODO)
                <input type="checkbox" id="taskStatus" name="status" value="{{ \App\Models\Task::STATUSDONE }}">
                <label for="taskStatus"> TERMINADA</label><br>
            @endif
            @if ($task->status == \App\Models\Task::STATUSDONE)
                <p>Terminada</p>
            @endif

            @error('status')
                <p>Status inválido</p>
            @enderror
        </div>
        <div class="mb-3">
            <label for="dueDate" class="form-label">Due Date</label>
            <input value="{{ $task->due_at }}" required name="dueDate" type="date" class="form-control"
                id="exampleInputdate1">
            @error('dueDate')
                <p>Data Inválida</p>
            @enderror
        </div>

        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
@endsection
