/**
 * Inteligência artificial
 * @type type
 */
var listadebola;
var today = new Date();
var ditados = {
        1 : '1, começou o jogo, pedra número 1.',
        2 : '2, só um patinho na lagoa, pedra número 2.',
        3 : '3, porquinhos ou mosqueteiros, pedra número 3.',
        4 : '4, pernas da mesa, pedra número 4.',
        5 : '5, aperte o cinto, pedra número 5.',
        6 : '6, Meia dúzia, pedra número 6.',
        7 : '7 anões da Branca de Neve, pedra número 7.',
        8 : '8, biscoito, pedra número 8.',
        9 : '9, pingo no pé, pedra número 9.',
        10 : '10, aaaiii, aaaiii, aaaiii eu sou o cai cai neymarr, pedra número 10.',
        11 : '11, um atrás do outro, pedra número 11.',
        12 : '12, vitamina B12, ou conhecida como uma duzia, pedra número 12.',
        13 : '13, número de sorte - Zagallo, pedra número 13.',
        14 : '14, Dona Florinda, pedra número 14.',
        15 : '15, debutante, pedra número 15.',
        18 : '18, Idade adulta, pedra número 18.',
        22 : '22, Dois patinhos na lagoa, pedra número 22.',
        23 : '23, Mais um número e chega lá, pedra número 23.',
        24 : '24, rapaz alegre, aaaaaaaaaaaaaaaaaaaiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii, pedra número 24.',
        30 : '30, não minta, saiu 30, pedra número 30.',
        33 : '33, idade de Cristo, pedra número 33.',
        38 : '38, Esse é perigoso, pedra número 38.',
        40 : '40, a idade da loba ou  conhecida como panelão sem fundo, pedra número 40.',
        44 : '44, Quá-quá-quá ou Bico Largo, pedra número 44.',
        45 : '45, fim do primeiro tempo, pedra número 45.',
        50 : '50, é penta, pedra número 50.',
        51 : '51, Conhecida como a melhor pinga, ou uma boa ideia, pedra número 51.',
        55 : '55, Dois portugueses numa perna só ou dois cachorros do padre , pedra número 55.',
        58 : '58, primeira copa, pedra número 58.',
        60 : '60, num bar, 70 sair 100 pagar, aí mandão a polícia 20 buscar. pedra número 60.',
        62 : 'meia dois, Feijão com arroz, pedra número 62.',
        66 : 'meia, meia, um tapa atras da orelha, pedra número 66.',
        69 : 'meia nove, Quem não gosta, um pra cima e outro para baixo, pedra número 69.',
        70 : '70, tri-mundial, pedra número 70.',
        71 : '71, Dona Clotilde, pedra número 71.',
        72 : '72, Seu Madruga, pedra número 72.',
        75 : '75, terminou o jogo, pedra número 75.'
};

const monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
  "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

$(document).ready(function() {
    var databingo = $('#data-bingo');
    databingo.append(today.getDate()+' de '+monthNames[today.getMonth()]+' de '+today.getFullYear());
    
});

function comecarPartida() {
    responsiveVoice.speak('Olá, Seja bem Vindo ao Bingo da Sorte.     este é o concúrso de número, 350.     Data de '+today.getDate()+' de '+monthNames[today.getMonth()]+' de '+today.getFullYear()+'.     Para este concúrso temos um total de 75 pedras.      BOA SORTE.        Prepare o milho     vamos começar. ', 'Brazilian Portuguese Female', {volume: 0.5});
    setTimeout(function() {
        reqNumero(); 
    }, 29000);
}

function reqNumero() {
    
    $.ajax({
        url: "reqbingo.php", 
        dataType: 'json',
        type:'POST',
        data:{
            tipo:'reqbingo'
        },
        success: function(response) {
            listadebola = response.num.num;
            listBolas();
        },
        error: function(jqXHR, textStatus, errorThrown) {
           responsiveVoice.speak('Opiiiiis, Falha de conexão com o servidor.    atualize a página ou tente mais tarde.    deve ser bug do programdor. k k k k k k.', 'Brazilian Portuguese Female', {volume: 0.5});
        }
    });
    
}

function listBolas() {
    var count = 0;
    for (var value in listadebola) {
        if (responsiveVoice.cancel() != true || responsiveVoice.pause() != true) {
            count++;
            criarBola('list-ball', listadebola[value], value, count);
        }
    }
}


function criarBola (renderdiv, numero, ordem, count) {
    
        var divrender = $('#'+renderdiv);
        var msg = retornaDitados(numero);
        setTimeout(function() {
            var corbola = coresRandomicas();
            var divtotalball = $('#total-bola');
            divtotalball.html(count);

            responsiveVoice.speak(''+msg+'', 'Brazilian Portuguese Female', {volume: 0.5});
            divrender.append('<div class="ball '+corbola+'" id="ball'+numero+'"><div><span>'+numero+'</span></div></div>'); 

        }, ordem * 10000);
    
    
}

function retornaDitados(number) {
   var res = 'Pedra número '+number;
   for (var value in ditados) {
       if (number == value) {
           res = ditados[value];
           break;
       }
    }
    return res;
}

function coresRandomicas (){
    var myArray = ['blue', 'red', 'green','yellow','violeta','marrom','verde','amarelo']; 
    var rand = myArray[Math.floor(Math.random() * myArray.length)];
    return rand;
}

function cancelaPlayer () {
    responsiveVoice.cancel();
    responsiveVoice.speak('Atenção, Atenção,     esta rodada está cancelada.      agradeço pela coompreensão de todos, Obrigada!', 'Brazilian Portuguese Female', {volume: 0.5});
    responsiveVoice.speak('Atenção', 'Brazilian Portuguese Female', {volume: 0.5});
    responsiveVoice.speak('esta rodada está cancelada.', 'Brazilian Portuguese Female', {volume: 0.5});
    responsiveVoice.speak('agradeço pela coompreensão de todos, Obrigada!', 'Brazilian Portuguese Female', {volume: 0.5});
    responsiveVoice.cancel();
}

function pausePlayer() {
    
    responsiveVoice.pause();
    responsiveVoice.speak('Pessoal Atenção,    Por favor pessoa a Atenção de todos,     vamos fazer uma parada.    Aproveitem para comprarem suas pipócas, refrigerantes e não pode faltar a cerveja. Voltaremos em alguns Minutos ', 'Brazilian Portuguese Female', {volume: 0.5});
    responsiveVoice.resume();
}

function resumePlayer() {
    //responsiveVoice.speak('Pessoal Atenção,   Atenção,     Atenção,             Por favor cada um em seu lugar,                   vamos começar.           ', 'Brazilian Portuguese Female', {volume: 0.5});
    //responsiveVoice.pause();
    responsiveVoice.resume();
}

function isSuportNavegador(){
    if(responsiveVoice.voiceSupport()) {
        responsiveVoice.speak("Paranbéns, seu navegador suporta nossa API.");
    }
}

function retornaListaVoz() {
    return responsiveVoice.getVoices();
}

function setarTipoVoz () {
    responsiveVoice.setDefaultVoice("Brazilian Portuguese Female");
}

/**
 * Testar Dispositivo de audio Suporta detecta dispositivo de audio nativo
 */
function testarDispositivoAudioSuporta () {
    if(responsiveVoice.isPlaying()) {
        console.log("Espero que você esteja escutando.");
    }
}

/* Exemplo de como usar callback*/
//responsiveVoice.speak("Olá, este é meu exemplo.", "Brazilian Portuguese Female", {onstart: StartCallback, onend: EndCallback});
// return true/false


//$(document).on('mouseleave', exitIntent);
//function exitIntent(e){
//   if( e.clientY < 0 ) {
//        responsiveVoice.cancel();
//        responsiveVoice.speak('Opiiiiis','Brazilian Portuguese Female', {volume: 0.5});
//        responsiveVoice.speak('Parece que você está procurando alguma coisa na barra do navegador. ','Brazilian Portuguese Female', {volume: 0.5});
//   }
//}