// Inicializa una variable para guardar la posición del desplazamiento anterior
let lastScrollTop = 0;

// Función para manejar el desplazamiento de la ventana
window.addEventListener('scroll', () => {
    // Selecciona el elemento con la clase 'navBar'
    const navbar = document.querySelector('.navBar');
    // Selecciona el elemento con la clase 'header'
    const header = document.querySelector('.header');
   
    // Obtiene la posición actual del desplazamiento vertical
    const st = window.pageYOffset || document.documentElement.scrollTop;

    // Verifica si el encabezado está visible en el viewport
    const headerVisible = header.getBoundingClientRect().bottom > 0;
    

    // Verifica si el desplazamiento actual es mayor que el anterior y no estamos en la parte superior
    if (st > lastScrollTop && st > 0 && !headerVisible) {
        // Desplazamiento hacia abajo - ocultar navbar
        navbar.style.top = `-${navbar.offsetHeight}px`;
    } else {
        // Desplazamiento hacia arriba o estamos en la parte superior o el header está visible - mostrar navbar
        navbar.style.top = '0';
    }

    // Actualiza lastScrollTop con la posición actual del desplazamiento,
    // asegurándose de que no sea negativo para evitar problemas en iOS
    lastScrollTop = st <= 0 ? 0 : st;
});


document.querySelectorAll('.contenedor_pregunta').forEach((container) => {
    const pregunta = container.querySelector('.pregunta');
    const respuesta = container.querySelector('.respuesta');
    const icono = container.querySelector('.ri-arrow-down-s-line');

    pregunta.addEventListener('click', () => {
        respuesta.classList.toggle('mostrar'); // Muestra u oculta la respuesta
        icono.classList.toggle('rotate');      // Rota el icono
    });
});

//whatsapp
document.addEventListener('DOMContentLoaded', (event) => {
    const whatsappButton = document.getElementById('whatsapp-button');
    const whatsappLink = document.createElement('a');
    whatsappLink.href = "https://wa.me/34663370829?text=Hola, me gustaría saber más.";
    whatsappLink.target = "_blank";
    whatsappLink.className = "whatsapp-container";
  
    const icon = document.createElement('i');
    icon.className = "fa fa-whatsapp";
  
    whatsappLink.appendChild(icon);
    whatsappButton.appendChild(whatsappLink);
  });
  
  
  
  //moon
  
  // Selecciona el botón o icono para activar el modo oscuro icon-contrast
  const toggleDarkMode = document.querySelector('.contrast');
  
  const darkModeIcon = document.querySelector('.icon-contrast');
  
  // Selecciona el elemento body
  const bodyElement = document.body;
  
  // Selecciona todos los elementos que necesitan cambiar, incluyendo el body
  const darkModeElements = [
      bodyElement,
      ...document.querySelectorAll('.ri-moon-clear-fill, a, p, h1, h2,h3, li, .color__p, .redes, .form_register')

  ];
  
  toggleDarkMode.addEventListener('click', () => {
      // Alterna la clase 'dark' en todos los elementos seleccionados, incluido el body
  
      toggleDarkMode.classList.toggle("dark");
      const isOpen = toggleDarkMode.classList.contains("dark");
          darkModeIcon.setAttribute("class", isOpen ? "ri-sun-fill" : "ri-moon-clear-fill");
  
      darkModeElements.forEach(element => {
          element.classList.toggle('dark');
      });
  
  });