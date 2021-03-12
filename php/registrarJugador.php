<?php 
    require("conexion.php");
	$consulta = "SELECT * 
				 FROM jugadores
				 WHERE nombre_jugador = '".$_POST['nombre_jugador']."'";
	$salida = 'error';
	if ($datos = $conexion->query($consulta)) {   		
		if ($datos->num_rows == 0) {
			$consulta = "INSERT INTO jugadores (nombre_jugador, contraseña) 
                		 VALUES ('".$_POST['nombre_jugador']."', '".$_POST['contraseña']."')";
			$conexion->query($consulta);
			$salida = "OK";
		}
		$datos->close();
	}
	$conexion->close();
	echo $salida;
?>