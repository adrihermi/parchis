<?php 
    require("conexion.php");
	$consulta = "SELECT * 
				 FROM partidas
				 WHERE nombre_partida = '".$_POST['nombre_partida']."'";
	$salida = 'error';
	if ($datos = $conexion->query($consulta)) {   		
		if ($datos->num_rows == 0) {
			$consulta = "INSERT INTO partidas (nombre_partida) 
                         VALUES ('".$_POST['nombre_partida']."')";
			$conexion->query($consulta);
			$salida = "OK";
		}
		$datos->close();
	}
	$conexion->close();
	echo $salida;
?>