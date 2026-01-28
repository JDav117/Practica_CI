// Tests básicos para validar la funcionalidad
function testSuma() {
    console.assert(suma(2, 3) === 5, 'suma(2, 3) debe ser 5');
    console.assert(suma(0, 0) === 0, 'suma(0, 0) debe ser 0');
    console.log('✓ Tests de suma pasados');
}

function testMultiplicar() {
    console.assert(multiplicar(2, 3) === 6, 'multiplicar(2, 3) debe ser 6');
    console.assert(multiplicar(5, 0) === 0, 'multiplicar(5, 0) debe ser 0');
    console.log('✓ Tests de multiplicación pasados');
}

// Ejecutar tests
testSuma();
testMultiplicar();
console.log('✓ Todos los tests completados');
