function validarFormulario(event) {
    event.preventDefault();
  
    var codigo = document.getElementById("codigo").value;
    var descripcion = document.getElementById("descripcion").value;
    var codigo_barra = document.getElementById("Codigo_barra").value;
    var precio = document.getElementById("precio").value;
    var stock = document.getElementById("stock").value;
    var proveedor = document.getElementById("proveedor").value;
    var estado = document.getElementById("estado").value;
    var categoria = document.getElementById("categoria").value;
  
    switch (true) {
        case codigo.trim() === "":
          alert("¡Por favor, ingrese el codigo!");
          break;
        case descripcion.trim() === "":
          alert("¡Por favor, ingrese la descripción!");
          break; 
        case codigo_barra.trim() === "":
          alert("¡Por favor, ingrese el codigo de barra!");
          break;          
        case precio.trim() === "":
          alert("¡Por favor, ingrese el precio!");
          break;
        case stock.trim() === "":
          alert("¡Por favor, ingrese el stock del producto!");
          break;
        case proveedor.trim() === "":
          alert("¡Por favor, ingrese el nombre de los proveedores!");
          break;
        case estado.trim() === "":
          alert("¡Por favor, valide el estado!");
          break;          
        case categoria.trim() === "":
          alert("¡Por favor, ingrese la categoria!");
          break;
        default:
          window.location.href = "confirmacion.html";
          break;
      }
  }
  