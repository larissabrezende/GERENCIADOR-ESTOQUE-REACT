<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Gerenciador de Estoque - README</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      margin: 20px auto;
      max-width: 800px;
      padding: 20px;
      background-color: #f4f4f4;
      color: #333;
    }
    h1, h2, h3 {
      color: #2c3e50;
    }
    pre {
      background: #333;
      color: #fefefe;
      padding: 10px;
      border-radius: 5px;
      overflow-x: auto;
    }
    a {
      color: #3498db;
      text-decoration: none;
    }
    a:hover {
      text-decoration: underline;
    }
    ul {
      margin: 10px 0;
      padding: 0 20px;
    }
    .code-block {
      background-color: #272822;
      color: #f8f8f2;
      padding: 10px;
      border-radius: 5px;
      overflow-x: auto;
    }
  </style>
</head>
<body>

  <h1>Gerenciador de Estoque</h1>
  <p>Um sistema de gerenciamento de estoque desenvolvido com <strong>React</strong> e <strong>React Router</strong>, utilizando <strong>Vite</strong> como ferramenta de build. Este projeto permite criar, visualizar, atualizar e excluir itens do estoque, com uma interface responsiva e funcional.</p>

  <h2>🚀 Funcionalidades</h2>
  <ul>
    <li><strong>Dashboard:</strong> Visão geral com métricas e informações sobre os itens cadastrados.</li>
    <li><strong>Gerenciamento de itens:</strong></li>
    <ul>
      <li>Listar itens disponíveis.</li>
      <li>Adicionar novos itens ao estoque.</li>
      <li>Atualizar informações de itens existentes.</li>
      <li>Excluir itens do estoque.</li>
    </ul>
    <li><strong>Navegação intuitiva:</strong> Implementada com o <strong>React Router</strong> para uma experiência de usuário fluida.</li>
    <li><strong>Interface responsiva:</strong> Compatível com dispositivos móveis e desktops.</li>
  </ul>

  <h2>🛠️ Tecnologias Utilizadas</h2>
  <ul>
    <li><strong>React:</strong> Biblioteca principal para construção da interface.</li>
    <li><strong>Vite:</strong> Ferramenta de build rápida e moderna.</li>
    <li><strong>React Router:</strong> Gerenciamento de rotas SPA (Single Page Application).</li>
    <li><strong>CSS Responsivo:</strong> Estilos customizados para diferentes tamanhos de tela.</li>
  </ul>

  <h2>📂 Estrutura do Projeto</h2>
  <pre class="code-block">
gestor-estoque-react/
├── public/               # Arquivos públicos
├── src/
│   ├── assets/           # Imagens e recursos estáticos
│   ├── components/       # Componentes reutilizáveis
│   ├── pages/            # Páginas do sistema
│   │   ├── Home.jsx      # Página inicial
│   │   ├── items/        # Páginas relacionadas a itens
│   │   │   ├── Layout.jsx
│   │   │   ├── ListItems.jsx
│   │   │   ├── CreateItem.jsx
│   │   │   ├── ShowItem.jsx
│   │   │   ├── UpdateItem.jsx
│   ├── App.jsx           # Componente raiz
│   ├── main.jsx          # Ponto de entrada
│   ├── router.jsx        # Configuração de rotas
│   ├── styles.css        # Estilos globais
├── package.json          # Dependências do projeto
└── vite.config.js        # Configuração do Vite
  </pre>

  <h2>🔧 Como Rodar o Projeto</h2>
  <h3>Pré-requisitos</h3>
  <ul>
    <li><strong>Node.js</strong> instalado (versão recomendada: 18+).</li>
    <li>Gerenciador de pacotes <strong>npm</strong> ou <strong>yarn</strong>.</li>
  </ul>

  <h3>Passos</h3>
  <ol>
    <li><strong>Clonar o repositório:</strong></li>
    <pre class="code-block">
git clone https://github.com/usuario/gerenciador-estoque-react.git
cd gestor-estoque-react
    </pre>
    <li><strong>Instalar as dependências:</strong></li>
    <pre class="code-block">
npm install
    </pre>
    <li><strong>Iniciar o servidor de desenvolvimento:</strong></li>
    <pre class="code-block">
npm run dev
    </pre>
    <li>Acesse o projeto em: <a href="http://localhost:5173" target="_blank">http://localhost:5173</a>.</li>
  </ol>

  <h2>🌐 Configuração para Produção</h2>
  <p>Para gerar a versão de produção:</p>
  <pre class="code-block">
npm run build
  </pre>
  <p>Os arquivos serão gerados na pasta <code>dist/</code>.</p>

  <h2>🎨 Design Responsivo</h2>
  <p>A partir de 768px, os botões de <strong>Ver</strong>, <strong>Atualizar</strong> e <strong>Excluir</strong> são reposicionados para baixo e alinhados lado a lado para melhorar a legibilidade e usabilidade em dispositivos móveis.</p>

  <h2>🤝 Contribuições</h2>
  <p>Contribuições são bem-vindas! Siga os passos abaixo para colaborar:</p>
  <ol>
    <li>Faça um <strong>fork</strong> do repositório.</li>
    <li>Crie uma <strong>branch</strong> com sua feature ou correção:</li>
    <pre class="code-block">
git checkout -b feature/nova-feature
    </pre>
    <li>Faça o <strong>commit</strong> das alterações:</li>
    <pre class="code-block">
git commit -m "Adiciona nova feature"
    </pre>
    <li>Envie para sua branch:</li>
    <pre class="code-block">
git push origin feature/nova-feature
    </pre>
    <li>Abra um <strong>Pull Request</strong>.</li>
  </ol>

  <h2>📜 Licença</h2>
  <p>Este projeto está licenciado sob a licença <strong>MIT</strong>. Veja o arquivo <code>LICENSE</code> para mais detalhes.</p>

  <hr>
  <p><strong>Desenvolvido com 💙 por Larissa Rezende</strong><p>

</body>
</html>



