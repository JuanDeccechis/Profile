(this["webpackJsonptp1-react"]=this["webpackJsonptp1-react"]||[]).push([[0],{44:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var c=n(2),i=n.n(c),r=n(18),a=n.n(r),s=(n(44),n(5)),o=n(6),l=n(8),j=n(7),u=n(1),d=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(u.jsx)("a",{href:this.props.to,target:"_blank",rel:"noreferrer",children:this.props.linkText})}}]),n}(c.Component),h=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:"img short-img img-linkedIn"}),Object(u.jsx)("div",{className:"img short-img img-github"}),Object(u.jsxs)("ul",{className:"contact",children:[Object(u.jsx)("li",{children:Object(u.jsx)(d,{to:"https://github.com/JuanDeccechis",linkText:"Github"})}),Object(u.jsx)("li",{children:Object(u.jsx)(d,{to:"https://www.linkedin.com/in/juan-cruz-deccechis-873882177/",linkText:"LinkedIn"})})]})]})}}]),n}(c.Component),b=n(12),O=i.a.createContext("light");function p(e){return function(t){return Object(u.jsx)(O.Consumer,{children:function(n){return Object(u.jsx)(e,Object(b.a)(Object(b.a)({},t),{},{theme:n}))}})}}var m=i.a.createContext("es");function v(e){return function(t){return Object(u.jsx)(m.Consumer,{children:function(n){return Object(u.jsx)(e,Object(b.a)(Object(b.a)({},t),{},{language:n}))}})}}var x=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props,t=e.title,n=e.since,c=e.until,i=e.employer,r=e.rol;e.moreInfo;return Object(u.jsxs)("div",{children:[t&&Object(u.jsx)("h2",{children:t}),i?Object(u.jsxs)("div",{className:"topic-information",children:[n&&c&&Object(u.jsxs)("div",{className:"short-column",children:[n," - ",c]}),Object(u.jsxs)("div",{className:"long-column",children:[Object(u.jsx)("p",{className:"outstanding",children:i}),Object(u.jsx)("p",{children:r})]})]}):Object(u.jsx)("div",{className:r?"topic-information":"",children:Object(u.jsx)("span",{children:r})})]})}}]),n}(c.Component),f=v(p(function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props,t=e.theme;e.language,e.toDownload;return Object(u.jsxs)("div",{className:"app to-download ".concat(t),children:[Object(u.jsx)("h1",{children:"Curriculum Vitae"}),Object(u.jsxs)("div",{className:"cv-presentation",children:[Object(u.jsx)("div",{className:"img img-profile"}),Object(u.jsxs)("div",{className:"user-information",children:[Object(u.jsxs)("p",{children:[" JUAN CRUZ DECCECHIS ",Object(u.jsx)("div",{className:"img short-img img-user inline"})]}),Object(u.jsxs)("p",{children:[" juandeccechis@gmail.com ",Object(u.jsx)("div",{className:"img short-img img-mail inline"})]}),Object(u.jsxs)("p",{children:[" +5492494581833 ",Object(u.jsx)("div",{className:"img short-img img-phone inline"})]})]})]}),Object(u.jsx)(x,{title:"Experiencia Profesional",since:"2019",until:"Presente",employer:"Technisys",rol:"Fullstack Developer",moreInfo:"Desarrollo de aplicaciones bancarias web/mobile"}),Object(u.jsx)(x,{since:"2018",until:"2021",employer:"Universidad Nacional del Centro de la Provincia de Buenos Aires",rol:"Ayudante alumno Web 1 - Investigacion Operativa",moreInfo:""}),Object(u.jsx)(x,{title:"Estudios",since:"2012",until:"2019",employer:"Universidad Nacional del Centro de la Provincia de Buenos Aires",rol:"Ingenier\xeda de Sistemas",moreInfo:"Estado: Finalizado"}),Object(u.jsx)(x,{since:"2018",until:"Presente",employer:"Universidad Nacional del Centro de la Provincia de Buenos Aires",rol:"Tecnicatura Universitaria en Desarrollo de Aplicaciones Inform\xe1ticas",moreInfo:"Estado: 90%"}),Object(u.jsx)(x,{title:"Ingl\xe9s",rol:"Nivel: Intermedio"}),Object(u.jsx)(x,{title:"Aptitudes",rol:"Proactivo, Responsable, Trabajo en equipo"}),Object(u.jsx)(x,{title:"Conocimientos"}),Object(u.jsxs)("div",{className:"list-items",children:[Object(u.jsx)(x,{rol:"React - TS - JS "}),Object(u.jsx)(x,{rol:"SASS - CSS3 - CSS "}),Object(u.jsx)(x,{rol:"HTML5 - HTML "}),Object(u.jsx)(x,{rol:"JAVA "}),Object(u.jsx)(x,{rol:"BD Oracle SQL"})]})]})}}]),n}(c.Component))),g=n(33),w=n(22),C=n.n(w),k={LOGIN:"LOGIN",FETCH_USERS_SUCCESS:"FETCH_USERS_SUCCESS",FETCH_USERS_FAIL:"FETCH_USERS_FAIL"},y=function(){return{type:k.FETCH_USERS_FAIL}},S={user:"",loading:!1,error:""},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k.LOGIN:return Object(b.a)(Object(b.a)({},e),{},{user:t.payload});default:return e}},E=(n(46),v(p(function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"printDocument",value:function(){var e=window.scrollY;window.scroll(0,0);var t=document.getElementById("divToPrint");C()(t,{scale:"0.9"}).then((function(e){var n=e.toDataURL("image/png"),c=new g.a({orientation:"portrait"});c.addImage(n,"png",0,0,t.width,t.height),c.save("CV Juan Cruz Deccechis.pdf")})),window.scrollTo(0,e)}},{key:"render",value:function(){return Object(u.jsxs)("div",{className:"home",children:[Object(u.jsx)("button",{onClick:this.printDocument,children:"es"===this.props.language?"Descargar CV":"Download CV"}),Object(u.jsx)("div",{className:"container mt4",id:"divToPrint",children:Object(u.jsx)(f,{toDownload:this.toDownload})})]})}}]),n}(c.Component)))),I=v(p(function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props;e.theme;return"es"===e.language?Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("h1",{children:"\xa1Bienvenidos a mi perfil!"}),Object(u.jsxs)("div",{className:"presentation",children:[Object(u.jsxs)("p",{children:["Soy ",Object(u.jsx)("b",{children:"Juan Cruz Deccechis"}),", un j\xf3ven desarrollador fullstack, como pueden observar en mi CV."]}),Object(u.jsx)("p",{children:"Decid\xed hacer esta aplicaci\xf3n como una forma distinta de mostrar mis conocimientos, y comunicarles un poco mas de lo que se puede observar en un Curriculum."})," ",Object(u.jsx)("br",{}),Object(u.jsx)("p",{children:"Me gusta viajar, conocer lugares nuevos, pasar tiempo con amigos, ver sagas de peliculas y ver stand up."})]})]}):Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("h1",{children:"Welcome to my profile!"}),Object(u.jsxs)("div",{className:"presentation",children:[Object(u.jsxs)("p",{children:["I'm ",Object(u.jsx)("b",{children:"Juan Cruz Deccechis"}),", a young fullstack developer, as you can see in my CV."]}),Object(u.jsx)("p",{children:"I did this app to show my knoleadges, and to give you a little more information that you can see in a CV."})," ",Object(u.jsx)("br",{}),Object(u.jsx)("p",{children:"I like traveling, seeing new places, spending time with my friends, watching movies sagas, and watching stand up."})]})]})}}]),n}(c.Component))),D=(n(47),n(20)),T=n(15),_=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(e){var c;return Object(s.a)(this,n),(c=t.call(this,e)).state={language:"es"},c.handleChange=c.handleChange.bind(Object(T.a)(c)),c}return Object(o.a)(n,[{key:"handleChange",value:function(e){var t=e.target.value,n=e.target.name;this.setState(Object(D.a)({},n,t))}},{key:"render",value:function(){return Object(u.jsxs)("div",{children:[Object(u.jsxs)("select",{value:this.state.language,onChange:this.handleChange,name:"language",children:[Object(u.jsx)("option",{value:"es",children:"Espa\xf1ol"}),Object(u.jsx)("option",{value:"en",children:"English"})]}),Object(u.jsx)(m.Provider,{value:this.state.language,children:this.props.children})]})}}]),n}(c.Component),U=(n(48),function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(e){var c;return Object(s.a)(this,n),(c=t.call(this,e)).state={theme:"dark",switchDark:!0},c.handleSwitch=c.handleSwitch.bind(Object(T.a)(c)),c}return Object(o.a)(n,[{key:"handleSwitch",value:function(e){var t=this.state.switchDark?"light":"dark";this.setState({switchDark:!this.state.switchDark,theme:t})}},{key:"render",value:function(){return Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{className:"container-switcher",children:[Object(u.jsxs)("span",{className:"label-switcher",children:["es"===this.props.language?"modo nocturno":"dark mode",": "]}),Object(u.jsxs)("label",{class:"switch",children:[Object(u.jsx)("input",{type:"checkbox",checked:this.state.switchDark,onChange:this.handleSwitch}),Object(u.jsx)("span",{class:"slider round"})]})]}),Object(u.jsx)(O.Provider,{value:this.state.theme,children:this.props.children})]})}}]),n}(c.Component)),A=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(u.jsx)("div",{className:"container",children:Object(u.jsx)(_,{children:Object(u.jsx)(m.Consumer,{children:function(e){return Object(u.jsx)("div",{children:Object(u.jsx)(U,{language:e,children:Object(u.jsx)(O.Consumer,{children:function(e){return Object(u.jsxs)("div",{children:[Object(u.jsx)(I,{}),Object(u.jsx)(E,{}),Object(u.jsx)(h,{})]})}})})})}})})})}}]),n}(c.Component),L=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function P(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var R=n(16),F=n(36),H=n(35),J=n(13),V=n.n(J),B=n(14),W=n(34),z=n.n(W),G=V.a.mark(Q),M=V.a.mark(X),q=V.a.mark(Y);function Q(){var e;return V.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(B.b)(z.a.get,"https://jsonplaceholder.typicode.com/users");case 3:if(200!==(e=t.sent).status){t.next=9;break}return t.next=7,Object(B.c)((n=e.data,{type:k.FETCH_USERS_SUCCESS,payload:n}));case 7:t.next=11;break;case 9:return t.next=11,Object(B.c)(y());case 11:t.next=17;break;case 13:return t.prev=13,t.t0=t.catch(0),t.next=17,Object(B.c)(y(t.t0));case 17:case"end":return t.stop()}var n}),G,null,[[0,13]])}function X(){return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(B.d)(k.FETCH_USERS_START,Q);case 2:case"end":return e.stop()}}),M)}function Y(){return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(B.a)([X()]);case 2:case"end":return e.stop()}}),q)}var Z=Object(F.a)(),$=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||R.b,K=Object(R.c)(N,$(Object(R.a)(Z)));Z.run(Y),a.a.render(Object(u.jsx)(H.a,{store:K,children:Object(u.jsx)(A,{})}),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/Profile",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/Profile","/service-worker.js");L?(!function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):P(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):P(e)}))}}()}},[[70,1,3]]]);
//# sourceMappingURL=main.6c260b4e.chunk.js.map