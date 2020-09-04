(this["webpackJsonpquick-start-react"]=this["webpackJsonpquick-start-react"]||[]).push([[0],{38:function(e,t,a){e.exports=a(54)},43:function(e,t,a){},45:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(14),l=a.n(r),m=(a(43),a(44),a(15)),s=a(5),o=(a(45),a(60)),i=a(56),u=a(61),E=a(57),f=function(){return c.a.createElement("div",{className:"navbar-area"},c.a.createElement(o.a,{bg:"dark",variant:"dark"},c.a.createElement(i.a,null,c.a.createElement(o.a.Brand,{className:"font-weight-bold",href:"/home"},"InfoBD"),c.a.createElement(u.a,{className:"ml-auto"},c.a.createElement(u.a.Link,{href:"/home"},"Country"),c.a.createElement(u.a.Link,{href:"/features"},"Features"),c.a.createElement(u.a.Link,{href:"/contact"},"Contact")),c.a.createElement(E.a,{onClick:function(){alert("Try Again Later")},variant:"outline-warning ml-4 rounded-pill"},"Login"))))},d=a(20),p=a(58),h=a(59),N=a(62),v=function(e){var t=e.country.name;return c.a.createElement("div",null,c.a.createElement(m.b,{to:"/country/".concat(t)},c.a.createElement(N.a,null,c.a.createElement(N.a.Item,{action:!0,className:"text-primary font-weight-bold",variant:"secondary"},t))))},g=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){fetch("https://restcountries.eu/rest/v2/all").then((function(e){return e.json()})).then((function(e){return r(e)}))}),[]),c.a.createElement("div",{className:"home-area py-3 bg-secondary text-light"},c.a.createElement(i.a,null,c.a.createElement("h4",{className:"py-3"},"Total Country : ",a.length),c.a.createElement(p.a,null,a.map((function(e){return c.a.createElement(h.a,{md:3,className:"p-1"},c.a.createElement(v,{country:e}))})))))},x=(a(53),function(e){var t=e.details,a=t.name,n=t.capital,r=t.region,l=t.population,m=t.area,s=t.flag,o=e.details.languages;return c.a.createElement("div",{className:"py-5"},c.a.createElement(i.a,null,c.a.createElement(p.a,{className:"align-items-center justify-content-center d-flex"},c.a.createElement(h.a,{md:6},c.a.createElement("div",{className:"flag-area"},c.a.createElement("img",{className:"w-100",src:s,alt:""}))),c.a.createElement(h.a,{md:6},c.a.createElement("div",{className:"details-area"},c.a.createElement("h3",{className:"text-success pb-3 font-weight-bold"},a),c.a.createElement("div",{className:"justify-content-between d-flex"},c.a.createElement("p",{className:"title-text"},"Capital"),c.a.createElement("p",{className:"info-text"},n)),c.a.createElement("div",{className:"justify-content-between d-flex"},c.a.createElement("p",{className:"title-text"},"Region"),c.a.createElement("p",{className:"info-text"},r)),c.a.createElement("div",{className:"justify-content-between d-flex"},c.a.createElement("p",{className:"title-text"},"Population"),c.a.createElement("p",{className:"info-text"},l)),c.a.createElement("div",{className:"justify-content-between d-flex"},c.a.createElement("p",{className:"title-text"},"Area"),c.a.createElement("p",{className:"info-text"},m," ",c.a.createElement("small",null,c.a.createElement("strong",null,"Square K.M.")))),o.map((function(e){return c.a.createElement("div",{className:"justify-content-between d-flex"},c.a.createElement("p",{className:"title-text"},"Language"),c.a.createElement("p",{className:"info-text"},e.name," / ",e.nativeName))})))))))}),y=function(){var e=Object(s.f)().countryName,t=Object(n.useState)([]),a=Object(d.a)(t,2),r=a[0],l=a[1];return Object(n.useEffect)((function(){var t="https://restcountries.eu/rest/v2/name/".concat(e);fetch(t).then((function(e){return e.json()})).then((function(e){return l(e)}))}),[]),c.a.createElement("div",null,r.map((function(e){return c.a.createElement(x,{details:e})})))},b=function(){return c.a.createElement("div",{className:"container"},c.a.createElement("h3",{className:" pt-5 text-center text-success"},"Developer is Sleeping"))},w=function(){return c.a.createElement("div",{className:"container"},c.a.createElement("h3",{className:" pt-5 text-center text-info"},"Developer is Busy Now, Try again later"))},j=function(){return c.a.createElement("div",{className:"container"},c.a.createElement("h3",{className:" pt-5 text-danger"},"Page No Found"),c.a.createElement("h5",{className:"text-danger"},"404 error"))};var k=function(){return c.a.createElement("div",{className:"main-container"},c.a.createElement(m.a,null,c.a.createElement(f,null),c.a.createElement(s.c,null,c.a.createElement(s.a,{path:"/home"},c.a.createElement(g,null)),c.a.createElement(s.a,{path:"/features"},c.a.createElement(b,null)),c.a.createElement(s.a,{path:"/contact"},c.a.createElement(w,null)),c.a.createElement(s.a,{path:"/country/:countryName"},c.a.createElement(y,null)),c.a.createElement(s.a,{path:"*"},c.a.createElement(j,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[38,1,2]]]);
//# sourceMappingURL=main.bf555fae.chunk.js.map