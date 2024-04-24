/* SLIDER */ 
const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider_section");
/* esta regla es para obtener el ultimo slider_section de todos los quee hayan y es para ponerlo en primera posción del slider */
let sliderSectionLast = sliderSection[sliderSection.length -1]; 
const btnLeft = document.querySelector("#btn_left");
const btnRight = document.querySelector("#btn_right");

/* posicion del slider en la que vamos a colocar el ultimo section que hemos obtenido */
/* con el 'afterbegin', le decimos que lo coloque antes de empezar el slider, osea el primero de todos */
slider.insertAdjacentElement('afterbegin', sliderSectionLast);

/* esta funcion, es para la parte derecha btn right */
function Next() {
    /* aquí obtenemos el primer slider_section de todos, para empezar a pasar las imagenes desde el principio */
    let sliderSectionFirst = document.querySelectorAll(".slider_section")[0];

    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 2s";

    setTimeout(function(){
        slider.style.transition = "none";

        /* aquí pasamos el primer slider_section quee hemos obtenido, a la última posición, antes de que termine el slider */
        slider.insertAdjacentElement('beforeend', sliderSectionFirst); 

        /* otra vez a -100%, para que vuelva a la normalidad despúes de crear todo el bucle ánterior */
        slider.style.marginLeft = "-100%"; 
    }, 2000);
}
btnRight.addEventListener('click', function() {
    Next();
});

/* esta funcion, es para la parte izquierda btn left */
function Prev() {
    let sliderSection = document.querySelectorAll(".slider_section");
    let sliderSectionLast = sliderSection[sliderSection.length -1];
    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.5s";

    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin', sliderSectionLast);

        /* otra vez a -100%, para que vuelva a la normalidad despúes de crear todo el bucle ánterior */
        slider.style.marginLeft = "-100%";
    }, 500);
}
btnLeft.addEventListener('click', function() {
    Prev();
});

/*
    Todo lo anterior es para que funcione de forma manual y solo añadiendo esta funcion, es para que
    funcione de forma automatica, puedes elegir entre (Next = avanza siempre hacia delante o Prev = pasarian
    las imagenes hacia atras) y (el intervalo es el tiempo de pasada, en este caso) es de 5s entre cada imagen.
*/
setInterval(() => {
    Next();
}, 5000);