<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Homepage</title>
    <link rel="stylesheet" href="{{asset('css/style.css')}}">
</head>
<body>
    @php
        //qualquer código de php que eu quiser :)
        $nomeCompleto = 'Carolina Pinto';
    @endphp
    <h3>Homepage da {{ $nomeCompleto }}</h3>
    <ul>
        <li><a href="{{route('utils.hello')}}">Olá Mundo</a></li>
        <li><a href="{{route('users.users')}}">Todos os Utilizador</a></li>
        <li><a href="{{route('users.addUsers')}}">Adicionar Utilizador</a></li>
    </ul>
    <img src="{{asset('images/cat.webp')}}" style="width: 200px">
</body>
</html>