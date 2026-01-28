// Array para almacenar estudiantes
let estudiantes = JSON.parse(localStorage.getItem('estudiantes')) || [];

// Elementos del DOM
const form = document.getElementById('student-form');
const studentsBody = document.getElementById('students-body');
const countElement = document.getElementById('count');
const tableContainer = document.getElementById('table-container');
const emptyMessage = document.getElementById('empty-message');

// Evento para agregar estudiante
form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const estudiante = {
        id: Date.now(),
        nombre: document.getElementById('nombre').value.trim(),
        apellido: document.getElementById('apellido').value.trim(),
        email: document.getElementById('email').value.trim(),
        edad: parseInt(document.getElementById('edad').value),
        genero: document.getElementById('genero').value,
        ocupacion: document.getElementById('ocupacion').value.trim()
    };

    // Validar que no exista un email duplicado
    if (estudiantes.some(e => e.email === estudiante.email)) {
        alert('El correo ya está registrado');
        return;
    }

    estudiantes.push(estudiante);
    guardarEstudiantes();
    renderizarTabla();
    form.reset();
});

// Renderizar tabla de estudiantes
function renderizarTabla() {
    studentsBody.innerHTML = '';
    
    if (estudiantes.length === 0) {
        emptyMessage.style.display = 'block';
    } else {
        emptyMessage.style.display = 'none';
        
        estudiantes.forEach((est, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${est.nombre}</td>
                <td>${est.apellido}</td>
                <td>${est.email}</td>
                <td>${est.edad}</td>
                <td>${est.genero}</td>
                <td>${est.ocupacion}</td>
                <td>
                    <button class="btn btn-danger" onclick="eliminarEstudiante(${est.id})">Eliminar</button>
                </td>
            `;
            studentsBody.appendChild(row);
        });
    }
    
    actualizarContador();
}

// Eliminar estudiante
function eliminarEstudiante(id) {
    if (confirm('¿Estás seguro de que deseas eliminar este estudiante?')) {
        estudiantes = estudiantes.filter(e => e.id !== id);
        guardarEstudiantes();
        renderizarTabla();
    }
}

// Guardar en localStorage
function guardarEstudiantes() {
    localStorage.setItem('estudiantes', JSON.stringify(estudiantes));
}

// Actualizar contador
function actualizarContador() {
    countElement.textContent = estudiantes.length;
}

// Inicializar tabla al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    renderizarTabla();
});
