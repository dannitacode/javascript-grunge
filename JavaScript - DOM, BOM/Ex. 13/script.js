const form = document.forms[0];
const usuario = form["usuario"];
const contra = form["contra"];
const span = document.getElementsByTagName("span");
const regexUsuario =
  /^[A-Z][A-Za-z0-9]*\d[A-Za-z0-9]*\d[A-Za-z0-9]*\d[A-Za-z0-9]*$/;
const regexContrasenia = /^[0-9][A-Za-z0-9]{8,}[A-Z]\d/;
function validacion() {
  let flag = true;
  if (!regexUsuario.test(usuario.value.trim())) {
    span[0].textContent =
"Usuario invalido. Debe comenzar con una letra mayúscula y tener al menos 3 números en cualquier posición";
    span[0].style.display = "block";
    flag = false;
  } else {
    span[0].textContent = "";
    span[0].style.display = "none";
  }

  if (!regexContrasenia.test(contra.value.trim())) {
    span[1].textContent =
      "Contrasenia invalida. Debe tener una longitud mínima de 8 caracteres, comenzar con un número y terminar con una letra mayúscula seguida de otro número.";
    span[1].style.display = "block";
    flag = false;
  } else {
    span[1].textContent = "";
    span[1].style.display = "none";
  }

  if (flag === true) {
    form.reset();
    return false;
  } else {
    return false;
  }
}
