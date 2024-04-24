/* aquí obtengo todos los objetos que necesito para el modal */
const imagenes = document.querySelectorAll('.gallery_img');
const modal = document.querySelector('#modal');
const imagen = document.querySelector('#modal_img');
const boton = document.querySelector('#modal_boton');

/*
    en esta funcion, cada vez que haga click en una de las imagenes, con (toogle) me agregará la clase (modal_open),
    que he creado en el 'css' y si la tiene se la quiitará.
*/
for (let i = 0; i < imagenes.length; i++){
    imagenes[i].addEventListener('click', function(e){
        modal.classList.toggle("modal_open"); 
        /*
            e.target, obtendrá la ruta 'src' que se haya clickado en este momento de la 'src' de las imagenes que
            he puesto en 'group gallery' del 'main'.
            arriba en la variable (imagen), habiamos guardado el 'id' de la imagen modal,
            a esta variable le vamos a pasar la 'src' obtenida en (let src) para que muestre la imagen.
        */
        imagen.setAttribute("src", e.target.src);
    });
}

/* esta funcion es para el boton de cerrar (del modal) */
boton.addEventListener('click', function(){
    /*
        hace la misma funcion que arriba, es decir cuando clickemos el boton de cerrar, como tendrá la clase
        (modal_open), pues se la quitará y asi se cerrará el modal.
    */
    modal.classList.toggle("modal_open");
});

/* Los estilos del 'fadeIn' para mostrar las imagenes suavemente, estan en el archivo 'viewsjQuery.js' */