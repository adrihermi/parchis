$(function () {
    //Cargamos los jugadores en el Select
    $.getJSON('php/cargarJugadores.php')
        .done(function (datos) {
            $.each(datos, function () {
                $("#seleccionJugadores").append("<option value = '" + this.nombre_jugador + "'>" + this.nombre_jugador + "</option>");
            });
        })
        .fail(function () {
            alert("Error en el fichero: cargarJugadores.php");
        })

    //Al realizar un click sobre seleccionJugadores

    $("#seleccionJugadores").on("click", function () {
        let jugadorSeleccionado = $("#seleccionJugadores").val();
        let orden = $("input:radio:checked").val();
        if (jugadorSeleccionado == 0) {
            $("#resultadosJugador").html("");
            return;
        }
        $.post('php/cargar_partidasJugador.php', { nombre_jugador: jugadorSeleccionado, orden:orden})
            .done(function (datos) {
                var tabla = "<table id = 'resultados'><caption>Resultados para el jugador " + jugadorSeleccionado + ".</caption>";
                tabla += "<tr><th>Nombre de la partida</th><th>Posicion</th></tr>";
                $.each(datos, function () {
                tabla +="<tr>"+
                "<td>" + this.nombre_jugador + "</td>" +
                "<td>" + this.orden + "</td>" +
                "</tr>";
                })
                tabla +="</tabla>";
                $("#resultadosJugador").html(tabla);
            })
            .fail(function () { 
                alert("Error en el fichero: cargarJugadores.php")
            })
    })
})