import{n as f,s as _}from"./index.ac6d7a03.js";const e=[];function d(o,u=f){let i;const n=new Set;function r(t){if(_(o,t)&&(o=t,i)){const c=!e.length;for(const s of n)s[1](),e.push(s,o);if(c){for(let s=0;s<e.length;s+=2)e[s][0](e[s+1]);e.length=0}}}function a(t){r(t(o))}function p(t,c=f){const s=[t,c];return n.add(s),n.size===1&&(i=u(r)||f),t(o),()=>{n.delete(s),n.size===0&&i&&(i(),i=null)}}return{set:r,update:a,subscribe:p}}var b;const h=((b=globalThis.__sveltekit_5pc1f8)==null?void 0:b.base)??"/slick-portfolio-svelte";var l;const k=((l=globalThis.__sveltekit_5pc1f8)==null?void 0:l.assets)??h;export{k as a,h as b,d as w};