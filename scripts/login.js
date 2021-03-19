$(function () {
    var partida = "";
    var jugador_añadido = 1;
    jugadores_añadidos = new Array();
    //Ocultamos los campos para registrar los jugadores
    $("#nombreJugador").parent().hide();
    $("#añadirJugador").parent().hide();
    $("#contraseñaJugador").parent().hide();

    //Ocultamos el botón de inicio partida
    $("#inicioPartida").parent().hide();

    //Ocultamos el botón de pasar turno
    $("#pasarTurno").parent().hide();

    //Ocultamos el botón para lanzar dado
    $("#lanzarDado").parent().hide();

    //Al hacer click en el botón registrar partida
    $("#registrarPartida").on("click", function () {
        var nota = "";
        partida = $("#nombrePartida").val();
        if (partida == "") {
            nota = "Introduzca el nombre de la partida por favor."
        }
        if (nota != "") {
            $("#mensaje").text(nota).fadeIn(2000).fadeOut(2000);
        } else {
            $.post('php/registrarPartida.php', { nombre_partida: partida })
                .done(function (datos) {
                    switch (datos) {
                        case "OK":
                            $("#mensaje").text("Partida introducida correctamente.").fadeIn(2000).fadeOut(2000);
                            $("#nombreJugador").parent().show();
                            $("#añadirJugador").parent().show();
                            $("#contraseñaJugador").parent().show();
                            $("#nombrePartida").parent().hide();
                            $("#registrarPartida").parent().hide();
                            $("#nombrePartida").val("");
                            break;
                        case "error":
                            $("#mensaje").text("Ya existe una partida con ese nombre.").fadeIn(2000).fadeOut(2000);
                            break;
                    }
                })
                .fail(function () {
                    alert("Error en el fichero: registrarPartida.php");
                })
        }
    });

    //Al hacer click en el botón registrar jugador
    $("#registrarJugador").on("click", function () {
        var nota = "";
        var jugadorRegistro = $("#nombre_registroJugador").val();
        var contraseña1 = $("#contraseña_registroJugador1").val();
        var contraseña2 = $("#contraseña_registroJugador2").val();
        if (jugadorRegistro == "") {
            nota = "Introduzca el nombre del jugador por favor.</br>"
        }
        if (contraseña1 == "") {
            nota += "Introduzca una contraseña por favor.</br>"
        }
        if (contraseña2 == "") {
            nota += "Introduzca una contraseña de confirmación por favor.</br>"
        }
        if (contraseña1 != contraseña2) {
            nota += "Introduzca dos contraseñas iguales por favor."
        }
        if (nota != "") {
            $("#mensaje").html(nota).fadeIn(2000).fadeOut(2000);
        } else {
            $.post('php/registrarJugador.php', { nombre_jugador: jugadorRegistro, contraseña: contraseña1 })
                .done(function (datos) {
                    switch (datos) {
                        case "OK":
                            $("#mensaje").text("Jugador introducido correctamente.").fadeIn(2000).fadeOut(2000);
                            break;
                        case "error":
                            $("#mensaje").text("Ya existe un jugador con ese nombre.").fadeIn(2000).fadeOut(2000);
                            break;
                    }
                    $("#nombre_registroJugador").val("");
                    $("#contraseña_registroJugador1").val("");
                    $("#contraseña_registroJugador2").val("");
                })
                .fail(function () {
                    alert("Error en el fichero: registrarJugador.php");
                })
        }
    });

    //Al hacer click en el boton Añadir Jugador
    $("#añadirJugador").on("click", function () {
        var nota = "";
        var jugadorAñadir = $("#nombreJugador").val();
        var contraseñaJugador = $("#contraseñaJugador").val();
        for (let jugador of jugadores_añadidos) {
            if (jugador == jugadorAñadir) {
                nota = "El jugador ya está añadido a esta partida.</br>"
            }
        }
        if (jugadorAñadir == "") {
            nota += "Introduzca un jugador por favor.</br>"
        }
        if (contraseñaJugador == "") {
            nota += "Introduzca una contraseña por favor."
        }
        if (nota != "") {
            $("#mensaje").html(nota).fadeIn(2000).fadeOut(2000);
        } else {
            $.post('php/añadirJugador.php', { nombre_jugador: jugadorAñadir, contraseña: contraseñaJugador })
                .done(function (datos) {
                    switch (datos) {
                        case "OK":
                            $("#mensaje").text("Jugador añadido correctamente.").fadeIn(2000).fadeOut(2000);
                            jugadores_añadidos.push(jugadorAñadir);
                            if (jugador_añadido == 4) {
                                $("#inicioPartida").parent().show();
                                $("#formulario").hide();
                            }
                            $("#nombreJugador").val("");
                            jugador_añadido++;
                            $("label[for=nombreJugador]").text("Nombre del jugador " + jugador_añadido)
                            $("#nombreJugador").val("");
                            $("#contraseñaJugador").val("");
                            $.post('php/registrar_jugadorPartida.php', { nombre_jugador: jugadorAñadir, nombre_partida: partida })
                                .done()
                                .fail(function(){alert("Error en el fichero: registrar_jugadorPartida.php");})
                            break;
                        case "error":
                            $("#mensaje").text("Contraseña o jugador erróneos.").fadeIn(2000).fadeOut(2000);
                            break;
                    }
                    $("#nombreJugador").val("");
                })
                .fail(function () {
                    alert("Error en el fichero: añadirJugador.php");
                })
        }
    });
})