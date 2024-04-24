function showRSS(str) {
    if (str.length==0) {
        document.getElementById("contenedor_noticias").innerHTML="";
        return;
    }
    /* inicializamos el objeto 'XMLHttpRequest()' */
    /* El objeto XMLHttpRequest se usa para intercambiar datos con un servidor. */
    if (window.XMLHttpRequest) {
        /* código para IE7+, Firefox, Chrome, Opera, Safari */
        xmlhttp=new XMLHttpRequest();
    }
    else { 
        /* código para IE6, IE5 */
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
  
    xmlhttp.onreadystatechange=function() {
        if (xmlhttp.readyState==4 && xmlhttp.status==200) {
            document.getElementById("contenedor_noticias").innerHTML=xmlhttp.responseText;
        }
    }
    xmlhttp.open("GET","./assets/lector_rss_php/lectorRSS.php?q="+str,true);
    xmlhttp.send();
}
