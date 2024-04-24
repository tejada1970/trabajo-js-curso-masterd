/* OBTENGO TODOS LOS OBJETOS PRINCIPALES QUE NECESITO */

/* obtengo el formulario */
const formulario = document.getElementById("form_presupuesto");

/* obtengo todos los inputs de 'datos' */
const nombre = document.getElementById("nombre");
const apellidos = document.getElementById("apellidos");
const telefono = document.getElementById("telefono");
const email = document.getElementById("email");

/*
    creo expresiones regulares para la validación de los datos personales.
    Los caracteres unicode son para validar nombres con acentos.
*/
let exp = {
    nombre_exp: /^[a-zA-Z \u00C0-\u017F]{2,15}$/,
    apellidos_exp: /^[a-zA-Z ]{2,40}$/,
    telefono_exp:  /^(6|7|8|9)[0-9]{8}$/,
    email_exp: /\w+@\w+\.[a-z]/
}

/* creo una variable 'booleana' y otra 'string' para controlar los errores */
let valido = true;
let msg = '';

/* obtengo el objeto 'select' del producto */
const selectProducto = document.getElementById('producto_select');
/* obtengo el input de 'plazo' de entrega' */
const plazo_entrega = document.getElementById('plazo_entrega');
/* obtengo todos los objetos 'checkbox' */
const checkExtras = document.querySelectorAll('.checkbox');
/* obtengo el input del 'pvpFinal' */
const precioFinal = document.getElementById('pvpFinal');
/* obtengo el input del 'pvpFinal' */
const list_options = document.getElementById('list');
/* obtengo el input de la 'privacidad' */
const privacidad = document.getElementById('privacidad');

/*
    obtengo el boton 'reset' del formulario y le proporciono un 'click'.
    esto es, para que cuando se pinche en el boton de 'borrar formulario',
    actualice la página, borrando todos los mensages de error (si los hubierá),
    de esta forma se reinicia el formulario quedando limpio.
*/
const btn_reset = document.getElementById('btn_reset');
btn_reset.addEventListener('click', () => {
   window.location = './presupuesto.html';
});

/* FIN DE OBJETOS PRINCIPALES */


/* productos */
/* creo un objeto para los productos y asociarles un precio */
const objProductos = {
    producto1: 150,
    producto2: 90,
    producto3: 25.90
}
/* creo una variable para guardar el 'precio' del producto */
let precio_producto = 0;
/*
    creo esta funcion, para obtener el producto seleccionado y el precio asociado a él,
    támbien para que no se repita ningun producto. Si se cambia de eleccion, se borrará
    la anterior (obteniendo siempre un solo producto). Y envio el resultado a 'resultFinal()'.
*/
selectProducto.addEventListener('change', function(){
    if(this.value == 'producto1'){
        precio_producto = objProductos.producto1;
        precioFinal.value = precio_producto;
    }
    else if(this.value == 'producto2'){
        precio_producto = objProductos.producto2;
        precioFinal.value = precio_producto;
    }
    else if(this.value == 'producto3'){
        precio_producto = objProductos.producto3;
        precioFinal.value = precio_producto;
    }
    resultFinal();
});


/* plazo de entrega */
/* creo un objeto para los dias y asociarles un descuento */
const objDias = {
    treinta: 15,
    sesenta: 10,
    noventa: 5
}
/* creo una variable para guardar 'los dias' */
let dias = '';
/* creo una variable para guardar el descuento del producto */
let dto = 15;
/*
    creo esta funcion, para obtener el 'descuento' asociado a al plazo de dias,
    támbien para que no se repita ningun plazo. Si se cambia de eleccion, se borrará
    el plazo anterior (obteniendo siempre un solo plazo de dias).
*/
plazo_entrega.addEventListener('click', function() {
    /* creo una condicion para obtener el 'descuento' del producto según el plazo y guardarlo en la variable */
    if(plazo_entrega.value == '30'){
        dto = objDias.treinta;
    }
    else if(plazo_entrega.value == '60'){
        dto = objDias.sesenta;
    }
    else if(plazo_entrega.value == '90'){
        dto = objDias.noventa;
    }
    else {
        dto = 15;
    }
    resultFinal();
})


/* extras */
/* creo un objeto para los 'extras' del producto y asociarles un 'precio' */
const objExtras = {
    extraBase: 15,
    extraFunda: 10,
    extraEstuche: 25,
    extraColor: 20
}
/* creo un array para guardar los 'precios' de 'los extras seleccionados' */
let listArray = [0];
/* creo una variable para guardar el 'precio total' de los extras */
let extras = 0;
/*
    creo este 'for', para proporcionar un evento 'click' a cada 'checkbox' y
    que realice una funcion por cada uno de ellos, donde introduciré en el array
    su 'precio' según sea, támbien para que no se repita ningún extra.
    Luego uso el 'metodo (reduce)' para que me sume todas las cantidades del array. 
*/
for(let my_checkbox of checkExtras){
    my_checkbox.addEventListener('click', function(){
        if(this.checked == true){
            listArray.push(objExtras[this.value]);
            /*
                'metodo (reduce)' para sumar los 'precios' de los 'extras' seleccionados.
                Y envio el resultado a la funcion sumar_a_producto().
            */
            extras = listArray.reduce((Accumulator, Current) => Accumulator + Current);
        }
        else{
            /* eliminar el valor del array, cuando el checkbox este deseleccionado */
            listArray = listArray.filter(e => e !== objExtras[this.value]);
            extras = listArray.reduce((Accumulator, Current) => Accumulator + Current);
        }
        resultFinal();
    });
}


/* declaro las variables para la funcion 'resultFinal()' */
let resultado1 = 0;
let descuento = 0;
let precio_final = 0;
/* esta fucion, realiza las 'operaciones' para obtener el resultado del 'precio final' del presupuesto */
function resultFinal() {
    resultado1 = parseFloat(precio_producto + extras);
    descuento = parseFloat((resultado1 * dto) / 100);
    precio_final = parseFloat(resultado1 - descuento).toFixed(2);
    precioFinal.value = precio_final;
    list_options.innerHTML = `Precio del Producto : ${precio_producto} € <br />Precio Extras : ${extras} € <br />Descuento : ${dto} %`;
}


/* Envío del formulario */
formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    /* validar extras */
    /* VALIDO PRIMERO EXTRAS, POR LA DOBLE ELECCION DE LA VARIABLE BOOLEANA 'valido', DE ESTA FORMA NO AFECTA A LAS DEMÁS */
    let c = () => Array.from(document.querySelectorAll(".checkbox")).filter(cur => cur.type === 'checkbox' && cur.checked).length > 0;
    if(!c()) { /* Si NO hay ningun checkbox chequeado. */
        valido = false;
        msg += 'Debe seleccionar al menos un extra.\n';
    }
    else {
        valido = true;
    }

    /* VALIDAR DATOS PERSONALES */
    
    /* validar si el 'nombre' esta vacio o null */
    if(nombre.value == "" || nombre.value == null){
        valido = false;
        msg += 'El "nombre" no puede estar en blanco.\n';
    }

    /* validar si el 'nombre' no contiene numeros */
    if(!exp.nombre_exp.test(nombre.value)){
        valido = false;
        msg += 'El "nombre" solo puede contener letras, máximo 15 caracteres.\n';
    }

    /* validar si los 'apellidos' estan vacios o null */
    if(apellidos.value == "" || apellidos.value == null){
        valido = false;
        msg += 'Los "apellidos" no pueden estar en blanco\n';
    }

    /* validar si los 'apellidos' no contienen numeros */
    if(!exp.apellidos_exp.test(apellidos.value)){
        valido = false;
        msg += 'Los "apellidos" solo pueden contener letras, máximo 40 caracteres.\n';
    }
    
    /* validar el numero de 'telefono' */
    if(!exp.telefono_exp.test(telefono.value)){
        valido = false;
        msg += 'El "teléfono" debe contener 9 digitos.\n';
    }
    
    /* validar el 'email' */
    if (!exp.email_exp.test(email.value)){
        valido = false;
        msg += 'El "email" no es correcto.\n';
    }

    /* VALIDACION DE PRESUPUESTO */

    /* validar producto */
    if(selectProducto.options[selectProducto.selectedIndex].value == 0){
        valido = false;
        msg += 'Debe seleccionar un producto.\n';
    }

    /* validar plazo de entrega */
    const entrega_exp = /^(30|60|90)$/;
    if(!entrega_exp.test(plazo_entrega.value)){
        valido = false;
        msg += 'Plazo de entrega : solo se pueden introducir los valores : 30 - 60 ó 90.\n';
        plazo_entrega.value = '30';
    }
   
    /* validar caja presupuesto */
    if(pvpFinal.value == ''){
        valido = false;
        msg += 'La caja de presupuesto debe contener un valor.\n';
    }

    /* VALIDACION DE CONDICIONES DE PRIVACIDAD */
    /* validar condiciones de privacidad */
    if (formulario.privacidad.checked == false) {
        valido = false;
        msg += 'Debe aceptar las condiciones para tramitar el presupuesto \n';
    }

    /* COMPROBAR -> que todo ha sido correcto para enviar los datos */
    if(valido === false){
        alert(msg);
        msg = ' ';
        return false; /* Este return impide que los datos escritos se borren antes de enviarlo */
    }
    else{
        enviar_todo();
    }
});

function enviar_todo() {
    formulario.submit();
    alert('Los datos se han enviado correctamente');
    alert(`Precio del Producto : ${precio_producto} €\nPrecio Extras : ${extras} €\nDescuento : ${dto} %\nTotal Presupuesto : ${precio_final} €`);
    // window.location = './presupuesto.html';
    // exit;
}