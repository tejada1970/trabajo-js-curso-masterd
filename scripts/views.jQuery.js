/*
    con este jQuery, muestro el 'modal de las imagenes' con apariencia lenta,
*/
$(document).ready(function (){

    /* aquí obtengo todas las imagenes de la galeria para que se muestren con 'fadeIn' en el 'modal' */
    $(".gallery_img").on("click", function () {
        $(mostrar_modal());
    });

    /* oculto el 'modal' al inicio de la página 'galeria' */
    $('.modal').fadeOut();

    /* con esta funcion 'cierro' el 'modal' con 'fadeOut' y 'css' */
    $(".modal_boton").on("click", function () {
        $('.modal').fadeOut(2000, function(){
            $('.modal').css('display', 'none');
        });
    });
});

/* funcion para abrir el 'modal' con 'fadeIn' y mostrar las imagenes */
function mostrar_modal(){
    $('.modal').fadeIn(3000, function(){
        $('.modal').delay(1000);
        $('.modal').fadeIn();
    });
}