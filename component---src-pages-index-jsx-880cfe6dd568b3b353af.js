(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{215:function(e,t,n){"use strict";n.r(t);var i=n(0),o=n.n(i),s=(n(18),n(231)),r=n.n(s),a=n(211),u=n(210),h=n(212),c=n(240),l=n.n(c),f=function(e){var t=e.text,n=e.author,i=e.className;return o.a.createElement("div",{className:l.a.Citation+" "+i},o.a.createElement("q",{lang:"en",className:l.a.text},t),o.a.createElement("div",{className:l.a.author},n))};f.defaultProps={text:"",author:"",className:""};var p=f,d=n(241),m=n.n(d);t.default=function(){var e,t,n,s=(e={mouseControls:!0,touchControls:!0,minHeight:200,minWidth:200,scale:1,scaleMobile:1,color:8816262,backgroundColor:0,size:3.5,spacing:51,showLines:!1},t=Object(i.useRef)(null),n=Object(i.useRef)(null),Object(i.useEffect)((function(){return n.current=r()(Object.assign({el:t.current},e)),function(){n.current&&n.current.destroy()}}),[]),t);return o.a.createElement(a.a,null,o.a.createElement(u.a,{title:"Home"}),o.a.createElement(h.a,{className:m.a.Welcome,center:!0,ref:s},o.a.createElement(p,{className:m.a.citation,text:"The best way to predict the future is to create it",author:"Peter Drucker"})))}},231:function(e,t,n){var i=n(232),o=n(234),s=n(235),r=n(237),a=n(238);n(58),n(78),n(8),n(239),n(60),n(59),n(49),n(40),n(79),"undefined"!=typeof self&&self,e.exports=function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=8)}({0:function(e,t,n){"use strict";function i(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e}function o(){return"undefined"!=typeof navigator?/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||window.innerWidth<600:null}n.d(t,"c",(function(){return i})),n.d(t,"e",(function(){return o})),n.d(t,"i",(function(){return s})),n.d(t,"h",(function(){return r})),n.d(t,"g",(function(){return a})),n.d(t,"f",(function(){return u})),n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return c})),n.d(t,"d",(function(){return l})),Number.prototype.clamp=function(e,t){return Math.min(Math.max(this,e),t)};var s=function(e){return e[Math.floor(Math.random()*e.length)]};function r(e,t){return null==e&&(e=0),null==t&&(t=1),e+Math.random()*(t-e)}function a(e,t){return null==e&&(e=0),null==t&&(t=1),Math.floor(e+Math.random()*(t-e+1))}var u=function(e){return document.querySelector(e)},h=function(e){return"number"==typeof e?"#"+("00000"+e.toString(16)).slice(-6):e},c=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=h(e),i=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(n),o=i?{r:parseInt(i[1],16),g:parseInt(i[2],16),b:parseInt(i[3],16)}:null;return"rgba("+o.r+","+o.g+","+o.b+","+t+")"},l=function(e){return.299*e.r+.587*e.g+.114*e.b}},1:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var i=n(0),o="object"==typeof window,s=o&&window.THREE||{};o&&!window.VANTA&&(window.VANTA={});var u=o&&window.VANTA||{};u.register=function(e,t){return u[e]=function(e){return new t(e)}},u.version="0.5.9";var h=function(){return Array.prototype.unshift.call(arguments,"[VANTA]"),console.error.apply(this,arguments)};u.VantaBase=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(r(this,e),!o)return!1;if(u.current=this,this.windowMouseMoveWrapper=this.windowMouseMoveWrapper.bind(this),this.windowTouchWrapper=this.windowTouchWrapper.bind(this),this.resize=this.resize.bind(this),this.animationLoop=this.animationLoop.bind(this),this.restart=this.restart.bind(this),this.options=Object(i.c)({mouseControls:!0,touchControls:!0,minHeight:200,minWidth:200,scale:1,scaleMobile:1},this.defaultOptions),(t instanceof HTMLElement||"string"==typeof t)&&(t={el:t}),Object(i.c)(this.options,t),this.options.THREE&&(s=this.options.THREE),this.el=this.options.el,null==this.el)h('Instance needs "el" param!');else if(!(this.options.el instanceof HTMLElement)){var n=this.el;if(this.el=Object(i.f)(n),!this.el)return void h("Cannot find element",n)}this.prepareEl(),this.initThree(),this.setSize();try{this.init()}catch(t){return h("Init error",t),this.renderer&&this.renderer.domElement&&this.el.removeChild(this.renderer.domElement),void(this.options.backgroundColor&&(console.log("[VANTA] Falling back to backgroundColor"),this.el.style.background=Object(i.a)(this.options.backgroundColor)))}var a=window.addEventListener;a("resize",this.resize),this.resize(),this.animationLoop(),this.options.mouseControls&&(a("scroll",this.windowMouseMoveWrapper),a("mousemove",this.windowMouseMoveWrapper)),this.options.touchControls&&(a("touchstart",this.windowTouchWrapper),a("touchmove",this.windowTouchWrapper))}return a(e,[{key:"setOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Object(i.c)(this.options,e)}},{key:"prepareEl",value:function(){var e,t;if("undefined"!=typeof Node&&Node.TEXT_NODE)for(e=0;e<this.el.childNodes.length;e++){var n=this.el.childNodes[e];if(n.nodeType===Node.TEXT_NODE){var i=document.createElement("span");i.textContent=n.textContent,n.parentElement.insertBefore(i,n),n.remove()}}for(e=0;e<this.el.children.length;e++)t=this.el.children[e],"static"===getComputedStyle(t).position&&(t.style.position="relative"),"auto"===getComputedStyle(t).zIndex&&(t.style.zIndex=1);"static"===getComputedStyle(this.el).position&&(this.el.style.position="relative")}},{key:"applyCanvasStyles",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};Object(i.c)(e.style,{position:"absolute",zIndex:0,top:0,left:0,background:""}),Object(i.c)(e.style,t),e.classList.add("vanta-canvas")}},{key:"initThree",value:function(){s.WebGLRenderer?(this.renderer=new s.WebGLRenderer({alpha:!0,antialias:!0}),this.el.appendChild(this.renderer.domElement),this.applyCanvasStyles(this.renderer.domElement),isNaN(this.options.backgroundAlpha)&&(this.options.backgroundAlpha=1),this.scene=new s.Scene):console.warn("[VANTA] No THREE defined on window")}},{key:"getCanvasElement",value:function(){return this.renderer?this.renderer.domElement:this.p5renderer?this.p5renderer.canvas:void 0}},{key:"windowMouseMoveWrapper",value:function(e){var t=this.getCanvasElement();if(!t)return!1;var n=t.getBoundingClientRect(),i=e.clientX-n.left,o=e.clientY-n.top;i>=0&&o>=0&&i<=n.width&&o<=n.height&&(this.mouseX=i,this.mouseY=o,this.options.mouseEase||this.triggerMouseMove(i,o))}},{key:"windowTouchWrapper",value:function(e){if(1===e.touches.length){var t=this.getCanvasElement();if(!t)return!1;var n=t.getBoundingClientRect(),i=e.touches[0].clientX-n.left,o=e.touches[0].clientY-n.top;i>=0&&o>=0&&i<=n.width&&o<=n.height&&(this.mouseX=i,this.mouseY=o,this.options.mouseEase||this.triggerMouseMove(i,o))}}},{key:"triggerMouseMove",value:function(e,t){this.uniforms&&(this.uniforms.u_mouse.value.x=e/this.scale,this.uniforms.u_mouse.value.y=t/this.scale);var n=e/this.width,i=t/this.height;"function"==typeof this.onMouseMove&&this.onMouseMove(n,i)}},{key:"setSize",value:function(){this.scale||(this.scale=1),Object(i.e)()&&this.options.scaleMobile?this.scale=this.options.scaleMobile:this.options.scale&&(this.scale=this.options.scale),this.width=Math.max(this.el.offsetWidth,this.options.minWidth),this.height=Math.max(this.el.offsetHeight,this.options.minHeight)}},{key:"resize",value:function(){this.setSize(),this.camera&&(this.camera.aspect=this.width/this.height,"function"==typeof this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix()),this.renderer&&(this.renderer.setSize(this.width,this.height),this.renderer.setPixelRatio(window.devicePixelRatio/this.scale)),"function"==typeof this.onResize&&this.onResize()}},{key:"isOnScreen",value:function(){var e=this.el.offsetHeight,t=this.el.getBoundingClientRect(),n=window.pageYOffset||(document.documentElement||document.body.parentNode||document.body).scrollTop,i=t.top+n;return i-window.innerHeight<=n&&n<=i+e}},{key:"animationLoop",value:function(){return this.t||(this.t=0),this.t+=1,this.t2||(this.t2=0),this.t2+=this.options.speed||1,this.uniforms&&(this.uniforms.u_time.value=.016667*this.t2),this.options.mouseEase&&(this.mouseEaseX=this.mouseEaseX||this.mouseX||0,this.mouseEaseY=this.mouseEaseY||this.mouseY||0,Math.abs(this.mouseEaseX-this.mouseX)+Math.abs(this.mouseEaseY-this.mouseY)>.1&&(this.mouseEaseX=this.mouseEaseX+.05*(this.mouseX-this.mouseEaseX),this.mouseEaseY=this.mouseEaseY+.05*(this.mouseY-this.mouseEaseY),this.triggerMouseMove(this.mouseEaseX,this.mouseEaseY))),(this.isOnScreen()||this.options.forceAnimate)&&("function"==typeof this.onUpdate&&this.onUpdate(),this.scene&&this.camera&&(this.renderer.render(this.scene,this.camera),this.renderer.setClearColor(this.options.backgroundColor,this.options.backgroundAlpha)),this.fps&&this.fps.update&&this.fps.update()),this.req=window.requestAnimationFrame(this.animationLoop)}},{key:"restart",value:function(){if(this.scene)for(;this.scene.children.length;)this.scene.remove(this.scene.children[0]);"function"==typeof this.onRestart&&this.onRestart(),this.init()}},{key:"init",value:function(){"function"==typeof this.onInit&&this.onInit()}},{key:"destroy",value:function(){"function"==typeof this.onDestroy&&this.onDestroy();var e=window.removeEventListener;e("touchstart",this.windowTouchWrapper),e("touchmove",this.windowTouchWrapper),e("scroll",this.windowMouseMoveWrapper),e("mousemove",this.windowMouseMoveWrapper),e("resize",this.resize),window.cancelAnimationFrame(this.req),this.renderer&&(this.renderer.domElement&&this.el.removeChild(this.renderer.domElement),this.renderer=null,this.scene=null)}}]),e}(),t.b=u.VantaBase},8:function(e,t,n){"use strict";n.r(t);var u=n(1),h=n(0),c=function(e){function t(){return r(this,t),i(this,o(t).apply(this,arguments))}return s(t,e),a(t,[{key:"onInit",value:function(){var e=this.camera=new THREE.PerspectiveCamera(50,this.width/this.height,.1,5e3);e.position.x=0,e.position.y=250,e.position.z=50,e.tx=0,e.ty=50,e.tz=350,e.lookAt(0,0,0),this.scene.add(e);var t,n,i,o,s,r,a,u=this.starsGeometry=new THREE.Geometry,c=this.options.spacing;for(t=i=-30;i<=30;t=++i)for(n=o=-30;o<=30;n=++o)(s=new THREE.Vector3).x=t*c+c/2,s.y=Object(h.h)(0,5)-150,s.z=n*c+c/2,u.vertices.push(s);if(r=new THREE.PointsMaterial({color:this.options.color,size:this.options.size}),a=this.starField=new THREE.Points(u,r),this.scene.add(a),this.options.showLines){var l=new THREE.LineBasicMaterial({color:this.options.color2}),f=new THREE.Geometry;for(t=0;t<200;t++){var p=Object(h.h)(40,60),d=p+Object(h.h)(12,20),m=Object(h.h)(-1,1),v=Math.sqrt(1-m*m),y=Object(h.h)(0,2*Math.PI),b=Math.sin(y)*v,w=Math.cos(y)*v;f.vertices.push(new THREE.Vector3(w*p,b*p,m*p)),f.vertices.push(new THREE.Vector3(w*d,b*d,m*d))}this.linesMesh=new THREE.LineSegments(f,l),this.scene.add(this.linesMesh)}}},{key:"onUpdate",value:function(){var e=this.starsGeometry;this.starField;for(var t=0;t<e.vertices.length;t++){var n=e.vertices[t];n.y+=.1*Math.sin(.02*n.z+.015*n.x+.02*this.t)}e.verticesNeedUpdate=!0;var i=this.camera;i.position.x+=.003*(i.tx-i.position.x),i.position.y+=.003*(i.ty-i.position.y),i.position.z+=.003*(i.tz-i.position.z),i.lookAt(0,0,0),this.linesMesh&&(this.linesMesh.rotation.z+=.002,this.linesMesh.rotation.x+=8e-4,this.linesMesh.rotation.y+=5e-4)}},{key:"onMouseMove",value:function(e,t){this.camera.tx=100*(e-.5),this.camera.ty=50+50*t}},{key:"onRestart",value:function(){this.scene.remove(this.starField)}}],[{key:"initClass",value:function(){this.prototype.defaultOptions={color:16746528,color2:16746528,backgroundColor:2236962,size:3,spacing:35,showLines:!0}}}]),t}(u.b);c.initClass(),t.default=u.a.register("DOTS",c)}})},232:function(e,t,n){var i=n(233),o=n(83);e.exports=function(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?o(e):t}},233:function(e,t){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(t){return"function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?e.exports=i=function(e){return n(e)}:e.exports=i=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":n(e)},i(t)}e.exports=i},234:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},235:function(e,t,n){var i=n(236);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)}},236:function(e,t){function n(t,i){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,i)}e.exports=n},237:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},238:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}e.exports=function(e,t,i){return t&&n(e.prototype,t),i&&n(e,i),e}},239:function(e,t,n){"use strict";var i=n(4),o=n(26),s=n(42),r=n(105),a=n(80),u=n(9),h=n(81).f,c=n(104).f,l=n(12).f,f=n(148).trim,p=i.Number,d=p,m=p.prototype,v="Number"==s(n(61)(m)),y="trim"in String.prototype,b=function(e){var t=a(e,!1);if("string"==typeof t&&t.length>2){var n,i,o,s=(t=y?t.trim():f(t,3)).charCodeAt(0);if(43===s||45===s){if(88===(n=t.charCodeAt(2))||120===n)return NaN}else if(48===s){switch(t.charCodeAt(1)){case 66:case 98:i=2,o=49;break;case 79:case 111:i=8,o=55;break;default:return+t}for(var r,u=t.slice(2),h=0,c=u.length;h<c;h++)if((r=u.charCodeAt(h))<48||r>o)return NaN;return parseInt(u,i)}}return+t};if(!p(" 0o1")||!p("0b1")||p("+0x1")){p=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof p&&(v?u((function(){m.valueOf.call(n)})):"Number"!=s(n))?r(new d(b(t)),n,p):b(t)};for(var w,g=n(11)?h(d):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),E=0;g.length>E;E++)o(d,w=g[E])&&!o(p,w)&&l(p,w,c(d,w));p.prototype=m,m.constructor=p,n(13)(i,"Number",p)}}}]);
//# sourceMappingURL=component---src-pages-index-jsx-880cfe6dd568b3b353af.js.map