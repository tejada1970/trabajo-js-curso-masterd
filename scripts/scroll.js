/* CAMIAR COLOR DE ENLACES INTERNOS, SEGÚN EN LA SECCION QUE ME ENCUENTRE A MEDIDA QUE VOY ESCROLEANDO */

/* aquí obtengo todos los enlaces internos cuyo atributo 'href' empiece por '#*/
let menu_internos = document.querySelectorAll('#enlaces_internos a[href^="#"]');

/*
    Uso la api 'IntersectionObserver' de javascript para el codigo del 'scroll'
    esto es para que al hecer 'scroll', me cambie automaticamente el color de los enlaces internos,
    según en la sección en la que me encuentre.
*/
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        /* aquí obtengo el valor de los atributos 'id' las secciones */
        const identificador = entry.target.getAttribute('id');
        /* y aquí obtengo el valor el atributo 'href' del enlace interno (actual), mediante una interpolación */
        const enlace_interno = document.querySelector(`#enlaces_internos a[href="#${identificador}"]`);

        /*
            Si la sección esta en el campo visual (viewport), añade al enlace correspondiente de la sección,
            la clase 'color_select' que la tengo en el (styles.css - generales).

            cuando se intercepte una nueva sección, eliminara la clase 'color_select' al enlace anterior y se la dará
            al nueno enlace (en la sección que estemos ahora). Esto lo hará según bajemos o subamos el scroll.
        */
        if(entry.isIntersecting){
            document.querySelector('#enlaces_internos a.color_select').classList.add('color_select');
            document.querySelector('#enlaces_internos a.color_select').classList.remove('color_select');
            enlace_interno.classList.add('color_select');
        }
    });
}, {rootMargin: '-20% 0px -80% 0px'});
/*
    'rootMargin' es para no interceptar más de una sección al mismo tiempo,
    (crea una linea divisoria (que divide la raiz de la interseccion por la mitad horizontalmente),
    en la que el 'color' del enlace no se cambiará hasta que se sobrepase esta linea).
*/

/* aquí obtenemos y seleccionamos el enlace al cual le queremos aplicar el 'observer' */
menu_internos.forEach(enlace_interno => {

    /* primero añado un nevento 'click' a cada enlace interno, para eliminar la clase 'color_select' a todos y darsela solo al enlace actual. */
    enlace_interno.addEventListener('click', function() {
        document.querySelector('#enlaces_internos a.color_select').classList.remove('color_select');
        enlace_interno.classList.add('color_select');
        abrirCerrar_menu.classList.toggle('close');
        navigator.classList.remove('show');
    });

    const hash = enlace_interno.getAttribute('href');
    const target = document.querySelector(hash);
    
    if(target){
        observer.observe(target);
    }
});