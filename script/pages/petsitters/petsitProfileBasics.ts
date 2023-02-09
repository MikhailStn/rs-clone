import { createHtmlElement } from "../../utils";
import { headerPetsitter } from "../pageComponents/headers";
import { footerFun } from "../pageComponents/footer";
import { createMenu } from "../pageComponents/menu";

const sectionPetsitProfileBasic = createHtmlElement('section', 'section-petsit-profile-basic');

async function renderPetsitProfileBasic(){
    sectionPetsitProfileBasic.innerHTML = '';
    createMenu();
    window.addEventListener('DOMContentLoaded', ()=>{
        const overlay = document.querySelector('.overlay') as HTMLElement;
        console.log(overlay);
    if(overlay) overlay.style.display = 'none';
    })
    const overlay = document.querySelector('.overlay') as HTMLElement;
    if(overlay) overlay.style.display = 'none';

    
}

export default function petsitterProfileBasic() {
    document.body.innerHTML = "";
    headerPetsitter(document.body);
    renderPetsitProfileBasic()
    document.body.append(sectionPetsitProfileBasic);
    footerFun(sectionPetsitProfileBasic);
    return document.body;
  }