
// =========================================================
// CATEGORIAS
// =========================================================

const CATEGORIAS = {
  tecnologia: "Tecnologia",
  financas: "Educação Financeira",
  servicos: "Serviços Públicos e Direitos"
};

// =========================================================
// NÍVEL
// =========================================================

function nivelPorPontuacao(pontos, maximo = 30) {
  const proporcao = pontos / maximo;

  if (proporcao <= 0.25) return "Iniciante";
  if (proporcao <= 0.50) return "Básico";
  if (proporcao <= 0.75) return "Intermediário";

  return "Avançado";
}

// =========================================================
// RECOMENDAÇÕES DE TECNOLOGIA
// =========================================================

const RECOMENDACOES_TECNOLOGIA = {
  iniciante: [
    {
      titulo: "Fundamentos de TI: Hardware e Software",
      fonte: "Fundação Bradesco — Escola Virtual",
      descricao:
        "Introdução à informática, hardware, software, armazenamento, processamento e sistemas operacionais.",
      url: "https://www.ev.org.br/cursos/fundamentos-de-ti-hardware-e-software"
    }
  ],

  basico: [
    {
      titulo: "Excel na Prática",
      fonte: "Fundação Bradesco — Escola Virtual",
      descricao:
        "Desenvolva habilidades com planilhas, organização de informações, funções e análise de dados.",
      url: "https://www.ev.org.br/cursos/excel-na-pratica"
    },
    {
      titulo: "Fundamentos de TI: Hardware e Software",
      fonte: "Fundação Bradesco — Escola Virtual",
      descricao:
        "Aprenda conceitos fundamentais de hardware, software e funcionamento dos computadores.",
      url: "https://www.ev.org.br/cursos/fundamentos-de-ti-hardware-e-software"
    }
  ],

  intermediario: [
    {
      titulo: "Excel na Prática",
      fonte: "Fundação Bradesco — Escola Virtual",
      descricao:
        "Aprofunde seus conhecimentos em planilhas, funções, análise de dados e produtividade.",
      url: "https://www.ev.org.br/cursos/excel-na-pratica"
    },
    {
      titulo: "Linguagem de Programação Python - Básico",
      fonte: "Fundação Bradesco — Escola Virtual",
      descricao:
        "Introdução ao raciocínio lógico e à programação utilizando Python.",
      url: "https://www.ev.org.br/cursos/linguagem-de-programacao-python-basico"
    }
  ],

  avancado: [
    {
      titulo: "Linguagem de Programação Python - Básico",
      fonte: "Fundação Bradesco — Escola Virtual",
      descricao:
        "Continue desenvolvendo raciocínio lógico e programação com Python.",
      url: "https://www.ev.org.br/cursos/linguagem-de-programacao-python-basico"
    },
    {
      titulo: "Excel na Prática",
      fonte: "Fundação Bradesco — Escola Virtual",
      descricao:
        "Aprofunde conhecimentos em análise de dados e automação de tarefas no Excel.",
      url: "https://www.ev.org.br/cursos/excel-na-pratica"
    }
  ]
};

// =========================================================
// EDUCAÇÃO FINANCEIRA
// =========================================================

const RECOMENDACOES_FINANCAS = {
  iniciante: [
    {
      titulo: "Caderno de Educação Financeira",
      fonte: "Banco Central do Brasil",
      descricao:
        "Material para começar a desenvolver uma relação mais consciente com o dinheiro e aprender a organizar receitas e despesas.",
      url: "https://www.bcb.gov.br/cidadaniafinanceira/cidadania_biblioteca"
    }
  ],

  basico: [
    {
      titulo: "Orçamento pessoal ou familiar",
      fonte: "Banco Central do Brasil",
      descricao:
        "Aprenda a organizar receitas, despesas e utilizar o orçamento como ferramenta de planejamento.",
      url: "https://www.bcb.gov.br/cidadaniafinanceira/cidadania_biblioteca"
    },
    {
      titulo: "Educação Financeira",
      fonte: "Fundação Bradesco — Escola Virtual",
      descricao:
        "Conteúdo sobre planejamento financeiro, hábitos de consumo, controle financeiro e conceitos básicos de investimentos.",
      url: "https://www.ev.org.br/cursos/educacao-financeira"
    }
  ],

  intermediario: [
    {
      titulo: "Crédito e administração das dívidas",
      fonte: "Banco Central do Brasil",
      descricao:
        "Aprenda sobre crédito, juros, dívidas e decisões mais conscientes antes de assumir compromissos financeiros.",
      url: "https://www.bcb.gov.br/cidadaniafinanceira/cidadania_biblioteca"
    },
    {
      titulo: "Caderno de Educação Financeira",
      fonte: "Banco Central do Brasil",
      descricao:
        "Material sobre orçamento, crédito, consumo, poupança e planejamento.",
      url: "https://www.bcb.gov.br/cidadaniafinanceira/cidadania_biblioteca"
    }
  ],

  avancado: [
    {
      titulo: "Poupança, investimento e planejamento",
      fonte: "Banco Central do Brasil",
      descricao:
        "Aprofunde seus conhecimentos sobre poupança, investimentos, risco, liquidez e planejamento financeiro.",
      url: "https://www.bcb.gov.br/cidadaniafinanceira/cidadania_biblioteca"
    },
    {
      titulo: "Cidadania Financeira",
      fonte: "Banco Central do Brasil",
      descricao:
        "Conteúdos para tomar decisões financeiras mais conscientes.",
      url: "https://www.bcb.gov.br/cidadaniafinanceira"
    }
  ]
};

// =========================================================
// SERVIÇOS PÚBLICOS, DIREITOS E BENEFÍCIOS
// =========================================================

const SERVICOS_PUBLICOS = [
  {
    titulo: "Cadastro Único (CadÚnico)",
    categoria: "Porta de entrada para benefícios sociais",
    descricao:
      "Cadastro que ajuda o governo a identificar famílias de baixa renda. Pode ser utilizado na seleção para programas sociais. A inscrição não garante aprovação automática.",
    publico: "Famílias que atendem aos critérios de renda e cadastro.",
    url: "https://www.gov.br/pt-br/servicos/inscrever-se-no-cadastro-unico-para-programas-sociais-do-governo-federal"
  },
  {
    titulo: "Bolsa Família",
    categoria: "Assistência social e renda",
    descricao:
      "Programa de transferência de renda para famílias que atendem às regras de renda e aos demais requisitos oficiais.",
    publico: "Famílias que cumprem os critérios do programa. Estar no CadÚnico não garante entrada automática.",
    url: "https://www.gov.br/pt-br/servicos/receber-o-bolsa-familia"
  },
  {
    titulo: "Benefício de Prestação Continuada (BPC)",
    categoria: "Direitos da pessoa idosa e da pessoa com deficiência",
    descricao:
      "Benefício assistencial de um salário mínimo mensal para pessoas com 65 anos ou mais e pessoas com deficiência que atendam aos critérios legais. Não é aposentadoria.",
    publico: "Pessoas idosas e pessoas com deficiência que cumpram os requisitos oficiais.",
    url: "https://www.gov.br/mds/pt-br/acoes-e-programas/suas/beneficios-assistenciais/beneficio-assistencial-ao-idoso-e-a-pessoa-com-deficiencia-bpc"
  },
  {
    titulo: "Tarifa Social de Energia Elétrica",
    categoria: "Desconto na conta de luz",
    descricao:
      "Benefício que reduz o custo da energia elétrica para famílias elegíveis, conforme os critérios de renda, cadastro e demais regras vigentes.",
    publico: "Famílias que se enquadram nos critérios oficiais da Tarifa Social.",
    url: "https://www.gov.br/aneel/pt-br/assuntos/tarifas/tarifa-social"
  },
  {
    titulo: "Farmácia Popular",
    categoria: "Saúde e medicamentos",
    descricao:
      "Programa que disponibiliza medicamentos e outros itens de saúde previstos pelo programa, de acordo com as regras vigentes e os produtos oferecidos.",
    publico: "Pessoas que precisam dos medicamentos ou itens contemplados e cumprem as regras de acesso.",
    url: "https://www.gov.br/saude/pt-br/composicao/sectics/farmacia-popular"
  },
  {
    titulo: "Programa Dignidade Menstrual",
    categoria: "Saúde e dignidade",
    descricao:
      "Iniciativa que facilita o acesso gratuito a absorventes para pessoas que atendem aos critérios do programa.",
    publico: "Pessoas que cumprem os critérios de elegibilidade. Consulte as regras oficiais para saber como obter o benefício.",
    url: "https://www.gov.br/saude/pt-br"
  },
  {
    titulo: "Minha Casa, Minha Vida",
    categoria: "Moradia",
    descricao:
      "Programa habitacional que pode facilitar o acesso à moradia por diferentes modalidades e condições. A participação depende da renda e das regras vigentes.",
    publico: "Famílias que atendem aos requisitos da modalidade disponível.",
    url: "https://www.gov.br/cidades/pt-br/assuntos/minha-casa-minha-vida"
  },
  {
    titulo: "ID Jovem",
    categoria: "Transporte e cultura para jovens",
    descricao:
      "Documento que permite a jovens elegíveis acessar benefícios como vagas gratuitas ou com desconto no transporte interestadual e meia-entrada em eventos culturais e esportivos, conforme as regras.",
    publico: "Jovens que atendem aos critérios oficiais de idade, renda e cadastro.",
    url: "https://www.gov.br/pt-br/servicos/emitir-a-id-jovem"
  },
  {
    titulo: "Passe Livre interestadual para pessoa com deficiência",
    categoria: "Transporte acessível",
    descricao:
      "Benefício que pode permitir viagens gratuitas em transporte coletivo interestadual convencional para pessoas com deficiência de baixa renda que cumpram os requisitos legais.",
    publico: "Pessoas com deficiência que atendem aos critérios oficiais de renda e documentação.",
    url: "https://www.gov.br/pt-br/servicos/obter-passe-livre"
  },
  {
    titulo: "Isenção da taxa do Enem",
    categoria: "Educação",
    descricao:
      "Candidatos que se enquadram nas regras do edital podem solicitar isenção da taxa de inscrição do Enem. Confira os critérios e prazos oficiais.",
    publico: "Candidatos que atendem aos critérios do edital vigente.",
    url: "https://www.gov.br/inep/pt-br/assuntos/noticias/enem"
  },
  {
    titulo: "Defensoria Pública da União",
    categoria: "Orientação e assistência jurídica gratuita",
    descricao:
      "Oferece orientação jurídica e defesa em casos de competência da Justiça Federal e outros assuntos atendidos pela DPU. A forma de atendimento e os critérios devem ser consultados no canal oficial.",
    publico: "Pessoas que precisam de assistência jurídica em assuntos atendidos pela DPU, conforme os critérios aplicáveis.",
    url: "https://www.dpu.def.br/"
  },
  {
    titulo: "Serviços gratuitos do SUS",
    categoria: "Saúde pública",
    descricao:
      "O Sistema Único de Saúde oferece serviços de saúde pública, incluindo prevenção, consultas, vacinação e outros atendimentos conforme a rede de saúde.",
    publico: "População em geral, conforme a organização e os fluxos de atendimento do SUS.",
    url: "https://www.gov.br/saude/pt-br"
  }
];

// =========================================================
// ELEMENTOS DA PÁGINA
// =========================================================

const elCarregando = document.getElementById("carregando");
const elSemResultado = document.getElementById("sem-resultado");
const elResultado = document.getElementById("conteudo-resultado");
const elNivelGeral = document.getElementById("nivel-geral");
const elListaCategorias = document.getElementById("lista-categorias");
const elListaRecomendacoes = document.getElementById("lista-recomendacoes");

// =========================================================
// CARREGAR RESULTADO
// =========================================================

function carregarResultado() {
  const bruto = sessionStorage.getItem("pontedigital_resultado");

  if (!bruto) {
    return null;
  }

  try {
    return JSON.parse(bruto);
  } catch {
    return null;
  }
}

// =========================================================
// ESCOLHER RECOMENDAÇÕES
// =========================================================

function obterRecomendacoes(categoria, nivel) {
  const nivelNormalizado = nivel
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

  if (categoria === "tecnologia") {
    return RECOMENDACOES_TECNOLOGIA[nivelNormalizado] || [];
  }

  if (categoria === "financas") {
    return RECOMENDACOES_FINANCAS[nivelNormalizado] || [];
  }

  return [];
}

// =========================================================
// MONTAR PÁGINA
// =========================================================

function montarPagina(resultado) {
  const {
    pontuacaoPorCategoria,
    pontuacaoTotal
  } = resultado;

  const maximoTotal = 90;

  const nivelGeral = nivelPorPontuacao(
    pontuacaoTotal,
    maximoTotal
  );

  elNivelGeral.textContent = nivelGeral;

  const categoriasOrdenadas = Object.keys(CATEGORIAS)
    .map((chave) => {
      const pontos = pontuacaoPorCategoria[chave] ?? 0;

      return {
        chave,
        nome: CATEGORIAS[chave],
        pontos,
        nivel: nivelPorPontuacao(pontos, 30)
      };
    })
    .sort((a, b) => a.pontos - b.pontos);

  // =======================================================
  // MOSTRAR PONTUAÇÕES
  // =======================================================

  elListaCategorias.innerHTML = categoriasOrdenadas
    .map((cat) => {
      const percentual = Math.round((cat.pontos / 30) * 100);

      return `
        <div class="category-score">
          <span class="category-score__name">
            ${cat.nome}
          </span>

          <span class="category-score__level">
            ${cat.nivel} — ${cat.pontos}/30
          </span>

          <div class="category-score__bar">
            <div
              class="category-score__bar-fill"
              style="width:${percentual}%"
            ></div>
          </div>
        </div>
      `;
    })
    .join("");

  // =======================================================
  // RECOMENDAÇÕES
  // =======================================================

  let htmlRecomendacoes = "";

  categoriasOrdenadas.forEach((cat, indice) => {
    if (
      cat.chave === "tecnologia" ||
      cat.chave === "financas"
    ) {
      const recomendacoes = obterRecomendacoes(
        cat.chave,
        cat.nivel
      );

      recomendacoes.forEach((rec) => {
        const prioridade = indice === 0 || cat.pontos <= 15;

        htmlRecomendacoes += `
          <div class="recommendation ${
            prioridade ? "recommendation--priority" : ""
          }">
            ${
              prioridade
                ? '<p class="recommendation__eyebrow">Recomendado para você</p>'
                : ""
            }

            <p class="recommendation__meta">
              ${cat.nome}
            </p>

            <h3>${rec.titulo}</h3>

            <p class="recommendation__meta">
              ${rec.fonte}
            </p>

            <p>${rec.descricao}</p>

            <a
              class="btn btn--primary"
              href="${rec.url}"
              target="_blank"
              rel="noopener noreferrer"
            >
              Acessar material
            </a>
          </div>
        `;
      });
    }

    if (cat.chave === "servicos") {
      htmlRecomendacoes += `
        <div class="recommendation ${
          cat.pontos <= 15 ? "recommendation--priority" : ""
        }">
          ${
            cat.pontos <= 15
              ? '<p class="recommendation__eyebrow">Conheça seus direitos e serviços</p>'
              : ""
          }

          <p class="recommendation__meta">
            Serviços Públicos e Direitos
          </p>

          <h3>Conheça benefícios e direitos disponíveis</h3>

          <p>
            Existem programas e serviços públicos que podem ajudar
            você e sua família. Confira o que cada um oferece, quem
            pode ter direito e como consultar os canais oficiais.
            Os requisitos variam e nem todos os benefícios se aplicam
            a todas as pessoas.
          </p>

          <div class="public-services-list">
            ${SERVICOS_PUBLICOS.map((servico) => `
              <div class="public-service">
                <h4>${servico.titulo}</h4>

                <p class="recommendation__meta">
                  ${servico.categoria}
                </p>

                <p>${servico.descricao}</p>

                <p>
                  <strong>Quem pode ter direito:</strong>
                  ${servico.publico}
                </p>

                <a
                  class="btn btn--primary"
                  href="${servico.url}"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Consultar informações oficiais
                </a>
              </div>
            `).join("")}
          </div>
        </div>
      `;
    }
  });

  elListaRecomendacoes.innerHTML = htmlRecomendacoes;

  // =======================================================
  // EXIBIR RESULTADO
  // =======================================================

  elCarregando.hidden = true;
  elResultado.hidden = false;
}

// =========================================================
// INICIAR
// =========================================================

function iniciar() {
  const resultado = carregarResultado();

  elCarregando.hidden = true;

  if (!resultado) {
    elSemResultado.hidden = false;
    return;
  }

  montarPagina(resultado);
}

iniciar();
