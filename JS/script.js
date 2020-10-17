var nombre = document.getElementById('nombre');
var email = document.getElementById('email');
var asunto = document.getElementById('asunto');
var mensaje = document.getElementById('message');
var auxiliar = false;

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
    if ( auxiliar == false )
    {
        ok = false;
        alert("Ha ingresado una dirección de email incorrecta...");
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

function validateMail()
{
	//Creamos un objeto 
	valueForm = email.value;
 
	// Patron para el correo
	var patron = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
	if( valueForm.search(patron) == 0 )
	{
		//Mail correcto
        email.style.color = "black";
        auxiliar = true;
		return;
	}
	//Mail incorrecto
	email.style.color = "red";
}