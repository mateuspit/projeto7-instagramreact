# Informações sobre o projeto!

Acesse o projeto: <a href="https://mateuspit.github.io/projeto7-instagramreact/"> Instagram react </a>

Acesse informações sobre o projeto:
<div align="center"><a href="#Contextualizacao">Contextualização</a><br>
  <a href="#Tecnologias">Tecnologias utilizadas<br></a>
<a href="#Requisitos">Requisitos do projeto<br></a></div>


<div id="Contextualizacao">Contextualização:</div><br>
Este projeto foi desenvolvido para trabalhar os conceitos aprendidos sobre React mais especificamente: conceito de componentização, as props dos componentes do React e, por fim, estado do componente utilizando useState. Este é o primeiro projeto de React, portanto, tem baixa complexidade.

<div id="Tecnologias">Tecnologias utilizadas:</div><br>
Neste projeto foram utilizados HTML, CSS, JavaScript e React. Todo o projeto foi versionado utilizando git e github. O projeto foi codificado utilizando o editor de texto, VS Code.

<div id="Requisitos">Requisitos do projeto:</div>
- Você deve criar seu projeto usando o comando create-react-app:
- Arquivos CSS devem ser colocados na pasta public e linkados diretamente no index.html da pasta public.
- Você também deve criar, dentro da `public`, uma pasta `assets` para colocar as imagens.
- A página deve ser componentizada em arquivos diferentes, utilizando import/export:
  <details>
    <summary>    
        Componentes
    </summary>
  - App<br>
  - Corpo<br>
  - SideBar<br>
  - NavBar<br>
  - Usuario<br>
  - Stories<br>
  - Posts<br>
  - Sugestoes<br>
  <div align="center"><img title="a title" alt="Alt text" src="./public/assets/DistribuicaoDosComponentes.png"></div>
   </details>
- Todos os itens repetitivos do projeto devem ser representados como Arrays/Objetos nos componentes e renderizados no JSX usando
  <details>
  <summary>
  Itens pretitivos
  </summary>
  - Os stories (deve ter pelo menos 3 stories)<br>
  - Os posts (deve ter pelo menos 3 posts)<br>
  - As sugestões de seguidores (deve ter pelo menos 3 sugestões)<br>
  </details>
- Nome de usuário (ao apertar o lápis, aparece um prompt para alterá-lo). Se for passada uma string vazia, não atualiza.<br>
- Imagem de perfil (ao clicar uma vez na imagem, aparece um `prompt` pedindo novo link). Se for passada uma string vazia, não atualiza.<br>
- Salvar o post (ao clicar no ícone de salvar o post, ele deverá ficar preenchido).<br>
  - Caso a postagem já esteja salva, ao clicar no ícone, a postagem deve passar para não salva.<br>
- Ao clicar no ícone do like o usuário poderá curtir a postagem. Ou seja, o ícone de coração deverá ficar preenchido e vermelho.
  - Caso a postagem já esteja curtida, ao clicar no ícone, a postagem deve passar para não curtida.
- Ao clicar na imagem de um post do feed, o usuário poderá curtir a postagem, ou seja, o botão do like deverá ficar preenchido em vermelho.
  - Ao clicar na imagem de um post do feed, o usuário poderá curtir a postagem, ou seja, o botão do like deverá ficar preenchido em vermelho.
- Sobre a frase de “Curtido por fulano e outras xxx pessoas”.
<details>
<summary>
Bônus (OPCIONAL)
</summary>
- Para dar like clicando na imagem, é necessário clicar duas vezes seguidas, rapidamente.<br>
  - Clicar duas vezes com um intervalo de tempo grande NÃO CONFIGURA double click. Só serão aceitas implementações usando onDoubleClick do React ou evento nativo equivalente.<br>
- Quando ocorrer o double click na imagem, deverá surgir no centro da imagem um coração, que primeiro cresce e depois desaparece, como na imagem abaixo.<br>
<div align="center"><img title="a title" alt="Alt text" src="./public/assets/heart.gif"></div>
  </details>

  


  


