-- Eliminamos la base de datos parchis si existe
DROP DATABASE IF EXISTS parchis;
-- Creamos la base de datos parchis
CREATE DATABASE parchis;

-- Si no existe creamos la tabla jugadores
CREATE TABLE IF NOT EXISTS jugadores (
  nombre_jugador varchar(30) PRIMARY KEY NOT NULL,
  contraseña varchar(30)
) ENGINE = MyISAM DEFAULT CHARSET = latin1;

-- Si no existe creamos la tabla partidas
CREATE TABLE IF NOT EXISTS partidas (
  nombre_partida varchar(30) PRIMARY KEY NOT NULL
) ENGINE = MyISAM DEFAULT CHARSET = latin1;

-- Si no existe creamos la tabla resultados_partidas
CREATE TABLE IF NOT EXISTS resultados_partidas(
  nombre_jugador varchar(30)  NOT NULL,
  nombre_partida varchar(30) NOT NULL,
  posicion INT(1),
  CONSTRAINT pk_resultados_partidas PRIMARY KEY(nombre_jugador,nombre_partida),
  CONSTRAINT fk_resultados_partidas_jugadores FOREIGN KEY (nombre_jugador) REFERENCES jugadores (nombre_jugador)
  ON UPDATE CASCADE 
  ON DELETE RESTRICT,
  CONSTRAINT fk_resultados_partidas_partidas FOREIGN KEY (nombre_partida) REFERENCES partidas (nombre_partida)
  ON UPDATE CASCADE 
  ON DELETE RESTRICT
) ENGINE = MyISAM DEFAULT CHARSET = latin1;
