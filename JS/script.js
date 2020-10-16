var error = document.getElementById('error');
error.style.color = 'red';

var form = document.getElementById('contacto');
form.addEventListener('submit', function(evt){
    evt.preventDefault();

    var mensajesError = [];

    if(nombre.value === null || nombre.value === ''){
        mensajesError.push('tu nombre');
    }

    if(email.value === null || email.value === ''){
        mensajesError.push('tu email');
    }

    if(asunto.value === null || asunto.value === ''){
        mensajesError.push('tu asunto');
    }

    error.innerHTML = "Ingresa " + mensajesError.join(', ') + ". Por favor :)";
    
});