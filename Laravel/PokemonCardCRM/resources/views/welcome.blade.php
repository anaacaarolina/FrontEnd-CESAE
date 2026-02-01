@extends('layouts.mainLayout')

@section('content')
    @if (session('message'))
        <div class="alert alert-success">{{ session('message') }}</div>
    @endif
    <h1>Hello!</h1>
@endsection
