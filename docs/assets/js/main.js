"use strict";const colorOption1=document.querySelector(".js-color1"),colorOption2=document.querySelector(".js-color2"),colorOption3=document.querySelector(".js-color3");function colorChange(){const e=document.querySelector(".js-palette");e.classList.remove("palette1"),e.classList.remove("palette2"),e.classList.remove("palette3"),!0===colorOption1.checked&&e.classList.add("palette1"),!0===colorOption2.checked&&e.classList.add("palette2"),!0===colorOption3.checked&&e.classList.add("palette3")}!1===colorOption1.checked&&(colorOption1.checked=!0),colorOption1.addEventListener("click",colorChange),colorOption2.addEventListener("click",colorChange),colorOption3.addEventListener("click",colorChange);const fr=new FileReader,uploadBtn=document.querySelector(".js__profile-trigger"),fileField=document.querySelector(".js__profile-upload-btn"),profileImage=document.querySelector(".js__profile-image"),profilePreview=document.querySelector(".js__profile-preview");function getImage(e){const t=e.currentTarget.files[0];fr.addEventListener("load",writeImage),fr.readAsDataURL(t)}function writeImage(){profileImage.style.backgroundImage=`url(${fr.result})`,profilePreview.style.backgroundImage=`url(${fr.result})`}function fakeFileClick(){fileField.click()}uploadBtn.addEventListener("click",fakeFileClick),fileField.addEventListener("change",getImage);const introName=document.querySelector(".js-intro-name"),prevName=document.querySelector(".js-preview-name");function putName(){prevName.innerHTML=introName.value,""===introName.value&&(prevName.innerHTML="Nombre Apellido"),introName.value.length>introName.maxLength&&(introName.value=introName.value.slice(0,introName.maxLength))}introName.addEventListener("keyup",putName);const introJob=document.querySelector(".js-intro-job"),prevJob=document.querySelector(".js-preview-job");function putJob(){prevJob.innerHTML=introJob.value,""===introJob.value&&(prevJob.innerHTML="Front-end developer")}introJob.addEventListener("keyup",putJob);const introPhone=document.querySelector(".js-intro-phone"),prevPhone=document.querySelector(".js-preview-phone");function putPhone(){prevPhone.href="tel:"+introPhone.value}introPhone.addEventListener("keyup",putPhone);const intMail=document.querySelector(".js-intro-mail"),preMail=document.querySelector(".js-preview-mail");function puMail(){preMail.href="mailto:"+intMail.value}intMail.addEventListener("keyup",puMail);const introLinkedin=document.querySelector(".js-intro-linkedin"),prevLinkedin=document.querySelector(".js-preview-linkedin");function putLinkedin(){prevLinkedin.href=introLinkedin.value}introLinkedin.addEventListener("keyup",putLinkedin);const introGithub=document.querySelector(".js-intro-github"),prevGithub=document.querySelector(".js-preview-github");function putGithub(){prevGithub.href="https://github.com/"+introGithub.value}introGithub.addEventListener("keyup",putGithub);const buttonArrowDesign=document.querySelector(".js-form__box__button--design"),buttonArrowFill=document.querySelector(".js-form__box__button--fill"),buttonArrowShare=document.querySelector(".js-form__box__button--share"),formBoxDesign=document.querySelector(".form__color--container"),formBoxFill=document.querySelector(".form__data"),formBoxShare=document.querySelector(".form__share--container");function handleButtonArrowClick(e){e.currentTarget.classList.toggle("btn-rotate"),console.log("rotate"),!0===buttonArrowDesign.classList.contains("btn-rotate")?(formBoxDesign.style.height="160px",formBoxDesign.style.opacity="1"):!1===buttonArrowDesign.classList.contains("btn-rotate")&&(formBoxDesign.style.height="0",formBoxDesign.style.opacity="0"),!0===buttonArrowFill.classList.contains("btn-rotate")?(formBoxFill.style.height="586px",formBoxFill.style.opacity="1"):!1===buttonArrowFill.classList.contains("btn-rotate")&&(formBoxFill.style.height="0",formBoxFill.style.opacity="0"),!0===buttonArrowShare.classList.contains("btn-rotate")?(formBoxShare.style.height="110px",formBoxShare.style.opacity="1"):!1===buttonArrowShare.classList.contains("btn-rotate")&&(formBoxShare.style.height="0",formBoxShare.style.opacity="0"),e.preventDefault()}buttonArrowDesign.addEventListener("click",handleButtonArrowClick),buttonArrowFill.addEventListener("click",handleButtonArrowClick),buttonArrowShare.addEventListener("click",handleButtonArrowClick);const buttonSubmit=document.querySelector(".js-form__share--button");function handleButtonSubmit(e){if(buttonSubmit.classList.add("change-color"),console.log("change color"),buttonSubmit.classList.contains("change-color")){formBoxShare.style.height="250px";document.querySelector(".form__share--message").classList.add("js-show-form__share--message")}e.preventDefault()}buttonSubmit.addEventListener("click",handleButtonSubmit);const name=document.querySelector(".js-name"),reset=document.querySelector(".js-reset"),job=document.querySelector(".js-job"),introMail=document.querySelector(".js-mail"),prevMail=document.querySelector(".js-preview-mail"),resetButton1={name:"Nombre Apellido",job:"Front-end developer"},paletteReset=document.querySelector(".js-palette");function changeName(){return name.innerHTML=resetButton1.name}function changeJob(){return job.innerHTML=resetButton1.job}function putMail(){prevMail.value="www.google.es"}function colorReset(){const e=document.querySelector(".js-color1");!1===paletteReset.classList.contains("palette1")&&(paletteReset.classList.add("palette1"),paletteReset.classList.remove("palette2"),paletteReset.classList.remove("palette3")),!1===e.checked&&(e.checked=!0),console.log(e)}reset.addEventListener("click",colorReset),reset.addEventListener("click",changeName),reset.addEventListener("click",colorReset),reset.addEventListener("click",changeJob);