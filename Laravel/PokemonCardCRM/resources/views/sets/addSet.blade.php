@extends('layouts.mainLayout')

@section('content')
    <h2>Olá! Aqui podes adicionar tarefas </h2>

    <form method="POST" action="{{ route('sets.store') }}"enctype="multipart/form-data">

        @csrf
        <div class="mb-3">
            <label for="set-apiId-input" class="form-label">Api ID</label>
            <input required name="apiId" type="text" class="form-control" id="apiId-input">
            @error('apiId')
                <p>Invalid API ID</p>
            @enderror
        </div>
        <div class="mb-3">
            <label for="set-name-input" class="form-label">Name</label>
            <input required name="name" type="text" class="form-control" id="set-name-input">
            @error('name')
                <p>Invalid Name</p>
            @enderror
        </div>
        <div class="mb-3">
            <label for="set-description-input" class="form-label">Series
            </label>
            <input name="series" type="text" class="form-control" id="set-description-input">
            @error('series')
                <p>Invalid Series</p>
            @enderror
        </div>
        <div class="mb-3">
            <label for="set-release-date-input" class="form-label">Release Date
            </label>
            <input name="releaseDate" type="date" class="form-control" id="set-release-date-input">
            @error('releaseDate')
                <p>Invalid Release Date</p>
            @enderror
        </div>
        <div class="mb-3">
            <label for="set-logo-input" class="form-label">Logo
            </label>
            <input name="logo" type="file" class="form-control" id="set-logo-input" accept="image/*">
            @error('logo')
                <p>Invalid Logo</p>
            @enderror
        </div>


        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
@endsection
