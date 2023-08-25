<?php 

	ini_set( 'display_errors', 1 );
    error_reporting( E_ALL );
	
	$Para = 'lenguajes_programacion@hotmail.com';
	$Nombre = $_POST['Nombre'];
	$Correo = $_POST['Correo'];
	$Asunto = $_POST['Asunto'];
	$Comentario = $_POST['Comentario'];
	$from = "lenguajes_programacion@hotmail.com";
    $headers = "Para:" . $from;
    mail($Para,$Asunto,$Comentario,$headers);
    
    echo "Mensaje enviado";
 ?>