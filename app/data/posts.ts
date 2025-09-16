type Post = {
  id: number;
  titulo: string;
  conteudo: string;
  autor: string;
  data: string;
  tags: string[];
};

export const posts: Post[] = [
  {
    id: 1,
    titulo: "Dominando o TypeScript: além da tipagem",
    conteudo:
      "TypeScript não é apenas uma ferramenta para evitar erros de tipo, ele transforma a forma como desenvolvemos aplicações modernas. Ao adicionar uma camada de segurança ao JavaScript, ele permite que equipes colaborem com mais confiança, reduzindo bugs e melhorando a legibilidade do código. Além da tipagem básica, o TypeScript oferece recursos avançados como tipos genéricos, utilitários de tipo, narrowing e inferência inteligente. Isso significa que você pode criar APIs mais robustas, componentes reutilizáveis e sistemas altamente escaláveis. Em projetos grandes, o uso de TypeScript se torna quase indispensável. Ele facilita refatorações, melhora a integração com editores como VSCode e permite que o desenvolvedor foque na lógica sem se preocupar com erros silenciosos. Aprender TypeScript é investir em produtividade e qualidade.",
    autor: "Mariana Rocha",
    data: "14-09-2025",
    tags: ["typescript", "javascript", "frontend"],
  },
  {
    id: 2,
    titulo: "Tailwind CSS: produtividade e consistência no design",
    conteudo:
      "Tailwind CSS revolucionou a forma como estilizamos interfaces. Ao invés de escrever folhas de estilo separadas, você aplica classes utilitárias diretamente nos elementos HTML, o que acelera o desenvolvimento e garante consistência visual. Um dos maiores benefícios é a previsibilidade. Com Tailwind, você sabe exatamente o que cada classe faz, sem depender de estilos herdados ou cascatas complexas. Isso reduz o tempo de debugging e facilita a manutenção do projeto. Além disso, Tailwind é altamente customizável. Você pode definir seu próprio sistema de cores, espaçamentos e breakpoints, criando uma linguagem visual única para seu projeto. E com o suporte a dark mode, responsividade e plugins, ele se adapta a qualquer necessidade moderna.",
    autor: "Mariana Rocha",
    data: "12-09-2025",
    tags: ["tailwind", "css", "design"],
  },
  {
    id: 3,
    titulo: "React Server Components: uma nova era de performance",
    conteudo:
      "Os Server Components representam uma mudança de paradigma no desenvolvimento com React. Ao permitir que partes da interface sejam renderizadas exclusivamente no servidor, eles reduzem o tamanho do bundle enviado ao cliente e melhoram drasticamente a performance. Isso significa que você pode carregar dados, acessar APIs privadas e renderizar HTML sem expor lógica sensível ao navegador. O resultado é uma aplicação mais rápida, segura e eficiente. A principal mudança para o desenvolvedor é pensar em quais componentes realmente precisam ser interativos. Separar lógica de exibição da lógica de interação permite uma arquitetura mais limpa e escalável. Com o suporte nativo no Next.js, os Server Components estão prontos para dominar o futuro do frontend.",
    autor: "Mariana Rocha",
    data: "11-09-2025",
    tags: ["react", "server", "nextjs"],
  },
  {
    id: 4,
    titulo: "App Router no Next.js: flexibilidade e controle total",
    conteudo:
      "O App Router introduzido no Next.js 13 trouxe uma nova forma de estruturar aplicações. Com ele, é possível criar layouts aninhados, rotas dinâmicas e componentes de servidor de forma nativa, sem hacks ou configurações complexas. A estrutura baseada em diretórios como app/page.tsx, app/layout.tsx e app/loading.tsx permite uma organização clara e modular. Isso facilita a reutilização de componentes, melhora a experiência do usuário com carregamentos inteligentes e torna o código mais legível. Para quem está começando, pode parecer confuso abandonar o Pages Router. Mas a curva de aprendizado vale a pena. O App Router é mais alinhado com a filosofia moderna do React e oferece recursos que antes exigiam bibliotecas externas ou soluções manuais.",
    autor: "Mariana Rocha",
    data: "09-09-2025",
    tags: ["nextjs", "router", "app"],
  },
  {
    id: 5,
    titulo: "Hooks personalizados: reutilização inteligente no React",
    conteudo:
      "Hooks personalizados são uma das ferramentas mais poderosas no arsenal do React. Eles permitem encapsular lógica complexa em funções reutilizáveis, tornando o código mais limpo e modular. Por exemplo, você pode criar um hook para lidar com autenticação, chamadas de API, manipulação de formulários ou até mesmo animações. Isso evita duplicação de código e facilita testes e manutenção. A chave para criar bons hooks é identificar padrões recorrentes no seu projeto. Ao extrair essa lógica para um hook, você melhora a legibilidade e promove boas práticas de desenvolvimento. Hooks personalizados são o segredo para escalar aplicações React com elegância.",
    autor: "Mariana Rocha",
    data: "07-09-2025",
    tags: ["react", "hooks", "frontend"],
  },
  {
    id: 6,
    titulo: "Publicando com Vercel: agilidade e integração contínua",
    conteudo:
      "Vercel é uma plataforma de deploy pensada para desenvolvedores modernos. Com integração direta ao GitHub, você pode publicar seu projeto com apenas alguns cliques, sem precisar configurar servidores ou pipelines complexos. Além da facilidade de uso, Vercel oferece recursos como preview automático de pull requests, CDN global, otimização de imagens e suporte nativo ao Next.js. Isso garante que seu site esteja sempre rápido e disponível. Para equipes, Vercel também permite colaboração eficiente. Cada push gera uma nova versão do site, facilitando testes e revisões. Se você quer focar no código e deixar o deploy por conta da plataforma, Vercel é a escolha ideal.",
    autor: "Mariana Rocha",
    data: "05-09-2025",
    tags: ["vercel", "deploy", "nextjs"],
  },
  {
    id: 7,
    titulo: "Zustand: gerenciamento de estado sem dor de cabeça",
    conteudo:
      "Zustand é uma biblioteca minimalista para gerenciamento de estado em aplicações React. Com uma API simples e intuitiva, ela permite criar stores globais sem boilerplate ou complexidade. Diferente de soluções como Redux, Zustand não exige configuração de actions, reducers ou middlewares. Você define seu estado como uma função e acessa diretamente nos componentes. Isso torna o desenvolvimento mais rápido e direto. Além disso, Zustand é altamente performática. Ela usa proxies para detectar mudanças e atualizar apenas os componentes afetados. Se você busca uma solução leve e eficiente para gerenciar estado, vale muito a pena experimentar.",
    autor: "Mariana Rocha",
    data: "02-09-2025",
    tags: ["react", "zustand", "estado"],
  },
  {
    id: 8,
    titulo: "Dark Mode elegante com Tailwind e Next.js",
    conteudo:
      "O modo escuro se tornou um padrão esperado pelos usuários. Com Tailwind e Next.js, implementar essa funcionalidade é simples e elegante. Usando classes como dark: e persistência de tema com localStorage, você pode oferecer uma experiência personalizada. O segredo está em configurar o Tailwind para reconhecer o tema e aplicar estilos condicionais. Com isso, você pode alterar cores, fundos e até animações dependendo do modo ativo.  Além da estética, o dark mode também melhora a acessibilidade e reduz o cansaço visual. Em aplicações modernas, oferecer essa opção é mais do que um diferencial — é uma necessidade.",
    autor: "Mariana Rocha",
    data: "01-09-2025",
    tags: ["darkmode", "tailwind", "nextjs"],
  },
  {
    id: 9,
    titulo: "SEO para React: visibilidade e performance",
    conteudo:
      "SEO é essencial para que seu site seja encontrado. Em aplicações React, frameworks como Next.js ajudam com renderização no servidor, metadados dinâmicos e otimização de performance. Usar tags corretas, estruturar bem o conteúdo e garantir tempos de carregamento rápidos são práticas fundamentais. Além disso, ferramentas como next/head permitem configurar títulos, descrições e imagens para compartilhamento. Investir em SEO não é apenas sobre aparecer no Google — é sobre oferecer uma experiência completa ao usuário. Um site bem otimizado carrega rápido, é acessível e transmite profissionalismo.",
    autor: "Mariana Rocha",
    data: "30-08-2025",
    tags: ["seo", "react", "nextjs"],
  },
  {
    id: 10,
    titulo: "Blogs com Markdown e Next.js: conteúdo dinâmico e leve",
    conteudo:
      "Criar blogs com Markdown em Next.js é uma abordagem prática e poderosa. Você pode escrever seus posts em arquivos .md, carregar dinamicamente e renderizar com segurança e estilo. Essa técnica permite separar conteúdo da lógica, facilitando a manutenção e a colaboração. O uso de bibliotecas como gray-matter para extrair metadados e remark ou rehype para transformar Markdown em HTML torna o processo fluido e altamente customizável. Isso significa que você pode adicionar títulos, datas, tags e até componentes interativos dentro do conteúdo. Além disso, o Markdown é amigável para editores não técnicos. Qualquer pessoa pode contribuir com novos posts sem precisar entender React ou JSX. Isso abre espaço para equipes multidisciplinares e acelera a produção de conteúdo. No Next.js, você pode combinar essa abordagem com rotas dinâmicas, geração estática (getStaticProps) e otimização de imagens para criar um blog rápido, acessível e com excelente SEO. É uma solução moderna que une simplicidade e performance. Se você busca uma forma leve de publicar artigos, tutoriais ou reflexões técnicas, o Markdown com Next.js é uma escolha inteligente e escalável.",
    autor: "Mariana Rocha",
    data: "28-08-2025",
    tags: ["markdown", "blog", "nextjs"],
  },
  {
    id: 12,
    titulo: "Construindo APIs REST com Express.js: do básico ao avançado",
    conteudo:
      "Express.js continua sendo uma das bibliotecas mais populares para construir APIs REST no ecossistema Node.js. Sua simplicidade e flexibilidade permitem criar rotas, middlewares e integrações com bancos de dados como MongoDB ou PostgreSQL de forma rápida. Combinando Express com ferramentas como JWT para autenticação, dotenv para variáveis de ambiente e Swagger para documentação, você pode montar uma API robusta e escalável. O uso de padrões como MVC e validações com Joi ou Zod tornam o código mais organizado e seguro. Para quem está começando ou quer evoluir no backend, Express é uma porta de entrada acessível e poderosa para o mundo das APIs modernas.",
    autor: "Mariana Rocha",
    data: "27-08-2025",
    tags: ["express", "api", "nodejs", "backend"],
  },
];
