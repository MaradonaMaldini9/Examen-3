function validarLogin(event) {
  event.preventDefault(); // evita que recargue la página

  const CLAVE_CORRECTA = "ok";
  const password = document.getElementById("password").value.trim();

  if (password.toLowerCase() === CLAVE_CORRECTA) {
    alert("Acceso concedido. Bienvenido.");
    // redirige a la landing
    window.location.href = "landingpage.html";
  } else {
    alert("Contraseña incorrecta. Intente de nuevo.");
    document.getElementById("password").value = "";
    document.getElementById("password").focus();
  }

  return false;
}