<?php

namespace App\Http\Controllers\Api;

use App\Models\Event;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\JsonResponse;

class EventApiController extends Controller
{
    /**
     * Lista todos los eventos.
     */
    public function index(): JsonResponse
    {
        $events = Event::all();

        return response()->json($events, 200);
    }

    /**
     * Muestra un evento específico.
     */
    public function show($id): JsonResponse
    {
        $event = Event::find($id);

        if (!$event) {
            return response()->json(['message' => 'Evento no encontrado'], 404);
        }

        return response()->json($event, 200);
    }

    /**
     * Crea un nuevo evento.
     */
    public function store(Request $request): JsonResponse
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'location' => 'required|string|max:255',
            'date' => 'required|date',
            'hour' => 'required|date_format:H:i',
            'description' => 'nullable|string'
        ]);

        $event = Event::create($request->all());

        return response()->json($event, 201);
    }

    /**
     * Actualiza un evento existente.
     */
    public function update(Request $request, $id): JsonResponse
    {
        $event = Event::find($id);

        if (!$event) {
            return response()->json(['message' => 'Evento no encontrado'], 404);
        }

        $request->validate([
            'name' => 'sometimes|string|max:255',
            'location' => 'sometimes|string|max:255',
            'date' => 'sometimes|date',
            'hour' => 'sometimes|date_format:H:i', 
            'description' => 'nullable|string'
        ]);

        $event->update($request->all());

        return response()->json($event, 200);
    }

    /**
     * Elimina un evento.
     */
    public function destroy($id): JsonResponse
    {
        $event = Event::find($id);

        if (!$event) {
            return response()->json(['message' => 'Evento no encontrado'], 404);
        }

        $event->delete();

        return response()->json(['message' => 'Evento eliminado correctamente'], 200);
    }
}
