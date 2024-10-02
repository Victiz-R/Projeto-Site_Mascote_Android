const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");
const chatbox = document.querySelector(".chatbox");
const chatbotToggle = document.querySelector(".chatbot-toggle");
const chatbotCloseBtn = document.querySelector(".close-btn");

let userMessage;
let typingElement;// armazena o elemento digitando...

const createChatLi = (message, className) => {
  const chatLi = document.createElement("li");
  chatLi.classList.add("chat", className);
  let chatContent =
    className === "saida" ? `<p>${message}</p>` : `<span id="emoji-robot">&#x1F916;</span><p>${message}</p>`;
  chatLi.innerHTML = chatContent;
  return chatLi;
};
const generateResponse = (entradaChatLi) => {
  const messageElement = entradaChatLi.querySelector("p");
};

const handleChat = () => {
  userMessage = chatInput.value.trim();
  if (!userMessage) return;
  {
    chatbox.appendChild(createChatLi(userMessage, "saida"));
    chatInput.value='';// Limpa o campo após enviar
    chatbox.scrollTop = chatbox.scrollHeight;
  }
  /*setTimeout(() => {
    const entradaChatLi = createChatLi("Digitando...", "entrada")
    chatbox.appendChild(entradaChatLi);
    generateResponse(entradaChatLi);
  }, 600);*/
  // Exibir "Digitando..." e guardar a referência do elemento
    typingElement = createChatLi("Digitando...", "entrada");
    chatbox.appendChild(typingElement);
    generateResponse(typingElement)

  const opcao = userMessage.toLowerCase();// Usar a mensagem do usuário para identificar oque foi digitado
  let saida = "";

  setTimeout(() => {
    switch (opcao) {
      case 'olá':
        saida = 'Olá tudo bem? Selecione uma opção acima para continuar';
        break;
      case '1':
        saida =
          'O Android foi criado pela Android Inc., que foi fundada por Andy Rubin, Rich Miner, Nick Sears e Chris White em 2003. O sistema operacional foi lançado oficialmente pelo Google em 2008.';
        break;
      case '2':
        saida =
          'O primeiro dispositivo a utilizar o Android foi o HTC Dream, também conhecido como T-Mobile G1. Lançado em outubro de 2008, foi o primeiro smartphone a rodar o sistema operacional Android, que foi desenvolvido pelo Google. O G1 apresentava uma tela sensível ao toque, um teclado deslizável e acesso à loja de aplicativos do Android Market.';
        break;
      case '3':
        saida =
          'O Android se tornou popular por resumidamente por: Ser de código aberto, oferecer uma grande variedade de dispositivos, ter um vasto ecossistema de aplicativos, inovar rapidamente, receber apoio do Google e permitir alta personalização.';
        break;
        case 'opções':
        saida = '[1] Quem criou o Android e quando foi lançado?<br><br>' +
                '[2] Qual foi o primeiro dispositivo a utilizar o Android?<br><br>' +
                '[3] Como o Android se tornou tão popular?';
        break;
        case 'opções':
          saida = '[1] Quem criou o Android e quando foi lançado?'+
                  '[2] Qual foi o primeiro dispositivo a utilizar o Android?'+
                  '[3] Como o Android se tornou tão popular?'
          break;
          default:
            saida = 'Desculpe, não entendi!'
      }
      //Mostra o case dependendo do que foi identificado no (id=opcao) = texarea
    /*const entradaChatLi = createChatLi(saida, "entrada");
    chatbox.appendChild(entradaChatLi);
    generateResponse(entradaChatLi);*/
      //troca o digitando pelo case que foi identificado apartir do (id=opcao)/textarea
      typingElement.querySelector("p").innerHTML = saida;

      //Rola o chatbox para a parte inferior
      chatbox.scrollTop = chatbox.scrollHeight;
  }, 1400);
};
// Adicionando o event listener para o botão
sendChatBtn.addEventListener("click", handleChat);

// Adicionando o event listener para a tecla "Enter"
chatInput.addEventListener("keydown", (event) =>{
    switch(event.key){
        case'Enter':
    event.preventDefault(); //impede a nova linha
    handleChat(); //Chama a função de manipulação do chat
    break;
 }
});
chatbotCloseBtn.addEventListener("click", () =>
  document.body.classList.remove("show-chatbot")
);

chatbotToggle.addEventListener("click", () =>
  document.getElementById("chat").classList.toggle("show-chatbot")
);