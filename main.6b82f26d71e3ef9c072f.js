(()=>{"use strict";function e(e,t,n,i){const a=document.createElement(e);return t&&(a.className=t),n&&(a.id=n),i&&(a.innerText=i),a}function t(){const t=document.querySelector(".main");if(t){t.innerHTML="";const n=e("div","","","PETS/ADD");return null==t?void 0:t.append(n)}}const n=[{src:"https://petsy.pl/_next/image/?url=https%3A%2F%2Fpetsy-storage.storage.googleapis.com%2Fusers%2F61%2F6rhNADAhFm9Q_440x440.jpg&w=1080&q=100",firstName:"Anna",lastName:"Dziurzynska",role:"Professional petsitter, Minsk",review:"My dog spent one night at Ania's, came back very satisfied. We had contact all the time, very professional approach. I highly recommend, I myself will definitely stay in touch with Ania when I need care for my Dollar :).",reviewOwner:"Aleksandra - Owner"},{src:"https://storage.googleapis.com/petsy-storage/users/90/bSlU-AqjPlNB_440x440.jpeg",firstName:"Beata",lastName:"Smolik",role:"Professional petsitter, Grodno",review:"A walk on the 6th! Beata is a super cool petsitter, and what turned out to be an expert on Goldens :)) She took our scrapyard for a walk, at first he panicked, but she managed bravely and the dog came back happy. Evidently he liked her, I recommend to everyone",reviewOwner:"Margaret - Owner"},{src:"https://petsy.pl/_next/image/?url=https%3A%2F%2Fpetsy-storage.storage.googleapis.com%2Fusers%2F35%2FV5rD7Orc9Q4N_440x440.JPG&w=1080&q=100",firstName:"Julia",lastName:"Guzowska",role:"Professional petsitter, Minsk",review:"A walk for a high-five! Julia has a hand with animals. The dog came back run out, happy, relaxed, went without screeching (which doesn't happen to him), then for three more days on the walk he told me that at Julia's was better and I should call for good advice :).",reviewOwner:"Michail - Owner"},{src:"https://petsy-storage.storage.googleapis.com/users/71/poEtzAoU-ZIE_440x440.JPG",firstName:"Julia",lastName:"Grzelak",role:"Professional petsitter, Brest",review:"I have no reservations at all. Great care and fantastic contact, and most of all the dog happy :) We will definitely use Julia's help more than once!",reviewOwner:"Magdalena - Owner"},{src:"https://storage.googleapis.com/petsy-storage/users/268/3BuWQE7K0ATb_440x440.JPG",firstName:"Dominik",lastName:"Bylinski",role:"Professional petsitter, Vitebsk",review:"Dominik is highly recommendable as possible. He is responsible, has an approach to animals and what was important to me - he lives in a beautiful and peaceful area. We have established a permanent cooperation and this is probably the best recommendation.",reviewOwner:"Kamilla - Owner"},{src:"https://petsy-storage.storage.googleapis.com/users/10/nF7q1B7XWDYQ_440x440.jpeg",firstName:"Olga",lastName:"Pietruszewska",role:"Professional petsitter, Minsk",review:"Thank you very much for the super care for a whole week of our unruly dog ( young golden ). In addition, Ms. Olga practiced paging which we actually notice on walks. Super! We heartily recommend.",reviewOwner:"Aleksandra - Owner"}],i=e("section","section-common-petsitters");function a(t,n,i,a){const o=e("div","petsit-main-page-block");a&&o.classList.add(a);const r=e("div","petsit-text-block");o.append(r);const p=e("h5","little-title-petsit-block","","PETSY");r.append(p);const c=e("h2","petsit-title-block","",t);r.append(c);const l=e("div","common-text-petsit-block","",n);r.append(l);const d=s();r.append(d);const m=e("div","block-box-img-petsit-main");o.append(m);const u=e("img","img-petsit-block");return m.append(u),u instanceof HTMLImageElement&&(u.src=i,u.alt="people with pet"),o}function s(){const t=e("a","btn-create-account","","Create account");return t instanceof HTMLAnchorElement&&(t.href="/auth/register/petsitter"),t}function o(t){const i=e("div","slider-petsit-item"),a=e("div","img-btn-slider-container");i.append(a);const s=e("div","img-slider-item-container"),o=e("img","img-petsit-slider-item");o instanceof HTMLImageElement&&(o.src=n[t].src,o.alt=`Photo of ${n[t].lastName} ${n[t].firstName}`),a.append(s),s.append(o);const r=function(){const t=e("a","btn-view-profile","","View profile");return t instanceof HTMLAnchorElement&&(t.href="/p/"),t}();a.append(r);const p=e("div","text-box-slider-item");i.append(p);const c=e("h4","name-petsit-slider","",`${n[t].firstName}`);p.append(c);const l=e("div","role-petsit-slider","",`${n[t].role}`);p.append(l);const d=e("div","stars-slider-container","","★★★★★");p.append(d);const m=e("div","review-slider-item","",`${n[t].review}`);p.append(m);const u=e("div","review-owner-text","",`${n[t].reviewOwner}`);return p.append(u),i}function r(){const t=document.querySelector(".main");if(t)return t.innerHTML="",function(){i.innerHTML="";const t=e("div","top-block-wrapper"),r=e("section","top-block-petsitter");i.append(t),t.append(r);const p=e("div","top-text-petsit-container");r.append(p);const c=e("h2","title-top-petsit-block","","Become a petsitter and earn money doing what you love!");p.append(c);const l=e("div","top-text-petsit","","Petsy is a platform for people who love animals. We support You and help you develop Your business. Become a professional petsitter together with us!");c.after(l);const d=s();l.after(d);const m=e("div","top-image-petsit-box");r.append(m);const u=e("img","img-top-petsit");m.append(u),u instanceof HTMLImageElement&&(u.src="https://petsy.pl/_next/image/?url=%2Fimages%2Flandings%2Fpetsitter_hero.jpg&w=1920&q=75",u.alt="girl and dog");const g=a("Your business card","Petsy's pet sitter profile is your public business card and will help you establish credibility as a pet sitter in the eyes of pet owners.","https://petsy.pl/_next/image/?url=%2Fimages%2Flandings%2Fpetsitter_profile.jpg&w=1920&q=75","block-revert");i.append(g);const h=a("Transparent billing rules","Petsy is completely free for owners and for caregivers. We only make a living from commission on orders, which we then use to develop the portal and promote the petsitter profession, which will translate into the number of orders you acquire.","https://petsy.pl/_next/image/?url=%2Fimages%2Flandings%2Fpetsitter_accounting.jpg&w=1920&q=75");i.append(h);const f=a("Business support","We do everything to help you grow your business. Extensive panel, training, simple registration and verification. Take care of your pets and we'll take care of everything around you!","https://petsy.pl/_next/image/?url=%2Fimages%2Flandings%2Fpetsitter_support.jpg&w=1920&q=75","block-revert");i.append(f);const w=function(){let t=0;const i=e("section","slider-petsit-container"),a=e("div","slider-petsit-wrapper");i.append(a);const s=e("div","slider-item-wrapper");a.append(s),setInterval((function(){t>n.length-1&&(t=0),s.innerHTML="";const e=o(t);s.append(e),t+=1}),5e3);const r=e("div","pagination-petsit-slider-container");a.append(r);const p=e("div","pagination-btn-petsit","","🠔");r.append(p),p.addEventListener("click",(()=>{t-=1,t<0&&(t=n.length-1),s.innerHTML="";const e=o(t);s.append(e)}));const c=e("div","pagination-btn-petsit","","🠖");return r.append(c),c.addEventListener("click",(()=>{t+=1,t>n.length-1&&(t=0),s.innerHTML="";const e=o(t);s.append(e)})),i}();i.append(w);const v=function(){const t=e("section","section-contact-petsit-main-page"),n=e("div","contact-petsitter-wrapper-main-page");t.append(n);const i=e("div","input-text-contact-petsit-container");n.append(i);const a=e("h2","petsit-title-block","","Let's stay in touch!");i.append(a);const s=e("div","common-text-petsit-block","","Sign up and receive once a month tips, discounts and news straight from us");a.after(s);const o=e("div","input-contact-petsit-main-wrapper");s.after(o);const r=e("input","input-contact-email");o.append(r);const p=e("button","btn-sign-up-contact","","Subscribe");r.after(p);const c=e("p","email-text-error-petsit-contact-main","","Incorrect email format");r.after(c),r instanceof HTMLInputElement&&(r.type="email",r.placeholder="e-mail",r.setAttribute("required",""),p.addEventListener("click",(()=>{r.checkValidity()||c.classList.contains("active")?r.checkValidity()&&c.classList.contains("active")&&(c.classList.remove("active"),r.value=""):c.classList.add("active")})));const l=e("div","img-contact-main-petsit-wrapper");n.append(l);const d=e("img","img-contact-main-petsit");return l.append(d),d instanceof HTMLImageElement&&(d.src="https://petsy.pl/_next/image/?url=%2Fimages%2Flandings%2Fpetsitter_newsletter.jpg&w=1200&q=75",d.alt="cat with gadget"),t}();i.append(v)}(),null==t?void 0:t.append(i)}const p=e("section","login-section");function c(){return document.body.innerHTML="",function(){p.innerHTML="";const t=e("div","login-layout");p.append(t);const n=e("div","login-block-wrapper");t.append(n);const i=e("h1","login-title","","Petsy");n.append(i);const a=e("div","text-after-title-login","","Welcome back!");n.append(a);const s=e("input","input-login-email input-login"),o=e("input","input-login-password input-login");n.append(s),n.append(o);const r=e("p","email-text-error-login","","Incorrect email format");s.after(r);const c=e("p","password-text-error-login","","Enter your password");o.after(c);const l=e("button","btn-login","","Log in");l instanceof HTMLButtonElement&&(l.type="submit"),n.append(l),s instanceof HTMLInputElement&&(s.type="email",s.placeholder="E-mail",s.setAttribute("required",""),l.addEventListener("click",(()=>{s.checkValidity()||r.classList.contains("active")?s.checkValidity()&&r.classList.contains("active")&&(r.classList.remove("active"),s.value=""):r.classList.add("active")}))),o instanceof HTMLInputElement&&(o.type="text",o.setAttribute("required",""),o.placeholder="Password",l.addEventListener("click",(()=>{o.checkValidity()||c.classList.contains("active")?o.checkValidity()&&c.classList.contains("active")&&c.classList.remove("active"):c.classList.add("active")})));const d=e("div","registration-text-login");d.innerHTML='<p>Would you like to join Petsy? <a class = "link-for-registr-in-login" href = "/auth/register/owner">Create an account</a></p>',n.append(d)}(),document.body.append(p)}function l(){const t=document.querySelector(".main");if(t){t.innerHTML="";const n=e("div","","","SEARCH");return null==t?void 0:t.append(n)}}function d(){const t=document.querySelector(".main");if(t){t.innerHTML="";const n=e("div","","","MAIN");return null==t?void 0:t.append(n)}}function m(){const t=document.querySelector(".main");if(t){t.innerHTML="";const n=e("div","","","AUTH/REG/PETSIT");return null==t?void 0:t.append(n)}}const u=e("section","registration-section");function g(){const t=document.querySelector(".main");if(t){console.log(window.location.pathname);const n=window.location.pathname.split("/")[3];return t.innerHTML="",function(t){u.innerHTML="";const n=e("div","registration-block-wrapper");u.append(n);const i=e("div","img-registration-wrapper"),a=e("img","img-registration");a instanceof HTMLImageElement&&(a.src="owner"===t?"https://petsy.pl/_next/image/?url=%2Fimages%2Fregister_owner.jpg&w=1920&q=75":"https://petsy.pl/_next/image/?url=%2Fimages%2Fregister_petsitter.jpg&w=1920&q=75"),n.append(i),i.append(a);const s=e("div","block-inputs-text-registration");n.append(s);const o=e("a","link-on-main-from-registration","","Back to home page");s.append(o);const r=e("h1","text-for-registration-role");r.innerHTML="owner"===t?"Time for you and the best care for your pet":"Become a petsitter. Earn by spending time among animals",s.append(r);const p=e("div","text-registration-as","","Register as:");s.append(p);const c=e("div","block-link-role-registration");s.append(c);const l=e("a","","","Pet owner");l.className="owner"===t?"link-owner-registration active":"link-owner-registration",c.append(l);const d=e("a","link-petsitter-registration","","Petsitter");d.className="owner"===t?"link-petsitter-registration":"link-petsitter-registration active",c.append(d),d instanceof HTMLAnchorElement&&l instanceof HTMLAnchorElement&&o instanceof HTMLAnchorElement&&(o.href="/",d.href="/auth/register/petsitter",l.href="/auth/register/owner");const m=e("input","input-place-of-live input-registration","city");s.append(m),m instanceof HTMLInputElement&&(m.type="text",m.placeholder="City");const g=e("div","block-names-inputs");s.append(g);const h=e("input","input-firstname input-registration","firstname");g.append(h),h instanceof HTMLInputElement&&(h.type="text",h.placeholder="Firstname");const f=e("input","input-lastname input-registration","lastname");g.append(f),f instanceof HTMLInputElement&&(f.type="text",f.placeholder="Lastname");const w=e("input","input-phone-number input-registration","phone-number");s.append(w),w instanceof HTMLInputElement&&(w.type="text",w.placeholder="Phone number");const v=e("input","input-email-registration input-registration","email");s.append(v),v instanceof HTMLInputElement&&(v.type="email",v.placeholder="E-mail");const y=e("input","input-password-registration input-registration","password");s.append(y),y instanceof HTMLInputElement&&(y.type="text",y.placeholder="Password");const b=e("input","input-repeat-password-registration input-registration","repeat-password");s.append(b),b instanceof HTMLInputElement&&(b.type="text",b.placeholder="Repeat password");const k=e("button","btn-registration","","Register as a pet owner");"owner"===t?(k.innerHTML="Register as a pet owner",k.id="registration-pet-owner"):(k.innerHTML="Register as a petsitter",k.id="registration-petsitter"),k.addEventListener("click",(()=>{fetch("http://localhost:5000/auth/register/owner",{method:"GET"}).then((e=>e.json())).then((e=>{console.log(e)}))})),s.append(k),k instanceof HTMLButtonElement&&(k.type="submit");const L=e("div","text-question-registration");L.innerHTML='<p>Already have an account on Petsy?<a class="link-sign-in-registration" href = "/auth/login">Sign in</a></p>',s.append(L)}(n),null==t?void 0:t.append(u)}}(()=>{const e=[{path:"404",template:m},{path:"/auth/login",template:c},{path:"/auth/register/petsitter",template:g},{path:"/auth/register/owner",template:g},{path:"/petsitter",template:r},{path:"/pets/add",template:t},{path:"/search",template:l},{path:"/",template:d}];function n(e){const{href:t}=e;history.pushState("","",t),window.dispatchEvent(new Event("popstate"))}document.addEventListener("click",(e=>{e.target instanceof HTMLAnchorElement&&(e.preventDefault(),n(e.target));const{parentElement:t}=e.target;t instanceof HTMLAnchorElement&&(e.preventDefault(),n(t))}));const i=()=>{const t=e.find((e=>window.location.pathname.includes(e.path)));t?t.template():e[0].template()};window.addEventListener("popstate",i),window.addEventListener("DOMContentLoaded",i)})()})();