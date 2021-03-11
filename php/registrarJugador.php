<?php 
    require("conexion.php");
	$consulta = "INSERT INTO jugadores (nombre_jugador) 
                VALUES ('".$_POST['nombre_jugador']."')";
	$saida = '';
	$conexion->query($consulta);
	$conexion->close();
?>