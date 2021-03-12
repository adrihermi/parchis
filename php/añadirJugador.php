<?php 
    require("conexion.php");
	$consulta = "SELECT * 
				 FROM jugadores
				 WHERE nombre_jugador = '".$_POST['nombre_jugador']."' AND contraseña = '".$_POST['contraseña']."'";
	$salida = 'error';
	if ($datos = $conexion->query($consulta)) {   		
		if ($datos->num_rows != 0) {
			$salida = "OK";
		}
		$datos->close();
	}
	$conexion->close();
	echo $salida;
?>