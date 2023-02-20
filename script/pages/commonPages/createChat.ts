import { createHtmlElement } from "../../utils";

interface OrderPreview {
  numberOfOrder: string;
  petsitterId: string;
  ownerId: string;
  pet: {
    name: string;
  };
  nameOfOwner: string;
  nameOfPetsitter: string;
  avatarOwner: string;
  avatarPetsitter: string;
  dates: string;
  service: string;
  pricePerDay: string;
  status: string;
  messages: [
    {
      avatarPath: string;
      name: string;
      text: string;
    }
  ];
}

export const createChat = (order: OrderPreview) => {
  const chatContainer = createHtmlElement("div", "chat-container");
  const titleContainer = createHtmlElement("div", "chat-title");
  titleContainer.textContent = "Chat";
  const currentMessageArea = createHtmlElement(
    "div",
    "chat-current-message-container"
  );
  const messageArea = createHtmlElement(
    "textarea",
    "chat-current-message"
  ) as HTMLTextAreaElement;
  messageArea.placeholder = "Text here";
  messageArea.minLength = 10;
  messageArea.maxLength = 170;
  const sendMessage = createHtmlElement("button", "chat-send-message-btn");
  function sendMess() {
    if (messageArea.value == "") {
      return;
    }
    const imgSrc = document.querySelector('.img-role-menu') as HTMLImageElement
    const name = document.querySelector(".text-name-menu-role")
    const fetchData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        message: {
          avatarPath: imgSrc.src,
          name: name?.textContent,
          text: `${messageArea.value}`,
        },
        orderNum: order.numberOfOrder,
      }),
    };
    fetch(`http://localhost:5000/send-message`, fetchData)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        const chatBlock = document.querySelector(
          ".chat-messages-container"
        ) as HTMLDivElement;
        chatBlock.innerHTML = "";
        renderMessages(data.orders[0]);
        messageArea.value = "";
      });
  }
  messageArea.addEventListener("keypress", (event) => {
    const key = event.keyCode;
    if (key === 13) {
      event.preventDefault();
      sendMess();
    }
  });
  sendMessage.addEventListener("click", sendMess);
  const chatMessagesContainer = createHtmlElement(
    "div",
    "chat-messages-container"
  );
  //
  function renderMessages(data: OrderPreview) {
    for (let i = 0; i < data.messages.length; i++) {
      const message = createHtmlElement("div", "message");
      const avatar = createHtmlElement("img", "message-avatar") as HTMLImageElement;
      avatar.src = data.messages[i].avatarPath;
      const nameAndMessageWrapper = createHtmlElement(
        "div",
        "message-and-name"
      );
      const name = createHtmlElement("span", "chat-username");
      const textOfMessage = createHtmlElement("span", "chat-user-text");
      name.textContent = `${data.messages[i].name}`;
      textOfMessage.textContent = `${data.messages[i].text}`;
      nameAndMessageWrapper.append(name, textOfMessage);
      message.append(avatar, nameAndMessageWrapper);
      chatMessagesContainer.append(message);
    }
    chatMessagesContainer.scrollTo(0, chatMessagesContainer.scrollHeight);
  }
  //
  currentMessageArea.append(messageArea, sendMessage);
  chatContainer.append(
    titleContainer,
    chatMessagesContainer,
    currentMessageArea
  );

  fetch(`http://localhost:5000/auth/user`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({
      _id: localStorage.getItem("curr-user-id"),
    }),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      renderMessages(order);
    });
  return chatContainer;
};
