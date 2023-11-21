import{e as ge,E as ve,g as Q,c as oe}from"../chunks/params.9863b9ce.js";import{S as be,i as xe,s as ke,z as N,a as P,k as E,A as B,c as T,l as w,m as D,h as _,p as I,B as A,b as y,d as k,f as W,g as x,C as j,w as Z,D as $,r as S,u as M,n as $e,v as G,F as ie}from"../chunks/index.ac6d7a03.js";import{C as Ee}from"../chunks/CardLogo.b0f97a1d.js";import{M as we}from"../chunks/MainTitle.425c8d2b.js";import{b as ce}from"../chunks/paths.ddac0b51.js";import{B as De,M as Ie}from"../chunks/Banner.2332609e.js";import{T as Ce}from"../chunks/TabTitle.9c46eced.js";import{C as _e}from"../chunks/Chip.1b905c58.js";import{U as re}from"../chunks/UIcon.caedd93e.js";import{C as Ve}from"../chunks/CardDivider.ae9ddcb9.js";function Pe({params:i}){if(i.slug)return{experience:ge.find(l=>l.slug===i.slug)}}const Ke=Object.freeze(Object.defineProperty({__proto__:null,load:Pe},Symbol.toStringTag,{value:"Module"}));function fe(i,e,l){const t=i.slice();return t[3]=e[l],t}function ue(i,e,l){const t=i.slice();return t[3]=e[l],t}function Te(i){let e,l,t,r,n,f,a,s;l=new De({props:{img:Q(i[0].experience.logo),$$slots:{default:[Be]},$$scope:{ctx:i}}});const u=[je,Ae],o=[];function b(d,v){return d[0].experience.description?0:1}return f=b(i),a=o[f]=u[f](i),{c(){e=E("div"),N(l.$$.fragment),t=P(),r=E("div"),n=E("div"),a.c(),this.h()},l(d){e=w(d,"DIV",{class:!0});var v=D(e);B(l.$$.fragment,v),t=T(v),r=w(v,"DIV",{class:!0});var z=D(r);n=w(z,"DIV",{class:!0});var V=D(n);a.l(V),V.forEach(_),z.forEach(_),v.forEach(_),this.h()},h(){I(n,"class","px-10px m-y-5"),I(r,"class","pt-3 pb-1 overflow-x-hidden w-full"),I(e,"class","flex flex-col items-center overflow-x-hidden")},m(d,v){y(d,e,v),A(l,e,null),$(e,t),$(e,r),$(r,n),o[f].m(n,null),s=!0},p(d,v){const z={};v&1&&(z.img=Q(d[0].experience.logo)),v&257&&(z.$$scope={dirty:v,ctx:d}),l.$set(z);let V=f;f=b(d),f===V?o[f].p(d,v):(Z(),k(o[V],1,1,()=>{o[V]=null}),W(),a=o[f],a?a.p(d,v):(a=o[f]=u[f](d),a.c()),x(a,1),a.m(n,null))},i(d){s||(x(l.$$.fragment,d),x(a),s=!0)},o(d){k(l.$$.fragment,d),k(a),s=!1},d(d){d&&_(e),j(l),o[f].d()}}}function ye(i){let e,l,t,r,n,f;return l=new re({props:{icon:"i-carbon-cube",classes:"text-3.5em"}}),{c(){e=E("div"),N(l.$$.fragment),t=P(),r=E("p"),n=S("Could not load experience data..."),this.h()},l(a){e=w(a,"DIV",{class:!0});var s=D(e);B(l.$$.fragment,s),t=T(s),r=w(s,"P",{class:!0});var u=D(r);n=M(u,"Could not load experience data..."),u.forEach(_),s.forEach(_),this.h()},h(){I(r,"class","font-300"),I(e,"class","p-5 col-center gap-3 m-y-auto text-[var(--accent-text)]")},m(a,s){y(a,e,s),A(l,e,null),$(e,t),$(e,r),$(r,n),f=!0},p:$e,i(a){f||(x(l.$$.fragment,a),f=!0)},o(a){k(l.$$.fragment,a),f=!1},d(a){a&&_(e),j(l)}}}function Se(i){let e=i[0].experience.name+"",l;return{c(){l=S(e)},l(t){l=M(t,e)},m(t,r){y(t,l,r)},p(t,r){r&1&&e!==(e=t[0].experience.name+"")&&G(l,e)},d(t){t&&_(l)}}}function Me(i){let e,l,t,r,n=i[3].label+"",f,a,s;return l=new re({props:{icon:"i-carbon-link"}}),{c(){e=E("div"),N(l.$$.fragment),t=P(),r=E("span"),f=S(n),a=P(),this.h()},l(u){e=w(u,"DIV",{class:!0});var o=D(e);B(l.$$.fragment,o),t=T(o),r=w(o,"SPAN",{});var b=D(r);f=M(b,n),b.forEach(_),o.forEach(_),a=T(u),this.h()},h(){I(e,"class","row-center gap-2")},m(u,o){y(u,e,o),A(l,e,null),$(e,t),$(e,r),$(r,f),y(u,a,o),s=!0},p(u,o){(!s||o&1)&&n!==(n=u[3].label+"")&&G(f,n)},i(u){s||(x(l.$$.fragment,u),s=!0)},o(u){k(l.$$.fragment,u),s=!1},d(u){u&&_(e),j(l),u&&_(a)}}}function pe(i){let e,l;return e=new _e({props:{href:i[3].to,$$slots:{default:[Me]},$$scope:{ctx:i}}}),{c(){N(e.$$.fragment)},l(t){B(e.$$.fragment,t)},m(t,r){A(e,t,r),l=!0},p(t,r){const n={};r&1&&(n.href=t[3].to),r&257&&(n.$$scope={dirty:r,ctx:t}),e.$set(n)},i(t){l||(x(e.$$.fragment,t),l=!0)},o(t){k(e.$$.fragment,t),l=!1},d(t){j(e,t)}}}function Ne(i){let e,l,t,r=i[3].name+"",n,f,a;return e=new Ee({props:{src:Q(i[3].logo),alt:i[3].name,radius:"0px",size:15,classes:"mr-2"}}),{c(){N(e.$$.fragment),l=P(),t=E("span"),n=S(r),f=P(),this.h()},l(s){B(e.$$.fragment,s),l=T(s),t=w(s,"SPAN",{class:!0});var u=D(t);n=M(u,r),u.forEach(_),f=T(s),this.h()},h(){I(t,"class","text-[0.9em]")},m(s,u){A(e,s,u),y(s,l,u),y(s,t,u),$(t,n),y(s,f,u),a=!0},p(s,u){const o={};u&1&&(o.src=Q(s[3].logo)),u&1&&(o.alt=s[3].name),e.$set(o),(!a||u&1)&&r!==(r=s[3].name+"")&&G(n,r)},i(s){a||(x(e.$$.fragment,s),a=!0)},o(s){k(e.$$.fragment,s),a=!1},d(s){j(e,s),s&&_(l),s&&_(t),s&&_(f)}}}function me(i){let e,l;return e=new _e({props:{classes:"inline-flex flex-row items-center justify-center",href:`${ce}/skills/${i[3].slug}`,$$slots:{default:[Ne]},$$scope:{ctx:i}}}),{c(){N(e.$$.fragment)},l(t){B(e.$$.fragment,t)},m(t,r){A(e,t,r),l=!0},p(t,r){const n={};r&1&&(n.href=`${ce}/skills/${t[3].slug}`),r&257&&(n.$$scope={dirty:r,ctx:t}),e.$set(n)},i(t){l||(x(e.$$.fragment,t),l=!0)},o(t){k(e.$$.fragment,t),l=!1},d(t){j(e,t)}}}function Be(i){let e,l,t,r,n,f=i[0].experience.company+"",a,s,u=i[0].experience.location+"",o,b,d=i[0].experience.type+"",v,z,V,J=oe(i[0].experience.period.from,i[0].experience.period.to)+"",K,ee,H,L,te,O,le,X,R;t=new we({props:{$$slots:{default:[Se]},$$scope:{ctx:i}}}),L=new Ve({});let q=i[0].experience.links,h=[];for(let c=0;c<q.length;c+=1)h[c]=pe(ue(i,q,c));const de=c=>k(h[c],1,1,()=>{h[c]=null});let F=i[0].experience.skills,g=[];for(let c=0;c<F.length;c+=1)g[c]=me(fe(i,F,c));const he=c=>k(g[c],1,1,()=>{g[c]=null});return{c(){e=E("div"),l=E("div"),N(t.$$.fragment),r=P(),n=E("p"),a=S(f),s=S(" · "),o=S(u),b=S(" · "),v=S(d),z=P(),V=E("p"),K=S(J),ee=P(),H=E("div"),N(L.$$.fragment),te=P(),O=E("div");for(let c=0;c<h.length;c+=1)h[c].c();le=P(),X=E("div");for(let c=0;c<g.length;c+=1)g[c].c();this.h()},l(c){e=w(c,"DIV",{class:!0});var p=D(e);l=w(p,"DIV",{class:!0});var C=D(l);B(t.$$.fragment,C),C.forEach(_),r=T(p),n=w(p,"P",{class:!0});var m=D(n);a=M(m,f),s=M(m," · "),o=M(m,u),b=M(m," · "),v=M(m,d),m.forEach(_),z=T(p),V=w(p,"P",{class:!0});var U=D(V);K=M(U,J),U.forEach(_),ee=T(p),H=w(p,"DIV",{class:!0});var ne=D(H);B(L.$$.fragment,ne),ne.forEach(_),te=T(p),O=w(p,"DIV",{class:!0});var se=D(O);for(let Y=0;Y<h.length;Y+=1)h[Y].l(se);se.forEach(_),le=T(p),X=w(p,"DIV",{class:!0});var ae=D(X);for(let Y=0;Y<g.length;Y+=1)g[Y].l(ae);ae.forEach(_),p.forEach(_),this.h()},h(){I(l,"class","text-0.9em"),I(n,"class","font-300 text-[var(--tertiary-text)] m-y-2 text-center"),I(V,"class","font-300 text-0.9em text-[var(--tertiary-text)] m-y-2 text-center"),I(H,"class","w-75%"),I(O,"class","row-center flex-wrap text-[0.9em] text-[var(--tertiary-text)] m-b-2"),I(X,"class","row-center flex-wrap m-b-2"),I(e,"class","col-center p-y-20")},m(c,p){y(c,e,p),$(e,l),A(t,l,null),$(e,r),$(e,n),$(n,a),$(n,s),$(n,o),$(n,b),$(n,v),$(e,z),$(e,V),$(V,K),$(e,ee),$(e,H),A(L,H,null),$(e,te),$(e,O);for(let C=0;C<h.length;C+=1)h[C]&&h[C].m(O,null);$(e,le),$(e,X);for(let C=0;C<g.length;C+=1)g[C]&&g[C].m(X,null);R=!0},p(c,p){const C={};if(p&257&&(C.$$scope={dirty:p,ctx:c}),t.$set(C),(!R||p&1)&&f!==(f=c[0].experience.company+"")&&G(a,f),(!R||p&1)&&u!==(u=c[0].experience.location+"")&&G(o,u),(!R||p&1)&&d!==(d=c[0].experience.type+"")&&G(v,d),(!R||p&1)&&J!==(J=oe(c[0].experience.period.from,c[0].experience.period.to)+"")&&G(K,J),p&1){q=c[0].experience.links;let m;for(m=0;m<q.length;m+=1){const U=ue(c,q,m);h[m]?(h[m].p(U,p),x(h[m],1)):(h[m]=pe(U),h[m].c(),x(h[m],1),h[m].m(O,null))}for(Z(),m=q.length;m<h.length;m+=1)de(m);W()}if(p&1){F=c[0].experience.skills;let m;for(m=0;m<F.length;m+=1){const U=fe(c,F,m);g[m]?(g[m].p(U,p),x(g[m],1)):(g[m]=me(U),g[m].c(),x(g[m],1),g[m].m(X,null))}for(Z(),m=F.length;m<g.length;m+=1)he(m);W()}},i(c){if(!R){x(t.$$.fragment,c),x(L.$$.fragment,c);for(let p=0;p<q.length;p+=1)x(h[p]);for(let p=0;p<F.length;p+=1)x(g[p]);R=!0}},o(c){k(t.$$.fragment,c),k(L.$$.fragment,c),h=h.filter(Boolean);for(let p=0;p<h.length;p+=1)k(h[p]);g=g.filter(Boolean);for(let p=0;p<g.length;p+=1)k(g[p]);R=!1},d(c){c&&_(e),j(t),j(L),ie(h,c),ie(g,c)}}}function Ae(i){let e,l,t,r,n,f;return l=new re({props:{icon:"i-carbon-text-font",classes:"text-3.5em"}}),{c(){e=E("div"),N(l.$$.fragment),t=P(),r=E("p"),n=S("No description..."),this.h()},l(a){e=w(a,"DIV",{class:!0});var s=D(e);B(l.$$.fragment,s),t=T(s),r=w(s,"P",{class:!0});var u=D(r);n=M(u,"No description..."),u.forEach(_),s.forEach(_),this.h()},h(){I(r,"class","font-300"),I(e,"class","p-5 col-center gap-3 m-y-auto text-[var(--border)]")},m(a,s){y(a,e,s),A(l,e,null),$(e,t),$(e,r),$(r,n),f=!0},p:$e,i(a){f||(x(l.$$.fragment,a),f=!0)},o(a){k(l.$$.fragment,a),f=!1},d(a){a&&_(e),j(l)}}}function je(i){let e,l;return e=new Ie({props:{content:i[0].experience.description??"This place is yet to be filled..."}}),{c(){N(e.$$.fragment)},l(t){B(e.$$.fragment,t)},m(t,r){A(e,t,r),l=!0},p(t,r){const n={};r&1&&(n.content=t[0].experience.description??"This place is yet to be filled..."),e.$set(n)},i(t){l||(x(e.$$.fragment,t),l=!0)},o(t){k(e.$$.fragment,t),l=!1},d(t){j(e,t)}}}function ze(i){let e,l,t,r,n,f;e=new Ce({props:{title:i[1]}});const a=[ye,Te],s=[];function u(o,b){return o[0].experience===void 0?0:1}return r=u(i),n=s[r]=a[r](i),{c(){N(e.$$.fragment),l=P(),t=E("div"),n.c(),this.h()},l(o){B(e.$$.fragment,o),l=T(o),t=w(o,"DIV",{class:!0});var b=D(t);n.l(b),b.forEach(_),this.h()},h(){I(t,"class","pb-10 overflow-x-hidden col flex-1")},m(o,b){A(e,o,b),y(o,l,b),y(o,t,b),s[r].m(t,null),f=!0},p(o,[b]){const d={};b&2&&(d.title=o[1]),e.$set(d);let v=r;r=u(o),r===v?s[r].p(o,b):(Z(),k(s[v],1,1,()=>{s[v]=null}),W(),n=s[r],n?n.p(o,b):(n=s[r]=a[r](o),n.c()),x(n,1),n.m(t,null))},i(o){f||(x(e.$$.fragment,o),x(n),f=!0)},o(o){k(e.$$.fragment,o),k(n),f=!1},d(o){j(e,o),o&&_(l),o&&_(t),s[r].d()}}}function Re(i,e,l){let t,{data:r}=e;const{title:n}=ve;return i.$$set=f=>{"data"in f&&l(0,r=f.data)},i.$$.update=()=>{i.$$.dirty&1&&l(1,t=r.experience?`${r.experience.name} - ${n}`:n)},[r,t]}class Qe extends be{constructor(e){super(),xe(this,e,Re,ze,ke,{data:0})}}export{Qe as component,Ke as universal};
