<?php 
    require("conexion.php");
	$consulta = "SELECT * 
                 FROM resultados_partidas
                 WHERE nombre_jugador = '".$_POST['nombre_jugador']."'
                 ORDER BY posicion ".$_POST['orden'];
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