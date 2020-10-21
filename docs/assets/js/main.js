"use strict";const palette=document.querySelector(".js-palette"),colorPalette=[0,1,2,3];function paletteChange(){function e(e){for(let t in colorPalette){const o=colorPalette[t];palette.classList.remove("palette"+o);const r=document.querySelector(".js-color"+o);e.currentTarget.classList.contains("js-col"+o)&&(r.checked=!0,palette.classList.add("palette"+o),localStorage.setItem("palette",JSON.stringify(t)))}}for(let t of colorPalette){document.querySelector(".js-col"+t).addEventListener("click",e)}}const fr=new FileReader,uploadBtn=document.querySelector(".js__profile-trigger"),fileField=document.querySelector(".js__profile-upload-btn"),profileImage=document.querySelector(".js__profile-image"),profilePreview=document.querySelector(".js__profile-preview");function getImage(e){const t=e.currentTarget.files[0];fr.addEventListener("load",writeImage),fr.readAsDataURL(t)}function writeImage(){profileImage.style.backgroundImage=`url(${fr.result})`,fileField.removeAttribute("type","file"),fileField.setAttribute("type","file"),localStorage.setItem("photo",fr.result),fillImage()}function fillImage(){profilePreview.style.backgroundImage=profileImage.style.backgroundImage}function fakeFileClick(){fileField.click()}uploadBtn.addEventListener("click",fakeFileClick),fileField.addEventListener("change",getImage);const formData={name:{placeholder:"Catrina de Guadalupe",property:"innerHTML",prefix:"",remove:!1},job:{placeholder:"Calavera Garbancera",property:"innerHTML",prefix:"",remove:!1},phone:{placeholder:"1111111111",property:"href",prefix:"tel:",remove:!1},email:{placeholder:"catrina.guadalupe@gmail.com",property:"href",prefix:"mailto:",remove:!1},linkedin:{placeholder:"/catrina-de-guadalupe",property:"href",prefix:"https://linkedin.es/in/",remove:!0},github:{placeholder:"@catrina-de-guadalupe",property:"href",prefix:"https://github.com/",remove:!0}};function fillCard(){for(let e in formData){const t=document.querySelector(".js-intro-"+e),o=t.id;let r=t.value;const a=document.querySelector(".js-preview-"+o),n=formData[o].property,l=formData[o].placeholder,c=formData[o].prefix,i=formData[o].remove;""===r?a[n]=l:(!0===i&&(r=r.replace(c,""),r=r.replace("@",""),r=r.replace("/","")),a[n]=c+r)}}function setDataInLocalStorage(){for(let e in formData){let t=document.querySelector(".js-intro-"+e).value;localStorage.setItem(e,JSON.stringify(t))}}function getDataFromLocalStorage(){for(let e in formData){const t=JSON.parse(localStorage.getItem(e));document.querySelector(".js-intro-"+e).value=t}const e=JSON.parse(localStorage.getItem("palette"));document.querySelector(".js-palette").classList.add("palette"+e);const t=localStorage.getItem("photo");document.querySelector(".js__profile-image").style.backgroundImage=`url(${t})`}function updateCard(){fillCard(),fillImage(),paletteChange(),setDataInLocalStorage()}for(let e in formData){document.querySelector(".js-intro-"+e).addEventListener("keyup",updateCard)}getDataFromLocalStorage(),updateCard();const buttonArrowDesign=document.querySelector(".js-form__box__button--design"),buttonArrowFill=document.querySelector(".js-form__box__button--fill"),buttonArrowShare=document.querySelector(".js-form__box__button--share"),formBoxDesign=document.querySelector(".form__color--container"),formBoxFill=document.querySelector(".form__data"),formBoxShare=document.querySelector(".form__share--container");function handleButtonArrowClick(e){e.currentTarget.classList.toggle("btn-rotate"),!0===buttonArrowDesign.classList.contains("btn-rotate")?(formBoxDesign.style.height="200px",formBoxDesign.style.opacity="1"):!1===buttonArrowDesign.classList.contains("btn-rotate")&&(formBoxDesign.style.height="0",formBoxDesign.style.opacity="0"),!0===buttonArrowFill.classList.contains("btn-rotate")?(formBoxFill.style.height="556px",formBoxFill.style.opacity="1"):!1===buttonArrowFill.classList.contains("btn-rotate")&&(formBoxFill.style.height="0",formBoxFill.style.opacity="0"),!0===buttonArrowShare.classList.contains("btn-rotate")?(formBoxShare.style.height="110px",formBoxShare.style.opacity="1"):!1===buttonArrowShare.classList.contains("btn-rotate")&&(formBoxShare.style.height="0",formBoxShare.style.opacity="0"),e.preventDefault()}buttonArrowDesign.addEventListener("click",handleButtonArrowClick),buttonArrowFill.addEventListener("click",handleButtonArrowClick),buttonArrowShare.addEventListener("click",handleButtonArrowClick);const buttonSubmit=document.querySelector(".js-form__share--button");function handleButtonSubmit(e){if(buttonSubmit.classList.add("change-color"),console.log("change color"),buttonSubmit.classList.contains("change-color")){formBoxShare.style.height="250px";document.querySelector(".form__share--message").classList.add("js-show-form__share--message")}sendRequest(),showURL(!0),createTwitterLink(!0),e.preventDefault()}buttonSubmit.addEventListener("click",handleButtonSubmit);const name=document.querySelector(".js-name"),reset=document.querySelector(".js-reset"),job=document.querySelector(".js-job"),introMail=document.querySelector(".js-email"),prevMail=document.querySelector(".js-preview-email"),resetButton1={name:"Nombre Apellido",job:"Front-end developer"},paletteReset=document.querySelector(".js-palette");function changeName(){for(let e in formData){document.querySelector(".js-intro-"+e).value=""}profileImage.style.backgroundImage="",updateCard(),paletteChange()}function sendRequest(e){fetch("https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/",{method:"POST",body:JSON.stringify(localStorage),headers:{"content-type":"application/json"}}).then((function(e){return e.json()})).then((function(e){showURL(e)})).catch((function(e){console.log(e)}))}function showURL(e){const t=document.querySelector(".js-card-link");!0===e.success?t.innerHTML="<a href="+e.cardURL+' target="_blank">'+e.cardURL+"</a>":t.innerHTML="ERROR:"+e.error}function createTwitterLink(e){const t=document.querySelector(".js-twitter"),o=encodeURIComponent("¡He creado mi tarjeta con Catrina's profile cards!"),r=e.cardURL;t.href=`https://twitter.com/intent/tweet?text=${o}&url=${r}`}reset.addEventListener("click",changeName);