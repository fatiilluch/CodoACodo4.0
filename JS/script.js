var nombre = document.getElementById('nombre');
var email = document.getElementById('email');
var asunto = document.getElementById('asunto');
var mensaje = document.getElementById('message');

function validarForm() 
{
    let ok = true;
    if ( nombre.value == '' || email.value == ''  || asunto.value == '' || mensaje.value == '' ) 
    {
        validarCampo(nombre);
        validarCampo(email);
        validarCampo(asunto);
        validarCampo(mensaje);
        alert("Debe ingresar todos los datos...");
        ok = false;
    }
    return ok;
}

function validarCampo(campo) 
{
    if ( campo.value == null || campo.value == '' )
    {
        campo.style.border = '4px solid red';
    }
    else
    {
        campo.style.border = '4px solid green';
    }
}