import { createElementWithClass } from "./utils";

export const test = () => {
  const div = createElementWithClass("div", "container");
  div.textContent = "Rs clone";
  document.body.append(div);
};
