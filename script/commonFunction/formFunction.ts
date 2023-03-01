export function handleFormAfterSubmit(event: Event, formName: HTMLFormElement) {
  event.preventDefault();
  getDataForm(formName);
}

function getDataForm(formName: HTMLFormElement) {
  const data = new FormData(formName);
  return data;
}
