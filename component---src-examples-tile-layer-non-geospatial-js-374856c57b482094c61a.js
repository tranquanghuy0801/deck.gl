(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{"5/do":function(t,e,r){"use strict";r.d(e,"a",(function(){return y}));var o=r("vuIU"),n=r("rePB"),i=r("dI71"),a=r("hAA0"),s=r("YiiH"),c=r("1+Ew"),u=r("lKxY"),l=r("pNJ/"),h=r("18Jy"),p=r("2bi0"),f={transitionDuration:300,transitionEasing:function(t){return t},transitionInterpolator:new h.a(["target","zoom"]),transitionInterruption:p.a.BREAK},d=function(t){function e(e){return e.dragMode=e.dragMode||"pan",t.call(this,l.a,e)||this}Object(i.a)(e,t);var r=e.prototype;return r._onPanRotate=function(t){return!1},r._getTransitionProps=function(){return f},e}(u.a);function m(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function g(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?m(Object(r),!0).forEach((function(e){Object(n.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var v=(new c.a).lookAt({eye:[0,0,1]});function w(t){var e=t.width,r=t.height,o=t.near,n=t.far;return e=e||1,r=r||1,(new c.a).ortho({left:-e/2,right:e/2,bottom:-r/2,top:r/2,near:o,far:n})}var b=function(t){function e(e){var r=e.width,o=e.height,n=e.near,i=void 0===n?.1:n,a=e.far,s=void 0===a?1e3:a,c=e.zoom,u=void 0===c?0:c,l=e.target,h=void 0===l?[0,0,0]:l,p=e.flipY,f=void 0===p||p,d=Math.pow(2,u);return t.call(this,g(g({},e),{},{position:h,viewMatrix:v.clone().scale([d,d*(f?-1:1),d]),projectionMatrix:w({width:r,height:o,near:i,far:s}),zoom:u}))||this}return Object(i.a)(e,t),e}(s.a),y=function(t){function e(e){return t.call(this,Object.assign({},e,{type:b}))||this}return Object(i.a)(e,t),Object(o.a)(e,[{key:"controller",get:function(){return this._getControllerProps({type:d})}}]),e}(a.a);y.displayName="OrthographicView"},"97l3":function(t,e,r){"use strict";r.r(e);var o=r("zLVn"),n=r("dI71"),i=r("q1tI"),a=r.n(i),s=r("vOnD"),c=r("lxDd"),u=r("Lw+3"),l=r("o0o1"),h=r.n(l),p=(r("yZqh"),r("HaE+")),f=(r("i8i4"),r("5VxJ")),d=r("pLLy"),m=r("5/do"),g=r("MjHq"),v=r("nPXM"),w=r("p1p/"),b=r("X8A/"),y={target:[13e3,13e3,0],zoom:-7},O="https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/image-tiles/moon.image";function _(t){var e=t.tile,r=t.bitmap;return e&&r?"    tile: x: "+e.x+", y: "+e.y+", z: "+e.z+"\n    ("+r.pixel[0]+","+r.pixel[1]+") in "+r.size.width+"x"+r.size.height:null}function x(t){var e=t.autoHighlight,r=void 0===e||e,o=t.onTilesLoad,n=Object(i.useState)(null),s=n[0],c=n[1];Object(i.useEffect)((function(){(function(){var t=Object(p.a)(h.a.mark((function t(){var e,r,o;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return O+"/moon.image.dzi",t.next=3,fetch("https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/image-tiles/moon.image/moon.image.dzi");case 3:return e=t.sent,t.next=6,e.text();case 6:r=t.sent,o=(new DOMParser).parseFromString(r,"text/xml"),0!==Number(o.getElementsByTagName("Image")[0].attributes.Overlap.value)&&console.warn("Overlap parameter is nonzero and should be 0"),c({height:Number(o.getElementsByTagName("Size")[0].attributes.Height.value),width:Number(o.getElementsByTagName("Size")[0].attributes.Width.value),tileSize:Number(o.getElementsByTagName("Image")[0].attributes.TileSize.value)});case 10:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[]);var u=s&&new g.a({pickable:r,tileSize:s.tileSize,autoHighlight:r,highlightColor:[60,60,60,100],minZoom:-7,maxZoom:0,coordinateSystem:f.a.CARTESIAN,extent:[0,0,s.width,s.height],getTileData:function(t){var e=t.x,r=t.y,o=t.z;return Object(w.a)(O+"/moon.image_files/"+(15+o)+"/"+e+"_"+r+".jpeg")},onViewportLoad:o,renderSubLayers:function(t){var e=t.tile.bbox,r=e.left,o=e.bottom,n=e.right,i=e.top,a=s.width,c=s.height;return new v.a(t,{data:null,image:t.data,bounds:[Object(b.e)(r,0,a),Object(b.e)(o,0,c),Object(b.e)(n,0,a),Object(b.e)(i,0,c)]})}});return a.a.createElement(d.a,{views:[new m.a({id:"ortho"})],layers:[u],initialViewState:y,controller:!0,getTooltip:_})}var P=r("CtqP"),j=s.c.div.withConfig({displayName:"tile-layer-non-geospatial__ImageTileDemoContainer",componentId:"sc-1w6zb90-0"})(["position:absolute;width:100%;height:100%;background:#000;"]),E=function(t){function e(){for(var e,r=arguments.length,o=new Array(r),n=0;n<r;n++)o[n]=arguments[n];return(e=t.call.apply(t,[this].concat(o))||this)._onTilesLoad=function(t){requestAnimationFrame((function(){return e.props.onStateChange({tileCount:t.length})}))},e}return Object(n.a)(e,t),e.renderInfo=function(t){return a.a.createElement("div",null,a.a.createElement("p",null,"Data source:",a.a.createElement("a",{href:"http://lroc.sese.asu.edu/posts/293"},"NASA/GSFC/Arizona State University")),a.a.createElement("div",{className:"layout"},a.a.createElement("div",{className:"stat col-1-2"},"No. of Tiles Loaded",a.a.createElement("b",null,Object(u.b)(t.tileCount||0)))))},e.prototype.render=function(){var t=this.props,e=t.params,r=Object(o.a)(t,["params"]);return a.a.createElement(j,null,a.a.createElement(x,Object.assign({},r,{autoHighlight:e.autoHighlight.value,onTilesLoad:this._onTilesLoad})))},e}(i.Component);E.title="LROC WAC Mosaic of the Lunar Nearside",E.code=c.b+"/examples/website/image-tile",E.parameters={autoHighlight:{displayName:"Highlight tile on hover",type:"checkbox",value:!1}};e.default=Object(P.a)(E)},"pNJ/":function(t,e,r){"use strict";r.d(e,"a",(function(){return f})),r.d(e,"b",(function(){return d}));var o=r("dI71"),n=r("1+Ew"),i=r("lKxY"),a=r("rBR8"),s=r("18Jy"),c=r("2bi0"),u=r("kDl2"),l={orbitAxis:"Z",rotationX:0,rotationOrbit:0,zoom:0,target:[0,0,0],minRotationX:-90,maxRotationX:90,minZoom:-1/0,maxZoom:1/0},h={transitionDuration:300,transitionEasing:function(t){return t},transitionInterpolator:new s.a(["target","zoom","rotationX","rotationOrbit"]),transitionInterruption:c.a.BREAK},p=function(t){return Math.pow(2,t)},f=function(t){function e(e){var r,o=e.makeViewport,n=e.width,i=e.height,a=e.orbitAxis,s=void 0===a?l.orbitAxis:a,c=e.rotationX,u=void 0===c?l.rotationX:c,h=e.rotationOrbit,p=void 0===h?l.rotationOrbit:h,f=e.target,d=void 0===f?l.target:f,m=e.zoom,g=void 0===m?l.zoom:m,v=e.minRotationX,w=void 0===v?l.minRotationX:v,b=e.maxRotationX,y=void 0===b?l.maxRotationX:b,O=e.minZoom,_=void 0===O?l.minZoom:O,x=e.maxZoom,P=void 0===x?l.maxZoom:x,j=e.startPanPosition,E=e.startTarget,S=e.startRotatePos,L=e.startRotationX,N=e.startRotationOrbit,z=e.startZoomPosition,T=e.startZoom;return(r=t.call(this,{width:n,height:i,orbitAxis:s,rotationX:u,rotationOrbit:p,target:d,zoom:g,minRotationX:w,maxRotationX:y,minZoom:_,maxZoom:P})||this)._state={startPanPosition:j,startTarget:E,startRotatePos:S,startRotationX:L,startRotationOrbit:N,startZoomPosition:z,startZoom:T},r.makeViewport=o,r}Object(o.a)(e,t);var r=e.prototype;return r.panStart=function(t){var e=t.pos,r=this._viewportProps.target;return this._getUpdatedState({startPanPosition:e,startTarget:r})},r.pan=function(t){var e=t.pos,r=(t.startPos,this._state),o=r.startPanPosition,i=r.startTarget,a=new n.b(e).subtract(o);return this._getUpdatedState({target:this._calculateNewTarget({startTarget:i,pixelOffset:a})})},r.panEnd=function(){return this._getUpdatedState({startPanPosition:null,startTarget:null})},r.rotateStart=function(t){var e=t.pos;return this._getUpdatedState({startRotatePos:e,startRotationX:this._viewportProps.rotationX,startRotationOrbit:this._viewportProps.rotationOrbit})},r.rotate=function(t){var e,r=t.pos,o=t.deltaAngleX,n=void 0===o?0:o,i=t.deltaAngleY,a=void 0===i?0:i,s=this._state,c=s.startRotatePos,u=s.startRotationX,l=s.startRotationOrbit,h=this._viewportProps,p=h.width,f=h.height;if(!c||!Number.isFinite(u)||!Number.isFinite(l))return this;if(r){var d=(r[0]-c[0])/p;(u<-90||u>90)&&(d*=-1),e={rotationX:u+180*((r[1]-c[1])/f),rotationOrbit:l+180*d}}else e={rotationX:u+a,rotationOrbit:l+n};return this._getUpdatedState(e)},r.rotateEnd=function(){return this._getUpdatedState({startRotationX:null,startRotationOrbit:null})},r.shortestPathFrom=function(t){var e=t.getViewportProps(),r=Object.assign({},this._viewportProps),o=r.rotationOrbit;return Math.abs(o-e.rotationOrbit)>180&&(r.rotationOrbit=o<0?o+360:o-360),r},r.zoomStart=function(t){var e=t.pos;return this._getUpdatedState({startZoomPosition:e,startTarget:this._viewportProps.target,startZoom:this._viewportProps.zoom})},r.zoom=function(t){var e=t.pos,r=t.startPos,o=t.scale,n=this._viewportProps,i=n.zoom,a=n.width,s=n.height,c=n.target,u=this._state,l=u.startZoom,h=u.startZoomPosition,f=u.startTarget;Number.isFinite(l)||(l=i,f=c,h=r||e);var d=this._calculateNewZoom({scale:o,startZoom:l}),m=p(l),g=p(d),v=(a/2-h[0])*(g/m-1),w=(s/2-h[1])*(g/m-1);return this._getUpdatedState({zoom:d,target:this._calculateNewTarget({startTarget:f,zoom:d,pixelOffset:[v,w]})})},r.zoomEnd=function(){return this._getUpdatedState({startZoomPosition:null,startTarget:null,startZoom:null})},r.zoomIn=function(t){return void 0===t&&(t=2),this._getUpdatedState({zoom:this._calculateNewZoom({scale:t})})},r.zoomOut=function(t){return void 0===t&&(t=2),this._getUpdatedState({zoom:this._calculateNewZoom({scale:1/t})})},r.moveLeft=function(t){void 0===t&&(t=50);var e=[-t,0];return this._getUpdatedState({target:this._calculateNewTarget({pixelOffset:e})})},r.moveRight=function(t){void 0===t&&(t=50);var e=[t,0];return this._getUpdatedState({target:this._calculateNewTarget({pixelOffset:e})})},r.moveUp=function(t){void 0===t&&(t=50);var e=[0,-t];return this._getUpdatedState({target:this._calculateNewTarget({pixelOffset:e})})},r.moveDown=function(t){void 0===t&&(t=50);var e=[0,t];return this._getUpdatedState({target:this._calculateNewTarget({pixelOffset:e})})},r.rotateLeft=function(t){return void 0===t&&(t=15),this._getUpdatedState({rotationOrbit:this._viewportProps.rotationOrbit-t})},r.rotateRight=function(t){return void 0===t&&(t=15),this._getUpdatedState({rotationOrbit:this._viewportProps.rotationOrbit+t})},r.rotateUp=function(t){return void 0===t&&(t=10),this._getUpdatedState({rotationX:this._viewportProps.rotationX-t})},r.rotateDown=function(t){return void 0===t&&(t=10),this._getUpdatedState({rotationX:this._viewportProps.rotationX+t})},r._calculateNewZoom=function(t){var e=t.scale,r=t.startZoom,o=this._viewportProps,i=o.maxZoom,a=o.minZoom;Number.isFinite(r)||(r=this._viewportProps.zoom);var s=r+Math.log2(e);return Object(n.e)(s,a,i)},r._calculateNewTarget=function(t){var e=t.startTarget,r=t.zoom,o=t.pixelOffset,n=Object.assign({},this._viewportProps);Number.isFinite(r)&&(n.zoom=r),e&&(n.target=e);var i=this.makeViewport(n),a=i.project(n.target);return i.unproject([a[0]-o[0],a[1]-o[1],a[2]])},r._getUpdatedState=function(t){return new e(Object.assign({},this._viewportProps,this._state,t))},r._applyConstraints=function(t){var e=t.maxZoom,r=t.minZoom,o=t.zoom,i=t.maxRotationX,a=t.minRotationX,s=t.rotationOrbit;return t.zoom=Object(n.e)(o,r,e),t.rotationX=Object(n.e)(t.rotationX,a,i),(s<-180||s>180)&&(t.rotationOrbit=Object(u.e)(s+180,360)-180),t},e}(a.a),d=function(t){function e(e){return t.call(this,f,e)||this}return Object(o.a)(e,t),e.prototype._getTransitionProps=function(){return h},e}(i.a)},yZqh:function(t,e,r){var o=function(t){"use strict";var e=Object.prototype,r=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},n=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",a=o.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(E){s=function(t,e,r){return t[e]=r}}function c(t,e,r,o){var n=e&&e.prototype instanceof h?e:h,i=Object.create(n.prototype),a=new x(o||[]);return i._invoke=function(t,e,r){var o="suspendedStart";return function(n,i){if("executing"===o)throw new Error("Generator is already running");if("completed"===o){if("throw"===n)throw i;return j()}for(r.method=n,r.arg=i;;){var a=r.delegate;if(a){var s=y(a,r);if(s){if(s===l)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===o)throw o="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o="executing";var c=u(t,e,r);if("normal"===c.type){if(o=r.done?"completed":"suspendedYield",c.arg===l)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(o="completed",r.method="throw",r.arg=c.arg)}}}(t,r,a),i}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(E){return{type:"throw",arg:E}}}t.wrap=c;var l={};function h(){}function p(){}function f(){}var d={};d[n]=function(){return this};var m=Object.getPrototypeOf,g=m&&m(m(P([])));g&&g!==e&&r.call(g,n)&&(d=g);var v=f.prototype=h.prototype=Object.create(d);function w(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function b(t,e){var o;this._invoke=function(n,i){function a(){return new e((function(o,a){!function o(n,i,a,s){var c=u(t[n],t,i);if("throw"!==c.type){var l=c.arg,h=l.value;return h&&"object"==typeof h&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){o("next",t,a,s)}),(function(t){o("throw",t,a,s)})):e.resolve(h).then((function(t){l.value=t,a(l)}),(function(t){return o("throw",t,a,s)}))}s(c.arg)}(n,i,o,a)}))}return o=o?o.then(a,a):a()}}function y(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,y(t,e),"throw"===e.method))return l;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var o=u(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,l;var n=o.arg;return n?n.done?(e[t.resultName]=n.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,l):n:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,l)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function x(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function P(t){if(t){var e=t[n];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function e(){for(;++o<t.length;)if(r.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:j}}function j(){return{value:void 0,done:!0}}return p.prototype=v.constructor=f,f.constructor=p,p.displayName=s(f,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,f):(t.__proto__=f,s(t,a,"GeneratorFunction")),t.prototype=Object.create(v),t},t.awrap=function(t){return{__await:t}},w(b.prototype),b.prototype[i]=function(){return this},t.AsyncIterator=b,t.async=function(e,r,o,n,i){void 0===i&&(i=Promise);var a=new b(c(e,r,o,n),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},w(v),s(v,a,"Generator"),v[n]=function(){return this},v.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var o=e.pop();if(o in t)return r.value=o,r.done=!1,r}return r.done=!0,r}},t.values=P,x.prototype={constructor:x,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(_),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(r,o){return a.type="throw",a.arg=t,e.next=r,o&&(e.method="next",e.arg=void 0),!!o}for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n],a=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var s=r.call(i,"catchLoc"),c=r.call(i,"finallyLoc");if(s&&c){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var o=this.tryEntries.length-1;o>=0;--o){var n=this.tryEntries[o];if(n.tryLoc<=this.prev&&r.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,l):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),l},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),_(r),l}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var o=r.completion;if("throw"===o.type){var n=o.arg;_(r)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:P(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),l}},t}(t.exports);try{regeneratorRuntime=o}catch(n){Function("r","regeneratorRuntime = r")(o)}}}]);