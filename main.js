let arrayProductos = [
  {
    id: "1",
    Producto: "Anotador de Padel",
    saldoEnPesos: 9250,
    Stock: 20,
  },
  {
    id: "2",
    Producto: "Anotador de Tenis",
    saldoEnPesos: 10499,
    Stock: 22,
  },
];

alert("¡Bienvenido/a a la tienda oficial de Anotador de puntos!");

let deseaSaber = prompt("¿Desea saber algo del producto? (sí/no)");

if (deseaSaber.toLowerCase() === "sí" || deseaSaber.toLowerCase() === "si") {
  let opcion = prompt(
    "Ingrese el número según las opciones: 1)Productos 2)Stock Disponible 3)Precios"
  );

  switch (opcion) {
    case "1":
      let productos = arrayProductos
        .map((producto) => producto.Producto)
        .join("\n");
      alert("Productos:\n" + productos);
      console.log("Productos:\n" + productos);
      break;

    case "2":
      let stock = arrayProductos
        .map(
          (producto) => producto.Producto + ": " + producto.Stock + " unidades"
        )
        .join("\n");
      alert("Stock Disponible:\n" + stock);
      console.log("Stock Disponible:\n" + stock);
      break;

    case "3":
      let precios = arrayProductos
        .map((producto) => producto.Producto + ": $" + producto.saldoEnPesos)
        .join("\n");
      alert("Precios:\n" + precios);
      console.log("Precios:\n" + precios);
      break;

    default:
      alert("Opción no válida.");
      console.log("Opción no válida.");
      break;
  }
} else {
  alert("Gracias por visitar nuestra tienda.");
  console.log("Gracias por visitar nuestra tienda.");
}

let deseaAgregar = prompt("¿Desea agregar un nuevo producto? (sí/no)");

if (
  deseaAgregar.toLowerCase() === "sí" ||
  deseaAgregar.toLowerCase() === "si"
) {
  let nuevoProductoId = (arrayProductos.length + 1).toString();
  let nuevoProductoNombre = prompt("Ingrese el nombre del producto:");
  let nuevoProductoSaldo = parseFloat(
    prompt("Ingrese el saldo en pesos del producto:")
  );
  let nuevoProductoStock = parseInt(
    prompt("Ingrese el stock disponible del producto:"),
    10
  );

  let nuevoProducto = {
    id: nuevoProductoId,
    Producto: nuevoProductoNombre,
    saldoEnPesos: nuevoProductoSaldo,
    Stock: nuevoProductoStock,
  };

  arrayProductos.push(nuevoProducto);

  alert("Producto agregado exitosamente.");
  console.log("Producto agregado:", nuevoProducto);
  console.log("Nuevo array de productos:", arrayProductos);
} else {
  alert("Gracias por visitar nuestra tienda.");
  console.log("Gracias por visitar nuestra tienda.");
}
