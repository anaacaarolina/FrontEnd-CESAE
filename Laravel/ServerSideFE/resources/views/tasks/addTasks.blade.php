@extends('layouts.mainLayout')

@section('content')
    <h2>Olá! Aqui podes adicionar tarefas </h2>

    <form method="POST" action="{{ route('tasks.store') }}">
        @csrf
        <div class="mb-3">
            <label for="exampleInputName1" class="form-label">Name</label>
            <input required name="name" type="text" class="form-control" id="exampleInputName1">
            @error('name')
                <p>Nome inválido</p>
            @enderror
        </div>
        <div class="mb-3">
            <label for="exampleInputdescription1" class="form-label">Description</label>
            <input name="description" type="text" class="form-control" id="exampleInputdescription1">
            @error('description')
                <p>Descrição inválida</p>
            @enderror
        </div>
        <div class="mb-3">
            <label for="exampleInputUser1" class="form-label">User</label>
            <select name="userId">
                <option value="">--Please choose an option--</option>
                @foreach ($users as $user)
                    <option value="{{ $user->id }}">{{ $user->name }}</option>
                @endforeach
            </select>
            @error('userId')
                <p>User inválido</p>
            @enderror
        </div>
        <div class="mb-3">
            <label for="exampleInputStatus1" class="form-label">Status</label>
            <select name="status">
                <option value="">--Please choose an option--</option>
                <option value="0">To Do</option>
                <option value="1">Done</option>
            </select>
            @error('status')
                <p>Status inválido</p>
            @enderror
        </div>
        <div class="mb-3">
            <label for="dueDate" class="form-label">Due Date</label>
            <input required name="dueDate" type="date" class="form-control" id="exampleInputdate1">
            @error('dueDate')
                <p>Data Inválida</p>
            @enderror
        </div>

        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
@endsection
