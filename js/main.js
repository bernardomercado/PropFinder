// Obtener el formulario y los campos de entrada
const form = document.getElementById('formulario-busqueda');
const tipoTransaccionInput = document.getElementsByName('tipoTransaccion')[0];
const tipoPropiedadInput = document.getElementsByName('tipoPropiedad')[0];
const ambientesInput = document.getElementsByName('ambientes')[0];
const precioMinimoInput = document.getElementsByName('precioMinimo')[0];
const precioMaximoInput = document.getElementsByName('precioMaximo')[0];
const barrioInput = document.getElementsByName('barrio')[0];

// Escuchar el evento submit del formulario
form.addEventListener('submit', function(e) {
    e.preventDefault();
  
    // Obtener los valores de los campos de entrada
    const tipoTransaccion = tipoTransaccionInput.value;
    const tipoPropiedad = tipoPropiedadInput.value;
    const ambientes = ambientesInput.value;
    const precioMinimo = precioMinimoInput.value;
    const precioMaximo = precioMaximoInput.value;
    const barrio = barrioInput.value;
  
    // Filtrar las propiedades según los valores ingresados por el usuario
    const propiedadesFiltradas = propiedades.data.filter(function(propiedad) {
        return (tipoTransaccion === '' || propiedad.opcion === tipoTransaccion) &&
               (tipoPropiedad === '' || propiedad.tipo === tipoPropiedad) &&
               (ambientes === '' || propiedad.ambientes === ambientes) &&
               (precioMinimo === '' || propiedad.precio >= parseInt(precioMinimo)) &&
               (precioMaximo === '' || propiedad.precio <= parseInt(precioMaximo)) &&
               (barrio === '' || propiedad.barrio === barrio);
      });

  // Mostrar las propiedades filtradas en pantalla
  const propiedadesContainer = document.getElementById('propiedades');
  propiedadesContainer.innerHTML = '';

  if (propiedadesFiltradas.length === 0) {
    const mensaje = document.createElement('p');
    mensaje.classList.add('noPropiedades');
    mensaje.innerText = "No se encontraron propiedades.";
    propiedadesContainer.appendChild(mensaje);
  }

  propiedadesFiltradas.forEach(function(propiedad) {
    // Crear la tarjeta de la propiedad
    const card = document.createElement('div');
    card.classList.add('card', propiedad.tipo);

    // Crear la imagen de la propiedad
    const imgContainer = document.createElement('div');
    imgContainer.classList.add('image-container');
    const image = document.createElement('img');
    image.setAttribute('src', propiedad.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);

    // Crear la información de la propiedad
    const container = document.createElement('div');
    container.classList.add('container');
    const name = document.createElement('h4');
    name.classList.add('propiedad-name');
    name.innerText = propiedad.propiedadNombre.toUpperCase();
    container.appendChild(name);
    const opcion = document.createElement('h5');
    opcion.innerText = 'En ' + propiedad.opcion;
    container.appendChild(opcion);
    const ambientes = document.createElement('p');
    ambientes.innerText = 'Cantidad de ambientes: ' + propiedad.ambientes;
    container.appendChild(ambientes);
    const precio = document.createElement('p');
    precio.innerText = 'USD ' + propiedad.precio;
    container.appendChild(precio);
    const barrio = document.createElement('p');
    barrio.innerText = 'Barrio: ' + propiedad.barrio;
    container.appendChild(barrio);
    card.appendChild(container);

    propiedadesContainer.appendChild(card);
  })})  

  //Guardar las propiedades en el Storage y usando promesas
  function guardarDatos(clave, valor) {
    return new Promise((resolve, reject) => {
      try {
        localStorage.setItem(clave, valor);
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  }
  
  guardarDatos('lista', JSON.stringify(propiedades.data))
    .then(() => {
      console.log('Datos almacenados correctamente en el almacenamiento local');
    })
    .catch((error) => {
      console.error('Error al intentar almacenar los datos en el almacenamiento local:', error);
    });


// CARRUSEL

var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
  },
});

// NAVEGADOR
const hamburguer = document.querySelector('.menu__hamburguer');
const nav = document.querySelector('.nav');
const body = document.querySelector('body');

// Agregar un evento de clic al icono de menú hamburguesa
hamburguer.addEventListener('click', () => {
  // Alternar la clase CSS 'menu__links--show' en la lista de enlaces del menú
  nav.classList.toggle('nav--show');
});

// Agregar un evento de clic al elemento body
body.addEventListener('click', (event) => {
  const isClickInside = hamburguer.contains(event.target) || nav.contains(event.target);
  if (!isClickInside) {
    nav.classList.remove('nav--show');
  }
});

// Obtener todos los enlaces dentro del menú
const navItems = nav.querySelectorAll('a');

// Agregar un evento de clic a cada enlace dentro del menú
navItems.forEach(link => {
  link.addEventListener('click', () => {
    // Remover la clase CSS 'menu__links--show' de la lista de enlaces del menú para cerrar el menú
    nav.classList.remove('nav--show');
  });
});