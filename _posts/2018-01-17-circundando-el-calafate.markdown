---
layout: post
title: Percorrendo El Calafate e avistando o lago Argentino
date: 2017-01-17 12:00 -0300
description: 
img: lago-argentino.jpg
custom_css:
    - leaflet
    - gpx
custom_js:
    - leaflet
    - gpx.min
    - gpx-helper
tags:
  - Patagonia
  - Argentina
author: Renato
published: true
weight: 50
---

Já havíamos planejado que nosso dia hoje seria para relaxar. Ficaríamos na
cidade para conhecê-la.  Ainda mais depois do atraso de ontem... hoje dormimos
até o sono acabar, que foi lá pelas 10:00. O dia já estava lindo e será ótimo
caminhar pela cidade. 

Começamos o dia buscando suprimentos. Precisávamos de água para o dia e comida
para fazer a jantar. Resolvemos ir ao único supermercado que não conhecíamos
(só há três na cidade), um mercado da rede La Anonima morro acima na nossa rua.
Em nossa viagem, a rede La Anonima se mostrou notória em não ter nada das
coisas que queríamos, mas, desta vez, a visita valeria a pena pois teríamos
vista para o Lago Argentino. Ficamos surpresos que achamos rúcula fresca. Mas
a compra foi isso, pão e água. Depois, fomos ao DistriSur e compramos nosso
fiel bife de chorizo e legumes.

Após preparar sanduíches para a caminhada, saímos para andar. A ideia era
passar pela laguna Nimez, uma reserva ecológica que fica dentro da cidade, no
caminho para a orla do lago Argentino. Chegando ao lago, o tempo estava ótimo.
Porém, em menos de cinco minutos começou uma ventania monstruosa. Alice
conferiu a previsão do tempo e, pelo visto, ia ventar a tarde inteira...
Paciência! Nada nos impediria de caminhar ao lado do lago. Além do mais,
o vento estava a nosso favor, pois caminhávamos para noroeste e o vento vinha
do oeste (parece que, aqui, o vento é sempre oeste).

Com essa ventania seria impossível comer em frente ao lago. Caminhamos até
o final do calçadão antes de repensar nosso lanche. No final tiramos mais fotos
e o vento ficava mais forte. Retornar pelo calçadão seria inconveniente. E nós
meio que já tínhamos praticamente saído da cidade. Resolvemos continuar
andando, agora indo para o Sul. Resolvi calcular uma rota mais segura para
o museu de interpretação histórica, que seria nosso próximo destino. (Todas as
rotas e mapas continuam sendo no OsmAnd+ e OpenStreetMap. Google Maps aqui
é inútil.)

No caminho para o museu passamos por estradas de terra e, por vezes, o vento
jogava areia em nossos olhos. Quando voltamos para a cidade e ruas asfaltadas,
a situação ficou bem melhor, pois árvores e casas bloqueiam o vento. Não
achamos nenhuma praça em até pudéssemos parar e comer. Chegando ao museu, vimos
que ele ficava a menos de 2 km de casa e decidimos voltar para casa e comer,
pois já eram quase 17:00.

O museu de interpretação histórica é excelente. Ele é composto por cinco salas
contando a história natural e humana da Patagônia, começando por fósseis de
dinossauros patagônicos. Depois, há a ala de megamamíferos, seguida pela dos
povos originais da Patagônia, que chegaram aqui, estima-se, junto com Raul
Seixas: há 10000 anos. Depois a coisa fica mais triste, com a chegada dos
europeus, genocídio dos povos nativos e tempos modernos. Há, também, três
projeções de vídeo: uma sobre a paleontologia na região; outro sobre os
glaciares; e o mais marcante, sobre o genocídio de nativos, exploração
e exibição em zoológicos na Europa e outras atrocidades. Na saída, um bate-papo
com um dos funcionários revelou que o museu começou apenas com a exposição
sobre nativos e "colonizadores" e depois foi "voltando no tempo". Importante
sempre lembrar para que respeitemos e não destruamos o diferente...  😞

Depois do museu, voltamos à laguna Nimez, tiramos fotos dos flamingos
e voltamos para casa para fazer nossa fiel janta de bife e salada. 😋

O nosso roteiro no dia de hoje vai abaixo:

<div class="gpx" id="gpx">
 <h3>El Calafate</h3>
 <span class="start"></span>

 <div id="map" class="map leaflet-container" style="height: 400px; position:relative;"></div>

 <ul class="info">
  <li>Distância:&nbsp;<span class="distance"></span>&nbsp;m</li>&mdash; 
  <li>Duração:&nbsp;<span class="duration"></span></li>&mdash; 
  <li>Passo:&nbsp;<span class="pace"></span>/km</li>&mdash; 
  <li>Velocidade:&nbsp;<span class="speed"></span>km/h</li>&mdash;
 </ul>
</div>

<script>
    var gpx = '{{site.baseurl}}/assets/gpx/2018-01-17-el-calafate.gpx';
    display_gpx('gpx', 'map', gpx);
</script>

