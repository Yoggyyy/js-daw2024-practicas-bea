document.addEventListener("DOMContentLoaded", function () {
    fetchEvents();
});

console.log("eventIndex.js loaded");

function fetchEvents() {
    fetch("/api/events")
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Error HTTP: ${response.status}`);
            }
            return response.json();
        })
        .then((events) => {
            const eventsContainer = document.getElementById("events-container");
            const noEventsAlert = document.getElementById("no-events-alert");

            console.log("User Role:", userRole); // Depuración para ver qué rol se obtiene

            if (events.length > 0) {
                eventsContainer.innerHTML = "";
                noEventsAlert.classList.add("d-none");
                events.forEach((event) => {
                    const eventDiv = document.createElement("div");
                    eventDiv.classList.add("col-md-6", "col-lg-4");
                    eventDiv.innerHTML = `
                        <div class="card h-100 bg-dark text-light shadow-lg border-0 rounded-3">
                            <div class="card-body">
                                <h5 class="card-title fw-bold">${
                                    event.name
                                }</h5>
                                <p class="card-text">
                                    <i class="bi bi-geo-alt-fill text-warning"></i> ${
                                        event.location
                                    }
                                </p>
                                <p class="card-text">
                                    <i class="bi bi-calendar-check-fill text-info"></i>
                                    ${new Date(event.date).toLocaleDateString()}
                                    <i class="bi bi-clock-fill text-danger ms-2"></i>
                                    ${event.hour}
                                </p>
                                <p class="card-text text-truncate">${
                                    event.description
                                }</p>
                                <div class="d-flex justify-content-between align-items-center mt-3">
                                    <a href="/events/${
                                        event.id
                                    }" class="btn btn-info btn-sm text-light">
                                        <i class="bi bi-eye"></i> Ver Detalles
                                    </a>
                                    ${renderAdminButtons(event, userRole)}
                                </div>
                            </div>
                        </div>
                    `;
                    eventsContainer.appendChild(eventDiv);
                });
            } else {
                noEventsAlert.classList.remove("d-none");
            }
        })
        .catch((error) => {
            console.error("Error fetching events:", error);
            document.getElementById("no-events-alert").textContent =
                "Error al cargar los eventos.";
            document
                .getElementById("no-events-alert")
                .classList.remove("d-none");
        });
}

// Mostrar botones solo si el usuario es admin
function renderAdminButtons(event, userRole) {
    if (typeof userRole !== "undifined") {
        if (userRole === "admin") {
            return `
            <div class="btn-group">
                <a href="/events/${
                    event.id
                }/edit" class="btn btn-warning btn-sm">
                    <i class="bi bi-pencil"></i> Editar
                </a>
                <form action="/events/${
                    event.id
                }" method="POST" class="d-inline delete-form">
                    <input type="hidden" name="_token" value="${document
                        .querySelector('meta[name="csrf-token"]')
                        .getAttribute("content")}">
                    <input type="hidden" name="_method" value="DELETE">
                    <button type="submit" class="btn btn-danger btn-sm" onclick="return confirm('¿Estás seguro de eliminar este evento?')">
                        <i class="bi bi-trash"></i>
                    </button>
                </form>
            </div>
        `;
        }
        return "";
    }
}
