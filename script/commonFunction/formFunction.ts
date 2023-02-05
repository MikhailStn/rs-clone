export function handleFormAfterSubmit(event: Event, formName: HTMLFormElement) {
    event.preventDefault();
    getDataForm(formName);
  }

function getDataForm(formName: HTMLFormElement) {
    const data = new FormData(formName);
    console.log(Array.from(data.entries()));
    return data;
}