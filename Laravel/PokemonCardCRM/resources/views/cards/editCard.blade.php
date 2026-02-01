@extends('layouts.mainLayout')

@section('content')
    <h2>Edit Card - {{ $card->name }}</h2>

    <form method="POST" action="{{ route('cards.update', $card->apiId) }}" enctype="multipart/form-data">
        @csrf
        @method('PUT')

        <div class="mb-3">
            <label class="form-label">Name</label>
            <input type="text" name="name" class="form-control" value="{{ old('name', $card->name) }}" required>
            @error('name')
                <div class="text-danger">{{ $message }}</div>
            @enderror
        </div>

        <div class="mb-3">
            <label class="form-label">Supertype</label>
            <input type="text" name="supertype" class="form-control" value="{{ old('supertype', $card->supertype) }}"
                required>
            @error('supertype')
                <div class="text-danger">{{ $message }}</div>
            @enderror
        </div>

        <div class="mb-3">
            <label class="form-label">Rarity</label>
            <input type="text" name="rarity" class="form-control" value="{{ old('rarity', $card->rarity) }}" required>
            @error('rarity')
                <div class="text-danger">{{ $message }}</div>
            @enderror
        </div>

        <div class="mb-3">
            <label class="form-label">Flavor Text</label>
            <textarea name="flavorText" class="form-control" rows="3">{{ old('flavorText', $card->flavorText) }}</textarea>
            @error('flavorText')
                <div class="text-danger">{{ $message }}</div>
            @enderror
        </div>

        <div class="mb-3">
            <label class="form-label">Price (€)</label>
            <input type="number" step="0.01" name="price" class="form-control"
                value="{{ old('price', $card->price) }}">
            @error('price')
                <div class="text-danger">{{ $message }}</div>
            @enderror
        </div>

        <div class="mb-3">
            <label class="form-label">Current Image</label><br>
            <img src="{{ Str::startsWith($card->imageLarge, ['http://', 'https://'])
                ? $card->imageLarge
                : asset('storage/' . $card->imageLarge) }}"
                class="sets-table-image mb-2">
        </div>

        <div class="mb-3">
            <label class="form-label">Replace Image (optional)</label>
            <input type="file" name="imageLarge" class="form-control" accept="image/*">
            @error('imageLarge')
                <div class="text-danger">{{ $message }}</div>
            @enderror
        </div>

        <div class="d-flex gap-2">
            <button type="submit" class="btn btn-success">
                Save Changes
            </button>

            <a href="{{ route('cards.viewCard', $card->apiId) }}" class="btn btn-secondary">
                Cancel
            </a>
        </div>
    </form>
@endsection
