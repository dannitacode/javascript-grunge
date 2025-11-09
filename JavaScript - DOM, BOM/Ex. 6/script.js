const form = document.forms[0];
const inputNombre = form["nombre"];
const inputTelefono1 = form["telefono1"];
const inputTelefono2 = form["telefono2"];
const inputTelefono3 = form["telefono3"];
const inputEmail = form["email"];
const span = document.getElementById("error");
span.style.color = "red";
/* Expresiones regulares */
const regexNombre = /^[A-Za-zÁÉÍÓÚáéíóúÑñ/s]+$/;
const regexEmail = /^\w{5,}@(gmail|outlook|yahoo)\.com$/;
const regexTelefono = /^\d{10,15}$/;

function validacion() {
  let flag = true;
  if (!regexNombre.test(inputNombre.value.trim())) {
    span.style.display = "block";
    span.textContent = "! Ingrese un nombre valido";
    flag = false;
    return false;
  } else {
    span.style.display = "none";
    span.textContent = "";
  }

  if (
    !regexTelefono.test(inputTelefono1.value.trim()) &&
    !regexTelefono.test(inputTelefono2.value.trim()) &&
    !regexTelefono.test(inputTelefono3.value.trim())
  ) {
    span.style.display = "block";
    span.textContent = "! Ingrese al menos un telefono, entre 10 y 15 digitos";
    flag = false;
    return false;
  } else {
    span.style.display = "none";
    span.textContent = "";
  }

  if (!regexEmail.test(inputEmail.value.trim())) {
    span.style.display = "block";
    span.textContent = "! Ingrese un correo valido";
    flag = false;
    return false;
  } else {
    span.style.display = "none";
    span.textContent = "";
  }

  if (flag === true) {
    form.reset();
    return false;
  } else {
    return false;
  }
}
