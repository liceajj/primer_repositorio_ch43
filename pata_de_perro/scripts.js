// scripts.js
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Previene el envío normal del formulario

    // Obtén los datos del formulario
    const formData = new FormData(event.target);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message')
    };

    // Envía los datos usando fetch
    fetch('https://tu-servidor.com/api/enviarFormulario', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        // Maneja la respuesta del servidor
        alert('Formulario enviado con éxito');
        console.log('Success:', data);
    })
    .catch((error) => {
        // Maneja los errores
        console.error('Error:', error);
        alert('Hubo un error al enviar el formulario');
    });
});
