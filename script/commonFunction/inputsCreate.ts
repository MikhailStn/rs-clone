import { createHtmlElement } from "../utils";
export function createDivInputs(type: string, id: string, name: string, text: string, className?: string) {
    const divInput = createHtmlElement('div', className);
    const input = createHtmlElement('input', '', id) as HTMLInputElement;
    input.type = type;
    input.name = name;
    const label = createHtmlElement('label', '', '', text);
    label.setAttribute('for', id);
    divInput.append(input, label);
    return divInput;
}