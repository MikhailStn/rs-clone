import { createHtmlElement } from "../utils";
export function createDivInputs(type: string, id: string, name: string, text: string, classNameDiv?: string, classNameInput?: string) {
    const divInput = createHtmlElement('div', classNameDiv);
    const input = createHtmlElement('input', classNameInput, id) as HTMLInputElement;
    input.type = type;
    input.name = name;
    const label = createHtmlElement('label', '', '', text);
    label.setAttribute('for', id);
    divInput.append(input, label);
    return divInput;
}