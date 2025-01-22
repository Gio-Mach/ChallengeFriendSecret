# Sobre o Projeto

Este projeto é uma aplicação simples em HTML, CSS e JavaScript para realizar o sorteio de um amigo secreto. Ele permite aos usuários:

- Adicionar nomes à lista de participantes.
- Visualizar a lista de nomes adicionados.
- Realizar um sorteio aleatório e exibir o nome sorteado.

Este trabalho é fruto da minha experiência de aprendizado na ONE - Oracle Next Education, pela qual sou muito grata pela oportunidade de evoluir nas áreas de desenvolvimento web e lógica de programação.

---

## Funcionalidades

### Adicionar Nomes
- Os usuários podem inserir o nome de um amigo no campo de texto e clicar no botão "Adicionar".
- O programa valida se o campo está vazio e exibe um alerta caso nenhum nome seja inserido.
- Os nomes válidos são adicionados à lista exibida na tela.

### Visualizar Lista de Participantes
- A lista é atualizada dinamicamente e exibe todos os nomes adicionados.
- Cada nome é exibido como um elemento estilizado.

### Sortear Amigo Secreto
- Um nome é escolhido aleatoriamente da lista ao clicar no botão "Sortear Amigo".
- O nome sorteado é exibido com destaque na tela.
- O programa valida se há nomes na lista antes de realizar o sorteio e exibe um alerta caso a lista esteja vazia.

---

## Ferramentas Utilizadas

- **HTML**: Para estruturar o conteúdo da aplicação.
- **CSS**: Para criar um design que seja de fácil visualização.
- **JavaScript**: Para implementar a lógica do programa, incluindo a manipulação do DOM e o sorteio aleatório.

---

## Modo de uso

1. Clone este repositório para um arquivo local.
2. Abra o arquivo no navegador.
3. No campo de texto, insira o nome de um amigo e clique no botão "Adicionar" ou aperte a tecla "Enter".
4. Veja os nomes serem adicionados na lista exibida abaixo.
5. Clique em "Sortear Amigo" para escolher aleatoriamente um dos nomes.

---

## Estrutura do Código

### HTML
- Estrutura do layout e elementos essenciais:
  - Campo de entrada de texto.
  - Botões para adicionar nomes e realizar o sorteio.
  - Lista de nomes e resultado do sorteio.

### CSS
- Estilo visual com:
  - Cor de fundo neutra para garantir uma boa legibilidade.
  - Bordas arredondadas aplicadas aos elementos para criar um visual suave e moderno.
  - Efeitos de interação nos botões, proporcionando uma resposta visual agradável ao passar o mouse.
  - Proporcionar uma melhor visualização do resultado do sorteio e da lista sendo formada

### JavaScript
- Lógica da aplicação:
  - Adicionar nomes ao array e exibi-los na lista.
  - Validar entradas de texto.
  - Realizar o sorteio aleatório usando `Math.random()` e `Math.floor()`.
  - Exibir o resultado do sorteio dinamicamente.
  - O campo de entrada de texto tem um evento associado ao pressionamento da tecla "Enter", permitindo que o usuário adicione um nome à lista sem precisar clicar no botão "Adicionar".

---
