//Validar formulario utilizando libería
$(document).ready(function(){
    $('.formulario').validate({
        rules: {
            nombre: {
                required: true
            },
            apellido: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            mensaje: {
                required: true
            }
        },
        messages: {
            nombre: {
                required: 'Por favor, escriba su nombre'
            },
            apellido: {
                required: 'Por favor, escriba su apellido'
            },
            email: {
                required: 'Por favor, escriba su email',
                email: 'Por favor, escriba un email válido'
            },
            mensaje: {
                required: 'Por favor, escriba un mensaje'
            }
        }
    });
  });