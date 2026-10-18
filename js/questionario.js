import { db } from "./firebase-config.js";

import {
  collection,
  addDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.3.0/firebase-firestore.js";

// =========================================================
// CATEGORIAS E APRESENTAÇÃO DOS BLOCOS
// =========================================================

const CATEGORIAS = {
  tecnologia: "Tecnologia",
  financas: "Educação Financeira",
  servicos: "Serviços Públicos e Direitos"
};

const BLOCOS = {
  tecnologia: {
    titulo: "Tecnologia",
    simbolo: "💻",
    chamada: "Vamos começar pela tecnologia!",
    descricao:
      "Nesta parte, vamos conhecer sua experiência com celular, computador, Excel, componentes do computador e programação. Responda de acordo com o que você consegue fazer hoje. Não tem problema se ainda estiver aprendendo.",
    botao: "Começar Tecnologia"
  },
  financas: {
    titulo: "Educação Financeira",
    simbolo: "💰",
    chamada: "Agora vamos falar sobre dinheiro!",
    descricao:
      "Nesta parte, queremos entender como você lida com o dinheiro no dia a dia: organização dos gastos, compras, dívidas e planos para o futuro. Não é uma prova e você não precisa saber termos técnicos. Suas respostas ajudam a indicar materiais que podem ser úteis para você.",
    botao: "Começar Educação Financeira"
  },
  servicos: {
    titulo: "Serviços Públicos e Direitos",
    simbolo: "🏛️",
    chamada: "Vamos conhecer serviços públicos e direitos!",
    descricao:
      "Nesta última parte, vamos perguntar se você conhece serviços como gov.br, Carteira de Trabalho Digital, Cadastro Único e Meu INSS. Se ainda não conhece algum deles, tudo bem: ao final, você encontrará links oficiais para aprender mais.",
    botao: "Começar esta etapa"
  }
};

// =========================================================
// OPÇÕES DE RESPOSTA
// Cada opção vale de 0 a 3 pontos.
// =========================================================

const OPCOES_TECNOLOGIA = [
  { valor: 0, texto: "Nunca fiz isso e não sei como" },
  { valor: 1, texto: "Já tentei, mas tenho dificuldade" },
  { valor: 2, texto: "Consigo fazer, mas às vezes preciso de ajuda" },
  { valor: 3, texto: "Faço isso com facilidade, sozinho(a)" }
];

const OPCOES_FINANCAS = [
  { valor: 3, texto: "Sim, sei fazer ou costumo fazer isso" },
  { valor: 2, texto: "Um pouco, mas ainda tenho dúvidas" },
  { valor: 1, texto: "Talvez / Nunca parei para pensar nisso" },
  { valor: 0, texto: "Não, ainda não sei ou não faço isso" }
];

const OPCOES_SERVICOS = [
  { valor: 3, texto: "Sim, conheço e sei como funciona" },
  { valor: 2, texto: "Já ouvi falar, mas sei pouco" },
  { valor: 1, texto: "Talvez / Não tenho certeza" },
  { valor: 0, texto: "Não, nunca ouvi falar disso" }
];

// =========================================================
// PERGUNTAS — 10 POR TEMA
// =========================================================

const PERGUNTAS = [
  // TECNOLOGIA
  {
    id: "tec1",
    categoria: "tecnologia",
    dificuldade: "facil",
    texto: "Você consegue ligar, desligar e utilizar um computador ou celular sozinho(a)?"
  },
  {
    id: "tec2",
    categoria: "tecnologia",
    dificuldade: "facil",
    texto: "Você consegue instalar e desinstalar aplicativos ou programas quando precisa?"
  },
  {
    id: "tec3",
    categoria: "tecnologia",
    dificuldade: "facil",
    texto: "Você consegue criar uma pasta, salvar um arquivo e encontrá-lo novamente no computador?"
  },
  {
    id: "tec4",
    categoria: "tecnologia",
    dificuldade: "intermediaria",
    texto: "Você consegue criar uma planilha simples no Excel ou em outra ferramenta semelhante para organizar informações?"
  },
  {
    id: "tec5",
    categoria: "tecnologia",
    dificuldade: "intermediaria",
    texto: "Você consegue utilizar fórmulas básicas em uma planilha, como SOMA, MÉDIA ou porcentagem?"
  },
  {
    id: "tec6",
    categoria: "tecnologia",
    dificuldade: "intermediaria",
    texto: "Você consegue identificar componentes básicos de um computador, como processador, memória RAM, armazenamento e placa-mãe?"
  },
  {
    id: "tec7",
    categoria: "tecnologia",
    dificuldade: "intermediaria",
    texto: "Você consegue resolver problemas simples no computador, como verificar a conexão com a internet, espaço de armazenamento ou atualizações?"
  },
  {
    id: "tec8",
    categoria: "tecnologia",
    dificuldade: "avancada",
    texto: "Você consegue utilizar recursos mais avançados de uma planilha, como filtros, tabelas, gráficos ou funções para analisar dados?"
  },
  {
    id: "tec9",
    categoria: "tecnologia",
    dificuldade: "avancada",
    texto: "Você entende conceitos básicos de programação, como variáveis, condições, repetições e lógica de programação?"
  },
  {
    id: "tec10",
    categoria: "tecnologia",
    dificuldade: "avancada",
    texto: "Você consegue criar ou modificar um pequeno programa utilizando uma linguagem como Python?"
  },

  // EDUCAÇÃO FINANCEIRA
  {
    id: "fin1",
    categoria: "financas",
    dificuldade: "facil",
    texto: "Você sabe aproximadamente quanto dinheiro entra na sua casa por mês?"
  },
  {
    id: "fin2",
    categoria: "financas",
    dificuldade: "facil",
    texto: "Você costuma acompanhar quanto gasta com alimentação, moradia, transporte e contas?"
  },
  {
    id: "fin3",
    categoria: "financas",
    dificuldade: "facil",
    texto: "Antes de comprar algo, você costuma pensar se realmente precisa daquilo e se pode pagar?"
  },
  {
    id: "fin4",
    categoria: "financas",
    dificuldade: "intermediaria",
    texto: "Você costuma organizar suas contas para saber o que precisa pagar durante o mês?"
  },
  {
    id: "fin5",
    categoria: "financas",
    dificuldade: "intermediaria",
    texto: "Quando parcela uma compra, você verifica o valor total e se haverá juros?"
  },
  {
    id: "fin6",
    categoria: "financas",
    dificuldade: "intermediaria",
    texto: "Antes de fazer um empréstimo ou assumir uma dívida, você pensa se as parcelas cabem no seu orçamento?"
  },
  {
    id: "fin7",
    categoria: "financas",
    dificuldade: "intermediaria",
    texto: "Você já pensou em quais gastos poderia reduzir para ter mais tranquilidade financeira?"
  },
  {
    id: "fin8",
    categoria: "financas",
    dificuldade: "avancada",
    texto: "Você tem algum plano para guardar dinheiro e alcançar um objetivo futuro?"
  },
  {
    id: "fin9",
    categoria: "financas",
    dificuldade: "avancada",
    texto: "Você conhece a diferença entre guardar dinheiro e investir?"
  },
  {
    id: "fin10",
    categoria: "financas",
    dificuldade: "avancada",
    texto: "Você se sente preparado(a) para comparar opções de crédito, juros ou parcelamento antes de tomar uma decisão financeira?"
  },

    // SERVIÇOS PÚBLICOS E DIREITOS
  {
    id: "ser1",
    categoria: "servicos",
    dificuldade: "facil",
    texto: "Você conhece a conta gov.br, usada para acessar diversos serviços públicos pela internet?"
  },
  {
    id: "ser2",
    categoria: "servicos",
    dificuldade: "facil",
    texto: "Você conhece a Carteira de Trabalho Digital e sabe que ela pode ser acessada pela internet?"
  },
  {
    id: "ser3",
    categoria: "servicos",
    dificuldade: "facil",
    texto: "Você sabe que pode consultar serviços relacionados ao CPF nos canais oficiais da Receita Federal?"
  },
  {
    id: "ser4",
    categoria: "servicos",
    dificuldade: "intermediaria",
    texto: "Você conhece o Cadastro Único, que pode permitir o acesso a programas sociais para famílias que atendem aos critérios?"
  },
  {
    id: "ser5",
    categoria: "servicos",
    dificuldade: "intermediaria",
    texto: "Você conhece o Meu INSS, que permite consultar e solicitar alguns serviços previdenciários pela internet?"
  },
  {
    id: "ser6",
    categoria: "servicos",
    dificuldade: "intermediaria",
    texto: "Você sabe que trabalhadores que atendem aos requisitos podem solicitar o Seguro-Desemprego por canais oficiais?"
  },
  {
    id: "ser7",
    categoria: "servicos",
    dificuldade: "intermediaria",
    texto: "Você sabe onde procurar um serviço público no portal gov.br?"
  },
  {
    id: "ser8",
    categoria: "servicos",
    dificuldade: "avancada",
    texto: "Antes de clicar em um link sobre benefício ou direito, você costuma conferir se ele é de um canal oficial?"
  },
  {
    id: "ser9",
    categoria: "servicos",
    dificuldade: "avancada",
    texto: "Você já utilizou a internet para acompanhar ou resolver algum serviço público sem precisar ir presencialmente?"
  },
  {
    id: "ser10",
    categoria: "servicos",
    dificuldade: "avancada",
    texto: "Se precisasse conhecer um benefício ou direito, você saberia como procurar os requisitos e o canal oficial para solicitar?"
  }
];

// =========================================================
// ESTADO DO QUESTIONÁRIO
// =========================================================

let indiceAtual = 0;
let respostas = new Array(PERGUNTAS.length).fill(null);
let telaTransicao = false;

const areaPergunta = document.getElementById("area-pergunta");
const form = document.getElementById("form-questionario");
const btnVoltar = document.getElementById("btn-voltar");
const btnAvancar = document.getElementById("btn-avancar");
const statusMensagem = document.getElementById("status-mensagem");
const progressoTexto = document.getElementById("progresso-texto");
const barraFill = document.getElementById("barra-progresso-fill");
const barraProgresso = document.getElementById("barra-progresso");

const main = document.getElementById("conteudo");
const tituloForm = document.getElementById("titulo-form");
const progressTrack = document.querySelector(".progress-track");

// Tela de apresentação/transição criada pelo JavaScript.
const telaIntro = document.createElement("section");
telaIntro.id = "tela-transicao";
telaIntro.className = "card";
telaIntro.hidden = true;
telaIntro.setAttribute("aria-labelledby", "transicao-titulo");
telaIntro.style.marginTop = "1.5rem";
telaIntro.innerHTML = `
  <p class="category-tag" id="transicao-etiqueta"></p>
  <h2 id="transicao-titulo"></h2>
  <p id="transicao-descricao"></p>
  <button type="button" class="btn btn--primary" id="btn-continuar-bloco"></button>
`;
form.parentNode.insertBefore(telaIntro, form);

const transicaoEtiqueta = telaIntro.querySelector("#transicao-etiqueta");
const transicaoTitulo = telaIntro.querySelector("#transicao-titulo");
const transicaoDescricao = telaIntro.querySelector("#transicao-descricao");
const btnContinuarBloco = telaIntro.querySelector("#btn-continuar-bloco");

function categoriaDaPergunta(indice) {
  return PERGUNTAS[indice]?.categoria;
}

function primeiraPerguntaDoBloco(categoria) {
  return PERGUNTAS.findIndex(
    (pergunta) => pergunta.categoria === categoria
  );
}

function intervaloDoBloco(categoria) {
  const indices = PERGUNTAS
    .map((pergunta, indice) =>
      pergunta.categoria === categoria ? indice : -1
    )
    .filter((indice) => indice >= 0);

  return {
    primeiro: indices[0],
    ultimo: indices[indices.length - 1],
    total: indices.length
  };
}

function opcoesDaPergunta(pergunta) {
  if (pergunta.categoria === "financas") {
    return OPCOES_FINANCAS;
  }

  if (pergunta.categoria === "servicos") {
    return OPCOES_SERVICOS;
  }

  return OPCOES_TECNOLOGIA;
}

function mostrarTelaTransicao(categoria) {
  const bloco = BLOCOS[categoria];
  if (!bloco) return;

  telaIntro.hidden = false;
  form.hidden = true;

  if (tituloForm) tituloForm.hidden = true;
  if (progressTrack) progressTrack.hidden = true;

  progressoTexto.hidden = true;

  transicaoEtiqueta.textContent =
    `${bloco.simbolo} ${bloco.titulo}`;

  transicaoTitulo.textContent = bloco.chamada;
  transicaoDescricao.textContent = bloco.descricao;
  btnContinuarBloco.textContent = bloco.botao;

  btnVoltar.disabled = true;

  telaIntro.dataset.categoria = categoria;
  telaIntro.dataset.primeiroIndice = String(
    primeiraPerguntaDoBloco(categoria)
  );

  telaIntro.setAttribute("role", "region");
  telaIntro.tabIndex = -1;
  telaIntro.classList.add("transition-screen");
  telaIntro.style.padding = "1.5rem";

  telaIntro.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });

  telaIntro.focus();
}

function voltarParaPerguntas() {
  telaIntro.hidden = true;
  form.hidden = false;

  if (tituloForm) tituloForm.hidden = false;
  if (progressTrack) progressTrack.hidden = false;

  progressoTexto.hidden = false;
  telaIntro.classList.remove("transition-screen");
}

btnContinuarBloco.addEventListener("click", () => {
  const primeiroIndice = Number(
    telaIntro.dataset.primeiroIndice
  );

  if (
    !Number.isInteger(primeiroIndice) ||
    primeiroIndice < 0
  ) {
    return;
  }

  indiceAtual = primeiroIndice;
  voltarParaPerguntas();
  renderPergunta();
});

// =========================================================
// MOSTRAR PERGUNTA
// =========================================================

function renderPergunta() {
  const pergunta = PERGUNTAS[indiceAtual];
  if (!pergunta) return;

  const respostaSalva = respostas[indiceAtual];
  const opcoes = opcoesDaPergunta(pergunta);
  const intervalo = intervaloDoBloco(pergunta.categoria);

  const numeroLocal =
    indiceAtual - intervalo.primeiro + 1;

  areaPergunta.innerHTML = `
    <span class="category-tag">
      ${BLOCOS[pergunta.categoria].simbolo}
      ${CATEGORIAS[pergunta.categoria]}
    </span>

    <fieldset>
      <legend id="legend-${pergunta.id}" tabindex="-1">
        ${pergunta.texto}
      </legend>

      <div
        class="option-list"
        role="radiogroup"
        aria-labelledby="legend-${pergunta.id}"
      >
        ${opcoes.map((op, i) => `
          <div class="option">
            <input
              type="radio"
              id="${pergunta.id}-op${i}"
              name="${pergunta.id}"
              value="${op.valor}"
              ${respostaSalva === op.valor ? "checked" : ""}
            >

            <label for="${pergunta.id}-op${i}">
              ${op.texto}
            </label>
          </div>
        `).join("")}
      </div>
    </fieldset>
  `;

  progressoTexto.textContent =
    `${CATEGORIAS[pergunta.categoria]} — ` +
    `Pergunta ${numeroLocal} de ${intervalo.total}`;

  barraFill.style.width =
    `${Math.round(
      (numeroLocal / intervalo.total) * 100
    )}%`;

  barraProgresso.setAttribute(
    "aria-valuemax",
    String(intervalo.total)
  );

  barraProgresso.setAttribute(
    "aria-valuenow",
    String(numeroLocal)
  );

  btnVoltar.disabled = indiceAtual === 0;

  btnAvancar.textContent =
    indiceAtual === PERGUNTAS.length - 1
      ? "Ver meu resultado"
      : numeroLocal === intervalo.total
        ? "Concluir esta parte"
        : "Próxima pergunta";

  statusMensagem.textContent = "";

  areaPergunta.querySelector("legend")?.focus();
}

// =========================================================
// LER RESPOSTA
// =========================================================

function lerRespostaAtual() {
  const pergunta = PERGUNTAS[indiceAtual];

  const escolhida = form.querySelector(
    `input[name="${pergunta.id}"]:checked`
  );

  return escolhida ? Number(escolhida.value) : null;
}

// =========================================================
// BOTÃO VOLTAR
// =========================================================

btnVoltar.addEventListener("click", () => {
  const valorAtual = lerRespostaAtual();

  if (valorAtual !== null) {
    respostas[indiceAtual] = valorAtual;
  }

  if (indiceAtual > 0) {
    indiceAtual--;

    voltarParaPerguntas();
    renderPergunta();
  }
});

// =========================================================
// AVANÇAR / FINALIZAR
// =========================================================

form.addEventListener("submit", async (evento) => {
  evento.preventDefault();

  const valor = lerRespostaAtual();

  if (valor === null) {
    statusMensagem.textContent =
      "Escolha uma opção para continuar.";

    return;
  }

  respostas[indiceAtual] = valor;

  const categoriaAtual =
    categoriaDaPergunta(indiceAtual);

  const proximoIndice = indiceAtual + 1;

  const categoriaSeguinte =
    categoriaDaPergunta(proximoIndice);

  if (proximoIndice >= PERGUNTAS.length) {
    await finalizarQuestionario();
    return;
  }

  // Ao terminar um tema, apresenta o próximo.
  if (categoriaSeguinte !== categoriaAtual) {
    mostrarTelaTransicao(categoriaSeguinte);
    return;
  }

  indiceAtual = proximoIndice;
  renderPergunta();
});

// =========================================================
// CALCULAR RESULTADO
// =========================================================

function calcularResultado() {
  const pontuacaoPorCategoria = {};

  Object.keys(CATEGORIAS).forEach((chave) => {
    pontuacaoPorCategoria[chave] = 0;
  });

  PERGUNTAS.forEach((pergunta, indice) => {
    pontuacaoPorCategoria[pergunta.categoria] +=
      respostas[indice] ?? 0;
  });

  const pontuacaoTotal =
    Object.values(pontuacaoPorCategoria)
      .reduce((total, pontos) => total + pontos, 0);

  return {
    pontuacaoPorCategoria,
    pontuacaoTotal
  };
}

// =========================================================
// FINALIZAR E SALVAR RESULTADO
// =========================================================

async function finalizarQuestionario() {
  btnAvancar.disabled = true;
  btnAvancar.textContent = "Enviando...";

  const {
    pontuacaoPorCategoria,
    pontuacaoTotal
  } = calcularResultado();

  const resultado = {
    respostas: PERGUNTAS.reduce(
      (acc, pergunta, indice) => {
        acc[pergunta.id] = respostas[indice];
        return acc;
      },
      {}
    ),

    pontuacaoPorCategoria,
    pontuacaoTotal,
    totalPerguntas: PERGUNTAS.length,
    concluidoEm: new Date().toISOString()
  };

  sessionStorage.setItem(
    "pontedigital_resultado",
    JSON.stringify(resultado)
  );

  try {
    await addDoc(
      collection(db, "avaliacoes"),
      {
        ...resultado,
        concluidoEm: serverTimestamp()
      }
    );
  } catch (erro) {
    console.warn(
      "Não foi possível salvar no Firestore:",
      erro
    );
  }

  window.location.href = "resultados.html";
}

// =========================================================
// INICIAR
// =========================================================

// O questionário começa diretamente por Tecnologia.
// As telas de apresentação aparecem nas mudanças de tema.
renderPergunta();