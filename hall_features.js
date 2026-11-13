// ===== PROPOSTA 3A & 3C: SIMULADO GERAL (35 QUESTÕES) E BUSCA GLOBAL INSTANTÂNEA NO HALL =====
// Sistema desacoplado carregado no Hall de Entrada de ALM018

const MGERAL=[
// --- 20 Questões Centrais Selecionadas das Provas e Guias ---
["vit",[0],"Qual característica físico-química fundamental separa as vitaminas hidrossolúveis das lipossolúveis?",["Absorção passiva estocada em tecido adiposo por anos","Excreção renal contínua na urina e quase nenhuma reserva corporal, exceto a vitamina B12","Necessidade de sais biliares para translocação enterocítica","Toxicidade cumulativa em altas doses idêntica à da vitamina A"],1,"Hidrossolúveis dissolvem-se em água e são excretadas na urina; a B12 é a única exceção com grande estoque hepático."],
["vit",[1],"Segundo as recomendações nutricionais clássicas de equivalência da vitamina A, 6 µg de β-caroteno alimentar equivalem a:",["1 µg de retinol (3,33 UI)","6 µg de retinol","3 µg de retinol","12 µg de retinol"],0,"A taxa clássica de conversão de β-caroteno em retinol é de 6:1 (ou 12:1 em RAE moderno)."],
["vit",[1,4],"Qual par de vitaminas lipossolúveis é imediatamente destruído por adição de bicarbonato de sódio ou meio alcalino?",["Vitaminas A e D","Vitaminas E e K","Vitaminas B1 e C","Vitaminas B12 e Biotina"],1,"Meio alcalino e bicarbonato destroem as vitaminas E e K instantaneamente na cocção."],
["vit",[4,2],"Por que o leite comercial comercializado em garrafas de vidro transparentes perde expressivamente seu valor vitamínico?",["A vitamina B12 sofre hidrólise térmica pelo vidro","A riboflavina (vitamina B2) é altamente fotossensível à luz visível e UV","A vitamina C do leite precipita no fundo","O oxigênio reage exclusivamente com o cálcio"],1,"A riboflavina (B2) decompõe-se rapidamente sob radiação luminosa gerando lumiflavina."],
["min",[0],"A quantificação bromatológica do teor mineral total de um alimento via cinzas totais em forno mufla (550 °C) apresenta como exceção analítica:",["A destruição completa de íons cálcio e ferro","A perda por volatilização térmica e sublimação do mercúrio (Hg)","A formação de glicose inorgânica residual","A retenção exclusiva de nitrogênio orgânico"],1,"O mercúrio volatiliza na fumaça a 550 °C e exige digestão ácida úmida fechada por micro-ondas para sua dosagem."],
["min",[1],"Na pesquisa de mestrado do Prof. Bruno sobre alfaces cultivadas próximas a rodovias na RMBH, constatou-se que:",["A imersão em hipoclorito de sódio dissolveu todo o chumbo e cádmio","A simples lavagem com fricção mecânica sob água corrente removeu quase 100% da fuligem de chumbo e cádmio","A raiz da alface absorvia todo o chumbo do asfalto","O chumbo volatiliza espontaneamente ao ar ambiente"],1,"A fricção mecânica com água corrente removeu a fuligem externa aderida à folha de alface."],
["min",[1],"No doutorado do Prof. Bruno com a Profa. Flávia Custódio, comprovou-se que doces tradicionais de figo em tachos de cobre adquirem verde-esmeralda brilhante porque:",["O cobre catalisa a síntese de novas clorofilas no fruto cozido","Os íons Cu²⁺ do tacho substituem o magnésio Mg²⁺ no anel da clorofila formando complexo cobre-feofitina termoestável","O açúcar reage com o ar gerando cor verde","O cobre atua como bactericida impedindo a perda de água"],1,"A substituição química de Mg²⁺ por Cu²⁺ confere coloração verde-esmeralda extremamente estável ao calor."],
["min",[3],"De acordo com o estudo do Paradoxo do Cálcio (Muleya et al., 2024), a couve refogada superou o leite desnatado porque:",["Apresenta bioacessibilidade de cálcio de 42,7% contra 29,9% do leite, bastando 0,2 porção para fornecer a mesma dose aproveitável","O leite desnatado não possui cálcio solúvel","A couve é rica em ácido oxálico livre","O cálcio da couve não necessita de transportadores intestinais"],0,"A couve tem 42,7% de bioacessibilidade de cálcio, bastando 0,2 porção para igualar um copo de leite."],
["min",[3],"A ingestão diária de sucos verdes com alta concentração de espinafre cru eleva expressivamente o risco de litíase renal porque:",["O espinafre alcaliniza a urina para pH 9,0","O excesso de oxalato livre solúvel absorvido é excretado na urina cristalizando em cálculos de oxalato de cálcio","O espinafre fornece doses tóxicas de vitamina D","O ferro do espinafre entope a bexiga urinária"],1,"A alta carga de oxalato solúvel satura o filtrado glomerular cristalizando em pedras nos rins."],
["min",[4],"A lentilha destaca-se favoravelmente frente a nozes e amêndoas na oferta de zinco porque:",["A amêndoa perde 98% do zinco na gaiola do fitato, enquanto a lentilha perde apenas 8,7% na digestão","A lentilha não possui grupamentos minerais","A amêndoa é desprovida de fósforo inorgânico","O zinco da lentilha resiste à queima na mufla"],0,"A lentilha perde apenas 8,7% de zinco na digestão, enquanto a amêndoa perde 98% aprisionada por fitatos."],
["bio",[1],"Segundo a definição bromatológica e funcional, compostos bioativos em alimentos caracterizam-se por:",["Fornecer calorias superiores às proteínas convencionais","Serem constituintes extranutricionais que modulam processos metabólicos promovendo saúde e prevenção de doenças","Substituírem integralmente as vitaminas lipossolúveis","Atuarem exclusivamente como agentes conservantes sintéticos"],1,"Compostos bioativos são moléculas extranutricionais capazes de modular a fisiologia celular."],
["bio",[3],"O pigmento responsável pela coloração vermelha de tomates, melancias e goiabas é o:",["Resveratrol","Licopeno (carotenoide acíclico)","Sulforafano","Ácido clorogênico"],1,"O licopeno é um carotenoide hidrocarboneto caroteno responsável pelo tom vermelho."],
["bio",[3],"Para otimizar ao máximo a biodisponibilidade do licopeno do tomate no organismo humano, recomenda-se:",["Ingerir o tomate cru gelado sem qualquer fonte de lipídeos","Cozinhar o molho de tomate com azeite de oliva, promovendo isomerização térmica trans-para-cis e micelização","Ferver o tomate em água pura descartando a casca","Secar o fruto ao sol até carbonizar"],1,"Calor e lipídeos promovem a isomerização trans -> cis e formação de micelas mistas elevando a absorção."],
["bio",[6],"Dentre as aminas bioativas, as poliaminas espermidina, espermina e agmatina diferenciam-se das aminas biogênicas porque:",["São toxinas bacterianas decorrentes de putrefação cárnea","São sintetizadas pelo organismo e essenciais na proliferação celular, síntese de DNA/RNA e renovação da mucosa intestinal","Provocam imediatamente crises de escombrotoxicose","Substituem a histamina na dilatação vascular alérgica"],1,"Poliaminas são fisiológicas, essenciais à renovação celular e caem com o envelhecimento."],
["pos",[0],"A respiração celular em frutas e hortaliças armazenadas post-harvest pode ser equacionada globalmente como:",["Glicose + O₂ → CO₂ + H₂O + Energia (ATP e calor)","CO₂ + H₂O + Luz → Glicose + O₂","Ácido lático → Etanol + CO₂","Lipídeos + Sal → Proteínas"],0,"A respiração consome reservas orgânicas na presença de oxigênio liberando CO₂, água e calor."],
["pos",[1],"Frutos climatéricos diferenciam-se dos não climatéricos no armazenamento por apresentarem:",["Respiração contínua em declínio até o apodrecimento sem pico","Pico autotrófico acentuado na produção de etileno e taxa respiratória após a colheita, permitindo maturação fora da planta","Incapacidade absoluta de sintetizar açúcares redutores","Resistência total a injúrias mecânicas"],1,"Climatéricos (banana, mamão, tomate, maçã) exibem pico respiratório e de etileno e amadurecem colhidos verdes."],
["pos",[2],"A senescência e o amolecimento dos tecidos vegetais na pós-colheita decorrem da degradação de:",["Glicogênio muscular pela lactato desidrogenase","Substâncias pécticas da lamela média e parede celular por pectinametilestirases e poligalacturonases","Lipídeos intracelulares em vitamina C","Hemoglobina vegetal em clorofila"],1,"Enzimas pécticas hidrolisam as pectinas da parede celular vegetal promovendo perda de firmeza."],
["mor",[1],"O relaxamento da fibra muscular celular no animal vivo e na carcaça é um processo:",["Puramente passivo sem consumo de qualquer nucleotídeo","Estritamente ativo, no qual bombas de Ca²⁺-ATPase consomem ATP continuamente para recaptar cálcio para o retículo","Disparado pela ligação de íons cloreto na troponina","Inibido pelo magnésio citosólico"],1,"Relaxar consome ATP continuamente para bombear o cálcio de volta ao retículo sarcoplasmático."],
["mor",[4],"A instalação do rigor mortis pleno decorre fundamentalmente de:",["Excesso de oxigênio que rompe as mitocôndrias","Esgotamento irreversível do ATP celular que impede o desligamento das cabeças de miosina da actina","Digestão da linha Z por bactérias patogênicas","Substituição do colágeno por elastina"],1,"Sem ATP, as pontes cruzadas entre actina e miosina travam de forma inextensível no rigor mortis."],
["mor",[5],"Durante a maturação refrigerada da carne bovina (resolução do rigor), as enzimas calpaínas:",["Digerem completamente as moléculas de actina e miosina até aminoácidos livres","Clivam seletivamente proteínas estruturais de ancoragem do sarcômero (titina, nebulina, desmina e linha Z), soltando as miofibrilas","Transformam a carne em gelatina fluida sem necessidade de calor","Oxidam a gordura intramuscular em ácido oleico"],1,"Calpaínas não tocam na actina e miosina; elas rompem as amarras mecânicas da linha Z e titina."],

// --- 15 Novas Questões Cruzadas e Avançadas Estilo Prova Integrada ---
["cross",[1,3],"Um nutricionista planeja uma preparação culinária associando carne bovina rica em ferro heme e vegetais verde-escuros. Se o paciente consumir café com leite imediatamente após, qual o duplo impacto sobre a absorção?",["Aumenta a absorção do ferro pela acidez do café e lactose do leite","O cálcio do leite compete pelo transportador DMT-1 e os taninos do café precipitam o ferro não-heme em complexos insolúveis","O café hidrolisa a mioglobina e o leite fornece vitamina C regeneradora","Nenhum impacto, pois o ferro heme e não-heme possuem absorção de 100%"],1,"O Ca²⁺ compete no carreador DMT-1 e os taninos formam quelatos insolúveis, deprimindo o aproveitamento."],
["cross",[4,7],"A moagem industrial do trigo para obtenção da farinha branca remove 76% do Fe e 78% do Zn. Para compensar essa devastação, a legislação sanitária brasileira determina:",["A biofortificação compulsória de todas as sementes de trigo no campo","A fortificação obrigatória na fábrica pós-moagem com sais de ferro e ácido fólico","A distribuição gratuita de comprimidos de zinco nas padarias","A proibição da comercialização de pão francês em território nacional"],1,"A fortificação industrial compensa as perdas de micronutrientes eliminados com o farelo e gérmen."],
["cross",[1,8],"Ao grelhar carne bovina que passou por maturação refrigerada ótima (1,5 a 2,0 µmol/g de hipoxantina), o desenvolvimento do aroma típico de churrasco ocorre por:",["Fermentação alcoólica de sacarose por leveduras da carne","Reação de Maillard entre a ribose liberada do IMP e aminoácidos livres, somada à degradação de Strecker e oxidação térmica de lipídeos","Hidrólise do colágeno da elastina em ácido lático","Degradação de sulfitos residuais em mercaptanas"],1,"O catabolismo do ATP gera IMP e ribose; no fogo, a ribose reage via Maillard gerando pirazinas e furanos."],
["cross",[0,7],"Na fabricação de queijos e de doces tradicionais de abóbora em pedaços, a adição de cloreto de cálcio (CaCl₂) baseia-se na capacidade dos íons Ca²⁺ de:",["Conferir sabor adocicado dispensando o uso de sacarose","Formar pontes eletrostáticas com as micelas de caseína no queijo e junções Egg-Box com pectina BTM na abóbora garantindo firmeza estrutural","Inativar irreversivelmente a lactase do soro lácteo","Evaporar a água ligada da matriz alimentar"],1,"O cálcio divalente reticula a pectina BTM (Egg-Box) e reconstitui pontes micelares de caseína."],
["cross",[1,5],"A carne suína PSE e a carne bovina DFD resultam de manejos pré-abate contrastantes que afetam a glicólise post-mortem. O diagnóstico bromatológico correto é:",["PSE decorre de jejum crônico (pH alto) e DFD de estresse agudo na sangria (pH baixo)","PSE decorre de estresse agudo com carcaça quente (pH < 5,4 em 45 min, desnaturação da miosina); DFD decorre de estresse crônico que zera o glicogênio (pH > 6,0, apodrece rápido)","Ambas apresentam pH idêntico de 5,6 e excelente rendimento em presuntos fatiados","PSE afeta apenas ruminantes e DFD afeta exclusivamente aves de corte"],1,"PSE combina calor com acidose precoce; DFD mantém pH alto por falta de ácido lático, anulando a barreira ácida."],
["cross",[0,3],"O dióxido de enxofre (SO₂ / sulfitos) é aditivo utilizado em sucos de uva, vinhos e camarões. Qual é o mecanismo de ação antiescurecimento e a restrição clínica?",["Oxida os polifenóis em melanoidinas; contraindicado em hipertensos graves","Atua como agente redutor químico inibindo a polifenoloxidase; exige alerta de rotulagem por deflagrar broncoespasmo severo em asmáticos","Substitui o ferro heme nas carnes; proibido para crianças com diabetes","Neutraliza o ácido clorídrico gástrico causando gastrite aguda"],1,"Sulfitos reduzem quinonas impedindo a síntese de pigmentos escuros, mas liberam gás que induz asma."],
["cross",[2,6],"Ao comparar o comportamento culinário de um corte cárneo rico em colágeno (lagarto bovino) com um pobre em colágeno (contra-filé), dados experimentais revelam que:",["O contra-filé deve ser cozido por 2 horas a 98 °C para amaciar suas fibras","O contra-filé atinge maciez ideal a 67-75 °C no forno; o lagarto exige 90 a 120 min a 98 °C em calor úmido para solubilizar 52% do colágeno em gelatina","O colágeno endurece a 98 °C e as miofibrilas amaciam a 100 °C","Cortes de segunda tornam-se macios apenas se grelhados em fogo direto rápido"],1,"Carne com pouco colágeno resseca acima de 75 °C; carne com muito colágeno exige calor úmido prolongado."],
["cross",[1,7],"Em destilarias de cachaça de alambique e indústrias de laticínios artesanais, os metais cobre e cálcio atuam respectivamente como:",["Agente conservante de pasteurização e catalisador de fermentação alcoólica","Purificador químico que precipita mercaptanas e H₂S como CuS insolúvel, e reticulador de géis proteicos e pécticos","Acidificantes gástricos da cana e espessantes lácteos sintéticos","Inibidores do escurecimento por desnaturação de vitaminas"],1,"O cobre retém compostos sulfurados de ovo podre como CuS e o cálcio estrutura micelas e géis."],
["cross",[3,8],"Consumidor abre bandeja de bife bovino embalado a vácuo com coloração vermelho-púrpura escura. Após 20 minutos de contato com o ar ambiente, o bife torna-se vermelho-vivo. Esse evento decorre de:",["Contaminação fúngica aeróbica com produção de toxinas vermelhas","Oxigenação espontânea (bloom) que converte a desoximioglobina (Fe²⁺) em oximioglobina (Fe²⁺-O₂)","Oxidação química da mioglobina em metamioglobina marrom","Desnaturação térmica irreversível da actomiosina"],1,"Trata-se do fenômeno fisiológico normal do bloom: oxigenação espontânea reversível da mioglobina."],
["cross",[0,4],"Por que pacientes idosos ou submetidos a cirurgias de ressecção intestinal apresentam aumento na exigência biológica de poliaminas (espermidina e espermina)?",["Porque as poliaminas são catalisadoras exclusivas da digestão de gorduras na bile","Porque atuam como reguladores da replicação de DNA/RNA e da renovação e integridade da barreira celular mucosa intestinal","Porque substituem o ferro heme na produção de glóbulos vermelhos na medula","Porque neutralizam o excesso de vitamina C evitando a lixiviação"],1,"Poliaminas são vitais para mitose e síntese proteica, essenciais para reparar e manter a mucosa entérica."],
["cross",[2,5],"Qual o efeito da cocção em água abundante com descarte do caldo sobre o valor nutricional de vegetais ricos em antocianinas, vitamina C e minerais?",["Preserva 100% dos nutrientes ao quebrar as paredes de celulose vegetal","Promove lixiviação severa de antocianinas, perda de até 70% de vitamina C e dissolução de eletrólitos solúveis no caldo descartado","Aumenta a síntese de minerais divalentes dentro do vacúolo celular","Converte os compostos hidrossolúveis em lipossolúveis protetores"],1,"A cocção úmida com descarte arrasta vitaminas hidrossolúveis, eletrólitos livres e pigmentos polares."],
["cross",[1,6],"A presença da microbiota colônica saudável (Fator X) sobre a biodisponibilidade de nutrientes minerais caracteriza-se por:",["Elevar uniformemente a absorção de todos os macro e microelementos no íleo terminal","Ação antagônica dual: fermenta fibras prebióticas gerando AGCC que baixam o pH e resgatam ferro (↑ 1,3–1,8x), enquanto sulfetos precipitam Zn e Cu como ZnS/CuS insolúveis","Impedir a hidrólise de fitatos e taninos pelas bactérias","Neutralizar a acidez do cólon tornando as fezes alcalinas com pH 9,0"],1,"A microbiota resgata o ferro pela acidificação por AGCC, mas precipita zinco e cobre como sulfetos."],
["cross",[3,7],"Qual estratégia inovadora de biotecnologia alimentar busca produzir carne sustentável em biorreatores e qual o principal desafio para obter cortes com aspecto de bife?",["Carne cultivada in vitro; o desafio é a estruturação tridimensional de mioblastos em scaffolds com marmoreio e tecido conectivo","Carne sintética de glúten; o desafio é retirar os açúcares fermentáveis","Carne liofilizada a vácuo; o desafio é repor a água celular perdida","Carne transgênica vegetal; o desafio é introduzir genes de clorofila no músculo"],0,"Carne cultivada em biorreatores exige bioimpressão e scaffolds 3D para entregar textura mastigável de bife."],
["cross",[0,2],"Ao analisar a conservação pós-colheita de hortaliças, a técnica do branqueamento térmico (imersão rápida em água fervente seguida de banho de gelo) tem como objetivo primordial:",["Cozinhar completamente o vegetal para consumo imediato","Inativar enzimas endógenas deteriorantes (polifenoloxidases, ascorbato oxidases e lipoxigenases) antes do congelamento preservando cor e nutrientes","Aumentar a perda de vitaminas hidrossolúveis por lixiviação térmica","Escurecer a casca do vegetal por reação de Maillard"],1,"O choque térmico inativa as enzimas que oxidariam vitaminas, pigmentos e lipídeos no congelador."],
["cross",[1,4],"Uma maçã e uma banana fatiadas expostas à temperatura ambiente escurecem rapidamente na superfície. Qual intervenção bromatológica caseira impede essa alteração e qual o mecanismo?",["Adicionar bicarbonato de sódio para elevar o pH para 8,5","Pingar suco de limão fresco: o ácido cítrico baixa o pH inativando a enzima e o ácido ascórbico reduz quinonas de volta a compostos incolores","Lavar com água fervente por 30 minutos na panela","Polvilhar sal refinado para precipitar as antocianinas"],1,"O limão combina pH ácido inibidor da PPO com a ação redutora antioxidante do ácido ascórbico."]
];

let SQ_STATE={
open:0,
mode:35, // 15, 20 ou 35
qList:[],
i:0,
ans:{},
finished:0,
t0:0,
tt:0
};

function initSimGeral(n){
SQ_STATE.mode=n;
SQ_STATE.open=1;
SQ_STATE.i=0;
SQ_STATE.ans={};
SQ_STATE.finished=0;
SQ_STATE.t0=Date.now();
SQ_STATE.tt=0;
if(n>=35){
SQ_STATE.qList=MGERAL.map((_,i)=>i);
}else{
const step=MGERAL.length/n;
const selected=[];
for(let k=0;k<n;k++){
const idx=Math.min(Math.floor(k*step),MGERAL.length-1);
if(!selected.includes(idx)) selected.push(idx);
}
while(selected.length<n){
const rnd=Math.floor(Math.random()*MGERAL.length);
if(!selected.includes(rnd)) selected.push(rnd);
}
SQ_STATE.qList=selected.sort((a,b)=>a-b);
}
if(typeof inSimGeral!=="undefined"){inSimGeral=1;inHall=0;}
if(typeof render==="function") render();
}

function simGeralDedicatedHtml(){
const modNames={vit:"Vitaminas",min:"Minerais",bio:"Compostos Bioativos",pos:"Fisiologia Pós-Colheita",mor:"Alimentos Origem Animal",cross:"Questão Cruzada / Prova Integrada"};

if(!SQ_STATE.open){
return`<div style="max-width:780px;margin:16px auto;padding:24px;background:var(--cd);border:1px solid var(--bd);border-radius:14px">
<div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px;margin-bottom:16px">
<h2 style="margin:0;color:var(--ac)">🏆 Simulado Geral da Disciplina (ALM018)</h2>
<button data-exit-sg class=ch>← Voltar ao Hall</button>
</div>
<p style="line-height:1.6;color:var(--tx)">Treinamento interdisciplinar reunindo questões de prova e cenários integrados dos 5 módulos: <b>Vitaminas, Minerais, Compostos Bioativos, Fisiologia Pós-Colheita e Alimentos de Origem Animal</b>.</p>
<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:12px;margin:20px 0">
<button class=cap data-start-sg="15" style="text-align:left;padding:16px"><b>⚡ Simulado Rápido (15Q)</b><small style="display:block;color:var(--mu);margin-top:4px">Amostragem proporcional dos 5 módulos</small></button>
<button class=cap data-start-sg="20" style="text-align:left;padding:16px"><b>🎯 Padrão de Prova (20Q)</b><small style="display:block;color:var(--mu);margin-top:4px">Ritmo de avaliação oficial</small></button>
<button class=cap data-start-sg="35" style="text-align:left;padding:16px;border:2px solid var(--ac)"><b>🏆 Completo (35Q)</b><small style="display:block;color:var(--mu);margin-top:4px">Todas as questões + cruzadas</small></button>
</div>
</div>`;
}

const n=SQ_STATE.qList.length;
if(SQ_STATE.finished){
let score=0;
const modStats={vit:[0,0],min:[0,0],bio:[0,0],pos:[0,0],mor:[0,0],cross:[0,0]};

SQ_STATE.qList.forEach(idx=>{
const q=MGERAL[idx];
const mod=q[0];
modStats[mod][1]++;
if(SQ_STATE.ans[idx]===q[4]){
score++;
modStats[mod][0]++;
}
});
const pct=Math.round(score/n*100);

let modHtml="";
Object.keys(modStats).forEach(m=>{
if(modStats[m][1]>0){
const pMod=Math.round(modStats[m][0]/modStats[m][1]*100);
modHtml+=`<div style="margin:8px 0">
<div style="display:flex;justify-content:space-between;font-size:.9rem;margin-bottom:2px">
<span><b>${modNames[m]}</b> (${modStats[m][0]}/${modStats[m][1]})</span>
<span>${pMod}%</span>
</div>
<div class=tr style="height:10px"><i style="width:${pMod}%"></i></div>
</div>`;
}
});

let wrHtml="";
SQ_STATE.qList.forEach(idx=>{
const q=MGERAL[idx];
if(SQ_STATE.ans[idx]!==q[4]){
wrHtml+=`<div class=q style="margin:12px 0;padding:14px;border-left:4px solid var(--no);background:var(--cd)">
<p><b>Questão ${SQ_STATE.qList.indexOf(idx)+1} (${modNames[q[0]]}):</b> ${q[2]}</p>
<p class=r style="margin:4px 0"><b>Sua resposta:</b> ${SQ_STATE.ans[idx]==null?"Em branco":q[3][SQ_STATE.ans[idx]]}</p>
<p class=g style="margin:4px 0"><b>Gabarito Oficial:</b> ${q[3][q[4]]}</p>
<div class=an style="margin-top:6px;font-size:.9rem">${q[5]}</div>
</div>`;
}
});

return`<div style="max-width:860px;margin:8px auto;padding:22px;background:var(--cd);border:2px solid var(--ac);border-radius:12px">
<div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;margin-bottom:16px">
<h2 style="margin:0;color:var(--ac)">🏆 Resultado do Simulado Geral</h2>
<button data-exit-sg class=ch>← Voltar ao Hall</button>
</div>
<div style="display:flex;gap:24px;align-items:center;flex-wrap:wrap;margin-bottom:20px">
<div class=ring style="--p:${pct}"><b>${score}/${n}<small>${pct}%</small></b></div>
<div>
<p class="${pct>=70?'g':'r'}" style="font-size:1.15rem;margin:0 0 4px"><b>${pct>=70?'Aprovado com Excelência!':'Necessita Revisão Pontual'}</b></p>
<p style="margin:2px 0;font-size:.95rem">Tempo total: <b>${Math.floor(SQ_STATE.tt/60)} min ${SQ_STATE.tt%60} s</b></p>
<p style="margin:2px 0;font-size:.95rem">Acertos: <b class=g>${score}</b> | Erros: <b class=r>${n-score}</b></p>
</div>
</div>
<h3>Desempenho por Módulo da Disciplina</h3>
<div style="margin-bottom:20px">${modHtml}</div>
${wrHtml?`<h3>Questões com Gabarito e Justificativa</h3>`+wrHtml:`<p class=g>Parabéns! Você acertou todas as questões do Simulado Geral!</p>`}
<div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:20px">
<button data-sg-refazer class="ch on">Refazer Mesmo Modo (${n}Q)</button>
<button data-sg-mode-select class=ch>Trocar Quantidade (15 / 20 / 35)</button>
<button data-exit-sg class=ch>← Voltar ao Hall</button>
</div>
</div>`;
}

// Tela de execução da questão atual
const currIdx=SQ_STATE.qList[SQ_STATE.i];
const qData=MGERAL[currIdx];

return`<div style="max-width:840px;margin:8px auto;padding:22px;background:var(--cd);border:2px solid var(--ac);border-radius:12px">
<div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;margin-bottom:12px">
<div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">
<span class="bd h">${modNames[qData[0]]}</span>
<span style="font-size:.9rem;color:var(--mu)">Questão <b>${SQ_STATE.i+1}</b> de <b>${n}</b></span>
</div>
<div style="display:flex;gap:6px">
<button data-sg-mode-select class=ch style="padding:4px 10px;font-size:.82rem">Trocar Modo</button>
<button data-exit-sg class=ch style="padding:4px 10px;font-size:.82rem">Sair ao Hall ✕</button>
</div>
</div>
<div class=tr style="height:6px;margin-bottom:18px"><i style="width:${((SQ_STATE.i+1)/n)*100}%"></i></div>
<div class=q style="border:none;padding:0;margin:0">
<p style="font-size:1.08rem;line-height:1.5;margin-bottom:16px"><b>${SQ_STATE.i+1}.</b> ${qData[2]}</p>
<div>
${qData[3].map((opt,optIdx)=>`<button class="o ${SQ_STATE.ans[currIdx]===optIdx?'s':''}" data-sg-ans="${currIdx}|${optIdx}">${opt}</button>`).join("")}
</div>
</div>
<div style="display:flex;justify-content:space-between;align-items:center;margin-top:20px;flex-wrap:wrap;gap:8px">
<button data-sg-prev class=ch ${SQ_STATE.i>0?'':'disabled'}>← Anterior</button>
<span style="font-size:.85rem;color:var(--mu)">Respondidas: ${Object.keys(SQ_STATE.ans).length}/${n}</span>
${SQ_STATE.i<n-1?`<button data-sg-next class="ch on">Próxima →</button>`:`<button data-sg-finish class="ch on" style="background:var(--ok);border-color:var(--ok)">Finalizar Simulado 🏁</button>`}
</div>
</div>`;
}

// ===== PROPOSTA 3C: BUSCA GLOBAL EXPANDIDA E INTELIGENTE =====
let GLOBAL_SEARCH_QUERY="";

function normStr(s){
return(s||"").replace(/<[^>]+>/g," ").replace(/\[\[|\]\]/g,"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase();
}

function searchGlobal(term){
if(!term||term.trim().length<2) return[];
const normQ=normStr(term).trim();
const tokens=normQ.split(/\s+/).filter(w=>w.length>0);
if(!tokens.length) return[];

const results=[];
const capKeys=["vit","min","bio","pos","mor"];
const capLabels={vit:"Vitaminas",min:"Minerais",bio:"Compostos Bioativos",pos:"Fisiologia Pós-Colheita",mor:"Alimentos de Origem Animal"};

const scoreMatch=(primaryText,secondaryText)=>{
const p=normStr(primaryText);
const s=normStr(secondaryText);
const combined=p+" "+s;
if(!tokens.every(tk=>combined.includes(tk))) return 0;
let sc=30;
if(p.includes(normQ)) sc+=140;
if(tokens.every(tk=>p.includes(tk))) sc+=90;
if(s.includes(normQ)) sc+=40;
return sc;
};

capKeys.forEach(cid=>{
const d=CAPD[cid];
if(!d) return;
const modLabel=capLabels[cid];

// 1. Tópicos (Título, Resumo, Cuidado, Corpo e Questões de Fixação)
if(d.T&&Array.isArray(d.T)){
d.T.forEach((t,i)=>{
const primary=`${modLabel} ${t[0]}`;
const fixQ=(t[4]||[]).map(q=>q[0]+" "+q[1]).join(" ");
const secondary=`${(t[2]||[]).join(" ")} ${t[3]||""} ${t[1]||""} ${fixQ}`;
const sc=scoreMatch(primary,secondary);
if(sc>0){
const bodyClean=(t[1]||"").replace(/<[^>]+>/g," ").replace(/\[\[|\]\]/g,"").replace(/\s+/g," ").trim();
results.push({cid,type:"top",num:i,score:sc+15,badge:"Tópico",title:`${modLabel} · Tópico ${i+1}: ${t[0]}`,snippet:(t[2]&&t[2][0])?t[2][0]:bodyClean.slice(0,140)});
}
});
}

// 2. Glossário
if(d.G&&typeof d.G==="object"){
Object.keys(d.G).forEach(k=>{
const primary=`${modLabel} ${k}`;
const secondary=d.G[k][0]||"";
const sc=scoreMatch(primary,secondary);
if(sc>0){
results.push({cid,type:"glo",k:k.toLowerCase(),score:sc+10,badge:"Conceito",title:`${modLabel} · Conceito: ${k}`,snippet:secondary});
}
});
}

// 3. Tabela de Consulta Rápida (todas as colunas)
if(d.CHT&&Array.isArray(d.CHT)){
d.CHT.forEach(r=>{
const rowStr=Array.isArray(r)?r.map(x=>Array.isArray(x)?x.join(" "):String(x||"")).join(" "):String(r||"");
const primary=`${modLabel} tabela ${r[0]||""}`;
const sc=scoreMatch(primary,rowStr);
if(sc>0){
results.push({cid,type:"tab",score:sc,badge:"Tabela",title:`${modLabel} · Tabela: ${r[0]||"Resumo"}`,snippet:r[3]||r[2]||r[1]||rowStr.slice(0,130)});
}
});
}

// 4. Flashcards
if(d.F&&Array.isArray(d.F)){
d.F.forEach(f=>{
const primary=`${modLabel} flashcard ${f[1]||""}`;
const secondary=f[2]||"";
const sc=scoreMatch(primary,secondary);
if(sc>0){
results.push({cid,type:"fc",score:sc-10,badge:"Flashcard",title:`${modLabel} · Flashcard: ${f[1]}`,snippet:secondary});
}
});
}

// 5. Casos Clínicos / Prática
if(d.CL&&Array.isArray(d.CL)){
d.CL.forEach(cl=>{
const clText=Array.isArray(cl)?cl.join(" "):String(cl||"");
const primary=`${modLabel} clinica pratica ${cl[0]||""}`;
const sc=scoreMatch(primary,clText);
if(sc>0){
results.push({cid,type:"cli",score:sc-5,badge:"Clínica",title:`${modLabel} · Caso: ${cl[0]||"Aplicação"}`,snippet:cl[1]||clText.slice(0,130)});
}
});
}

// 6. Simulado do Módulo
if(d.M&&Array.isArray(d.M)){
d.M.forEach((q,qi)=>{
const primary=`${modLabel} questao simulado ${q[1]||""}`;
const secondary=`${(q[2]||[]).join(" ")} ${q[4]||""}`;
const sc=scoreMatch(primary,secondary);
if(sc>0){
results.push({cid,type:"qm",score:sc-15,badge:"Questão",title:`${modLabel} · Questão ${qi+1}`,snippet:q[1]});
}
});
}
});

// 7. Simulado Geral (35Q)
if(typeof MGERAL!=="undefined"){
MGERAL.forEach((q,qi)=>{
const primary=`simulado geral ${q[0]} ${q[2]||""}`;
const secondary=`${(q[3]||[]).join(" ")} ${q[5]||""}`;
const sc=scoreMatch(primary,secondary);
if(sc>0){
results.push({cid:"sg",type:"sg",num:qi,score:sc-10,badge:"Simulado Geral",title:`Simulado Geral · Questão ${qi+1}`,snippet:q[2]});
}
});
}

results.sort((a,b)=>b.score-a.score);
return results.slice(0,45);
}

function renderSearchResultsHtml(q){
if(q.length<2) return"";
const results=searchGlobal(q);
if(!results.length){
return`<p style="color:var(--mu);margin:12px 0;font-size:.9rem">Nenhum resultado encontrado para "<b>${q}</b>". Tente termos como <i>vitaminas lipossoluveis, calpaina, fitato, histamina, ferro heme, paradoxo do calcio</i>.</p>`;
}
return`<div style="max-height:440px;overflow-y:auto;border:1px solid var(--bd);border-radius:8px;padding:8px;background:var(--cd);margin-top:8px">
<p style="font-size:.82rem;color:var(--mu);margin:0 0 8px">Encontrados <b>${results.length}</b> resultados (tópicos, conceitos, tabelas, flashcards e questões):</p>
${results.map(r=>`<div data-gs-jump="${r.cid}|${r.type}|${r.num!=null?r.num:r.k||''}" style="padding:9px 10px;border-bottom:1px solid var(--bd);cursor:pointer;border-radius:6px;transition:background .15s" onmouseover="this.style.background='var(--as)'" onmouseout="this.style.background='transparent'">
<div style="display:flex;align-items:center;gap:6px;margin-bottom:2px">
<span class="bd" style="font-size:.72rem;padding:1px 6px">${r.badge}</span>
<span style="font-weight:600;font-size:.92rem;color:var(--ac)">${r.title}</span>
</div>
<div style="font-size:.82rem;color:var(--tx);opacity:.85;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${r.snippet}</div>
</div>`).join("")}
</div>`;
}

function searchGlobalHtml(){
const q=GLOBAL_SEARCH_QUERY.trim();
const resHtml=renderSearchResultsHtml(q);
return`<div style="margin:20px 0;padding:16px;background:var(--cd);border:1px solid var(--bd);border-radius:12px;box-shadow:0 3px 10px rgba(0,0,0,.04)">
<div style="display:flex;align-items:center;justify-content:space-between;gap:8px;margin-bottom:8px;flex-wrap:wrap">
<label for=gsq style="font-weight:600;font-size:1rem;color:var(--tx)">🔍 Busca Global Instantânea (Ctrl + K)</label>
<span style="font-size:.78rem;padding:2px 8px;background:var(--as);border-radius:12px;color:var(--ac);font-weight:600">Tópicos · Conceitos · Tabelas · Flashcards · Questões</span>
</div>
<input id=gsq value="${GLOBAL_SEARCH_QUERY.replace(/"/g,"&quot;")}" placeholder="Pesquise por qualquer tema ou frase (ex: vitaminas lipossoluveis, paradoxo do calcio, calpaina, fitato)..." aria-label="Busca global em todos os módulos" style="width:100%;padding:10px 14px;border:1px solid var(--bd);border-radius:8px;background:var(--bg);color:var(--tx);font:inherit">
<div id=gsres>${resHtml}</div>
</div>`;
}

// Atalho universal de teclado Ctrl + K para focar na busca global
window.addEventListener("keydown",e=>{
if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==="k"){
e.preventDefault();
if(!inHall){
inHall=1;
if(typeof inSimGeral!=="undefined") inSimGeral=0;
if(typeof render==="function") render();
}
setTimeout(()=>{
const inp=document.querySelector("#gsq");
if(inp){inp.focus();inp.select()}
},50);
}
});

// Manipuladores de Eventos de Busca e Simulado Geral
document.addEventListener("input",e=>{
if(e.target&&e.target.id==="gsq"){
GLOBAL_SEARCH_QUERY=e.target.value;
const resDiv=document.querySelector("#gsres");
if(resDiv) resDiv.innerHTML=renderSearchResultsHtml(GLOBAL_SEARCH_QUERY.trim());
}
});

document.addEventListener("click",e=>{
const jump=e.target.closest("[data-gs-jump]");
if(jump){
const[cid,type,target]=jump.dataset.gsJump.split("|");
if(type==="sg"){
initSimGeral(35);
const pos=SQ_STATE.qList.indexOf(+target);
if(pos>=0) SQ_STATE.i=pos;
if(typeof render==="function") render();
window.scrollTo(0,0);
return;
}
inHall=0;
if(typeof inSimGeral!=="undefined") inSimGeral=0;
if(typeof loadCap==="function") loadCap(cid);
if(type==="top"){
cur=+target;
}else if(type==="tab"){
cur=T.length;
}else if(type==="fc"){
cur="c";
}else if(type==="cli"){
cur="k";
}else if(type==="qm"){
cur="s";
}else if(type==="glo"){
cur=(G[target]&&G[target][1]!=null)?+G[target][1]:0;
setTimeout(()=>{
if(typeof dr==="function") dr(target);
},80);
}
if(typeof render==="function") render();
window.scrollTo(0,0);
return;
}

// Botões do Simulado Geral
const startSg=e.target.closest("[data-start-sg]");
if(startSg){
const n=+startSg.dataset.startSg;
initSimGeral(n);
return;
}
if(e.target.closest("[data-sg-mode-select]")){
SQ_STATE.open=0;
if(typeof inSimGeral!=="undefined"){inSimGeral=1;inHall=0;}
if(typeof render==="function") render();
window.scrollTo(0,0);
return;
}
if(e.target.closest("[data-sg-close]")){
SQ_STATE.open=0;
if(typeof inSimGeral!=="undefined"){inSimGeral=0;inHall=1;}
if(typeof render==="function") render();
return;
}
const ansBtn=e.target.closest("[data-sg-ans]");
if(ansBtn){
const[qIdx,optIdx]=ansBtn.dataset.sgAns.split("|").map(Number);
SQ_STATE.ans[qIdx]=optIdx;
if(typeof render==="function") render();
return;
}
if(e.target.closest("[data-sg-prev]")){
if(SQ_STATE.i>0) SQ_STATE.i--;
if(typeof render==="function") render();
return;
}
if(e.target.closest("[data-sg-next]")){
if(SQ_STATE.i<SQ_STATE.qList.length-1) SQ_STATE.i++;
if(typeof render==="function") render();
return;
}
if(e.target.closest("[data-sg-finish]")){
SQ_STATE.finished=1;
SQ_STATE.tt=Math.floor((Date.now()-SQ_STATE.t0)/1e3);
if(typeof render==="function") render();
window.scrollTo(0,0);
return;
}
if(e.target.closest("[data-sg-refazer]")){
initSimGeral(SQ_STATE.mode);
return;
}
});
