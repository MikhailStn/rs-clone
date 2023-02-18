import { createHtmlElement } from "../../utils";

export const createChat = () => {
  const chatContainer = createHtmlElement("div", "chat-container");
  const titleContainer = createHtmlElement("div", "chat-title");
  titleContainer.textContent = "Chat";
  const currentMessageArea = createHtmlElement("div", "chat-current-message-container");
  const messageArea = createHtmlElement("textarea", "chat-current-message") as HTMLTextAreaElement;
  messageArea.placeholder = "Text here";
  messageArea.minLength = 10;
  messageArea.maxLength = 170;
  const sendMessage = createHtmlElement("button", "chat-send-message-btn");
  const chatMessagesContainer = createHtmlElement("div", "chat-messages-container");
  //
  for (let i = 0; i < 2; i++) {
    const message = createHtmlElement("div", "message");
    const avatar = createHtmlElement("div", "message-avatar");
    const nameAndMessageWrapper = createHtmlElement("div", "message-and-name");
    const name = createHtmlElement("span", "chat-username");
    const textOfMessage = createHtmlElement("span", "chat-user-text");
    name.textContent = `Name Surname${i}`;
    textOfMessage.textContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercita`;
    nameAndMessageWrapper.append(name, textOfMessage);
    message.append(avatar, nameAndMessageWrapper);
    chatMessagesContainer.append(message);
  }
  //
  currentMessageArea.append(messageArea, sendMessage);
  chatContainer.append(titleContainer, chatMessagesContainer, currentMessageArea);
  return chatContainer;
};
