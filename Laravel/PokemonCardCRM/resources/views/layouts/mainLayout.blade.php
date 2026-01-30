<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Pokémon Card CRM</title>
    <!--Bootstrap-->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">

    <link rel="stylesheet" href="{{ asset('css/app.css') }}">

    <!--Bootstrap-->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI" crossorigin="anonymous" defer>
    </script>
</head>

<body>
    <header>
        <nav class="navbar navbar-expand-lg ">
            <div class="container-fluid">
                <a class="navbar-brand" href="{{ route('home') }}"><img class="navbar-image"
                        src="{{ asset('favicon.ico') }}"></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                        <li class="nav-item">
                            <a class="nav-link" href="{{ route('sets.allSets') }}">Sets</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="{{ route('cards.allCards') }}">Cards</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="{{ route('users.allUsers') }}">Users</a>
                        </li>



                    </ul>
                </div>
                @if (Route::has('login'))
                    <nav class="flex items-center justify-end gap-4">
                        @auth
                            <form action="{{ route('logout') }}" method="post">
                                @csrf
                                <button class="btn btn-info" type="submit">Logout</button>
                            </form>
                        @else
                            <a href="{{ route('login') }}">
                                Log in
                            </a>

                            @if (Route::has('users.addUsers'))
                                <a href="{{ route('users.addUsers') }}">
                                    Register
                                </a>
                            @endif
                        @endauth
                    </nav>
                @endif
            </div>
        </nav>
    </header>
    <div class="container">
        @yield('content')
    </div>
    <footer class="fixed-bottom">Footer</footer>
</body>

</html>
