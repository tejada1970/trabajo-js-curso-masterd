/*
    aqui obtengo los botones de 'aviso legal (del footer) de las todas las paginas' y los 
    botones de 'sevicios' de la página de inicio, para darles un evento 'click'
    y que se ejecute un alert(mensaje) cuando se clicke en cualquiera de ellos.
*/
/* PROCESO DE ACTUALIZACIÓN */
const btns_actualizacion = document.querySelectorAll('.msg_actualizacion');
for (let i = 0; i < btns_actualizacion.length; i++){
    btns_actualizacion[i].addEventListener('click', function(e){
        e.preventDefault();
        alert('! LO SENTIMOS ! \nPAGINÁ EN PROCESO DE ACTUALIZACIÓN \nDISCULPEN LAS MOLESTIAS');
    });
}