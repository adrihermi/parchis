$(function () {
    const jugadores = 4;
    var orden_turno_jugadores = ["amarillo", "verde", "rojo", "azul"];
    var turno = 0;
    var dado = 0;
    var fichaMovida = "";
    const comio = 20;
    var jugadorAmarillo = {
        fichaamarillo1: 0,
        fichaamarillo2: 0,
        fichaamarillo3: 0,
        fichaamarillo4: 0
    };
    var jugadorVerde = {
        fichaverde1: 0,
        fichaverde2: 0,
        fichaverde3: 0,
        fichaverde4: 0
    };
    var jugadorRojo = {
        ficharojo1: 0,
        ficharojo2: 0,
        ficharojo3: 0,
        ficharojo4: 0
    };
    var jugadorAzul = {
        fichaazul1: 0,
        fichaazul2: 0,
        fichaazul3: 0,
        fichaazul4: 0
    };

    $("#inicioPartida").on('click', iniciarPartida);
    $("#lanzarDado").on('click', lanzarDado);

    //Función que muestra el tablero de juego
    function mostrarTablero() {
        var tableroParchis =
            '<table>' +
            '<!-- 1 -->' +
            '<tr>' +
            '<td id="casaamarillo" class="amarillo" colspan="7" rowspan="7"></td>' +
            '<td colspan="2" id="casilla01">1</td>' +
            '<td class="amarillo" colspan="2" id="casilla68">68</td>' +
            '<td colspan="2" id="casilla67">67</td>' +
            '<td id="casaverde" class="verde" colspan="7" rowspan="7"></td>' +
            '</tr>' +
            '<!-- 2 -->' +
            '<tr>' +
            '<td colspan="2" id="casilla02">2</td>' +
            '<td class="amarillo" colspan="2">-</td>' +
            '<td colspan="2" id="casilla66">66</td>' +
            '</tr>' +
            '<!-- 3 -->' +
            '<tr>' +
            '<td colspan="2" id="casilla03">3</td>' +
            '<td class="amarillo" colspan="2">-</td>' +
            '<td colspan="2" id="casilla65">65</td>' +
            '</tr>' +
            '<!-- 4 -->' +
            '<tr>' +
            '<td colspan="2" id="casilla04">4</td>' +
            '<td class="amarillo" colspan="2">-</td>' +
            '<td colspan="2" id="casilla64">64</td>' +
            '</tr>' +
            '<!-- 5 -->' +
            '<tr>' +
            '<td class="amarillo" colspan="2" id="casilla05">5</td>' +
            '<td class="amarillo" colspan="2">-</td>' +
            '<td class="verdeClaro" colspan="2" id="casilla63">63</td>' +
            '</tr>' +
            '<!-- 6 -->' +
            '<tr>' +
            '<td colspan="2" id="casilla06">6</td>' +
            '<td class="amarillo" colspan="2">-</td>' +
            '<td colspan="2" id="casilla62">62</td>' +
            '</tr>' +
            '<!-- 7 -->' +
            '<tr>' +
            '<td colspan="2" id="casilla07">7</td>' +
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
            '<td id="casilla08">8</td>' +
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
            '<td id="casilla09">9</td>' +
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
            '<td class="rojo" colspan="2" id="casilla34">34</td>' +
            '<td colspan="2" id="casilla35">35</td>' +
            '</tr>' +
            '</table>';
        tablero.innerHTML = tableroParchis;
    }

    //Función que oculta el formulario de registro e inicia partida mostrando el tablero de juego
    function iniciarPartida() {
        $("#formulario").hide();
        $("#inicioPartida").parent().hide();
        $("#lanzarDado").parent().show()
        mostrarTablero();
        mostrarFichasCasa();
        mostrarTurno();
        $("img").css({ "cursor": "default", "pointer-events": "none" });
    }

    //Coloca las fichas en la casa de cada jugador
    function mostrarFichasCasa() {
        const numeroFichas = 4;
        for (let i = 0; i < orden_turno_jugadores.length; i++) {
            for (let j = 0; j < numeroFichas; j++) {
                $("#casa" + orden_turno_jugadores[i]).append("<img src='imaxes/fichas/ficha" + orden_turno_jugadores[i] + ".png' id = 'ficha" + orden_turno_jugadores[i] + j + "' data-color = '" + orden_turno_jugadores[i] + "' />");
            }
        }
    }

    //Creamos función mostrar el turno 
    function mostrarTurno() {
        $('#mensaje').text("Turno del jugador " + orden_turno_jugadores[turno] + ". Por favor haga click en el botón 'Lanzar dado' y acontinuación en la ficha que quiere mover.").fadeIn(2000);
    }

    //Lanzar dado y capturar valor.
    function lanzarDado() {
        const carasDado = 6;
        dado = 5//Math.floor(Math.random() * (carasDado)) + 1;
        $("#dado").html("<img src = 'imaxes/dados/dado" + dado + ".png' id='dado" + dado + "'/>").fadeIn(3000).fadeOut(3000);
        habilitarFichas();
    }

    //Habilitar fichas que del jugador y si valor dado es igual a 5 habilitar fichas casa
    function habilitarFichas() {
        $("img[src*=" + orden_turno_jugadores[turno] + "]").css({ "cursor": "pointer", "pointer-events": "auto" });
        if (dado != 5) {
            $("#casa" + orden_turno_jugadores[turno]).css({ "cursor": "default", "pointer-events": "none" });
        }
    }

    //Al hacer click sobre una imagen válida
    $(document).on("click", "img", function () {
        fichaMovida = this;
        jugarTurno();
    });

    //Creamos la función jugar turno
    function jugarTurno() {
        var posicion_inicial = 0;
        var posicion_final = 0;
        color_ficha = orden_turno_jugadores[turno];
        if ($(fichaMovida).parent().attr("id") == "casa" + color_ficha) {
            switch (color_ficha) {
                case "amarillo":
                    posicion_inicial = 5;
                    if (existebarreraEnemiga(color_ficha, posicion_inicial, posicion_inicial)) {
                        $('#mensaje').text("Seleccione otra ficha, no se puede realizar el movimiento.").fadeIn(2000);
                    } else if (existebarreraAmiga(color_ficha, posicion_inicial)) {
                        $('#mensaje').text("Seleccione otra ficha, no se puede realizar el movimiento.").fadeIn(2000);
                    } else if (comerfichaEnemiga(color_ficha, posicion_inicial)) {
                        salirComer(posicion_inicial);
                    } else {
                        $(fichaMovida).html("");
                        $("#casilla0" + posicion_inicial).append(fichaMovida);
                        rotarTurno();
                        mostrarTurno();
                        $("img").css({ "cursor": "default", "pointer-events": "none" });
                    }
                    break;
                case "verde":
                    posicion_inicial = 56;
                    if (existebarreraEnemiga(color_ficha, posicion_inicial, posicion_inicial)) {
                        $('#mensaje').text("Seleccione otra ficha, no se puede realizar el movimiento.").fadeIn(2000);
                    } else if (existebarreraAmiga(color_ficha, posicion_inicial)) {
                        $('#mensaje').text("Seleccione otra ficha, no se puede realizar el movimiento.").fadeIn(2000);
                    } else if (comerfichaEnemiga(color_ficha, posicion_inicial)) {
                        salirComer(posicion_inicial);
                    } else {
                        $(fichaMovida).html("");
                        $("#casilla" + posicion_inicial).append(fichaMovida);
                        rotarTurno();
                        mostrarTurno();
                        $("img").css({ "cursor": "default", "pointer-events": "none" });
                    }
                    break;
                case "rojo":
                    posicion_inicial = 39;
                    if (existebarreraEnemiga(color_ficha, posicion_inicial, posicion_inicial)) {
                        $('#mensaje').text("Seleccione otra ficha, no se puede realizar el movimiento.").fadeIn(2000);
                    } else if (existebarreraAmiga(color_ficha, posicion_inicial)) {
                        $('#mensaje').text("Seleccione otra ficha, no se puede realizar el movimiento.").fadeIn(2000);
                    } else if (comerfichaEnemiga(color_ficha, posicion_inicial)) {
                        salirComer(posicion_inicial);
                    } else {
                        $(fichaMovida).html("");
                        $("#casilla" + posicion_inicial).append(fichaMovida);
                        rotarTurno();
                        mostrarTurno();
                        $("img").css({ "cursor": "default", "pointer-events": "none" });
                    }
                    break;
                case "azul":
                    posicion_inicial = 22;
                    if (existebarreraEnemiga(color_ficha, posicion_inicial, posicion_inicial)) {
                        $('#mensaje').text("Seleccione otra ficha, no se puede realizar el movimiento.").fadeIn(2000);
                    } else if (existebarreraAmiga(color_ficha, posicion_inicial)) {
                        $('#mensaje').text("Seleccione otra ficha, no se puede realizar el movimiento.").fadeIn(2000);
                    } else if (comerfichaEnemiga(color_ficha, posicion_inicial)) {
                        salirComer(posicion_inicial);
                    } else {
                        $(fichaMovida).html("");
                        $("#casilla" + posicion_inicial).append(fichaMovida);
                        rotarTurno();
                        mostrarTurno();
                        $("img").css({ "cursor": "default", "pointer-events": "none" });
                    }
                    break;
            }
        } else {
            posicion_inicial = ($(fichaMovida).parent().attr("id")).substr(7, 2);
            posicion_inicial = parseInt(posicion_inicial);
            if (posicion_inicial + dado > 68) {
                posicion_final = (posicion_inicial + dado) - 68;
            } else {
                posicion_final = posicion_inicial + dado;
            }
            if (existebarreraEnemiga(color_ficha, posicion_inicial, posicion_final)) {
                $('#mensaje').text("Seleccione otra ficha, no se puede realizar el movimiento.").fadeIn(2000);
            } else if (existebarreraAmiga(color_ficha, posicion_final)) {
                $('#mensaje').text("Seleccione otra ficha, no se puede realizar el movimiento.").fadeIn(2000);
            } else if (comerfichaEnemiga(color_ficha, posicion_final)) {
                salirComer(posicion_final);
            } else {
                $(fichaMovida).html("");
                $("#casilla" + posicion_final).append(fichaMovida);
                rotarTurno();
                mostrarTurno();
                $("img").css({ "cursor": "default", "pointer-events": "none" });
            }
        }
    }


    //Hay barrera de otro color
    function existebarreraEnemiga(color_ficha, posicion_inicial, posicion_final) {
        let chave = false;
        for (let i = posicion_inicial; i <= posicion_final; i++) {
            if (i <= 9) {
                if ($("#casilla0" + i + " img").length == 2) {
                    $("#casilla0" + i + " img").each(function () {
                        if ($(this).attr("src") != "imaxes/fichas/ficha" + color_ficha + ".png") {
                            chave = true;
                        }
                    });
                    if (chave) {
                        return true;
                    }
                }
            } else {
                if ($("#casilla" + i + " img").length == 2) {
                    $("#casilla" + i + " img").each(function () {
                        if ($(this).attr("src") != "imaxes/fichas/ficha" + color_ficha + ".png") {
                            chave = true;
                        }
                    });
                    if (chave) {
                        return true;
                    }
                }
            }
        }
        return false;
    }
    //Hay barrera amiga
    function existebarreraAmiga(color_ficha, posicion_final) {
        let chave = false;
        if (posicion_final <= 9) {
            if ($("#casilla0" + posicion_final + " img").length == 2) {
                $("#casilla0" + posicion_final + " img").each(function () {
                    if ($(this).attr("src") == "imaxes/fichas/ficha" + color_ficha + ".png") {
                        chave = true;
                    }
                });
                if (chave) {
                    return true;
                }
            }
        } else {
            if ($("#casilla" + posicion_final + " img").length == 2) {
                $("#casilla" + posicion_final + " img").each(function () {
                    if ($(this).attr("src") == "imaxes/fichas/ficha" + color_ficha + ".png") {
                        chave = true;
                    }
                });
                if (chave) {
                    return true;
                }
            }
        }
        return false
    }

    //Hay ficha enemiga 
    function comerfichaEnemiga(color_ficha, posicion_final) {
        if (posicion_final <= 9) {
            if ($("#casilla0" + posicion_final + " img").length == 1) {
                if ($("#casilla0" + posicion_final + " img").attr("src") != "imaxes/fichas/ficha" + color_ficha + ".png") {
                    return true;
                }
            }
        } else {
            if ($("#casilla" + posicion_final + " img").length == 1) {
                if ($("#casilla" + posicion_final + " img").attr("src") != "imaxes/fichas/ficha" + color_ficha + ".png") {
                    return true;
                }
            }
        }
        return false
    }


    //function Salir y comer
    function salirComer(posicion) {
        if (posicion + comio > 68 && posicion > 9) {
            let color = $("#casilla" + posicion + " img").attr("data-color");
            $("#casa" + color).append($("#casilla" + posicion + " img"));
            $("#casilla" + posicion + " img").html("");
            posicion = (posicion + comio) - 68;
            $(fichaMovida).html("");
            $("#casilla0" + posicion).append(fichaMovida);
            dado = 0;
            jugarTurno();
        } else if (posicion + comio < 68 && posicion > 9) {
            let color = $("#casilla" + posicion + " img").attr("data-color");
            $("#casa" + color).append($("#casilla" + posicion + " img"));
            $("#casilla" + posicion + " img").html("");
            posicion += comio;
            $(fichaMovida).html("");
            $("#casilla" + posicion).append(fichaMovida);
            dado = 0;
            jugarTurno();
        } else {
            let color = $("#casilla0" + posicion + " img").attr("data-color");
            $("#casa" + color).append($("#casilla0" + posicion + " img"));
            $("#casilla0" + posicion + " img").html("");
            posicion += comio;
            $(fichaMovida).html("");
            $("#casilla" + posicion).append(fichaMovida);
            dado = 0;
            jugarTurno();
        }

    }

    //Rotar el turno
    function rotarTurno() {
        turno++;
        if (turno == 4) {
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