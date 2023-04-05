function X(){import.meta.url,import("_").catch(()=>1);async function*e(){}}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))c(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&c(d)}).observe(document,{childList:!0,subtree:!0});function r(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(n){if(n.ep)return;n.ep=!0;const s=r(n);fetch(n.href,s)}})();let o,l=0,a=4,i=4,g;const u=document.getElementById("board"),D=document.querySelector(".score"),T=document.querySelector(".currentScore"),q=document.querySelector(".record"),x=document.querySelector(".scoreRecord"),w=document.querySelector(".alert"),E=document.querySelector(".warning"),A=document.querySelector(".ok"),B=document.querySelector(".restart"),M=function(){I(),v(),v(),f()};function I(){o=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];for(let e=0;e<a;e++)for(let t=0;t<i;t++){let r=document.createElement("div");r.id=e.toString()+"-"+t.toString();let c=o[e][t];m(r,c),document.getElementById("board").append(r)}localStorage.getItem("scoreRecord")||localStorage.setItem("scoreRecord",0)}function R(){Array.from(document.getElementById("board").children).forEach(e=>{e.remove()}),l=0}let y=!0;function f(){window.addEventListener("keyup",P,{once:!0}),u.classList.contains("inactive")||window.addEventListener("touchstart",L,{once:!0,passive:!1})}function P(e){S(e.key)}function S(e){switch(e){case"ArrowLeft":O();break;case"ArrowRight":k();break;case"ArrowUp":N();break;case"ArrowDown":_();break;default:f();return}v(),document.querySelector(".score").innerText=l,l%2048===0&&l!==0?(D.style.color="lightgreen",y===!0&&(w.classList.remove("hidden"),u.classList.add("inactive"),T.innerText=l),y=!1,A.addEventListener("click",t=>{t.preventDefault(),w.classList.add("hidden"),u.classList.remove("inactive"),window.addEventListener("touchstart",L,{once:!0,passive:!1})})):y=!0,f()}function L(e){e.preventDefault();let t=e.changedTouches[0],r=new Date;window.addEventListener("touchend",c=>{c.preventDefault();let n=c.changedTouches[0];if(new Date-r>1e3){f();return}let s=n.pageX-t.pageX,d=n.pageY-t.pageY;Math.abs(s)>=55?S(s>0?"ArrowRight":"ArrowLeft"):Math.abs(d)>=55&&S(d>0?"ArrowDown":"ArrowUp"),f()},{once:!0})}function m(e,t){if(e.innerText="",e.classList.value="",e.classList.add("tile"),t>0){const r=100-Math.log2(t)*7;e.innerText=t.toString(),e.classList.add("colored"),e.style.setProperty("--bg-ligthness",`${r}%`),e.style.setProperty("--text-ligthness",`${r<50?90:10}%`)}}function b(e){return e.filter(t=>t!==0)}function p(e){e=b(e);for(let t=0;t<e.length-1;t++)e[t]===e[t+1]&&(e[t]*=2,e[t+1]=0,l+=e[t]);for(e=b(e);e.length<i;)e.push(0);return e}function O(){for(let e=0;e<a;e++){let t=o[e];t=p(t),o[e]=t;for(let r=0;r<i;r++){let c=document.getElementById(e.toString()+"-"+r.toString()),n=o[e][r];m(c,n)}}}function k(){for(let e=0;e<a;e++){let t=o[e];t.reverse(),t=p(t),o[e]=t.reverse();for(let r=0;r<i;r++){let c=document.getElementById(e.toString()+"-"+r.toString()),n=o[e][r];m(c,n)}}}function N(){for(let e=0;e<i;e++){let t=[o[0][e],o[1][e],o[2][e],o[3][e]];t=p(t);for(let r=0;r<a;r++){o[r][e]=t[r];let c=document.getElementById(r.toString()+"-"+e.toString()),n=o[r][e];m(c,n)}}}function _(){for(let e=0;e<i;e++){let t=[o[0][e],o[1][e],o[2][e],o[3][e]];t.reverse(),t=p(t),t.reverse();for(let r=0;r<a;r++){o[r][e]=t[r];let c=document.getElementById(r.toString()+"-"+e.toString()),n=o[r][e];m(c,n)}}}let h=0;function U(){for(let e=0;e<a;e++)for(let t=0;t<i;t++)if(o[e][t]===0)return h=0,!0;return h+=1,h===1&&(g=l,E.classList.remove("hidden"),u.classList.add("inactive"),B.addEventListener("click",e=>{e.preventDefault(),+localStorage.getItem("scoreRecord")<=g&&(x.innerText=g,localStorage.setItem("scoreRecord",g)),E.classList.add("hidden"),u.classList.remove("inactive"),window.addEventListener("touchstart",L,{once:!0,passive:!1}),q.classList.remove("hidden"),h=0,document.querySelector(".score").innerText=0,R(),I()})),!1}function v(){if(!U())return;let e=!1;for(;!e;){let t=Math.floor(Math.random()*a),r=Math.floor(Math.random()*i);if(o[t][r]===0){o[t][r]=2;let c=document.getElementById(t.toString()+"-"+r.toString());c.innerText="2",c.classList.add("colored"),c.style.setProperty("--bg-ligthness","90%"),c.style.setProperty("--text-ligthness","10%"),e=!0}}}window.addEventListener("DOMContentLoaded",()=>{M()});export{X as __vite_legacy_guard};
