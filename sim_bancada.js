// ===== PROPOSTA 2B: MINI-SIMULADORES VISUAIS DE BANCADA (TABELA) =====
// Simulador 1 (mor): Destino Muscular Post-Mortem (Normal, PSE, DFD, Cold Shortening, Thaw Rigor)
// Simulador 2 (vit, min, bio, pos): Estabilidade no Processamento e Culinária (6 Condições Bromatológicas)

const SIM_MOR_DATA={
norm:{
title:"Carne Normal (Padrão de Referência RFN)",
badge:"Padrao RFN",
badgeCls:"g",
ph:"7,2 → 5,6 às 24h",
temp:"38 °C → 4 °C gradual",
cra:"Alta (retenção normal de sucos)",
cor:"Vermelho-vivo brilhante normal",
bio:"A glicólise anaeróbica pós-sangria acumula ácido lático em velocidade moderada enquanto a carcaça resfria. O pH desce de 7,2 para 5,5-5,8 sem desnaturação precoce das proteínas.",
diag:"Carcaça comercial padrão de excelência; apta para cortes nobres frescos, charcutaria, presunto cozido e maturação refrigerada (Wet/Dry Aging)."
},
pse:{
title:"Carne PSE (Pale, Soft, Exudative — Pálida, Mole e Exsudativa)",
badge:"Anomalia PSE",
badgeCls:"r",
ph:"Desaba para < 5,4 em 45 min!",
temp:"Carcaça muito quente (> 38-39 °C)",
cra:"Colapso total da CRA (exsudação maciça)",
cor:"Pálida e esbranquiçada (dispersão difusa de luz)",
bio:"Estresse agudo violento antes do abate (ou mutação no gene Halotano / PSS) dispara influxo maciço de Ca²⁺ no sarcoplasma. A glicólise explosiva derruba o pH para < 5,4 com o músculo ainda a 39 °C, desnaturando miosina e mioglobina.",
diag:"Rejeitada para presunto cozido (perde a salmoura, rende menos e esfarela na fatiadora). Utilizável apenas em derivados moídos de baixo valor comercial."
},
dfd:{
title:"Carne DFD (Dark, Firm, Dry — Escura, Firme e Seca)",
badge:"Anomalia DFD",
badgeCls:"r",
ph:"Permanente > 6,0 a 6,4 (anormalmente alto)",
temp:"Resfriamento padrão",
cra:"Máxima (retém fortemente toda a água)",
cor:"Escura de fígado (superfície seca sem oxigenação)",
bio:"Estresse crônico prolongado ante mortem (viagens > 48h, jejum excessivo, brigas) exaure as reservas de glicogênio antes do abate. Sem glicogênio não há ácido lático; o pH permanece neutro/alcalino, mantendo as proteínas longe do pI com retenção de água máxima.",
diag:"Perigo sanitário: barreira ácida de Leistner anulada; deteriora e apodrece rapidamente por Pseudomonas. Rejeitada para venda fresca e vácuo; desviada para enlatados autoclavados."
},
cold:{
title:"Encurtamento pelo Frio (Cold Shortening)",
badge:"Defeito Térmico",
badgeCls:"am",
ph:"> 6,2 (ainda não acidificou)",
temp:"Choque frio precoce (< 10 °C com ATP presente)",
cra:"Moderada a baixa",
cor:"Vermelha escura",
bio:"Ocorre quando a carcaça de bovinos ou ovinos é resfriada a menos de 10 °C antes de completar 10-12 horas, quando ainda resta ATP celular e pH > 6,2. O frio desestabiliza o retículo sarcoplasmático, liberando cálcio enquanto ainda há ATP: os sarcômeros contraem-se violentamente sem oposição mecânica.",
diag:"Carne com dureza mecânica extrema mesmo após dias de repouso. Prevenção industrial obrigatória: estimulação elétrica da carcaça para queimar o ATP antes do choque térmico."
},
thaw:{
title:"Rigor de Descongelamento (Thaw Rigor)",
badge:"Colapso Físico",
badgeCls:"r",
ph:"Cai abruptamente no descongelamento",
temp:"Congelamento pré-rigor seguido de fusão a 20 °C",
cra:"Perda catastrófica de 40-50% em exsudato líquido",
cor:"Pálida opaca com poça avermelhada",
bio:"Ocorre ao congelar cortes cárneos no período pré-rigor (com ATP intacto). Durante o descongelamento, os cristais de gelo pontiagudos rompem a membrana do retículo sarcoplasmático. O cálcio extravasa sobre as miofibrilas na presença do ATP preservado pelo gelo, disparando encurtamento de até 60% do sarcômero.",
diag:"Perda de até metade do peso em água celular, vitaminas e minerais; corte torna-se fibroso e intragável. Nunca congele carne quente antes do rigor pleno."
}
};

const SIM_PROC_DATA={
agua:{
title:"Cocção em Água Abundante (Fervura Prolongada)",
badge:"Lixiviação Severa",
vit:"Perda massiva de 50% a 70% de hidrossolúveis (vitamina C, B1, B2, B9) por lixiviação na água de descarte; lipossolúveis (A, D, E, K) estáveis.",
min:"Minerais solúveis livres (Na⁺, K⁺) sofrem lixiviação para o caldo; minerais complexados (Ca, Fe) resistem melhor à fervura.",
bio:"Fenólicos polares (antocianinas) migram tingindo a água de cocção; glicosinolatos sofrem perda por dissolução na água de cozimento.",
pos:"Amolecimento drástico da pectina da lamela média vegetal; perda da turgidez celular tornando o vegetal mole e flácido."
},
alcalino:{
title:"Adição de Bicarbonato de Sódio / Meio Alcalino (pH > 7,5)",
badge:"Destruição Imediata",
vit:"<b>Destruição química imediata</b> das vitaminas E e K; degradação acelerada de B1 (tiamina), B2 e ácido ascórbico.",
min:"Precipita cátions divalentes (Fe²⁺, Zn²⁺) na forma de hidróxidos e carbonatos insolúveis, despencando sua absorção biológica.",
bio:"As antocianinas vermelhas viram azul-arroxeado escuro; quebra anéis de polifenóis e destrói fitoquímicos sensíveis a bases.",
pos:"Acelera a degradação hidrolítica da pectina por β-eliminação química, amolecendo vegetais rapidamente com perda de textura."
},
luz:{
title:"Exposição a Luz UV + Oxigênio (Armazenamento Claro)",
badge:"Fotoxidação / Ranço",
vit:"Fotoxidação severa da riboflavina (vitamina B2 em leite claro), perda de ácido fólico (B9) e oxidação de carotenoides pró-vitamina A.",
min:"O ferro livre Fe²⁺ oxida cataliticamente gerando radicais hidroxila livres que aceleram a destruição das gorduras do alimento.",
bio:"Carotenoides (licopeno, β-caroteno) perdem a cor viva por quebra de duplas ligações conjugadas; oxidação de flavonóis.",
pos:"Acelera a degradação de clorofilas em feofitinas e estimula síntese indesejada de solanina em batatas armazenadas sob lâmpadas."
},
branq:{
title:"Branqueamento Térmico Escalonado (Hot Water / Vapor Rápido)",
badge:"Inativação Enzimática Protetora",
vit:"Inativa as enzimas degradativas (ascorbato oxidase, polifenoloxidase) com perda mínima de 5% a 15% de vitaminas na água.",
min:"Preserva a quase totalidade dos minerais da matriz celular por ser um tratamento térmico rápido de curta duração.",
bio:"Preserva compostos bioativos nos congelados por bloquear a oxidação autolítica durante os meses de estocagem no freezer.",
pos:"Inativa lipoxigenases e polifenoloxidases que causariam escurecimento e odor rançoso durante a estocagem sob congelamento."
},
azeite:{
title:"Cocção Suave com Azeite de Oliva / Matriz Graxa",
badge:"Máxima Biodisponibilidade Lipofílica",
vit:"Formação de micelas mistas com sais biliares que eleva em até <b>4 a 6 vezes</b> a absorção de vitaminas lipossolúveis (A, D, E, K).",
min:"O azeite cria película superficial protetora que impede o contato do oxigênio e retém minerais solúveis dentro da matriz.",
bio:"<b>Salto de absorção de carotenoides:</b> o licopeno do molho de tomate isomeriza de trans para cis, multiplicando sua bioacessibilidade.",
pos:"Lubrificação das fibras e proteção mecânica contra colapso osmótico superficial durante o aquecimento em panela."
},
ferm:{
title:"Fermentação Biológica com Fitases e Tanases (Sourdough / Probióticos)",
badge:"Super-Resgate Nutricional",
vit:"Síntese de novo de vitaminas do complexo B (B2, B9, B12) por leveduras e bactérias láticas ativas.",
min:"<b>Quebra da gaiola do fitato:</b> fitases bacterianas hidrolisam o fitato e taninos, liberando Ca, Fe e Zn em formas altamente absorvíveis.",
bio:"Bactérias hidrolisam glicosídeos em agliconas fenólicas de baixo peso molecular, multiplicando a absorção intestinal dos bioativos.",
pos:"Redução profunda do pH com síntese de ácidos orgânicos protetores e ácido lático que barram patógenos e melhoram a digestibilidade."
}
};

let SIM_MOR_SEL="norm";
let SIM_PROC_SEL="agua";

function simBancadaHtml(capId){
if(capId=="mor"){
const d=SIM_MOR_DATA[SIM_MOR_SEL]||SIM_MOR_DATA.norm;
return`<div style="margin:20px 0;padding:16px;background:var(--cd);border:2px solid var(--ac);border-radius:12px;box-shadow:0 4px 12px rgba(0,0,0,.06)">
<div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:8px;margin-bottom:12px">
<h3 style="margin:0;color:var(--ac);font-size:1.15rem">🔬 Mini-Simulador de Bancada: Destino Muscular Post-Mortem</h3>
<span class="bd ${d.badgeCls}">${d.badge}</span>
</div>
<p style="margin:0 0 12px;font-size:.9rem;color:var(--mu)">Selecione um cenário pré-abate ou térmico para analisar a cascata bioquímica e o diagnóstico bromatológico imediato:</p>
<div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:14px">
<button class="ch ${SIM_MOR_SEL=='norm'?'on':''}" data-sb-mor="norm">Normal (RFN)</button>
<button class="ch ${SIM_MOR_SEL=='pse'?'on':''}" data-sb-mor="pse">Carne PSE (Estresse Agudo)</button>
<button class="ch ${SIM_MOR_SEL=='dfd'?'on':''}" data-sb-mor="dfd">Carne DFD (Estresse Crônico)</button>
<button class="ch ${SIM_MOR_SEL=='cold'?'on':''}" data-sb-mor="cold">Cold Shortening (Frio Precoce)</button>
<button class="ch ${SIM_MOR_SEL=='thaw'?'on':''}" data-sb-mor="thaw">Thaw Rigor (Descongelamento)</button>
</div>
<div class=w style="margin:0"><table class=ct style="margin:0">
<tr><th style="width:25%">Parâmetro Físico-Químico</th><th>Comportamento no Sarcômero</th></tr>
<tr><td><b>Evolução do pH</b></td><td>${d.ph}</td></tr>
<tr><td><b>Temperatura da Carcaça</b></td><td>${d.temp}</td></tr>
<tr><td><b>CRA (Retenção de Água)</b></td><td>${d.cra}</td></tr>
<tr><td><b>Aspecto Visual da Cor</b></td><td>${d.cor}</td></tr>
<tr><td><b>Mecanismo Bioquímico</b></td><td>${d.bio}</td></tr>
<tr><td><b>Diagnóstico Tecnológico e Destino</b></td><td><b>${d.diag}</b></td></tr>
</table></div>
</div>`;
}else{
const d=SIM_PROC_DATA[SIM_PROC_SEL]||SIM_PROC_DATA.agua;
return`<div style="margin:20px 0;padding:16px;background:var(--cd);border:2px solid var(--ac);border-radius:12px;box-shadow:0 4px 12px rgba(0,0,0,.06)">
<div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:8px;margin-bottom:12px">
<h3 style="margin:0;color:var(--ac);font-size:1.15rem">🔬 Mini-Simulador de Bancada: Estabilidade no Processamento e Culinária</h3>
<span class="bd am">${d.badge}</span>
</div>
<p style="margin:0 0 12px;font-size:.9rem;color:var(--mu)">Selecione uma condição de bancada para comparar os impactos imediatos sobre Vitaminas, Minerais, Bioativos e Fisiologia Vegetal:</p>
<div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:14px">
<button class="ch ${SIM_PROC_SEL=='agua'?'on':''}" data-sb-proc="agua">Água Abundante (Fervura)</button>
<button class="ch ${SIM_PROC_SEL=='alcalino'?'on':''}" data-sb-proc="alcalino">Bicarbonato / Meio Alcalino</button>
<button class="ch ${SIM_PROC_SEL=='luz'?'on':''}" data-sb-proc="luz">Luz UV + Oxigênio</button>
<button class="ch ${SIM_PROC_SEL=='branq'?'on':''}" data-sb-proc="branq">Branqueamento Rápido</button>
<button class="ch ${SIM_PROC_SEL=='azeite'?'on':''}" data-sb-proc="azeite">Cocção com Azeite (Gordura)</button>
<button class="ch ${SIM_PROC_SEL=='ferm'?'on':''}" data-sb-proc="ferm">Fermentação (Fitases/Tanases)</button>
</div>
<div class=w style="margin:0"><table class=ct style="margin:0">
<tr><th style="width:25%">Fração Nutricional / Módulo</th><th>Impacto Molecular e Culinário Observado</th></tr>
<tr><td><b>Vitaminas</b></td><td>${d.vit}</td></tr>
<tr><td><b>Minerais</b></td><td>${d.min}</td></tr>
<tr><td><b>Compostos Bioativos</b></td><td>${d.bio}</td></tr>
<tr><td><b>Fisiologia Pós-Colheita</b></td><td>${d.pos}</td></tr>
</table></div>
</div>`;
}
}

document.addEventListener("click",e=>{
const bMor=e.target.closest("[data-sb-mor]");
if(bMor){
SIM_MOR_SEL=bMor.dataset.sbMor;
if(typeof render==="function") render();
return;
}
const bProc=e.target.closest("[data-sb-proc]");
if(bProc){
SIM_PROC_SEL=bProc.dataset.sbProc;
if(typeof render==="function") render();
return;
}
});
