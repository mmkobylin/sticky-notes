(this["webpackJsonpsticky-notes"]=this["webpackJsonpsticky-notes"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var l,r,a,c,o,s,i,u,d,f,g,p,b,m,j,O=n(0),h=n.n(O),E=n(7),x=n.n(E),y=(n(13),n(6)),v=n(8),w=n(5),N=(n(14),n(18)),k=["title","titleId"];function D(){return(D=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e}).apply(this,arguments)}function C(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function S(e,t){var n=e.title,h=e.titleId,E=C(e,k);return O.createElement("svg",D({id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 32 32",style:{enableBackground:"new 0 0 32 32"},xmlSpace:"preserve",ref:t,"aria-labelledby":h},E),n?O.createElement("title",{id:h},n):null,O.createElement("g",null,O.createElement("g",{id:"x_x5F_alt"},O.createElement("path",{style:{fill:"#030104"},d:"M16,0C7.164,0,0,7.164,0,16s7.164,16,16,16s16-7.164,16-16S24.836,0,16,0z M23.914,21.086 l-2.828,2.828L16,18.828l-5.086,5.086l-2.828-2.828L13.172,16l-5.086-5.086l2.828-2.828L16,13.172l5.086-5.086l2.828,2.828 L18.828,16L23.914,21.086z"}))),l||(l=O.createElement("g",null)),r||(r=O.createElement("g",null)),a||(a=O.createElement("g",null)),c||(c=O.createElement("g",null)),o||(o=O.createElement("g",null)),s||(s=O.createElement("g",null)),i||(i=O.createElement("g",null)),u||(u=O.createElement("g",null)),d||(d=O.createElement("g",null)),f||(f=O.createElement("g",null)),g||(g=O.createElement("g",null)),p||(p=O.createElement("g",null)),b||(b=O.createElement("g",null)),m||(m=O.createElement("g",null)),j||(j=O.createElement("g",null)))}var L=O.forwardRef(S),T=(n.p,n(1)),_={lastNoteCreated:null,totalNotes:0,notes:[]};var P=function(){var e=Object(O.useState)(""),t=Object(w.a)(e,2),n=t[0],l=t[1],r=["#ff65a3","#feff9c","#7afcff","#fff740","#b3d062"],a=Object(O.useReducer)((function(e,t){switch(t.type){case"ADD_NOTE":return{lastNoteCreated:(new Date).toTimeString().slice(0,8),totalNotes:e.notes.length+1,notes:[].concat(Object(v.a)(e.notes),[t.payload])};case"DELETE_NOTE":return Object(y.a)(Object(y.a)({},e),{},{totalNotes:e.notes.length-1,notes:e.notes.filter((function(e){return e.id!==t.payload.id}))})}}),_),c=Object(w.a)(a,2),o=c[0],s=c[1],i=function(e){e.target.style.left="".concat(e.pageX-50,"px"),e.target.style.top="".concat(e.pageY-50,"px")};return Object(T.jsxs)("div",{className:"sticky-notes",onDragOver:function(e){e.stopPropagation(),e.preventDefault()},children:[Object(T.jsx)("header",{children:Object(T.jsxs)("h1",{children:["Sticky Notes ( ",o.totalNotes," )"]})}),Object(T.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),n){var t={id:Object(N.a)(),text:n,rotate:Math.floor(15*Math.random())};s({type:"ADD_NOTE",payload:t}),l("")}},className:"note-form",children:[Object(T.jsx)("textarea",{value:n,placeholder:"Create a new note",onChange:function(e){l(e.target.value)}}),Object(T.jsx)("button",{disabled:!n,style:n?null:{cursor:"not-allowed"},children:"Add!"})]}),o.notes.map((function(e){return Object(T.jsxs)("div",{className:"note",draggable:"true",onDragEnd:i,style:{transform:"rotate(".concat(e.rotate,"deg)"),backgroundColor:r[e.id.match(/\d/)%r.length]},children:[Object(T.jsx)("div",{className:"close",onClick:function(){return s({type:"DELETE_NOTE",payload:e})},children:Object(T.jsx)(L,{})}),Object(T.jsxs)("pre",{className:"text",children:[" ",e.text," "]})]},e.id)}))]})},F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,l=t.getFID,r=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),l(e),r(e),a(e),c(e)}))};x.a.render(Object(T.jsx)(h.a.StrictMode,{children:Object(T.jsx)(P,{})}),document.getElementById("root")),F()}},[[16,1,2]]]);
//# sourceMappingURL=main.f073983b.chunk.js.map