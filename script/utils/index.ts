export const createElementWithClass = (elemName: string, ...args: string[]) => {
  const node = document.createElement(elemName);
  node.classList.add(...args);
  return node;
};
