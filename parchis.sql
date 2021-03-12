DROP DATABASE IF EXISTS parchis;
CREATE DATABASE parchis;

CREATE TABLE IF NOT EXISTS `jugadores` (
  `nombre_jugador` varchar(30) PRIMARY KEY NOT NULL,
  `contraseña` varchar(30)
) ENGINE = MyISAM DEFAULT CHARSET = latin1;

CREATE TABLE IF NOT EXISTS `partidas` (
  `nombre_partida` varchar(30) PRIMARY KEY NOT NULL
) ENGINE = MyISAM DEFAULT CHARSET = latin1;

CREATE TABLE IF NOT EXISTS `resultados`(
  
) ENGINE = MyISAM DEFAULT CHARSET = latin1;
/*CREATE TABLE IF NOT EXISTS resultados_partidas(
    id_jugador int NOT NULL,
    id_partida int NOT NULL,
    CONSTRAINT pk_resultados_partidas PRIMARY KEY(id_jugador,id_partida),
    CONSTRAINT fk_resultados_partidas_jugadores FOREIGN KEY (id_jugador) REFERENCES jugadores (id_jugador)
    ON UPDATE CASCADE 
    ON DELETE RESTRICT,
    CONSTRAINT fk_horario_profesores FOREIGN KEY (id_profesor) REFERENCES profesores (id_profesor)
    ON UPDATE CASCADE 
    ON DELETE RESTRICT
)ENGINE = MyISAM DEFAULT CHARSET = latin1;*/