export const createElementWithClass = (elemName: string, ...args: string[]) => {
  const node = document.createElement(elemName);
  node.classList.add(...args);
  return node;
};

export function createHtmlElement(tagName: string,
  className?: string,
  id?: string,
  innerText?: string): HTMLElement {
  const element = document.createElement(tagName);
  if (className) element.className = className;
  if (id) element.id = id;
  if (innerText) element.innerText = innerText;
  return element;
}

export function createInputElement(type: string,
  className?: string,
  id?: string,
  innerText?: string): HTMLInputElement {
  const element = document.createElement("input");
  if (type) element.setAttribute("type", `${type}`);
  if (className) element.className = className;
  if (id) element.id = id;
  if (innerText) element.innerText = innerText;
  return element;
}