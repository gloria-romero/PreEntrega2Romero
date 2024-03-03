// Vamos a replicar un unicio de sesión.
function iniciarSesion () {
    //Definición de las credenciales correctas
    const usuarioCorrecto = "gloria";
    const claveCorrecta = "glo123!";
    
    // Inicialización de variables para las credenciales ingresadas por el usuario
    let usuario = " ";
    let clave = " ";
    
    // Pedimos el usuario
    while (true) {
        usuario = prompt("Ingrese su nombre de usuario para continuar:");
        if (usuario === usuarioCorrecto) {
            console.log(usuario + " es un usuario registrado en nuestra bbdd.");
            alert("Usuario correcto");
            break; // Sale del bucle si el usuario es correcto
    
        } else {
            console.log(usuario + " no aparece en nuestra base de datos.");
            alert ("Usuario incorrecto, vuelva a intentarlo.")
        }
    }
    
    // Una vez el usuario es correcto, pedimos la contraseña. Para lo que tenemos 3 intentos        
    for (let i = 0; i < 3; i++) {
        let clave = prompt("Ingrese su clave para iniciar sesión:");
        if (clave === claveCorrecta) {
            console.log("Clave correcta para " + usuarioCorrecto);
            alert("Hola " + usuarioCorrecto + "!. Ha iniciado sesión con éxito.")
            break; // Sale del bucle si la contraseña es correcta
        } else {
            console.log("Contraseña incorrecta para usuario " + usuarioCorrecto);
            alert("Contraseña incorrecta. Intento " + (i + 1) + " de 3.");
        }
        if (i === 2) {
            console.log("Bloqueado el acceso a " + usuarioCorrecto + " por superar los 3 intentos permitidos.")
            alert("Acceso bloqueado. Ha superado el número de intentos permitidos.");
        }
    }
}

iniciarSesion();

//Segunda entrega: simulamos un carrito de compras, solamente accesible si el usuario se registra correctamente (paso previo)

// Definimos una lista de productos y sus precios como un array de objetos
const productosArray = [
    {
        nombre: "Camiseta",
        precio: 20,
    },
    {
        nombre: "Pantalón",
        precio: 30,
    },
    {
        nombre: "Zapatos",
        precio: 50,
    }
];

// Función para simular un carrito de compras
function carritoDeCompras() {
    let carrito = {};

    let totalCompra = 0;

    // Función para agregar productos al carrito
    function agregarProducto() {
        // Mostramos los productos disponibles al usuario
        console.log("Productos disponibles:");
        productosArray.forEach(producto => {
            console.log(producto.nombre + ": $" + producto.precio);
        });

        // Solicitamos al usuario que seleccione un producto
        let producto = prompt("Ingrese el nombre del producto que desea agregar al carrito:");

        // Verificamos si el producto existe en la lista de productos
        let productoEncontrado = productosArray.find(item => item.nombre === producto);
        if (productoEncontrado) {
            let cantidad = parseInt(prompt("Ingrese la cantidad de unidades:"));

            // Añadimos el producto al carrito
            carrito[producto] = cantidad;

            // Actualizamos el total de la compra
            totalCompra += productoEncontrado.precio * cantidad;

            console.log("Producto agregado al carrito: " + producto + " - Cantidad: " + cantidad);
        } else {
            console.log("El producto ingresado no está disponible.");
        }
    }

    // Mostramos el contenido del carrito y el total de la compra
    function verCarrito() {
        console.log("Contenido del carrito:");
        for (let producto in carrito) {
            console.log(producto + " - Cantidad: " + carrito[producto]);
        }
        console.log("Total de la compra: $" + totalCompra);
    }

    function iniciarCarrito() {
        let opcion;
        do {
            opcion = prompt("Seleccione una opción: \n1. Agregar producto al carrito \n2. Ver carrito \n3. Finalizar compra \n4. Salir");
            switch (opcion) {
                case "1":
                    agregarProducto();
                    break;
                case "2":
                    verCarrito();
                    break;
                case "3":
                    console.log("Compra realizada. Total a pagar: $" + totalCompra);
                    break;
                case "4":
                    console.log("Saliendo del carrito de compras.");
                    break;
                default:
                    console.log("Opción no válida.");
                    break;
            }
        } while (opcion !== "4");
    }

    iniciarCarrito();
}

carritoDeCompras();

