function validarFormulario() {
  var nombre = document.getElementById("nombre").value;
  var descripcion = document.getElementById("precio").value;
  var codigo_barra = document.getElementById("descripcion").value;
  var precio = document.getElementById("nombre").value;
  var stock = document.getElementById("precio").value;
  var proveedor = document.getElementById("descripcion").value;
  var categoria = document.getElementById("descripcion").value;

  switch (true) {
    case nombre.trim() === "":
      alert("Por favor, ingrese el nombre.");
      break;
    case descripcion.trim() === "":
      alert('Falta por rellenar el campo "Descripción"');
      break;
    case codigo_barra.trim() === "":
      alert('Falta por rellenar el campo "Código de barra"');
      break;
    case precio.trim() === "":
      alert('Falta por rellenar el campo "Precio Unitario"');
      break;
    case stock.trim() === "":
      alert('Falta por rellenar el campo "Stock"');
      break;
    case proveedor.trim() === "":
      alert('Falta por rellenar el campo "Proveedor"');
      break;
    case categoria.trim() === "":
      alert('Falta por seleccionar una categoría');
      break;
    default:
      window.location.href = "confirmacion.html";
      break;
  }
}
