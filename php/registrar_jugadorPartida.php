<?php
require("conexion.php");
$consulta = "INSERT INTO resultados_partidas (nombre_jugador, nombre_partida) 
                         VALUES ('" . $_POST['nombre_jugador'] . "', '" . $_POST['nombre_partida'] . "')";
$conexion->query($consulta);
$conexion->close();
?>