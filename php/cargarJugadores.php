<?php 
    require("conexion.php");
	$consulta = "SELECT nombre_jugador 
                 FROM jugadores";
	$saida = array();
	if ($datos = $conexion->query($consulta)) {   		
		while ($jugador = $datos->fetch_object()) {
			$saida[] = $jugador;
		}
		$datos->close();
	}
	$conexion->close();
	echo json_encode($saida);
?>