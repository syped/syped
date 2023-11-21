import{w as fe,b as pe}from"./paths.cc9bd7ea.js";const ce="@riadh-adrani-theme",ge=e=>{localStorage.setItem(ce,JSON.stringify(e))},le=fe(!1),ue=e=>le.update(M=>{var p;const $=typeof e=="boolean"?e:!M;return ge($),(p=document.querySelector(":root"))==null||p.setAttribute("data-theme",$?"dark":"light"),$}),we=()=>{const e=localStorage.getItem(ce);e?ue(JSON.parse(e)):window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches&&ue(!0)},ne=e=>`${pe}/logos/${e}`,r=(e,M)=>M?{dark:ne(M),light:ne(e)}:ne(e),z={AWS:r("aws.svg"),Bootstrap:r("bootstrap.svg"),C:r("c.svg"),Cpp:r("cpp.svg"),Celery:r("celery.svg"),Django:r("django.svg"),FastApi:r("fastapi"),Flask:r("flask.svg"),Go:r("go.svg"),Kafka:r("kafka.svg"),Neo4j:r("neo4j.svg"),Nginx:r("nginx.svg"),Numpy:r("numpy.svg"),Pandas:r("pandas.svg"),RabbitMQ:r("rabbitmq.svg"),Rust:r("rust.svg","rust-dark.png"),Scrapy:r("scrapy.png"),Selenium:r("selenium.svg"),Docker:r("docker.svg"),Kubernetes:r("kubernetees.svg"),Csharp:r("csharp.svg"),Xamarin:r("xamarin.svg"),TypeScript:r("ts.png"),VueJs:r("vue.png"),ReactJs:r("react.svg"),Dart:r("dart.png"),Kotlin:r("kotlin.png"),Python:r("python.png"),NodeJs:r("node.png"),Deno:r("deno.png","deno-dark.png"),Svelte:r("svelte.png"),ExpressJs:r("express.png"),JavaScript:r("js.png"),Fastify:r("fastify.svg","fastify-dark.png"),NestJs:r("nest.svg"),Quasar:r("quasar.svg"),SolidJs:r("solid.svg"),Electron:r("electron.png"),Flutter:r("flutter.svg"),Java:r("java.png"),AdonisJs:r("adonis.png"),Android:r("android.png"),Angular:r("angular.png"),PostgreSQL:r("postgres.png"),Firebase:r("firebase.png"),Sass:r("sass.png"),Unknown:r("no-img.svg"),MongoDB:r("mongodb.svg"),Redis:r("redis.svg"),Tailwind:r("tailwind.svg"),HTML:r("html.svg"),Premiere:r("premiere.svg"),Photoshop:r("photoshop.svg"),CSS:r("css.svg"),AfterEffects:r("after-effects.svg"),Illustrator:r("illustrator.svg"),Nuxt:r("nuxt.png"),Vite:r("vite.png"),Vitest:r("vitest.svg"),Jest:r("jest.png"),Unocss:r("unocss.svg"),Ruvy:r("ruvy.svg"),Postcss:r("postcss.svg")};let de;le.subscribe(e=>de=e);const De=e=>typeof e=="string"?e:de?e.dark:e.light,re=`Svelte is a free and open-source front end component framework or language created by Rich Harris and maintained by the Svelte core team members. Svelte is not a monolithic JavaScript library imported by applications: instead, Svelte compiles HTML templates to specialized code that manipulates the DOM directly, which may reduce the size of transferred files and give better client performance. Application code is also processed by the compiler, inserting calls to automatically recompute data and re-render UI elements when the data they depend on is modified. This also avoids the overhead associated with runtime intermediate representations, such as virtual DOM, unlike traditional frameworks (such as React and Vue) which carry out the bulk of their work at runtime, i.e. in the browser.

The compiler itself is written in TypeScript. Its source code is licensed under MIT License and hosted on GitHub.

\`\`\`tsx
<script>
    let count = 1;
    $: doubled = count * 2;
<\/script>

<p>{count} * 2 = {doubled}</p>

<button on:click={() => count = count + 1}>Count</button>
\`\`\`
`,E=e=>e,me=[E({slug:"js",color:"yellow",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.",logo:z.JavaScript,name:"Javascript"}),E({slug:"py",color:"blue",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.",logo:z.Python,name:"Python"}),E({slug:"css",color:"blue",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.",logo:z.CSS,name:"CSS"}),E({slug:"html",color:"orange",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.",logo:z.HTML,name:"HTML"}),E({slug:"aws",color:"yellow",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.",logo:z.AWS,name:"Amazon Web Service"}),E({slug:"reactjs",color:"cyan",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.",logo:z.ReactJs,name:"React Js"}),E({slug:"express",color:"orange",description:re,logo:z.ExpressJs,name:"Express"}),E({slug:"flask",color:"cyan",description:re,logo:z.Flask,name:"Flask"}),E({slug:"node",color:"green",description:re,logo:z.NodeJs,name:"Node"})],K=(...e)=>me.filter(M=>e.includes(M.slug));var q=(e=>(e.GitHub="github",e.StackOverflow="stackoverflow",e.Twitter="twitter",e.Linkedin="linkedin",e.Email="email",e.Facebook="facebook",e.Youtube="youtube",e))(q||{}),te=(e=>(e.FullTime="Full-time",e.PartTime="Part-time",e.SelfEmployed="Self-employed",e.Freelance="Freelance",e.Contract="Contract",e.Internship="Internship",e))(te||{});const ve=[{slug:"open-sourcer",company:"Self-employed",description:"Creating awesome tools for developers.",contract:te.SelfEmployed,type:"Software Development",location:"Home",period:{from:new Date},skills:K("ts","js"),name:"Open Source Developer",color:"#ffffff",links:[],logo:z.Unknown,shortDescription:""},{slug:"software-freelance",company:"Self-employed",description:"Creating awesome applications for customers.",contract:te.Freelance,type:"Software Development",location:"Home",period:{from:new Date},skills:K("svelte","ts","sass","css","html","js"),name:"Freelancer",color:"#ffffff",links:[],logo:z.Unknown,shortDescription:""},{slug:"software-freelance-junior",company:"Self-employed",description:"Creating awesome applications for customers.",contract:te.Freelance,type:"Software Development",location:"Home",period:{from:new Date(2022,0,1),to:new Date},skills:K("css","html","js"),name:"Junior Freelancer",color:"#ffffff",links:[],logo:z.Unknown,shortDescription:""}],be=[{slug:"slick-portfolio-angular",color:"#5e95e3",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non dolores voluptatibus vitae praesentium aperiam, iure laboriosam repellendus sunt explicabo pariatur totam enim, nihil animi quisquam. Sit vero quod laborum!",shortDescription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non dolores voluptatibus vitae praesentium aperiam, iure laboriosam repellendus sunt explicabo pariatur totam enim, nihil animi quisquam. Sit vero quod laborum!",links:[{to:"https://github.com/RiadhAdrani/slick-portfolio-svelte",label:"GitHub"}],logo:z.Unknown,name:"Slick Portfolio",period:{from:new Date},skills:K("angular","ts","tailwind"),type:"Website Template"},{slug:"slick-portfolio-svelte",color:"#ff3e00",description:"A Vercel-like developer portfolio website template made with Typescript and SvelteKit.",shortDescription:"A Vercel-like developer portfolio website template made with Typescript and SvelteKit.",links:[{to:"https://github.com/RiadhAdrani/slick-portfolio-svelte",label:"GitHub"}],logo:z.Svelte,name:"Slick Portfolio",period:{from:new Date},skills:K("svelte","ts","tailwind","sass"),type:"Website Template",screenshots:[{label:"screen 1",src:"https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"},{label:"2",src:"https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"},{label:"3",src:"https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"},{label:"4",src:"https://images.unsplash.com/photo-1542903660-eedba2cda473?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"},{label:"5",src:"https://images.unsplash.com/photo-1619410283995-43d9134e7656?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"},{label:"6",src:"https://images.unsplash.com/photo-1585079542156-2755d9c8a094?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"}]}];var he=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ae={},Me={get exports(){return ae},set exports(e){ae=e}};(function(e,M){(function($,p){e.exports=p()})(he,function(){var $=1e3,p=6e4,S=36e5,w="millisecond",D="second",F="minute",P="hour",A="day",J="week",L="month",W="quarter",C="year",Y="date",V="Invalid Date",X=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,j=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,ie={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(a){var i=["th","st","nd","rd"],t=a%100;return"["+a+(i[(t-20)%10]||i[t]||i[0])+"]"}},O=function(a,i,t){var o=String(a);return!o||o.length>=i?a:""+Array(i+1-o.length).join(t)+a},Q={s:O,z:function(a){var i=-a.utcOffset(),t=Math.abs(i),o=Math.floor(t/60),s=t%60;return(i<=0?"+":"-")+O(o,2,"0")+":"+O(s,2,"0")},m:function a(i,t){if(i.date()<t.date())return-a(t,i);var o=12*(t.year()-i.year())+(t.month()-i.month()),s=i.clone().add(o,L),l=t-s<0,d=i.clone().add(o+(l?-1:1),L);return+(-(o+(t-s)/(l?s-d:d-s))||0)},a:function(a){return a<0?Math.ceil(a)||0:Math.floor(a)},p:function(a){return{M:L,y:C,w:J,d:A,D:Y,h:P,m:F,s:D,ms:w,Q:W}[a]||String(a||"").toLowerCase().replace(/s$/,"")},u:function(a){return a===void 0}},N="en",h={};h[N]=ie;var u="$isDayjsObject",n=function(a){return a instanceof b||!(!a||!a[u])},f=function a(i,t,o){var s;if(!i)return N;if(typeof i=="string"){var l=i.toLowerCase();h[l]&&(s=l),t&&(h[l]=t,s=l);var d=i.split("-");if(!s&&d.length>1)return a(d[0])}else{var g=i.name;h[g]=i,s=g}return!o&&s&&(N=s),s||!o&&N},m=function(a,i){if(n(a))return a.clone();var t=typeof i=="object"?i:{};return t.date=a,t.args=arguments,new b(t)},c=Q;c.l=f,c.i=n,c.w=function(a,i){return m(a,{locale:i.$L,utc:i.$u,x:i.$x,$offset:i.$offset})};var b=function(){function a(t){this.$L=f(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[u]=!0}var i=a.prototype;return i.parse=function(t){this.$d=function(o){var s=o.date,l=o.utc;if(s===null)return new Date(NaN);if(c.u(s))return new Date;if(s instanceof Date)return new Date(s);if(typeof s=="string"&&!/Z$/i.test(s)){var d=s.match(X);if(d){var g=d[2]-1||0,v=(d[7]||"0").substring(0,3);return l?new Date(Date.UTC(d[1],g,d[3]||1,d[4]||0,d[5]||0,d[6]||0,v)):new Date(d[1],g,d[3]||1,d[4]||0,d[5]||0,d[6]||0,v)}}return new Date(s)}(t),this.init()},i.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},i.$utils=function(){return c},i.isValid=function(){return this.$d.toString()!==V},i.isSame=function(t,o){var s=m(t);return this.startOf(o)<=s&&s<=this.endOf(o)},i.isAfter=function(t,o){return m(t)<this.startOf(o)},i.isBefore=function(t,o){return this.endOf(o)<m(t)},i.$g=function(t,o,s){return c.u(t)?this[o]:this.set(s,t)},i.unix=function(){return Math.floor(this.valueOf()/1e3)},i.valueOf=function(){return this.$d.getTime()},i.startOf=function(t,o){var s=this,l=!!c.u(o)||o,d=c.p(t),g=function(U,x){var _=c.w(s.$u?Date.UTC(s.$y,x,U):new Date(s.$y,x,U),s);return l?_:_.endOf(A)},v=function(U,x){return c.w(s.toDate()[U].apply(s.toDate("s"),(l?[0,0,0,0]:[23,59,59,999]).slice(x)),s)},y=this.$W,H=this.$M,T=this.$D,Z="set"+(this.$u?"UTC":"");switch(d){case C:return l?g(1,0):g(31,11);case L:return l?g(1,H):g(0,H+1);case J:var B=this.$locale().weekStart||0,G=(y<B?y+7:y)-B;return g(l?T-G:T+(6-G),H);case A:case Y:return v(Z+"Hours",0);case P:return v(Z+"Minutes",1);case F:return v(Z+"Seconds",2);case D:return v(Z+"Milliseconds",3);default:return this.clone()}},i.endOf=function(t){return this.startOf(t,!1)},i.$set=function(t,o){var s,l=c.p(t),d="set"+(this.$u?"UTC":""),g=(s={},s[A]=d+"Date",s[Y]=d+"Date",s[L]=d+"Month",s[C]=d+"FullYear",s[P]=d+"Hours",s[F]=d+"Minutes",s[D]=d+"Seconds",s[w]=d+"Milliseconds",s)[l],v=l===A?this.$D+(o-this.$W):o;if(l===L||l===C){var y=this.clone().set(Y,1);y.$d[g](v),y.init(),this.$d=y.set(Y,Math.min(this.$D,y.daysInMonth())).$d}else g&&this.$d[g](v);return this.init(),this},i.set=function(t,o){return this.clone().$set(t,o)},i.get=function(t){return this[c.p(t)]()},i.add=function(t,o){var s,l=this;t=Number(t);var d=c.p(o),g=function(H){var T=m(l);return c.w(T.date(T.date()+Math.round(H*t)),l)};if(d===L)return this.set(L,this.$M+t);if(d===C)return this.set(C,this.$y+t);if(d===A)return g(1);if(d===J)return g(7);var v=(s={},s[F]=p,s[P]=S,s[D]=$,s)[d]||1,y=this.$d.getTime()+t*v;return c.w(y,this)},i.subtract=function(t,o){return this.add(-1*t,o)},i.format=function(t){var o=this,s=this.$locale();if(!this.isValid())return s.invalidDate||V;var l=t||"YYYY-MM-DDTHH:mm:ssZ",d=c.z(this),g=this.$H,v=this.$m,y=this.$M,H=s.weekdays,T=s.months,Z=s.meridiem,B=function(x,_,I,ee){return x&&(x[_]||x(o,l))||I[_].slice(0,ee)},G=function(x){return c.s(g%12||12,x,"0")},U=Z||function(x,_,I){var ee=x<12?"AM":"PM";return I?ee.toLowerCase():ee};return l.replace(j,function(x,_){return _||function(I){switch(I){case"YY":return String(o.$y).slice(-2);case"YYYY":return c.s(o.$y,4,"0");case"M":return y+1;case"MM":return c.s(y+1,2,"0");case"MMM":return B(s.monthsShort,y,T,3);case"MMMM":return B(T,y);case"D":return o.$D;case"DD":return c.s(o.$D,2,"0");case"d":return String(o.$W);case"dd":return B(s.weekdaysMin,o.$W,H,2);case"ddd":return B(s.weekdaysShort,o.$W,H,3);case"dddd":return H[o.$W];case"H":return String(g);case"HH":return c.s(g,2,"0");case"h":return G(1);case"hh":return G(2);case"a":return U(g,v,!0);case"A":return U(g,v,!1);case"m":return String(v);case"mm":return c.s(v,2,"0");case"s":return String(o.$s);case"ss":return c.s(o.$s,2,"0");case"SSS":return c.s(o.$ms,3,"0");case"Z":return d}return null}(x)||d.replace(":","")})},i.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},i.diff=function(t,o,s){var l,d=this,g=c.p(o),v=m(t),y=(v.utcOffset()-this.utcOffset())*p,H=this-v,T=function(){return c.m(d,v)};switch(g){case C:l=T()/12;break;case L:l=T();break;case W:l=T()/3;break;case J:l=(H-y)/6048e5;break;case A:l=(H-y)/864e5;break;case P:l=H/S;break;case F:l=H/p;break;case D:l=H/$;break;default:l=H}return s?l:c.a(l)},i.daysInMonth=function(){return this.endOf(L).$D},i.$locale=function(){return h[this.$L]},i.locale=function(t,o){if(!t)return this.$L;var s=this.clone(),l=f(t,o,!0);return l&&(s.$L=l),s},i.clone=function(){return c.w(this.$d,this)},i.toDate=function(){return new Date(this.valueOf())},i.toJSON=function(){return this.isValid()?this.toISOString():null},i.toISOString=function(){return this.$d.toISOString()},i.toString=function(){return this.$d.toUTCString()},a}(),k=b.prototype;return m.prototype=k,[["$ms",w],["$s",D],["$m",F],["$H",P],["$W",A],["$M",L],["$y",C],["$D",Y]].forEach(function(a){k[a[1]]=function(i){return this.$g(i,a[0],a[1])}}),m.extend=function(a,i){return a.$i||(a(i,b,m),a.$i=!0),m},m.locale=f,m.isDayjs=n,m.unix=function(a){return m(1e3*a)},m.en=h[N],m.Ls=h,m.p={},m})})(Me);const se=ae;var oe={},ye={get exports(){return oe},set exports(e){oe=e}};(function(e,M){(function($,p){e.exports=p()})(he,function(){var $,p,S=1e3,w=6e4,D=36e5,F=864e5,P=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,A=31536e6,J=2628e6,L=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,W={years:A,months:J,days:F,hours:D,minutes:w,seconds:S,milliseconds:1,weeks:6048e5},C=function(h){return h instanceof Q},Y=function(h,u,n){return new Q(h,n,u.$l)},V=function(h){return p.p(h)+"s"},X=function(h){return h<0},j=function(h){return X(h)?Math.ceil(h):Math.floor(h)},ie=function(h){return Math.abs(h)},O=function(h,u){return h?X(h)?{negative:!0,format:""+ie(h)+u}:{negative:!1,format:""+h+u}:{negative:!1,format:""}},Q=function(){function h(n,f,m){var c=this;if(this.$d={},this.$l=m,n===void 0&&(this.$ms=0,this.parseFromMilliseconds()),f)return Y(n*W[V(f)],this);if(typeof n=="number")return this.$ms=n,this.parseFromMilliseconds(),this;if(typeof n=="object")return Object.keys(n).forEach(function(a){c.$d[V(a)]=n[a]}),this.calMilliseconds(),this;if(typeof n=="string"){var b=n.match(L);if(b){var k=b.slice(2).map(function(a){return a!=null?Number(a):0});return this.$d.years=k[0],this.$d.months=k[1],this.$d.weeks=k[2],this.$d.days=k[3],this.$d.hours=k[4],this.$d.minutes=k[5],this.$d.seconds=k[6],this.calMilliseconds(),this}}return this}var u=h.prototype;return u.calMilliseconds=function(){var n=this;this.$ms=Object.keys(this.$d).reduce(function(f,m){return f+(n.$d[m]||0)*W[m]},0)},u.parseFromMilliseconds=function(){var n=this.$ms;this.$d.years=j(n/A),n%=A,this.$d.months=j(n/J),n%=J,this.$d.days=j(n/F),n%=F,this.$d.hours=j(n/D),n%=D,this.$d.minutes=j(n/w),n%=w,this.$d.seconds=j(n/S),n%=S,this.$d.milliseconds=n},u.toISOString=function(){var n=O(this.$d.years,"Y"),f=O(this.$d.months,"M"),m=+this.$d.days||0;this.$d.weeks&&(m+=7*this.$d.weeks);var c=O(m,"D"),b=O(this.$d.hours,"H"),k=O(this.$d.minutes,"M"),a=this.$d.seconds||0;this.$d.milliseconds&&(a+=this.$d.milliseconds/1e3,a=Math.round(1e3*a)/1e3);var i=O(a,"S"),t=n.negative||f.negative||c.negative||b.negative||k.negative||i.negative,o=b.format||k.format||i.format?"T":"",s=(t?"-":"")+"P"+n.format+f.format+c.format+o+b.format+k.format+i.format;return s==="P"||s==="-P"?"P0D":s},u.toJSON=function(){return this.toISOString()},u.format=function(n){var f=n||"YYYY-MM-DDTHH:mm:ss",m={Y:this.$d.years,YY:p.s(this.$d.years,2,"0"),YYYY:p.s(this.$d.years,4,"0"),M:this.$d.months,MM:p.s(this.$d.months,2,"0"),D:this.$d.days,DD:p.s(this.$d.days,2,"0"),H:this.$d.hours,HH:p.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:p.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:p.s(this.$d.seconds,2,"0"),SSS:p.s(this.$d.milliseconds,3,"0")};return f.replace(P,function(c,b){return b||String(m[c])})},u.as=function(n){return this.$ms/W[V(n)]},u.get=function(n){var f=this.$ms,m=V(n);return m==="milliseconds"?f%=1e3:f=m==="weeks"?j(f/W[m]):this.$d[m],f||0},u.add=function(n,f,m){var c;return c=f?n*W[V(f)]:C(n)?n.$ms:Y(n,this).$ms,Y(this.$ms+c*(m?-1:1),this)},u.subtract=function(n,f){return this.add(n,f,!0)},u.locale=function(n){var f=this.clone();return f.$l=n,f},u.clone=function(){return Y(this.$ms,this)},u.humanize=function(n){return $().add(this.$ms,"ms").locale(this.$l).fromNow(!n)},u.valueOf=function(){return this.asMilliseconds()},u.milliseconds=function(){return this.get("milliseconds")},u.asMilliseconds=function(){return this.as("milliseconds")},u.seconds=function(){return this.get("seconds")},u.asSeconds=function(){return this.as("seconds")},u.minutes=function(){return this.get("minutes")},u.asMinutes=function(){return this.as("minutes")},u.hours=function(){return this.get("hours")},u.asHours=function(){return this.as("hours")},u.days=function(){return this.get("days")},u.asDays=function(){return this.as("days")},u.weeks=function(){return this.get("weeks")},u.asWeeks=function(){return this.as("weeks")},u.months=function(){return this.get("months")},u.asMonths=function(){return this.as("months")},u.years=function(){return this.get("years")},u.asYears=function(){return this.as("years")},h}(),N=function(h,u,n){return h.add(u.years()*n,"y").add(u.months()*n,"M").add(u.days()*n,"d").add(u.hours()*n,"h").add(u.minutes()*n,"m").add(u.seconds()*n,"s").add(u.milliseconds()*n,"ms")};return function(h,u,n){$=n,p=n().$utils(),n.duration=function(c,b){var k=n.locale();return Y(c,{$l:k},b)},n.isDuration=C;var f=u.prototype.add,m=u.prototype.subtract;u.prototype.add=function(c,b){return C(c)?N(this,c,1):f.bind(this)(c,b)},u.prototype.subtract=function(c,b){return C(c)?N(this,c,-1):m.bind(this)(c,b)}}})})(ye);const $e=oe;se.extend($e);const ke=(e,M=new Date)=>{let $=0,p=0,S=0;return M.getFullYear()!==e.getFullYear()?(S=M.getMonth(),p=(M.getFullYear()-e.getFullYear()-1)*12,$=12-e.getMonth()):$=M.getMonth()-e.getMonth(),$+p+S+1},He=e=>["January","February","March","April","May","June","July","August","September","October","November","December"][e],xe=(e,M)=>`${e} | ${M}`;function ze(e,M=new Date(Date.now()+1e3*60*60*24)){const $=se(e),p=se(M),S=se.duration(p.diff($));let w=0,D="day";return S.as("days")<=7?(D="day",w=S.as("days")):S.as("months")<=1?(D="week",w=S.as("weeks")):S.as("years")<=1?(D="month",w=S.as("months")):(D="year",w=S.as("years")),w=Math.trunc(w),`${Math.trunc(w)} ${D}${w>1?"s":""}`}var R=(e=>(e.Code="M5.854 4.854a.5.5 0 1 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L2.707 8l3.147-3.146zm4.292 0a.5.5 0 0 1 .708-.708l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708L13.293 8l-3.147-3.146z",e.Search="M14.56 12.44L11.3 9.18a5.51 5.51 0 10-2.12 2.12l3.26 3.26a1.5 1.5 0 102.12-2.12zM3 6.5A3.5 3.5 0 116.5 10 3.5 3.5 0 013 6.5z",e.Email="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8 8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57V12c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47.65.89 1.77 1.47 2.96 1.47 1.97 0 3.5-1.6 3.5-3.57V12c0-5.52-4.48-10-10-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z",e.Skills="M19 5a3 3 0 00-3-3H5v20l7-6.29L19 22z",e.GitHub="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z",e.StackOverflow="m17.12 21.857h-14.977v-6.428h-2.143v8.571h19.259v-8.571h-2.139zm-12.616-7.018.442-2.102 10.486 2.21-.442 2.09zm1.379-5.009.898-1.955 9.71 4.54-.898 1.942zm2.692-4.768 1.366-1.647 8.218 6.87-1.366 1.647zm5.313-5.062 6.388 8.585-1.716 1.286-6.386-8.585zm-9.616 19.701v-2.13h10.714v2.13z",e.LinkedIn="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z",e.Twitter="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z",e.Home="M23 9v2h-2v7a3 3 0 01-3 3h-4v-6h-4v6H6a3 3 0 01-3-3v-7H1V9l11-7 5 3.18V2h3v5.09z",e.Projects="M3 3h4v4H3zm7 4h4V3h-4zm7-4v4h4V3zM3 14h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4zM3 21h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4z",e.Job="M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 14z",e.Academic="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z",e.Resume="M3 3v15a3 3 0 003 3h9v-6h6V3zm9 8H6v-1h6zm6-3H6V7h12zm-2 8h5l-5 5z",e.RightArrow="M9.4,18.4l-0.7-0.7l5.6-5.6L8.6,6.4l0.7-0.7l6.4,6.4L9.4,18.4z",e.LeftArrow="M14.6,18.4L8.3,12l6.4-6.4l0.7,0.7L9.7,12l5.6,5.6L14.6,18.4z",e.Youtube="M365.257,67.393H95.744C42.866,67.393,0,110.259,0,163.137v134.728 c0,52.878,42.866,95.744,95.744,95.744h269.513c52.878,0,95.744-42.866,95.744-95.744V163.137 C461.001,110.259,418.135,67.393,365.257,67.393z M300.506,237.056l-126.06,60.123c-3.359,1.602-7.239-0.847-7.239-4.568V168.607 c0-3.774,3.982-6.22,7.348-4.514l126.06,63.881C304.363,229.873,304.298,235.248,300.506,237.056z",e.Link="M19.83 4.17a4 4 0 00-5.66 0l-2 2A4 4 0 0011 9a4 4 0 00.56 2l-.54.54a4 4 0 00-4.85.63l-2 2a4 4 0 005.66 5.66l2-2A4 4 0 0013 15a4 4 0 00-.56-2l.54-.54a4 4 0 004.85-.63l2-2a4 4 0 000-5.66zM11 15a2 2 0 01-.59 1.41l-2 2a2 2 0 11-3-2.6l.22-.22 2-2A2 2 0 019 13a2.24 2.24 0 01.51.07l-1.22 1.22a1 1 0 000 1.41 1 1 0 001.41 0l1.22-1.22A2.24 2.24 0 0111 15zm7.41-6.59l-2 2A2 2 0 0115 11a2.24 2.24 0 01-.51-.07l1.22-1.22A1 1 0 0016 9a1 1 0 00-.29-.7A1 1 0 0015 8a1 1 0 00-.7.29l-1.23 1.22A2.24 2.24 0 0113 9a2 2 0 01.59-1.41l2-2a2 2 0 013 2.6z",e.Sun="M108.5 24C108.5 27.5902136 105.590214 30.5 102 30.5 98.4097864 30.5 95.5 27.5902136 95.5 24 95.5 20.4097864 98.4097864 17.5 102 17.5 105.590214 17.5 108.5 20.4097864 108.5 24zM107 24C107 21.2382136 104.761786 19 102 19 99.2382136 19 97 21.2382136 97 24 97 26.7617864 99.2382136 29 102 29 104.761786 29 107 26.7617864 107 24zM101 12.75L101 14.75C101 15.1642136 101.335786 15.5 101.75 15.5 102.164214 15.5 102.5 15.1642136 102.5 14.75L102.5 12.75C102.5 12.3357864 102.164214 12 101.75 12 101.335786 12 101 12.3357864 101 12.75zM95.7255165 14.6323616L96.7485165 16.4038616C96.9556573 16.7625614 97.4143618 16.8854243 97.7730616 16.6782835 98.1317614 16.4711427 98.2546243 16.0124382 98.0474835 15.6537384L97.0244835 13.8822384C96.8173427 13.5235386 96.3586382 13.4006757 95.9999384 13.6078165 95.6412386 13.8149573 95.5183757 14.2736618 95.7255165 14.6323616zM91.8822384 19.0244835L93.6537384 20.0474835C94.0124382 20.2546243 94.4711427 20.1317614 94.6782835 19.7730616 94.8854243 19.4143618 94.7625614 18.9556573 94.4038616 18.7485165L92.6323616 17.7255165C92.2736618 17.5183757 91.8149573 17.6412386 91.6078165 17.9999384 91.4006757 18.3586382 91.5235386 18.8173427 91.8822384 19.0244835zM90.75 25L92.75 25C93.1642136 25 93.5 24.6642136 93.5 24.25 93.5 23.8357864 93.1642136 23.5 92.75 23.5L90.75 23.5C90.3357864 23.5 90 23.8357864 90 24.25 90 24.6642136 90.3357864 25 90.75 25zM92.6323616 30.2744835L94.4038616 29.2514835C94.7625614 29.0443427 94.8854243 28.5856382 94.6782835 28.2269384 94.4711427 27.8682386 94.0124382 27.7453757 93.6537384 27.9525165L91.8822384 28.9755165C91.5235386 29.1826573 91.4006757 29.6413618 91.6078165 30.0000616 91.8149573 30.3587614 92.2736618 30.4816243 92.6323616 30.2744835zM97.0244835 34.1177616L98.0474835 32.3462616C98.2546243 31.9875618 98.1317614 31.5288573 97.7730616 31.3217165 97.4143618 31.1145757 96.9556573 31.2374386 96.7485165 31.5961384L95.7255165 33.3676384C95.5183757 33.7263382 95.6412386 34.1850427 95.9999384 34.3921835 96.3586382 34.5993243 96.8173427 34.4764614 97.0244835 34.1177616zM103 35.25L103 33.25C103 32.8357864 102.664214 32.5 102.25 32.5 101.835786 32.5 101.5 32.8357864 101.5 33.25L101.5 35.25C101.5 35.6642136 101.835786 36 102.25 36 102.664214 36 103 35.6642136 103 35.25zM108.274483 33.3676384L107.251483 31.5961384C107.044343 31.2374386 106.585638 31.1145757 106.226938 31.3217165 105.868239 31.5288573 105.745376 31.9875618 105.952517 32.3462616L106.975517 34.1177616C107.182657 34.4764614 107.641362 34.5993243 108.000062 34.3921835 108.358761 34.1850427 108.481624 33.7263382 108.274483 33.3676384zM112.117762 28.9755165L110.346262 27.9525165C109.987562 27.7453757 109.528857 27.8682386 109.321717 28.2269384 109.114576 28.5856382 109.237439 29.0443427 109.596138 29.2514835L111.367638 30.2744835C111.726338 30.4816243 112.185043 30.3587614 112.392183 30.0000616 112.599324 29.6413618 112.476461 29.1826573 112.117762 28.9755165zM113.25 23L111.25 23C110.835786 23 110.5 23.3357864 110.5 23.75 110.5 24.1642136 110.835786 24.5 111.25 24.5L113.25 24.5C113.664214 24.5 114 24.1642136 114 23.75 114 23.3357864 113.664214 23 113.25 23zM111.367638 17.7255165L109.596138 18.7485165C109.237439 18.9556573 109.114576 19.4143618 109.321717 19.7730616 109.528857 20.1317614 109.987562 20.2546243 110.346262 20.0474835L112.117762 19.0244835C112.476461 18.8173427 112.599324 18.3586382 112.392183 17.9999384 112.185043 17.6412386 111.726338 17.5183757 111.367638 17.7255165zM106.975517 13.8822384L105.952517 15.6537384C105.745376 16.0124382 105.868239 16.4711427 106.226938 16.6782835 106.585638 16.8854243 107.044343 16.7625614 107.251483 16.4038616L108.274483 14.6323616C108.481624 14.2736618 108.358761 13.8149573 108.000062 13.6078165 107.641362 13.4006757 107.182657 13.5235386 106.975517 13.8822384z",e.Moon="M102,21 C102,18.1017141 103.307179,15.4198295 105.51735,13.6246624 C106.001939,13.2310647 105.821611,12.4522936 105.21334,12.3117518 C104.322006,12.1058078 103.414758,12 102.5,12 C95.8722864,12 90.5,17.3722864 90.5,24 C90.5,30.6277136 95.8722864,36 102.5,36 C106.090868,36 109.423902,34.4109093 111.690274,31.7128995 C112.091837,31.2348572 111.767653,30.5041211 111.143759,30.4810139 C106.047479,30.2922628 102,26.1097349 102,21 Z M102.5,34.5 C96.7007136,34.5 92,29.7992864 92,24 C92,18.2007136 96.7007136,13.5 102.5,13.5 C102.807386,13.5 103.113925,13.5136793 103.419249,13.5407785 C101.566047,15.5446378 100.5,18.185162 100.5,21 C100.5,26.3198526 104.287549,30.7714322 109.339814,31.7756638 L109.516565,31.8092927 C107.615276,33.5209452 105.138081,34.5 102.5,34.5 Z",e.Facebook="M353.701,0H55.087C24.665,0,0.002,24.662,0.002,55.085v298.616c0,30.423,24.662,55.085,55.085,55.085 h147.275l0.251-146.078h-37.951c-4.932,0-8.935-3.988-8.954-8.92l-0.182-47.087c-0.019-4.959,3.996-8.989,8.955-8.989h37.882 v-45.498c0-52.8,32.247-81.55,79.348-81.55h38.65c4.945,0,8.955,4.009,8.955,8.955v39.704c0,4.944-4.007,8.952-8.95,8.955 l-23.719,0.011c-25.615,0-30.575,12.172-30.575,30.035v39.389h56.285c5.363,0,9.524,4.683,8.892,10.009l-5.581,47.087 c-0.534,4.506-4.355,7.901-8.892,7.901h-50.453l-0.251,146.078h87.631c30.422,0,55.084-24.662,55.084-55.084V55.085 C408.786,24.662,384.124,0,353.701,0z",e))(R||{});const Le="Slick template with Svelte",Ce={home:"Home",personal:"Projects",career:"Experiences",resume:"Resume",skills:"Skills"},Ae=e=>{switch(e){case q.GitHub:return R.GitHub;case q.Linkedin:return R.LinkedIn;case q.StackOverflow:return R.StackOverflow;case q.Facebook:return R.Facebook;case q.Email:return R.Email;case q.Twitter:return R.Twitter;case q.Youtube:return R.Youtube}},Ye={title:"Home",name:"Robert",lastName:"Ly",description:"test",links:[{platform:q.GitHub,link:"https://github.com/syped"},{platform:q.Linkedin,link:"https://www.linkedin.com/in/robert-ly-183219258/"},{platform:q.Email,link:"robertly53@gmail.com"}]},Te={title:"Projects",items:be},qe={title:"Experiences",items:ve},Fe={title:"Skills",items:me},Oe={title:"Resumé",item:""},je={title:"Search"};export{qe as E,Ye as H,R as I,me as M,Ce as N,Te as P,Oe as R,je as S,Le as T,ue as a,Ae as b,ze as c,He as d,ve as e,he as f,De as g,ke as h,be as i,Fe as j,we as o,le as t,xe as u};
