// Manejo del formulario
document.getElementById('demo-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const resultado = document.getElementById('resultado');
    
    // Validación simple
    if (nombre && email) {
        resultado.textContent = `¡Hola ${nombre}! Tu correo ${email} ha sido registrado correctamente.`;
        resultado.classList.remove('hidden');
        
        // Limpiar formulario
        this.reset();
        
        // Ocultar mensaje después de 5 segundos
        setTimeout(() => {
            resultado.classList.add('hidden');
        }, 5000);
    }
});

// Función para pruebas
function suma(a, b) {
    return a + b;
}

function multiplicar(a, b) {
    return a * b;
}
