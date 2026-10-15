# Portfólio Profissional — Arthur Monserrat Souza

> **Status:** publicado na Vercel. O formulário de contato foi configurado e validado por envio real.

Portfólio de Arthur Monserrat Souza, estudante do 3º período de Engenharia de Software na PUC Minas. Esta entrega do LAB01 de DIAW apresenta sua formação, atuação administrativa desde janeiro de 2025, um projeto selecionado e canais de contato.

## Links

- Site publicado: [arthur-monserrat-portfolio.vercel.app](https://arthur-monserrat-portfolio.vercel.app/).
- Código-fonte: [ArthurMonserrat/arthur-monserrat-portfolio](https://github.com/ArthurMonserrat/arthur-monserrat-portfolio).
- Wireframes: [Figma](https://www.figma.com/design/AP1vCzHXem9UYPc8woX1aO).

## Funcionalidades

- Cabeçalho fixo, seção ativa discreta, âncoras e menu móvel completo.
- Conteúdo alternável entre português e inglês.
- Timeline de um projeto e de experiência profissional, com dados locais.
- Projeto corporativo apresentado sem publicar código-fonte, aplicação ou rotas de acesso.
- Links diretos para GitHub, LinkedIn e e-mail público, além do download de currículo público.
- Formulário EmailJS com validação de nome, e-mail e mensagem, estado de envio e feedback acessível.
- Layout responsivo, HTML semântico, labels, foco visível e contraste alto.
- Captura real da tela de entrada do Ecossistema SM&A, sem dados pessoais ou internos.

## Tecnologias e arquitetura

- React 19, Vite, JavaScript e CSS puro.
- Vitest + Testing Library para testes de interface.
- `@emailjs/browser` para envio direto no cliente.
- Vercel para hospedar o front-end estático.

O navegador entrega o front-end React pela Vercel. O formulário chama o EmailJS diretamente. Não há API própria, banco de dados ou autenticação neste projeto.

## Estrutura

```text
src/
  components/       # Header, About, Timeline, Contact, Footer
  data/             # projetos e experiências em arrays
  test/             # setup do Vitest
public/
  curriculo/        # currículo público, sem telefone
docs/
  wireframes/       # exportações desktop e mobile do Figma
  screenshots/      # capturas reais dos projetos apresentados
.env.example        # nomes das variáveis públicas do EmailJS
```

## Executar localmente

Pré-requisito: Node.js LTS.

```bash
npm install
npm run dev
npm test
npm run build
```

## Configurar EmailJS

1. Copie `.env.example` para `.env.local`.
2. Preencha os três identificadores públicos da conta EmailJS.
3. Reinicie `npm run dev`.
4. Na Vercel, crie as mesmas variáveis para Production e faça um novo deploy.

O serviço Gmail e o template de contato estão configurados na conta EmailJS vinculada. O template usa `{{name}}`, `{{email}}` e `{{message}}`, com `{{email}}` em Reply-To.

As chaves não devem ser enviadas ao Git. Para a Vercel, configure as mesmas variáveis no painel do projeto.

## Currículo público

O arquivo em `public/curriculo/arthur-monserrat-curriculo-publico.pdf` contém somente dados apropriados para divulgação profissional: nome, e-mail público, cidade/UF, formação, experiência, competências e certificados. O telefone informado no currículo original não foi incluído.

## Deploy

1. Suba este repositório no GitHub.
2. Importe-o na Vercel e mantenha o preset Vite.
3. Configure as variáveis do EmailJS.
4. Execute/verifique o build e publique.

## Wireframes e evidências visuais

Os wireframes de média fidelidade da Sprint 01 foram criados no Figma e exportados para o repositório. A implementação preserva sua hierarquia de seções e recebeu ajustes de cabeçalho, ações no hero e navegação móvel durante a revisão final.

![Wireframe desktop](docs/wireframes/desktop.png)

![Wireframe mobile](docs/wireframes/mobile.png)

## Captura do projeto

O portfólio apresenta apenas o Sistema de Apontamento de Horas. A imagem abaixo é a tela de entrada real do Ecossistema SM&A, que mostra a seleção dos sistemas Banco de Horas 1 e Banco de Horas 2 (Campo e Estudos); ela não é um painel administrativo nem uma visão de colaborador e não contém dados pessoais ou internos.

![Tela de entrada do Ecossistema SM&A](docs/screenshots/sistema-apontamento-horas.png)

## Matriz de requisitos — LAB01

| Entrega | Status | Evidência |
| --- | --- | --- |
| Sobre em PT/EN, formação, área, interesses e objetivo | Atendido | Seção **Sobre** alternável; conteúdo baseado no currículo. |
| Projeto em timeline, descrição, tecnologias e imagem real | Atendido em parte | Um projeto de 2026, tecnologias confirmadas e tela de entrada real do SM&A. O link de código/aplicação não é público por confidencialidade. |
| Experiência com organização, função, período e atividades | Atendido em parte | Função, período e atividades confirmados pelo currículo; a organização não foi divulgada no material fornecido. |
| Contato com ícones e formulário de e-mail | Atendido | GitHub, LinkedIn, e-mail público e formulário validado em produção. |
| Navegação, responsividade e acessibilidade | Atendido | Cabeçalho fixo, estado ativo, menu móvel, foco visível e labels. |
| Deploy, repositório e README | Atendido | Links públicos acima, instruções de execução, estrutura, variáveis e limitações documentadas. |
| Wireframes e evolução visual | Atendido | Arquivos em `docs/wireframes/` e link do Figma. |

## Sprints

| Sprint | Resultado |
| --- | --- |
| 01 | Wireframes, estrutura React e navegação por seções. |
| 02 | Conteúdo PT/EN, timelines, formulário e comportamento responsivo. |
| 03 | Deploy Vercel, captura real do projeto, currículo público e documentação final. |

## Verificações

- `npm test`: valida a navegação, a alternância de idioma, o projeto único, os canais de contato, o currículo público e a validação de formulário.
- `npm run build`: gera o bundle de produção Vite.
- Wireframes desktop e mobile revisados visualmente no Figma.
- URL de produção aberta em navegador e verificada, inclusive sem autenticação.
- Formulário em produção submetido com sucesso ao EmailJS.

## Limitação conhecida — SM&A

A visão de colaborador não estava disponível sem autenticação adicional. A imagem publicada é corretamente identificada como tela de entrada do Ecossistema SM&A; ela não representa painel administrativo nem visão de colaborador. A captura pode ser substituída no futuro após autorização e revisão para remover dados internos ou pessoais.

## Referências

- [Template de README do professor](https://github.com/joaopauloaramuni/desenvolvimento-e-integracao-de-aplicacoes-web/blob/main/TEMPLATES/template_README.md).
- Portfólios de [Flávio Júnior](https://flaviojunior-portfolio.vercel.app/), [Gabriel Victor](https://gabrielvictor.web.app/), [Pedro Braga](https://www.pedrobragadev.com/) e [Luca Azalim](https://azal.im/), consultados como inspiração de organização e apresentação.

## Autor

Arthur Monserrat Souza.
