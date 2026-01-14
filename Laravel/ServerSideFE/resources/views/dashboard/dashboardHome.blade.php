@extends('layouts.mainLayout')

@section('content')
    {{-- @if (Auth::user()->isAdmin()) --}}
    @if (Auth::user()->user_type === \App\Models\User::USER_TYPE_ADMIN)
        <div class="alert alert-success">Conta de Administrador</div>
    @endif
    <h3>Olá {{ Auth::user()->name }}</h3>
@endsection
