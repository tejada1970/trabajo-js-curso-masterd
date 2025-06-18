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
  
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4) {
            if (xmlhttp.status == 200) {
                if (xmlhttp.responseText.trim().startsWith("<?php")) {
                    document.getElementById("contenedor_noticias").innerHTML = `
                    <div style='margin-top: 20px; padding: 10px; background: #ffe0e0; border: 1px solid #ff0000; border-radius: 10px; font-family: sans-serif; display: flex; flex-direction: column; gap: 15px'>
                        <h3>⚠️ Aviso Importante</h3>
                        <p>Este proyecto incluye código PHP y no puede ejecutarse correctamente desde <strong>Live Server</strong> o como archivo local.</p>
                        <p><strong>Usa un servidor como XAMPP, WAMP o MAMP</strong> y accede al proyecto desde el navegador mediante:</p>
                        <pre style='white-space: pre-wrap; word-break: break-word; background: #f4f4f4; padding: 1rem; border-radius: 5px;'>http://localhost/tu_proyecto/</pre>
                        <strong>🔹 Reemplaza "tu_proyecto" por el nombre real.</strong>
                    </div>
                    `;
                } else {
                    document.getElementById("contenedor_noticias").innerHTML = xmlhttp.responseText;
                }
            } else {
            document.getElementById("contenedor_noticias").innerHTML = `
                <div style='padding: 2rem; background: #ffe0e0; border: 1px solid #ff0000; border-radius: 10px; font-family: sans-serif;'>
                <h2>❌ Error de conexión</h2>
                <p>No se pudo cargar el contenido del RSS. Es posible que el servidor no esté en ejecución o que no tenga soporte PHP.</p>
                <p><strong>Verifica que XAMPP, WAMP o MAMP esté encendido</strong> y accede al proyecto desde:</p>
                <pre style='background: #f4f4f4; padding: 1rem; border-radius: 5px;'>http://localhost/tu_proyecto/</pre>
                </div>
            `;
            }
        }
    };

    xmlhttp.open("GET","./assets/lector_rss_php/lectorRSS.php?q="+str,true);
    xmlhttp.send();
}
