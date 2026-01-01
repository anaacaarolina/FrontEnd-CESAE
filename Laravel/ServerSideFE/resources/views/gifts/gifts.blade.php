@extends('layouts.mainLayout')

@section('content')
    <h2>Lista de Prendas</h2>
    {{--
    - nome da prenda (obrigatório) ---nome
     - valor previsto (obrigatório) ---valor
     - nome da pessoa que vai receber o presente (da tabela de users) (obrigatório) ---user_id
     - valor gasto ---valor_gasto
    Por defeito, quando se apaga um user é também apagada a prenda que lhe corresponde.(on delete cascade)
    Ponto extra: deve haver uma coluna onde mostra a diferença entre o valor previsto e o gasto efectivo. --}}

    <table class="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Nome</th>
                <th scope="col">Valor Previsto</th>
                <th scope="col">Valor Gasto</th>
                <th scope="col">Diferença</th>
                <th scope="col">Para quem</th>
                <th scope="col">Ver</th>
                <th scope="col">Apagar</th>
            </tr>
        </thead>
        <tbody>
            @foreach ($gifts as $gift)
                <tr>
                    <th scope="row">{{ $gift->id }}</th>
                    <td>{{ $gift->nome }}</td>
                    <td>{{ $gift->valor }}€</td>
                    <td>{{ $gift->valor_gasto }}€</td>
                    <td>{{ $gift->diferenca }}€</td>
                    <td>{{ $gift->userName }}</td>
                    <td><a class="btn btn-info" href="{{ route('gifts.view', $gift->id) }}">Ver</a></td>
                    <td><a class="btn btn-danger" href="{{ route('gifts.delete', $gift->id) }}">Apagar</a></td>
                </tr>
            @endforeach
        </tbody>
    </table>
@endsection
