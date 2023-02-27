import { createHtmlElement } from "../../utils";
import { createSplashScreen, removeSplashScreen } from "./splashScreen";

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
      date: string;
    }
  ];
}

export const createChat = (order: OrderPreview) => {
  const chatContainer = createHtmlElement("div", "chat-container");
  const titleContainer = createHtmlElement("div", "chat-title");
  titleContainer.textContent = "Chat";
  const currentMessageArea = createHtmlElement("div", "chat-current-message-container");
  const messageArea = createHtmlElement("textarea", "chat-current-message") as HTMLTextAreaElement;
  messageArea.placeholder = "Text here";
  messageArea.minLength = 10;
  messageArea.maxLength = 170;
  const sendMessage = createHtmlElement("button", "chat-send-message-btn");
  const emojiBtn = createHtmlElement("button", "chat-open-emoji-btn");
  function sendMess() {
    if (messageArea.value == "") {
      return;
    }
    const imgSrc = document.querySelector(".img-role-menu") as HTMLImageElement;
    const name = document.querySelector(".text-name-menu-role");
    const date = new Date();
    const now = date.toLocaleTimeString("en-US");
    createSplashScreen()
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
          date: now,
        },
        orderNum: order.numberOfOrder,
      }),
    };
    fetch(`https://rs-clone-api-production-3ab8.up.railway.app/send-message`, fetchData)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const chatBlock = document.querySelector(".chat-messages-container") as HTMLDivElement;
        chatBlock.innerHTML = "";
        renderMessages(data);
        messageArea.value = "";
        removeSplashScreen()
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

  sendMessage.addEventListener("click", () => {
    emojiContainer.classList.remove("visible");
  });

  const chatMessagesContainer = createHtmlElement("div", "chat-messages-container");
  //
  function renderMessages(data: OrderPreview) {
    for (let i = 0; i < data.messages.length; i++) {
      const message = createHtmlElement("div", "message");
      const avatar = createHtmlElement("img", "message-avatar") as HTMLImageElement;
      avatar.src = data.messages[i].avatarPath;
      const messageBlock = createHtmlElement("div", "message-block");
      const nameAndMessageWrapper = createHtmlElement("div", "message-and-name");
      const name = createHtmlElement("span", "chat-username");
      const textOfMessage = createHtmlElement("span", "chat-user-text");
      const time = createHtmlElement("span", "chat-time");
      time.textContent = `${data.messages[i].date}`;
      name.textContent = `${data.messages[i].name}`;
      textOfMessage.textContent = `${data.messages[i].text}`;
      nameAndMessageWrapper.append(name, time);
      messageBlock.append(nameAndMessageWrapper, textOfMessage);
      message.append(avatar, messageBlock);
      chatMessagesContainer.append(message);
      const checkName = document.querySelector(".text-name-menu-role")?.textContent;
      if (data.messages[i].name == checkName) {
        message.setAttribute("style", "flex-direction:row-reverse");
        messageBlock.setAttribute("style", "align-items:flex-end");
        nameAndMessageWrapper.setAttribute("style", "flex-direction:row-reverse");
      }
    }
    if (data.messages.length < 1) {
      const p = createHtmlElement("p", "no-message");
      p.textContent = "No messages yet";
      chatMessagesContainer.append(p);
    }
    chatMessagesContainer.scrollTo(0, chatMessagesContainer.scrollHeight);
  }
  //

  const emojiContainer = createHtmlElement("div", "emoji-container");
  emojiBtn.addEventListener("mousemove", () => {
    emojiContainer.classList.add("visible");
  });
  currentMessageArea.addEventListener("mouseleave", () => {
    emojiContainer.classList.remove("visible");
  });
  const emojies = [
    "😀",
    "😁",
    "😊",
    "🙂",
    "😚",
    "😘",
    "😎",
    "😏",
    "🙄",
    "😠",
    "😔",
    "🙁",
    "😭",
    "🤢",
    "😨",
    "😺",
    "😸",
    "😻",
    "😼",
    "👍",
    "👀",
    "❤",
    "🌝",
    "🌈",
    "👆",
  ];
  currentMessageArea.append(messageArea, emojiBtn, emojiContainer, sendMessage);
  chatContainer.append(titleContainer, chatMessagesContainer, currentMessageArea);
  for (let i = 0; i < emojies.length; i++) {
    const p = createHtmlElement("p", "emoji-item");
    p.textContent = emojies[i];
    emojiContainer.append(p);
    p.addEventListener("click", () => {
      messageArea.value = `${messageArea.value + p.textContent}`;
    });
  }

  //
  function renderMessages1(data: OrderPreview) {
    for (let i = 0; i < data.messages.length; i++) {
      const message = createHtmlElement("div", "message");
      const avatar = createHtmlElement("img", "message-avatar") as HTMLImageElement;
      avatar.src = data.messages[i].avatarPath;
      const messageBlock = createHtmlElement("div", "message-block");
      const nameAndMessageWrapper = createHtmlElement("div", "message-and-name");
      const name = createHtmlElement("span", "chat-username");
      const textOfMessage = createHtmlElement("span", "chat-user-text");
      const time = createHtmlElement("span", "chat-time");
      time.textContent = `${data.messages[i].date}`;
      name.textContent = `${data.messages[i].name}`;
      textOfMessage.textContent = `${data.messages[i].text}`;
      nameAndMessageWrapper.append(name, time);
      messageBlock.append(nameAndMessageWrapper, textOfMessage);
      message.append(avatar, messageBlock);
      chatMessagesContainer.append(message);
      const checkName = document.querySelector(".text-name-menu-role")?.textContent;
      if (data.messages[i].name == checkName) {
        message.setAttribute("style", "flex-direction:row-reverse");
        messageBlock.setAttribute("style", "align-items:flex-end");
        nameAndMessageWrapper.setAttribute("style", "flex-direction:row-reverse");
      }
    }
    if (data.messages.length < 1) {
      const p = createHtmlElement("p", "no-message");
      p.textContent = "No messages yet";
      chatMessagesContainer.append(p);
    }
  }

  fetch(`https://rs-clone-api-production-3ab8.up.railway.app/auth/user`, {
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
    .then(() => {
      renderMessages(order);
    });

  const interval = setInterval(() => {
    fetch(`https://rs-clone-api-production-3ab8.up.railway.app/order/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        numberOfOrder: order.numberOfOrder,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        chatMessagesContainer.innerHTML = "";
        renderMessages1(data);
      });
  }, 5000);
  window.addEventListener("popstate", () => {
    clearInterval(interval);
  });
  return chatContainer;
};
