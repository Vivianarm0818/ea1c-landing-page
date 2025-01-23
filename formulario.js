document.getElementById("formulario").addEventListener("submit", async function (event) {
    event.preventDefault();

    // Capturar los datos del formulario
    const nombre_completo = document.getElementById("nombre_completo").value;
    const telefono = document.getElementById("telefono").value;
    const lugar = document.getElementById("lugar").value;
    const correo = document.getElementById("correo").value;

    // URL del script de Google Apps Script
    const scriptURL = "https://script.google.com/macros/s/AKfycbwprt1BENqZMBfyWzPBJDuZLICCUoT4M_S1EOwenCOu3ypind9xcfdpR3EPg0m8JWBE/exec"; // Reemplaza con tu URL

    try {
        const response = await fetch(scriptURL, {
            method: "POST",
            body: JSON.stringify({ nombre_completo, telefono, lugar, correo }),
            headers: { "Content-Type": "application/json" },
        });

        if (response.ok) {
            document.getElementById("mensaje").innerText = "Tus datos se han enviado correctamente. Pronto nos pondremos en contacto.";
            document.getElementById("mensaje").style.color = "green";
            document.getElementById("mensaje").style.display = "block";
            document.getElementById("formulario").reset();
        } else {
            throw new Error("Error al enviar los datos.");
        }
    } catch (error) {
        document.getElementById("mensaje").innerText = "Hubo un problema al enviar tus datos. Intenta de nuevo.";
        document.getElementById("mensaje").style.color = "red";
        document.getElementById("mensaje").style.display = "block";
        console.error(error);
    }
});
