# Ponte Digital

Aplicação web de inclusão digital desenvolvida como atividade extensionista do Centro Universitário Internacional UNINTER (Escola Superior Politécnica – ESP).

A aplicação aplica um questionário de avaliação de conhecimentos tecnológicos, armazena as respostas no Firebase Firestore e recomenda cursos e materiais gratuitos de acordo com as dificuldades identificadas.

## Estrutura do projeto

```
inclusao-digital/
├── index.html            # Página inicial / apresentação do projeto
├── questionario.html      # Questionário interativo (15 perguntas)
├── resultados.html         # Resultado, níveis por categoria e recomendações
├── css/
│   └── style.css          # Estilos de toda a aplicação
├── js/
│   ├── firebase-config.js  # Configuração e inicialização do Firebase
│   ├── questionario.js      # Lógica do questionário e envio ao Firestore
│   └── recomendacoes.js     # Cálculo de níveis e exibição das recomendações
└── README.md
```

## Como configurar o Firebase

1. Acesse [console.firebase.google.com](https://console.firebase.google.com) e crie um projeto (pode usar o plano gratuito Spark).
2. No menu lateral, ative o **Firestore Database** (pode começar em modo de teste).
3. Em **Configurações do projeto → Geral → Seus apps**, registre um app da Web e copie o objeto `firebaseConfig` gerado.
4. Cole os valores copiados em `js/firebase-config.js`, substituindo os campos `"SUA_API_KEY_AQUI"`, `"SEU_PROJETO"`, etc.
5. Configure regras de segurança do Firestore. Um ponto de partida razoável para este projeto (permitir apenas a criação de novas avaliações, sem leitura pública):

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /avaliacoes/{documento} {
      allow create: if true;
      allow read, update, delete: if false;
    }
  }
}
```

Ajuste essas regras conforme a necessidade real do projeto (por exemplo, se um painel administrativo for criado depois para visualizar os dados agregados).

## Como rodar localmente

Como o projeto usa módulos ES (`type="module"`), é preciso servir os arquivos por um servidor local em vez de abrir o `index.html` diretamente pelo sistema de arquivos. Algumas opções simples:

```bash
# Opção 1: extensão "Live Server" do VS Code (clique com o botão direito em index.html)

# Opção 2: Python
python3 -m http.server 8000

# Opção 3: Node.js
npx serve .
```

Depois, acesse `http://localhost:8000` (ou a porta indicada) no navegador.

## Como funciona o questionário

- 15 perguntas, 3 para cada uma das 5 categorias avaliadas: uso de dispositivos, internet e navegação, comunicação digital, segurança e privacidade, e serviços digitais.
- Cada resposta vale de 0 a 3 pontos (de "nunca fiz isso" a "faço com facilidade, sozinho(a)").
- A pontuação de cada categoria (0–9) é convertida em um nível: Iniciante, Básico, Intermediário ou Avançado.
- A página de resultados ordena as categorias da menor para a maior pontuação e recomenda, prioritariamente, materiais gratuitos para as áreas com mais dificuldade.

## Recomendações de cursos utilizadas

As recomendações apontam para fontes públicas ou sem fins lucrativos com oferta gratuita verificada:

- **Fundação Bradesco — Escola Virtual** (ev.org.br): cursos de informática básica.
- **IFSul — Portal Mundi**: curso "Inclusão Social Digital".
- **Google Ateliê Digital**: habilidades digitais e comunicação.
- **CERT.br / NIC.br**: Cartilha de Segurança para Internet.
- **Portal gov.br**: acesso a serviços públicos digitais.

Vale revisar periodicamente esses links, já que ofertas de cursos gratuitos podem mudar com o tempo.

## Próximos passos sugeridos

- Criar um painel simples (protegido por autenticação) para a equipe do projeto visualizar as dificuldades mais comuns identificadas na comunidade.
- Adicionar uma versão em Libras ou com leitor de tela testado para ampliar a acessibilidade.
- Coletar feedback qualitativo dos participantes após o uso, para validar se as recomendações realmente ajudaram.
