$(function () {
    var jugadores_introducidos = 1;
    const jugadores = 4;
    var orden_turno_jugadores = ["amarillo", "verde", "rojo", "azul"];
    var turno = 0;
    var dado = 0;
    var lanzamientosIniciales = 0;
    var inicio = false;
    var jugadorAmarillo = {
        enTablero: [0, 0, 0, 0]
    };
    var jugadorVerde = {
        enTablero: [0, 0, 0, 0]
    };
    var jugadorRojo = {
        enTablero: [0, 0, 0, 0]
    };
    var jugadorAzul = {
        enTablero: [0, 0, 0, 0]
    };

    //Ocultamos los campos para registrar los jugadores
    $("#nombreJugador").parent().hide();
    $("#registrarJugador").parent().hide();

    //Ocultamos el botón de inicio partida
    $("#inicioPartida").parent().hide();

    //Ocultamos el botón para lanzar dado
    $("#lanzarDado").parent().hide();

    //Al hacer click en el botón registrar partida
    $("#registrarPartida").on("click", function () {
        var nota = "";
        var partida = $("#nombrePartida").val();
        if (partida == "") {
            nota = "Introduzca el nombre de la partida por favor."
        }
        if (nota != "") {
            $("#mensaje").text(nota).fadeIn(2000).fadeOut(2000);
        } else {
            $.post('php/registrarPartida.php', { nombre_partida: partida })  
            .done(function () {
                    $("#mensaje").text("Partida introducida correctamente.").fadeIn(2000).fadeOut(2000);
                    $("#nombreJugador").parent().show();
                    $("#registrarJugador").parent().show();
                    $("#nombrePartida").parent().hide();
                    $("#registrarPartida").parent().hide();
                })
                .fail(function () {
                    alert("Error en el fichero: registrarPartida.php");
                })
        }
    });

    //Al hacer click en el botón registrar jugador
    $("#registrarJugador").on("click", function () {
        var nota = "";
        var jugador = $("#nombreJugador").val();
        if (jugador == "") {
            nota = "Introduzca el nombre del jugador por favor."
        }
        if (nota != "") {
            $("#mensaje").text(nota).fadeIn(2000).fadeOut(2000);
        } else {
            $.post('php/registrarJugador.php', { nombre_jugador: jugador })
                .done(function () {
                    $("#mensaje").text("Jugador introducido correctamente.").fadeIn(2000).fadeOut(2000);
                    if (jugadores_introducidos == 4) {
                        $("#nombreJugador").parent().hide();
                        $("#registrarJugador").parent().hide();
                        $("#inicioPartida").parent().show();
                    }
                    jugadores_introducidos++;
                })
                .fail(function () {
                    alert("Error en el fichero: registrarJugador.php");
                })
        }
    });
    $("img").css({ 'cursor': 'default', 'pointer-events': 'none' });
    $("#inicioPartida").on('click', iniciarPartida);
    $("#lanzarDado").on('click', lanzarDado);
    //$("img .").on('click',lanzarDado);

    //Función que muestra el tablero de juego
    function mostrarTablero() {
        var tableroParchis =
            '<table>' +
            '<!-- 1 -->' +
            '<tr>' +
            '<td id="casaamarillo" class="amarillo" colspan="7" rowspan="7"></td>' +
            '<td colspan="2" id="casilla1">1</td>' +
            '<td class="amarillo" colspan="2" id="casilla68">68</td>' +
            '<td colspan="2" id="casilla67">67</td>' +
            '<td id="casaverde" class="verde" colspan="7" rowspan="7"></td>' +
            '</tr>' +
            '<!-- 2 -->' +
            '<tr>' +
            '<td colspan="2" id="casilla2">2</td>' +
            '<td class="amarillo" colspan="2">-</td>' +
            '<td colspan="2" id="casilla66">66</td>' +
            '</tr>' +
            '<!-- 3 -->' +
            '<tr>' +
            '<td colspan="2" id="casilla3">3</td>' +
            '<td class="amarillo" colspan="2">-</td>' +
            '<td colspan="2" id="casilla65">65</td>' +
            '</tr>' +
            '<!-- 4 -->' +
            '<tr>' +
            '<td colspan="2" id="casilla4">4</td>' +
            '<td class="amarillo" colspan="2">-</td>' +
            '<td colspan="2" id="casilla64">64</td>' +
            '</tr>' +
            '<!-- 5 -->' +
            '<tr>' +
            '<td class="amarillo" colspan="2" id="casilla5">5</td>' +
            '<td class="amarillo" colspan="2">-</td>' +
            '<td class="verdeClaro" colspan="2" id="casilla63">63</td>' +
            '</tr>' +
            '<!-- 6 -->' +
            '<tr>' +
            '<td colspan="2" id="casilla6">6</td>' +
            '<td class="amarillo" colspan="2">-</td>' +
            '<td colspan="2" id="casilla62">62</td>' +
            '</tr>' +
            '<!-- 7 -->' +
            '<tr>' +
            '<td colspan="2" id="casilla7">7</td>' +
            '<td class="amarillo" colspan="2">-</td>' +
            '<td colspan="2" id="casilla61">61</td>' +
            '</tr>' +
            '<!-- 8 -->' +
            '<!-- Primera línea justo debajo de los grandes -->' +
            '<tr>' +
            '<td rowspan="2" id="casilla16">16</td>' +
            '<td rowspan="2" id="casilla15">15</td>' +
            '<td rowspan="2" id="casilla14">14</td>' +
            '<td rowspan="2" id="casilla13">13</td>' +
            '<td class="amarilloClaro" rowspan="2" id="casilla12">12</td>' +
            '<td rowspan="2" id="casilla11">11</td>' +
            '<td rowspan="2" id="casilla10">10</td>' +
            '<td id="vacio"></td>' +
            '<td id="casilla8">8</td>' +
            '<td class="amarillo">-</td>' +
            '<td class="amarillo">-</td>' +
            '<td id="casilla60">60</td>' +
            '<td id="vacio"></td>' +
            '<td rowspan="2" id="casilla58">58</td>' +
            '<td rowspan="2" id="casilla57">57</td>' +
            '<td class="verde" rowspan="2" id="casilla56">56</td>' +
            '<td rowspan="2" id="casilla55">55</td>' +
            '<td rowspan="2" id="casilla54">54</td>' +
            '<td rowspan="2" id="casilla53">53</td>' +
            '<td rowspan="2" id="casilla52">52</td>' +
            '</tr>' +
            '<!-- 9 -->' +
            '<tr>' +
            '<td id="casilla9">9</td>' +
            '<td class="casa" colspan="4" rowspan="4"></td>' +
            '<td id="casilla59">59</td>' +
            '</tr>' +
            '<!-- 10 -->' +
            '<tr>' +
            '<td class="azul" rowspan="2" id="casilla17">17</td>' +
            '<td class="azul" rowspan="2">|</td>' +
            '<td class="azul" rowspan="2">|</td>' +
            '<td class="azul" rowspan="2">|</td>' +
            '<td class="azul" rowspan="2">|</td>' +
            '<td class="azul" rowspan="2">|</td>' +
            '<td class="azul" rowspan="2">|</td>' +
            '<td class="azul">|</td>' +
            '<td class="verde">|</td>' +
            '<td class="verde" rowspan="2">|</td>' +
            '<td class="verde" rowspan="2">|</td>' +
            '<td class="verde" rowspan="2">|</td>' +
            '<td class="verde" rowspan="2">|</td>' +
            '<td class="verde" rowspan="2">|</td>' +
            '<td class="verde" rowspan="2">|</td>' +
            '<td class="verde" rowspan="2" id="casilla51">51</td>' +
            '</tr>' +
            '<!-- 11 -->' +
            '<tr>' +
            '<td class="azul">|</td>' +
            '<td class="verde">|</td>' +
            '</tr>' +
            '<!-- 12 -->' +
            '<tr>' +
            '<td rowspan="2" id="casilla18">18</td>' +
            '<td rowspan="2" id="casilla19">19</td>' +
            '<td rowspan="2" id="casilla20">20</td>' +
            '<td rowspan="2" id="casilla21">21</td>' +
            '<td class="azul" rowspan="2" id="casilla22">22</td>' +
            '<td rowspan="2" id="casilla23">23</td>' +
            '<td rowspan="2" id="casilla24">24</td>' +
            '<td id="casilla25">25</td>' +
            '<td id="casilla43">43</td>' +
            '<td rowspan="2" id="casilla44">44</td>' +
            '<td rowspan="2" id="casilla45">45</td>' +
            '<td class="rojoClaro" rowspan="2" id="casilla46">46</td>' +
            '<td rowspan="2" id="casilla47">47</td>' +
            '<td rowspan="2" id="casilla48">48</td>' +
            '<td rowspan="2" id="casilla49">49</td>' +
            '<td rowspan="2" id="casilla50">50</td>' +
            '</tr>' +
            '<!-- 13 -->' +
            '<tr>' +
            '<td id="vacio"></td>' +
            '<td id="casilla26">26</td>' +
            '<td class="rojo">-</td>' +
            '<td class="rojo">-</td>' +
            '<td id="casilla42">42</td>' +
            '<td id="vacio"></td>' +
            '</tr>' +
            '<!-- 14 -->' +
            '<tr>' +
            '<td id="casaazul" class="azul" colspan="7" rowspan="7"></td>' +
            '<td colspan="2" id="casilla27">27</td>' +
            '<td class="rojo" colspan="2">-</td>' +
            '<td colspan="2" id="casilla41">41</td>' +
            '<td id="casarojo" class="rojo" colspan="7" rowspan="7"></td>' +
            '</tr>' +
            '<!-- 15 -->' +
            '<tr>' +
            '<td colspan="2" id="casilla28">28</td>' +
            '<td class="rojo" colspan="2">-</td>' +
            '<td colspan="2" id="casilla40">40</td>' +
            '</tr>' +
            '<!-- 16 -->' +
            '<tr>' +
            '<td class="azulClaro" colspan="2" id="casilla29">29</td>' +
            '<td class="rojo" colspan="2">-</td>' +
            '<td class="rojo" colspan="2" id="casilla39">39</td>' +
            '</tr>' +
            '<!-- 17 -->' +
            '<tr>' +
            '<td colspan="2" id="casilla30">30</td>' +
            '<td class="rojo" colspan="2">-</td>' +
            '<td colspan="2" id="casilla38">38</td>' +
            '</tr>' +
            '<!-- 18 -->' +
            '<tr>' +
            '<td colspan="2" id="casilla31">31</td>' +
            '<td class="rojo" colspan="2">-</td>' +
            '<td colspan="2" id="casilla37">37</td>' +
            '</tr>' +
            '<!-- 19 -->' +
            '<tr>' +
            '<td colspan="2" id="casilla32">32</td>' +
            '<td class="rojo" colspan="2">-</td>' +
            '<td colspan="2" id="casilla36">36</td>' +
            '</tr>' +
            '<!-- 20 -->' +
            '<tr>' +
            '<td colspan="2" id="casilla33">33</td>' +
            '<td class="rojo" colspan="2" id="casill+a34">34</td>' +
            '<td colspan="2" id="casilla35">35</td>' +
            '</tr>' +
            '</table>';
        tablero.innerHTML = tableroParchis;
    }

    //Función que oculta el formulario de registro e inicia partida mostrando el tablero de juego
    function iniciarPartida() {
        $("#formulario").hide();
        $("#lanzarDado").show()
        mostrarTablero();
        mostrarFichasCasa();
        mostrarTurno();
    }

    //Creamos función mostrar el turno 

    function mostrarTurno() {
        $('#mensaje').text("Turno del jugador " + orden_turno_jugadores[turno] + ". Por favor haga click en el botón 'Lanzar dado' y acontinuación en la ficha que quiere mover.");
    }

    //Creamos función jugar el turno 
    function juagarTurno() {

    }

    //Coloca las fichas en la casa de cada jugador
    function mostrarFichasCasa() {
        const numeroFichas = 4;
        var casa;
        for (let i = 0; i < orden_turno_jugadores.length; i++) {
            for (let j = 1; j <= numeroFichas; j++) {
                $("#casa" + orden_turno_jugadores[i]).append("<div><img src='imaxes/fichas/ficha" + orden_turno_jugadores[i] + ".png' id = 'ficha" + orden_turno_jugadores[i] + j + "'/></div>");
            }
        }
    }

    //Lanzar dado y capturar valor.
    function lanzarDado() {
        const carasDado = 6;
        dado = Math.floor(Math.random() * (carasDado)) + 1;
        /*for (let i = 1; i <= carasDado; i++) {
            setInterval( $("#dado").html("<img src = 'imaxes/dados/dado"+i+".png' />"),50000000);    
        }*/
        $("#dado").html("<img src = 'imaxes/dados/dado" + dado + ".png' id='dado" + dado + "'/>").fadeIn(3000).fadeOut(3000);
    }

    //Rotar el turno
    function rotarTurno() {
        turno++;
        if (turno == 3) {
            turno = 0;
        }
    }
});



/*Función sortear turno inicial
function sortearturnoInicial() {
    if (!lanzamientosIniciales) {
        $('#mensaje').html('Vamos a sortear el turno inicial!!!!!</br>');
    }
    $('#mensaje').html(orden_turno_jugadores[lanzamientosIniciales] + ' lance el dado!!!!');
    $('#lanzarDado button').click(function () {
        var valorDado = lanzarDado();
        if (dadoMaisAlto < valorDado) {
            dadoMaisAlto = valorDado;
            turno = lanzamientosIniciales;
        } else if (dadoMaisAlto == valorDado) {
            $('#mensaje').html('Se a producido un empate. Procederemos a reiniciar el sorteo del turno inicial.');
            lanzamientosIniciales = 0;
            return;
        }
        lanzamientosIniciales++;
        console.log(dadoMaisAlto, turno,lanzamientosIniciales);
        if (!(lanzamientosIniciales < jugadores)) {
            inicio = true;
            iniciarPartida();
        } else {
            sortearturnoInicial();
        }
    });
}*/