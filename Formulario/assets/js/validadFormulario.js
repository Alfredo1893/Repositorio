function validarFormulario() {
    var nombre = document.getElementById("nombre").value;
    var precio = document.getElementById("precio").value;
    var descripcion = document.getElementById("descripcion").value;
  
    if (nombre.trim() === "" || precio.trim() === "" || descripcion.trim() === "") {
      alert("Por favor, complete todos los campos.");
      return false;
    }
  
    alert("¡El formulario se envió correctamente!");
    return true;
  }
  