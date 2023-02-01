import createHtmlElement from "../script/utils/index";

/*
function blockTitle(): void {

}
*/

export function mainOwner(): void {
  const promo = createHtmlElement("div", "wrapper");
  const promoText = createHtmlElement("div", "promo");

  const head = createHtmlElement("div", "wrapper", ""); //, "", "PROMOTION -10% FOR THE FIRST SERVICE");
  const header = createHtmlElement("header", "header");

  const banner = createHtmlElement("section", "wrapper");
  const header2 = createHtmlElement("div", "");

  document.body.append(promo);
  promo.append(promoText);
  document.body.append(head);
  head.append(header);
  document.body.append(banner);
  banner.append(header2);
}
