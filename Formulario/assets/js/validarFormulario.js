function validarFormulario() {
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
          alert("Por favor, ingrese el codigo.");
          return false;
        case descripcion.trim() === "":
          alert("Por favor, ingrese la descripción.");
          return false;  
        case codigo_barra.trim() === "":
          alert("Por favor, ingrese el codigo de barra.");
          return false;          
        case precio.trim() === "":
          alert("Por favor, ingrese el precio.");
          return false;
        case stock.trim() === "":
          alert("Por favor, ingrese el stock del producto.");
          return false;
        case proveedor.trim() === "":
          alert("Por favor, ingrese el nombre de los proveedores.");
          return false;
        case estado.trim() === "":
          alert("Por favor, valide el estado.");
          return false;          
        case categoria.trim() === "":
          alert("Por favor, ingrese la descripción.");
          return false;
        default:
          alert("¡El formulario se envió correctamente!");
          return true;
      }
  }
  