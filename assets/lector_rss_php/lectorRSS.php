<?php
/* obtener el parámetro q de la URL */
$q=$_GET["q"];
 
/* se carga el canal seleccionado en el formulario */
if($q=="zdnet") {
  $xml=("https://www.zdnet.com/news/rss.xml");
}

/* Representa un documento HTML o XML en su totalidad; Sirve Como Raíz del Árbol de documento. */
$xmlDoc = new DOMDocument();
$xmlDoc->load($xml);
 
/* obtener elementos desde "<channel>" */
$channel=$xmlDoc->getElementsByTagName('channel')->item(0);
$channel_title = $channel->getElementsByTagName('title')->item(0)->childNodes->item(0)->nodeValue;
/*$channel_link = $channel->getElementsByTagName('link')->item(0)->childNodes->item(0)->nodeValue;*/
$channel_desc = $channel->getElementsByTagName('description')->item(0)->childNodes->item(0)->nodeValue;
$channel_url = $channel->getElementsByTagName('url')->item(0)->childNodes->item(0)->nodeValue;
 
/* mostrar la salida de los elementos del "<channel>" */
echo("<br>");
/*echo("<p><a href='" . $channel_link  . "'>" . $channel_title . "</a>");*/
/*echo("<p><a href='" . $channel_title  . "'>" . $channel_title . "</a>");*/
echo("<br>");
echo("<hr>");

/* obtener la entrada y salida de los elementos "<item>" */
$x=$xmlDoc->getElementsByTagName('item');
for ($i=0; $i<=7; $i++) {
  $item_title=$x->item($i)->getElementsByTagName('title')->item(0)->childNodes->item(0)->nodeValue;
  echo("<br>");
  $item_link=$x->item($i)->getElementsByTagName('link')->item(0)->childNodes->item(0)->nodeValue;
  echo("<br>");
  $item_desc=$x->item($i)->getElementsByTagName('description')->item(0)->childNodes->item(0)->nodeValue;
  echo("<br>");
  echo ("<p><a href='" . $item_link . "'>" . $item_title . "</a>");
  echo ("<br>");
  echo ($item_desc . "</p>");
  echo("<br>");
  echo("<br>");
}
?>
