import { createHtmlElement } from "../../utils";
import { getUser } from "../../commonFunction/getUser";

export async function createMyHomeBlock() {
    const user = await getUser();
    const userInfo = (user).item;
    const basicHomeBlock = createHtmlElement('div', 'basic-info-block');
    const myHomeBlockTitle = createHtmlElement('h3', 'title-photo-profile-block', '', 'Address where you provide services');
    basicHomeBlock.append(myHomeBlockTitle);
    const addressUser = createHtmlElement('div', 'text-service', '', `${userInfo.city}`);
    basicHomeBlock.append(addressUser);
    const titleHome = createHtmlElement('h3', 'title-photo-profile-block', '', 'About my house');
    basicHomeBlock.append(titleHome);
    const textHome1 = createHtmlElement('div', 'text-service', '', 'Describe what conditions your pets will find in your home and what the rules are.');
    basicHomeBlock.append(textHome1);

    const whereLiveField = createHtmlElement('fieldset', 'additional-qualification-block fieldset-my-home where-live-fieldset');
    basicHomeBlock.append(whereLiveField);
    const legendWhereLive = createHtmlElement('legend', 'legend-my-home', '', 'Where you live');
    const divInput1 = createHtmlElement('div', 'div-input-where-live');
    const divInput2 = createHtmlElement('div', 'div-input-where-live');
    const divInput3 = createHtmlElement('div', 'div-input-where-live');
    const divInput4 = createHtmlElement('div', 'div-input-where-live');
    const divInput5 = createHtmlElement('div', 'div-input-where-live');
    whereLiveField.append(legendWhereLive, divInput1, divInput2, divInput3, divInput4, divInput5);

    const inputWhereLive1 = createHtmlElement('input', '', 'apartment-in-a-block-house') as HTMLInputElement;
    inputWhereLive1.type = 'radio';
    inputWhereLive1.name = 'view-house';
    inputWhereLive1.value = 'Apartment in a block/house';
    const lableInputLive1 = createHtmlElement('label', '', '', 'Apartment in a block/house') as HTMLLabelElement;
    lableInputLive1.setAttribute('for', 'apartment-in-a-block-house');
    divInput1.append(inputWhereLive1, lableInputLive1);
    const inputWhereLive2 = createHtmlElement('input', '', 'apartment-with-garden') as HTMLInputElement;
    inputWhereLive2.type = 'radio';
    inputWhereLive2.name = 'view-house';
    inputWhereLive2.value = 'Apartment with garden (first floor)';
    const lableInputLive2 = createHtmlElement('label', '', '', 'Apartment with garden (first floor)') as HTMLLabelElement;
    lableInputLive2.setAttribute('for', 'apartment-with-garden');
    divInput2.append(inputWhereLive2, lableInputLive2);
    const inputWhereLive3 = createHtmlElement('input', '', 'house-with-garden') as HTMLInputElement;
    inputWhereLive3.type = 'radio';
    inputWhereLive3.name = 'view-house';
    inputWhereLive3.value = 'House with garden';
    const lableInputLive3 = createHtmlElement('label', '', '', 'House with garden') as HTMLLabelElement;
    lableInputLive3.setAttribute('for', 'house-with-garden');
    divInput3.append(inputWhereLive3, lableInputLive3);
    const inputWhereLive4 = createHtmlElement('input', '', 'apartment-with-balcony') as HTMLInputElement;
    inputWhereLive4.type = 'radio';
    inputWhereLive4.name = 'view-house';
    inputWhereLive4.value = 'Apartment with balcony';
    const lableInputLive4 = createHtmlElement('label', '', '', 'Apartment with balcony') as HTMLLabelElement;
    lableInputLive4.setAttribute('for', 'apartment-with-balcony');
    divInput4.append(inputWhereLive4, lableInputLive4);
    const inputWhereLive5 = createHtmlElement('input', '', 'house') as HTMLInputElement;
    inputWhereLive5.type = 'radio';
    inputWhereLive5.name = 'view-house';
    inputWhereLive5.value = 'House';
    const lableInputLive5 = createHtmlElement('label', '', '', 'House') as HTMLLabelElement;
    lableInputLive5.setAttribute('for', 'house');
    divInput5.append(inputWhereLive5, lableInputLive5);

    const secondBlockInputs = createHtmlElement('div', 'second-block-inputs-home');
    basicHomeBlock.append(secondBlockInputs);

    const fieldsetConditions = createHtmlElement('fieldset', 'additional-qualification-block fieldset-my-home fieldset-condition-my-home');
    secondBlockInputs.append(fieldsetConditions);
    const legendConditions = createHtmlElement('legend', 'legend-my-home', '', 'Conditions in my home');
    fieldsetConditions.append(legendConditions);
    const inputDiv1 = createDivInputs('checkbox', 'animals-can-sleep-in-the-bed', 'Animals can sleep in the bed', 'Animals can sleep in the bed', 'div-conditions-my-home');
    const inputDiv2 = createDivInputs('checkbox', 'windows-protected-by-mesh', 'Windows protected by mesh', 'Windows protected by mesh', 'div-conditions-my-home');
    const inputDiv3 = createDivInputs('checkbox', 'balcony-secured-with-netting', 'Balcony secured with netting', 'Balcony secured with netting', 'div-conditions-my-home');
    const inputDiv4 = createDivInputs('checkbox', 'no-plants-toxic-to-animals-in-the-house', 'No plants toxic to animals in the house', 'No plants toxic to animals in the house', 'div-conditions-my-home');
    const inputDiv5 = createDivInputs('checkbox', 'the-apartment-has-a-playpen', 'The apartment has a playpen', 'The apartment has a playpen', 'div-conditions-my-home');
    const inputDiv6 = createDivInputs('checkbox', 'the-building-has-an-elevator', 'The building has an elevator', 'The building has an elevator', 'div-conditions-my-home');
    const inputDiv7 = createDivInputs('checkbox', 'no-smoking-inside', 'No smoking inside', 'No smoking inside', 'div-conditions-my-home');
    const inputDiv8 = createDivInputs('checkbox', 'animals-can-climb-on-the-furniture', 'Animals can climb on the furniture (couches, armchairs, etc.).', 'Animals can climb on the furniture (couches, armchairs, etc.).', 'div-conditions-my-home');

    fieldsetConditions.append(inputDiv1, inputDiv2, inputDiv3, inputDiv4, inputDiv5, inputDiv6, inputDiv7, inputDiv8);

    const secondBlockInSecondBlockInputs = createHtmlElement('div', 'second-block-in-second-block-inputs');
    secondBlockInputs.append(secondBlockInSecondBlockInputs);
    const fieldsetConditions2 = createHtmlElement('fieldset', 'additional-qualification-block fieldset-my-home fieldset-second-second-block');
    secondBlockInSecondBlockInputs.append(fieldsetConditions2);
    const legendConditions2 = createHtmlElement('legend', 'legend-my-home', '', 'Other tenants');
    const inputD1 = createDivInputs('checkbox', 'children-live-in-the-house', 'Children live in the house', 'Children live in the house', 'div-my-home');
    const inputD2 = createDivInputs('checkbox', 'there-are-elderly-people-living-in-the-house', 'There are elderly people living in the house', 'There are elderly people living in the house', 'div-my-home');
    const inputD3 = createDivInputs('checkbox', 'women-live-in-the-house', 'Women live in the house', 'Women live in the house', 'div-my-home');
    const inputD4 = createDivInputs('checkbox', 'men-live-in-the-house', 'Men live in the house', 'Men live in the house', 'div-my-home');
    fieldsetConditions2.append(legendConditions2, inputD1, inputD2, inputD3, inputD4);

    const fieldsetConditions3 = createHtmlElement('fieldset', 'additional-qualification-block fieldset-my-home fieldset-second-second-block');
    secondBlockInSecondBlockInputs.append(fieldsetConditions3);
    const legendConditions3 = createHtmlElement('legend', 'legend-my-home', '', 'Other animals');
    const inputDi1 = createDivInputs('checkbox', 'i-own-a-dog', 'I own a dog/dogs', 'I own a dog/dogs', 'div-my-home');
    const inputDi2 = createDivInputs('checkbox', 'i-am-settling-a-cat', 'I am settling a cat/cats', 'I am settling a cat/cats', 'div-my-home');
    const inputDi3 = createDivInputs('checkbox', 'i-own-a-rodent(s)', 'I own a rodent(s)', 'I own a rodent(s)', 'div-my-home');
    const inputDi4 = createDivInputs('checkbox', 'i-own-a-fish', 'I own a fish', 'I own a fish', 'div-my-home');
    const inputDi5 = createDivInputs('checkbox', 'i-own-a-bird', 'I own a bird(s)', 'I own a bird(s)', 'div-my-home');
    fieldsetConditions3.append(legendConditions3, inputDi1, inputDi2, inputDi3, inputDi4, inputDi5);

    const btnSaveMyHome = createHtmlElement('button', 'btn-save-my-home', 'btn-save-my-home', 'Save');
    basicHomeBlock.append(btnSaveMyHome);

    return basicHomeBlock;
}

function createDivInputs(type: string, id: string, name: string, text: string, className?: string) {
    const divInput = createHtmlElement('div', className);
    const input = createHtmlElement('input', '', id) as HTMLInputElement;
    input.type = type;
    input.name = name;
    const label = createHtmlElement('label', '', '', text);
    label.setAttribute('for', id);
    divInput.append(input, label);
    return divInput;
}