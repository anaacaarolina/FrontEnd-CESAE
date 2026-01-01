@extends('layouts.mainLayout')

@section('content')
    <h5>Informação da Prenda</h5>
    <p>Nome: {{ $gift->nome }}</p>
    <p>Valor Previsto: {{ $gift->valor }}€</p>
    <p>Valor Gasto: {{ $gift->valor_gasto }}€</p>
    <p>Diferença de valores: {{ $gift->diferenca }}€</p>
    <p>Quem recebe a prenda é <b>{{ $gift->userName }}</b></p>
@endsection
