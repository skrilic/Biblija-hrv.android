/*! For license information please see 727.48409537.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkio_cordova_hellocordova=self.webpackChunkio_cordova_hellocordova||[]).push([[727,384],{731:function(e,t,r){r.d(t,{Y4:function(){return d},LZ:function(){return p},Tw:function(){return h},tv:function(){return i},sz:function(){return l},W1:function(){return u},ew:function(){return f},aG:function(){return s}});r(791);var n=r(134),o=r(504),a=r(271),c=r(184),i=function(e){return(0,c.jsxs)(o.rU,{className:"icon-link",to:"/",children:[(0,c.jsx)(n.V9Z,{className:"icon"}),(0,c.jsx)("small",{className:"icon-label",children:e.label})]})},s=function(e){return(0,c.jsxs)(o.rU,{className:"icon-link",to:"/toc",children:[(0,c.jsx)(n.t5C,{className:"icon"}),(0,c.jsx)("small",{className:"icon-label",children:e.label})]})},l=function(e){return(0,c.jsxs)(o.rU,{className:"icon-link",to:"/about",children:[(0,c.jsx)(n.ocf,{className:"icon"}),(0,c.jsx)("small",{className:"icon-label",children:e.label})]})},u=function(e){return(0,c.jsxs)(o.rU,{className:"icon-link",to:"/search",children:[(0,c.jsx)(n.RB5,{className:"icon"}),(0,c.jsx)("small",{className:"icon-label",children:e.label})]})},f=function(e){return(0,c.jsxs)(o.rU,{className:"icon-link",to:"/settings",children:[(0,c.jsx)(n.zPD,{className:"icon"}),(0,c.jsx)("small",{className:"icon-label",children:e.label})]})},d=function(e){var t="";return e.disabled&&(t="#bdbbbb"),(0,c.jsx)(n.CF5,{className:"arrow-icon",style:{color:t}})},p=function(e){var t="";return e.disabled&&(t="#bdbbbb"),(0,c.jsx)(n.Td4,{className:"arrow-icon",style:{color:t}})},h=function(){return(0,c.jsx)("div",{onClick:function(){(0,a.collapseMenu)(),window.history.back()},children:(0,c.jsx)(n.oHP,{className:"close-icon"})})}},727:function(e,t,r){function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}r.r(t),r.d(t,{default:function(){return A}});var c=r(885),i=r(791),s=r(504),l=r(871),u=r(731),f=r(764);function d(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}var p=r(462);function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e,t){return m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},m(e,t)}var y=r(441),b=r(110),v=r.n(b);function j(e,t){if(!e){var r=new Error("loadable: "+t);throw r.framesToPop=1,r.name="Invariant Violation",r}}var x=i.createContext();var g={initialChunks:{}},k="PENDING",N="REJECTED";var C=function(e){return e};function S(e){var t=e.defaultResolveComponent,r=void 0===t?C:t,n=e.render,o=e.onLoad;function a(e,t){void 0===t&&(t={});var a=function(e){return"function"===typeof e?{requireAsync:e,resolve:function(){},chunkName:function(){}}:e}(e),c={};function s(e){return t.cacheKey?t.cacheKey(e):a.resolve?a.resolve(e):"static"}function l(e,n,o){var a=t.resolveComponent?t.resolveComponent(e,n):r(e);if(t.resolveComponent&&!(0,y.isValidElementType)(a))throw new Error("resolveComponent returned something that is not a React component!");return v()(o,a,{preload:!0}),a}var u=function(e){var t=s(e),r=c[t];return r&&r.status!==N||((r=a.requireAsync(e)).status=k,c[t]=r,r.then((function(){r.status="RESOLVED"}),(function(t){console.error("loadable-components: failed to asynchronously load component",{fileName:a.resolve(e),chunkName:a.chunkName(e),error:t?t.message:t}),r.status=N}))),r},f=function(e){var t=function(t){return i.createElement(x.Consumer,null,(function(r){return i.createElement(e,Object.assign({__chunkExtractor:r},t))}))};return e.displayName&&(t.displayName=e.displayName+"WithChunkExtractor"),t}(function(e){var r,i;function f(r){var n;return(n=e.call(this,r)||this).state={result:null,error:null,loading:!0,cacheKey:s(r)},j(!r.__chunkExtractor||a.requireSync,"SSR requires `@loadable/babel-plugin`, please install it"),r.__chunkExtractor?(!1===t.ssr||(a.requireAsync(r).catch((function(){return null})),n.loadSync(),r.__chunkExtractor.addChunk(a.chunkName(r))),h(n)):(!1!==t.ssr&&(a.isReady&&a.isReady(r)||a.chunkName&&g.initialChunks[a.chunkName(r)])&&n.loadSync(),n)}i=e,(r=f).prototype=Object.create(i.prototype),r.prototype.constructor=r,m(r,i),f.getDerivedStateFromProps=function(e,t){var r=s(e);return(0,p.Z)({},t,{cacheKey:r,loading:t.loading||t.cacheKey!==r})};var y=f.prototype;return y.componentDidMount=function(){this.mounted=!0;var e=this.getCache();e&&e.status===N&&this.setCache(),this.state.loading&&this.loadAsync()},y.componentDidUpdate=function(e,t){t.cacheKey!==this.state.cacheKey&&this.loadAsync()},y.componentWillUnmount=function(){this.mounted=!1},y.safeSetState=function(e,t){this.mounted&&this.setState(e,t)},y.getCacheKey=function(){return s(this.props)},y.getCache=function(){return c[this.getCacheKey()]},y.setCache=function(e){void 0===e&&(e=void 0),c[this.getCacheKey()]=e},y.triggerOnLoad=function(){var e=this;o&&setTimeout((function(){o(e.state.result,e.props)}))},y.loadSync=function(){if(this.state.loading)try{var e=l(a.requireSync(this.props),this.props,b);this.state.result=e,this.state.loading=!1}catch(t){console.error("loadable-components: failed to synchronously load component, which expected to be available",{fileName:a.resolve(this.props),chunkName:a.chunkName(this.props),error:t?t.message:t}),this.state.error=t}},y.loadAsync=function(){var e=this,t=this.resolveAsync();return t.then((function(t){var r=l(t,e.props,b);e.safeSetState({result:r,loading:!1},(function(){return e.triggerOnLoad()}))})).catch((function(t){return e.safeSetState({error:t,loading:!1})})),t},y.resolveAsync=function(){var e=this.props,t=(e.__chunkExtractor,e.forwardedRef,d(e,["__chunkExtractor","forwardedRef"]));return u(t)},y.render=function(){var e=this.props,r=e.forwardedRef,o=e.fallback,a=(e.__chunkExtractor,d(e,["forwardedRef","fallback","__chunkExtractor"])),c=this.state,i=c.error,s=c.loading,l=c.result;if(t.suspense&&(this.getCache()||this.loadAsync()).status===k)throw this.loadAsync();if(i)throw i;var u=o||t.fallback||null;return s?u:n({fallback:u,result:l,options:t,props:(0,p.Z)({},a,{ref:r})})},f}(i.Component)),b=i.forwardRef((function(e,t){return i.createElement(f,Object.assign({forwardedRef:t},e))}));return b.displayName="Loadable",b.preload=function(e){b.load(e)},b.load=function(e){return u(e)},b}return{loadable:a,lazy:function(e,t){return a(e,(0,p.Z)({},t,{suspense:!0}))}}}var w=S({defaultResolveComponent:function(e){return e.__esModule?e.default:e.default||e},render:function(e){var t=e.result,r=e.props;return i.createElement(t,r)}}),O=w.loadable,_=w.lazy,P=S({onLoad:function(e,t){e&&t.forwardedRef&&("function"===typeof t.forwardedRef?t.forwardedRef(e):t.forwardedRef.current=e)},render:function(e){var t=e.result,r=e.props;return r.children?r.children(t):null}}),E=P.loadable,$=P.lazy;var R=O;R.lib=E,_.lib=$;var D=R,T=r(184),M=D((function(){return r.e(444).then(r.bind(r,444))}));var A=function(){var e=(0,i.useContext)(f.Z),t=e.biblija,r=e.books,o=e.getBookChapters,d=e.bookChapters,p=(0,i.useState)([]),h=(0,c.Z)(p,2),m=h[0],y=h[1],b=(0,l.UO)().book,v=(0,i.useState)({book:b,chapter:1}),j=(0,c.Z)(v,2),x=j[0],g=j[1],k=(0,i.useRef)(!1);function N(e){var t=e.target,r=t.name,o=t.value;g((function(e){return"book"===r?{book:o,chapter:1}:a(a({},e),{},n({},r,o))})),k.current=!1}return(0,i.useEffect)((function(){k.current||(y(t.filter((function(e){return e.book===x.book&e.chapter===Number(x.chapter)}))),o(x.book)),k.current=!0}),[x,t,o,b]),(0,T.jsxs)("div",{children:[(0,T.jsxs)("div",{className:"navbar",children:[(0,T.jsxs)("div",{className:"nav-item vertical-center",children:[(0,T.jsx)("select",{id:"book-select",name:"book",value:x.book,onChange:N,children:r.map((function(e){return(0,T.jsx)("option",{value:e.eng_short,children:e.name},e.eng_short)}))}),(0,T.jsx)("select",{id:"chapter-select",name:"chapter",value:x.chapter,onChange:N,children:d.map((function(e){return(0,T.jsx)("option",{value:e,children:e},e)}))})]}),(0,T.jsx)("div",{className:"close-page",children:(0,T.jsx)(u.Tw,{})})]}),(0,T.jsx)(M,{books:r,book:x.book,chapter:x.chapter,verses:m}),(0,T.jsx)("div",{className:"footerbar",children:(0,T.jsxs)("div",{className:"vertical-center",children:[(0,T.jsx)("div",{className:"footer-item",children:(0,T.jsx)(s.rU,{to:"#",children:x.chapter>1?(0,T.jsx)("div",{id:"before",onClick:function(){g((function(e){return a(a({},e),{},{chapter:Number(x.chapter)-1})})),k.current=!1},children:(0,T.jsx)(u.Y4,{disabled:!1})}):(0,T.jsx)("div",{id:"before",children:(0,T.jsx)(u.Y4,{disabled:!0})})})}),(0,T.jsx)("div",{className:"footer-item",children:(0,T.jsx)(s.rU,{to:"#",children:x.chapter<d.length?(0,T.jsx)("div",{id:"next",onClick:function(){g((function(e){return a(a({},e),{},{chapter:Number(x.chapter)+1})})),k.current=!1},children:(0,T.jsx)(u.LZ,{disabled:!1})}):(0,T.jsx)("div",{id:"next",children:(0,T.jsx)(u.LZ,{disabled:!0})})})})]})})]})}},271:function(e,t,r){r.r(t),r.d(t,{collapseMenu:function(){return a},default:function(){return c}});var n=r(731),o=(r(791),r(184)),a=function(){document.getElementById("menu-overlay-toggle").checked=!1};var c=function(){return(0,o.jsxs)("div",{id:"menu-overlay",children:[(0,o.jsx)("input",{type:"checkbox",id:"menu-overlay-toggle",name:"menu-overlay-toggle","aria-labelledby":"menu-overlay-toggle"}),(0,o.jsx)("label",{htmlFor:"menu-overlay-toggle"}),(0,o.jsxs)("ul",{children:[(0,o.jsx)("li",{children:(0,o.jsx)("div",{onClick:a,children:(0,o.jsx)(n.tv,{label:"Naslovnica"})})}),(0,o.jsx)("li",{children:(0,o.jsx)("div",{onClick:a,children:(0,o.jsx)(n.aG,{label:"Sadr\u017eaj"})})}),(0,o.jsx)("li",{children:(0,o.jsx)("div",{onClick:a,children:(0,o.jsx)(n.W1,{label:"Tra\u017eenje pojma"})})}),(0,o.jsx)("li",{children:(0,o.jsx)("div",{onClick:a,children:(0,o.jsx)(n.ew,{label:"Pode\u0161avanje"})})}),(0,o.jsx)("li",{children:(0,o.jsx)("div",{onClick:a,children:(0,o.jsx)(n.sz,{label:"O aplikaciji"})})})]})]})}},110:function(e,t,r){var n=r(441),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},a={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},c={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},i={};function s(e){return n.isMemo(e)?c:i[e.$$typeof]||o}i[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},i[n.Memo]=c;var l=Object.defineProperty,u=Object.getOwnPropertyNames,f=Object.getOwnPropertySymbols,d=Object.getOwnPropertyDescriptor,p=Object.getPrototypeOf,h=Object.prototype;e.exports=function e(t,r,n){if("string"!==typeof r){if(h){var o=p(r);o&&o!==h&&e(t,o,n)}var c=u(r);f&&(c=c.concat(f(r)));for(var i=s(t),m=s(r),y=0;y<c.length;++y){var b=c[y];if(!a[b]&&(!n||!n[b])&&(!m||!m[b])&&(!i||!i[b])){var v=d(r,b);try{l(t,b,v)}catch(j){}}}}return t}},372:function(e,t){var r="function"===typeof Symbol&&Symbol.for,n=r?Symbol.for("react.element"):60103,o=r?Symbol.for("react.portal"):60106,a=r?Symbol.for("react.fragment"):60107,c=r?Symbol.for("react.strict_mode"):60108,i=r?Symbol.for("react.profiler"):60114,s=r?Symbol.for("react.provider"):60109,l=r?Symbol.for("react.context"):60110,u=r?Symbol.for("react.async_mode"):60111,f=r?Symbol.for("react.concurrent_mode"):60111,d=r?Symbol.for("react.forward_ref"):60112,p=r?Symbol.for("react.suspense"):60113,h=r?Symbol.for("react.suspense_list"):60120,m=r?Symbol.for("react.memo"):60115,y=r?Symbol.for("react.lazy"):60116,b=r?Symbol.for("react.block"):60121,v=r?Symbol.for("react.fundamental"):60117,j=r?Symbol.for("react.responder"):60118,x=r?Symbol.for("react.scope"):60119;function g(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case u:case f:case a:case i:case c:case p:return e;default:switch(e=e&&e.$$typeof){case l:case d:case y:case m:case s:return e;default:return t}}case o:return t}}}function k(e){return g(e)===f}t.AsyncMode=u,t.ConcurrentMode=f,t.ContextConsumer=l,t.ContextProvider=s,t.Element=n,t.ForwardRef=d,t.Fragment=a,t.Lazy=y,t.Memo=m,t.Portal=o,t.Profiler=i,t.StrictMode=c,t.Suspense=p,t.isAsyncMode=function(e){return k(e)||g(e)===u},t.isConcurrentMode=k,t.isContextConsumer=function(e){return g(e)===l},t.isContextProvider=function(e){return g(e)===s},t.isElement=function(e){return"object"===typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return g(e)===d},t.isFragment=function(e){return g(e)===a},t.isLazy=function(e){return g(e)===y},t.isMemo=function(e){return g(e)===m},t.isPortal=function(e){return g(e)===o},t.isProfiler=function(e){return g(e)===i},t.isStrictMode=function(e){return g(e)===c},t.isSuspense=function(e){return g(e)===p},t.isValidElementType=function(e){return"string"===typeof e||"function"===typeof e||e===a||e===f||e===i||e===c||e===p||e===h||"object"===typeof e&&null!==e&&(e.$$typeof===y||e.$$typeof===m||e.$$typeof===s||e.$$typeof===l||e.$$typeof===d||e.$$typeof===v||e.$$typeof===j||e.$$typeof===x||e.$$typeof===b)},t.typeOf=g},441:function(e,t,r){e.exports=r(372)}}]);
//# sourceMappingURL=727.48409537.chunk.js.map