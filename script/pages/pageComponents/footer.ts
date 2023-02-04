import { createHtmlElement } from "../../utils";

export function footerFun(tagParent: HTMLElement): void {
    const footer = createHtmlElement("footer", "footer wrapper");
    const blocks = createHtmlElement("div", "foot");

    const a0 = createHtmlElement ('a')  as HTMLAnchorElement; 
    a0.href = "https://rs.school/js/";
    const logoRS = createHtmlElement("div", "logoRS");
    const imgRS = new Image();
    imgRS.src = "img/rs_school_js.svg";
    const githubs = createHtmlElement("div", "githubs");

    const a1 = createHtmlElement ('a')  as HTMLAnchorElement; 
    a1.href = "https://github.com/hannarim-23";
    const github1 = new Image(); github1.src = "img/github_m.svg";

    const a2 = createHtmlElement ('a')  as HTMLAnchorElement; 
    a2.href = "https://github.com/MikhailStn";
    const github2 = new Image(); github2.src = "img/github_w.svg";

    const a3 = createHtmlElement ('a')  as HTMLAnchorElement; 
    a3.href = "https://github.com/lisadobruk";
    const github3 = new Image(); github3.src = "img/github_m.svg";

    tagParent.append(footer);
    footer.append(blocks);
    blocks.append(logoRS);
    blocks.append(githubs);
    logoRS.append(a0);
    a0.append(imgRS);
    githubs.append(a1);
    githubs.append(a2);
    githubs.append(a3);
    a1.append(github1);
    a2.append(github2);
    a3.append(github3);
}