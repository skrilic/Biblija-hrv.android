"use strict";(self.webpackChunkio_cordova_hellocordova=self.webpackChunkio_cordova_hellocordova||[]).push([[790,384],{731:function(e,n,r){r.d(n,{Y4:function(){return j},LZ:function(){return h},Tw:function(){return m},tv:function(){return i},sz:function(){return c},W1:function(){return u},ew:function(){return d},aG:function(){return o}});r(791);var s=r(134),l=r(504),a=r(271),t=r(184),i=function(e){return(0,t.jsxs)(l.rU,{className:"icon-link",to:"/",children:[(0,t.jsx)(s.V9Z,{className:"icon"}),(0,t.jsx)("small",{className:"icon-label",children:e.label})]})},o=function(e){return(0,t.jsxs)(l.rU,{className:"icon-link",to:"/toc",children:[(0,t.jsx)(s.t5C,{className:"icon"}),(0,t.jsx)("small",{className:"icon-label",children:e.label})]})},c=function(e){return(0,t.jsxs)(l.rU,{className:"icon-link",to:"/about",children:[(0,t.jsx)(s.ocf,{className:"icon"}),(0,t.jsx)("small",{className:"icon-label",children:e.label})]})},u=function(e){return(0,t.jsxs)(l.rU,{className:"icon-link",to:"/search",children:[(0,t.jsx)(s.RB5,{className:"icon"}),(0,t.jsx)("small",{className:"icon-label",children:e.label})]})},d=function(e){return(0,t.jsxs)(l.rU,{className:"icon-link",to:"/settings",children:[(0,t.jsx)(s.zPD,{className:"icon"}),(0,t.jsx)("small",{className:"icon-label",children:e.label})]})},j=function(e){var n="";return e.disabled&&(n="#bdbbbb"),(0,t.jsx)(s.CF5,{className:"arrow-icon",style:{color:n}})},h=function(e){var n="";return e.disabled&&(n="#bdbbbb"),(0,t.jsx)(s.Td4,{className:"arrow-icon",style:{color:n}})},m=function(){return(0,t.jsx)("div",{onClick:function(){(0,a.collapseMenu)(),window.history.back()},children:(0,t.jsx)(s.oHP,{className:"close-icon"})})}},271:function(e,n,r){r.r(n),r.d(n,{collapseMenu:function(){return a},default:function(){return t}});var s=r(731),l=(r(791),r(184)),a=function(){document.getElementById("menu-overlay-toggle").checked=!1};var t=function(){return(0,l.jsxs)("div",{id:"menu-overlay",children:[(0,l.jsx)("input",{type:"checkbox",id:"menu-overlay-toggle",name:"menu-overlay-toggle","aria-labelledby":"menu-overlay-toggle"}),(0,l.jsx)("label",{htmlFor:"menu-overlay-toggle"}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:(0,l.jsx)("div",{onClick:a,children:(0,l.jsx)(s.tv,{label:"Naslovnica"})})}),(0,l.jsx)("li",{children:(0,l.jsx)("div",{onClick:a,children:(0,l.jsx)(s.aG,{label:"Sadr\u017eaj"})})}),(0,l.jsx)("li",{children:(0,l.jsx)("div",{onClick:a,children:(0,l.jsx)(s.W1,{label:"Tra\u017eenje pojma"})})}),(0,l.jsx)("li",{children:(0,l.jsx)("div",{onClick:a,children:(0,l.jsx)(s.ew,{label:"Pode\u0161avanje"})})}),(0,l.jsx)("li",{children:(0,l.jsx)("div",{onClick:a,children:(0,l.jsx)(s.sz,{label:"O aplikaciji"})})})]})]})}},790:function(e,n,r){r.r(n),r.d(n,{default:function(){return b}});var s,l=r(885),a=r(791),t=r(504),i=new Uint8Array(16);function o(){if(!s&&!(s="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return s(i)}var c=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var u=function(e){return"string"===typeof e&&c.test(e)},d=[],j=0;j<256;++j)d.push((j+256).toString(16).substr(1));var h=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=(d[e[n+0]]+d[e[n+1]]+d[e[n+2]]+d[e[n+3]]+"-"+d[e[n+4]]+d[e[n+5]]+"-"+d[e[n+6]]+d[e[n+7]]+"-"+d[e[n+8]]+d[e[n+9]]+"-"+d[e[n+10]]+d[e[n+11]]+d[e[n+12]]+d[e[n+13]]+d[e[n+14]]+d[e[n+15]]).toLowerCase();if(!u(r))throw TypeError("Stringified UUID is invalid");return r};var m=function(e,n,r){var s=(e=e||{}).random||(e.rng||o)();if(s[6]=15&s[6]|64,s[8]=63&s[8]|128,n){r=r||0;for(var l=0;l<16;++l)n[r+l]=s[l];return n}return h(s)},v=r(764),x=r(731),f=r(184);var b=function(){var e=(0,a.useContext)(v.Z),n=e.verses,r=e.searchVerses,s=e.books,i=(0,a.useState)(""),o=(0,l.Z)(i,2),c=o[0],u=o[1],d=(0,a.useState)(!1),j=(0,l.Z)(d,2),h=j[0],b=j[1],p=function(){b(!0),""!==c.trim()&&r(c)};return(0,f.jsxs)("div",{children:[(0,f.jsxs)("div",{className:"navbar",children:[(0,f.jsxs)("div",{className:"nav-item vertical-center",children:[(0,f.jsx)("input",{type:"text",placeholder:"upi\u0161ite pojam",onChange:function(e){var n=e.target.value;u(n)},onKeyPress:function(e){"Enter"===e.key&&p()}}),(0,f.jsx)("button",{onClick:p,children:(0,f.jsx)(x.W1,{})})]}),(0,f.jsx)("div",{className:"close-page",children:(0,f.jsx)(x.Tw,{})})]}),(0,f.jsxs)("div",{className:"chapter",children:[(0,f.jsx)("div",{style:{width:"70%",margin:"1rem auto",display:"flex",justifyContent:"center"},children:h?(0,f.jsxs)("p",{children:["Prona\u0111eno: ",n.length," rezultata"]}):(0,f.jsx)("small",{style:{textDecoration:"underline"},children:"(Jednostavna pretraga, pazite na pade\u017ee, velika i mala slova)"})}),n.map((function(e){return(0,f.jsx)("div",{className:"verses-list",children:(0,f.jsx)("div",{className:"verse-detail",children:(0,f.jsxs)(t.rU,{to:"/verse/".concat(e.book,"/").concat(e.chapter,"/").concat(e.verse_no),children:[(0,f.jsx)("p",{children:e.verse_text}),(0,f.jsxs)("small",{children:["-",s.filter((function(n){return n.eng_short===e.book}))[0].name,(0,f.jsxs)("em",{children:[e.chapter,":",e.verse_no]})]})]})})},m())}))]})]})}}}]);
//# sourceMappingURL=790.7fa67c06.chunk.js.map