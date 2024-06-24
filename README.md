# Média da Faculdade

## Porque criei este projeto?

Enquanto frequentei a faculadade, diversos colegas e amigos questionaram-me como se faziam as médias das cadeiras e a média geral do curso.
Costumo ensiná-los como se faz, mas ao longo do tempo, com bastantes cadeiras feitas, começa a ficar dificil ter em conta tudo.

Então decidi criar este projeto para ajudar QUALQUER pessoa que esteja na faculdade a calcular a sua média muito facilmente!


## Descrição do Projeto

O site permite calcular a média de avaliações individuais ou a média do curso.

## Funcionalidades do Site

### Registo e Login
- **Página de Registo e Login:** Permite aos utilizadores criar uma conta e iniciar sessão.
    - **Registo:** Os utilizadores podem criar uma conta fornecendo um nome de utilizador e senha.(v1)
    - **Login:** Os utilizadores podem iniciar sessão utilizando o nome de utilizador e senha.(v1)

### Calculadora de Notas Individual
- **Input de Avaliações:** Os utilizadores podem inserir a quantidade de partes de avaliação.(v1)
- **Campos Dinâmicos:** Geração dinâmica de campos para inserção de valores e percentagens das avaliações.(v1)
- **Cálculo da Nota Final:** Cálculo da nota final com base nos valores e percentagens inseridos.(v1)

### Calculadora de Média Geral
(v1)
- **Importação de Ficheiros:** Permite a importação de ficheiros Excel contendo dados das cadeiras e respetivas notas.(v1)
- **Input Manual:** Permite a inserção manual de cadeiras, ano, semestre, ECTS e nota.(v1)
- **Cálculo da Média:** Cálculo da média ponderada das cadeiras com base nos ECTS.(v1)
- **Exportação de Resultados:** Possibilidade de exportar os resultados para um ficheiro Excel.(v1)

(v2)
- **Dados de cadeiras:** agora ao abrir um conta no site, automaticamente serão guardadas as cadeiras;
- **Remover Cadeiras:** é possivel remover cadeiras indesejadas, clicando no X.
## Estrutura dos Ficheiros

### HTML
- **index.html:** Página inicial do site.
- **logReg.html:** Página de registo e login.
- **calcIndiv.html:** Página para calcular notas individuais.
- **calcTodo.html:** Página para calcular a média geral.

### JavaScript
- **index.js:** Funções para verificar o login na página inicial.
- **logReg.js:** Funções para o registo e login de utilizadores.
- **logged.js:** Funções para verificar e gerir o estado de login dos utilizadores.
- **calcIndiv.js:** Funções para calcular notas individuais.
- **calcTodo.js:** Funções para calcular a média geral de várias cadeiras.

## Instruções para Utilização

1. **Acessar o Site:** Abra o ficheiro `index.html` no seu navegador ou acesse [AQUI](https://www.guimbreon.online/mediaFaculdade)
2. **Registar-se ou Iniciar Sessão:** Na primeira utilização, é necessário criar uma conta na página de registo e login (`logReg.html`).
3. **Calcular Notas Individuais:** Após iniciar sessão, acesse a página de cálculo de notas individuais (`calcIndiv.html`) e siga as instruções para inserir os valores das avaliações.
4. **Calcular Média Geral:** Acesse a página de cálculo de média geral (`calcTodo.html`) e escolha entre importar um ficheiro Excel com os dados das cadeiras ou inserir manualmente os detalhes de cada disciplina.
5. **Guardar Resultados:** Utilize a opção de exportação para guardar os resultados em formato Excel.

## Autor

Este projeto foi desenvolvido por [Guilherme Soares](https://www.linkedin.com/in/guilhermesoares26/). Para mais informações sobre o projeto, visite a página "Sobre o Projeto" disponível no rodapé de todas as páginas.

---

### Notas Finais
- **Privacidade dos Dados:** Todas as informações inseridas pelos utilizadores são armazenadas localmente no navegador, garantindo a privacidade dos dados.
- **Compatibilidade:** O site é compatível com os principais navegadores e deve ser utilizado no mesmo dispositivo e navegador para manter os dados consistentes.

Para qualquer dúvida ou sugestão, não hesite em contactar o autor através do LinkedIn.