@extends('layouts.mainLayout')

@section('content')
    <h2>Olá! Aqui podes adicionar cartas </h2>
    <form method="POST" action="{{ route('cards.store') }}"enctype="multipart/form-data">

        @csrf
        <div class="mb-3">
            <label for="card-apiId-input" class="form-label">Api ID</label>
            <input required name="apiId" type="text" class="form-control" id="apiId-input">
            @error('apiId')
                <p>Invalid API ID</p>
            @enderror
        </div>
        <div class="mb-3">
            <label for="card-set-input" class="form-label">Set</label>
            <select name="setId">
                <option value="">--Please choose an option--</option>
                @foreach ($sets as $set)
                    <option value="{{ $set->id }}">{{ $set->name }}</option>
                @endforeach
            </select>
        </div>
        <div class="mb-3">
            <label for="card-name-input" class="form-label">Name
            </label>
            <input name="name" type="text" class="form-control" id="card-name-input">
            @error('name')
                <p>Invalid Name</p>
            @enderror
        </div>
        <div class="mb-3">
            <label for="card-supertype-input" class="form-label">Supertype
            </label>
            <input name="supertype" type="text" class="form-control" id="card-supertype-input">
            @error('series')
                <p>Invalid Supertype</p>
            @enderror
        </div>
        <div class="mb-3">
            <label for="card-flavor-text-input" class="form-label">Flavor Text
            </label>
            <input name="flavorText" type="text" class="form-control" id="card-flavor-text-input">
            @error('series')
                <p>Invalid Flavor Text</p>
            @enderror
        </div>
        <div class="mb-3">
            <label for="card-rarity-input" class="form-label">Rarity
            </label>
            <input name="rarity" type="text" class="form-control" id="card-rarity-input">
            @error('series')
                <p>Invalid Rarity</p>
            @enderror
        </div>

        <div class="mb-3">
            <label for="card-image-input" class="form-label">Image
            </label>
            <input name="imageLarge" type="file" class="form-control" id="card-image-input" accept="image/*">
            @error('imageLarge')
                <p>Invalid Image</p>
            @enderror
        </div>


        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
@endsection
