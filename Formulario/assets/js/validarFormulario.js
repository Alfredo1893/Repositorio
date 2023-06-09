// Esperando a que se envíe el formulario
$('.needs-validation').on('submit', function(event) {
  event.preventDefault();
  validarFormulario();
});

function validarFormulario() {
  var codigo = $('#codigo').val();
  var descripcion = $('#descripcion').val();
  var codigo_barra = $('#codigo_barra').val();
  var precio = $('#precio').val();
  var stock = $('#stock').val();
  var proveedor = $('#proveedor').val();
  var categoria = $('#categoria').val();

  switch (true) {
    case !codigo:
      mostrarAlerta('Falta por rellenar el campo "Código"');
      break;
    case !descripcion:
      mostrarAlerta('Falta por rellenar el campo "Descripción"');
      break;
    case !codigo_barra:
      mostrarAlerta('Falta por rellenar el campo "Código de barra"');
      break;
    case !precio:
      mostrarAlerta('Falta por rellenar el campo "Precio Unitario"');
      break;
    case !stock:
      mostrarAlerta('Falta por rellenar el campo "Stock"');
      break;
    case !proveedor:
      mostrarAlerta('Falta por rellenar el campo "Proveedor"');
      break;
    case !categoria:
      mostrarAlerta('Falta por seleccionar una categoría');
      break;
    default:
      mostrarConfirmacion();
      break;
  }
}

function mostrarAlerta(mensaje) {
  $('.needs-validation').addClass('was-validated');
  alert(mensaje);
}

function mostrarConfirmacion() {
  window.location.href = "confirmacion.html";
}
