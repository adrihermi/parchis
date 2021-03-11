<?php 
    require("conexion.php");
	$consulta = "INSERT INTO partidas (nombre_partida) 
                VALUES ('".$_POST['nombre_partida']."')";
    $conexion->query($consulta);
	$conexion->close();
?>