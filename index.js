import{a as p,S as d,i as c}from"./assets/vendor-BDaiwwc1.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const u="48926224-1e282cfdad2000a03e206ba59",f="https://pixabay.com/api/";async function m(o){try{return(await p.get(f,{params:{key:u,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,t:Date.now()}})).data.hits}catch(r){throw console.error("Помилка запиту:",r),new Error("Не вдалося отримати дані з Pixabay.")}}function y(o,r){if(o.length===0){r.innerHTML="<p>Sorry, there are no images matching your search query. Please try again!</p>";return}const n=o.map(e=>`
      <div class="image-card">
        <a href="${e.largeImageURL}" target="_blank">
          <img src="${e.webformatURL}" alt="${e.tags}">
        </a>
        <div class="info">
          <p>Likes <span>${e.likes}</span></p>
          <p>Views <span>${e.views}</span></p>
          <p>Comments <span>${e.comments}</span></p>
          <p>Downloads <span>${e.downloads}</span></p>
        </div>
      </div>`).join("");r.innerHTML=n,new d(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}document.addEventListener("DOMContentLoaded",()=>{const o=document.getElementById("search-form"),r=document.getElementById("search-input"),n=document.querySelector(".gallery"),s=document.getElementById("loader");function e(){s.style.display="block"}function t(){s.style.display="none"}o.addEventListener("submit",async a=>{a.preventDefault();const l=r.value.trim();if(l===""){c.warning({title:"⚠️ Попередження",message:"Поле пошуку не може бути порожнім!",position:"topRight"});return}n.innerHTML="",e();try{const i=await m(l);if(i.length===0){c.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}y(i,n)}catch{c.error({title:"❌ Помилка",message:"Не вдалося виконати запит. Спробуйте ще раз!",position:"topRight"})}finally{t()}})});
//# sourceMappingURL=index.js.map
