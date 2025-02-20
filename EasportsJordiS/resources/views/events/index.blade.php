@extends('partials.layout')

@section('content')
    <div class="container py-4">
        <h1 class="mb-4 text-center text-light">Lista de Eventos</h1>

        @auth
            @if (auth()->user()->rol === 'admin')
                <div class="mb-3 text-center">
                    <a href="{{ route('events.create') }}" class="btn btn-primary">
                        <i class="bi bi-plus-circle"></i> Crear Nuevo Evento
                    </a>
                </div>
            @endif
        @endauth

        <div id="events-container" class="row g-4">
            <!-- Los eventos se cargarán aquí dinámicamente -->
        </div>

        <div id="no-events-alert" class="alert alert-secondary text-center d-none">
            <i class="bi bi-info-circle"></i> No hay eventos disponibles en este momento.
        </div>
    </div>
    @auth
        <script>
            var userRole = @json(Auth::user()->rol);
            
        </script>
    @endauth
    <script src="{{ asset('/js/eventIndex.js') }}"></script>
@endsection
