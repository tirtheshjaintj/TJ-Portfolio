(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3890],{93096:function(e,t,i){var n="Expected a function",s=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,a=/^0o[0-7]+$/i,h=parseInt,c="object"==typeof i.g&&i.g&&i.g.Object===Object&&i.g,u="object"==typeof self&&self&&self.Object===Object&&self,p=c||u||Function("return this")(),l=Object.prototype.toString,d=Math.max,f=Math.min,m=function(){return p.Date.now()};function v(e,t,i){var s,r,o,a,h,c,u=0,p=!1,l=!1,v=!0;if("function"!=typeof e)throw new TypeError(n);function w(t){var i=s,n=r;return s=r=void 0,u=t,a=e.apply(n,i)}function y(e){return u=e,h=setTimeout(z,t),p?w(e):a}function _(e){var i=e-c;return void 0===c||i>=t||i<0||l&&e-u>=o}function z(){var e=m();if(_(e))return x(e);h=setTimeout(z,function(e){var i=t-(e-c);return l?f(i,o-(e-u)):i}(e))}function x(e){return h=void 0,v&&s?w(e):(s=r=void 0,a)}function R(){var e=m(),i=_(e);if(s=arguments,r=this,c=e,i){if(void 0===h)return y(c);if(l)return h=setTimeout(z,t),w(c)}return void 0===h&&(h=setTimeout(z,t)),a}return t=b(t)||0,g(i)&&(p=!!i.leading,o=(l="maxWait"in i)?d(b(i.maxWait)||0,t):o,v="trailing"in i?!!i.trailing:v),R.cancel=function(){void 0!==h&&clearTimeout(h),u=0,s=c=r=h=void 0},R.flush=function(){return void 0===h?a:x(m())},R}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==l.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(s,"");var i=o.test(e);return i||a.test(e)?h(e.slice(2),i?2:8):r.test(e)?NaN:+e}e.exports=function(e,t,i){var s=!0,r=!0;if("function"!=typeof e)throw new TypeError(n);return g(i)&&(s="leading"in i?!!i.leading:s,r="trailing"in i?!!i.trailing:r),v(e,t,{leading:s,maxWait:t,trailing:r})}},4727:function(){Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{value:function(e,t){if(null==this)throw new TypeError('"this" is null or not defined');var i=Object(this),n=i.length>>>0;if(0===n)return!1;var s,r,o=0|t,a=Math.max(o>=0?o:n-Math.abs(o),0);for(;a<n;){if((s=i[a])===(r=e)||"number"===typeof s&&"number"===typeof r&&isNaN(s)&&isNaN(r))return!0;a++}return!1}}),Math.sign||(Math.sign=function(e){return(e>0)-(e<0)||+e})},80260:function(e,t,i){"use strict";i.d(t,{gs:function(){return d},jW:function(){return $},nN:function(){return p}});var n=i(87462),s=i(94334),r=i(4942);class o{static isBrowser(){return"undefined"!==typeof window}static isOpera(){return o.isBrowser()&&(!!window.opera||navigator.userAgent.indexOf(" OPR/")>=0)}static isFirefox(){return o.isBrowser()&&"undefined"!==typeof InstallTrigger}static isSafari(){return!!o.isBrowser()&&/^((?!chrome|android).)*safari/i.test(navigator.userAgent)}static isIE(){return o.isBrowser()&&!!document.documentMode}static isEdge(){return o.isBrowser()&&!o.isIE()&&!!window.StyleMedia}static isChrome(){return o.isBrowser()&&!!window.chrome&&!!window.chrome.webstore}static isBlink(){return o.isBrowser()&&(o.isChrome()||o.isOpera())&&!!window.CSS}static getUserAgent(){return"undefined"===typeof navigator?"":navigator.userAgent}static isAndroid(){return o.isBrowser()&&o.getUserAgent().match(/Android/i)}static isBlackBerry(){return o.isBrowser()&&o.getUserAgent().match(/BlackBerry/i)}static isIOS(){return o.isBrowser()&&o.getUserAgent().match(/iPhone|iPad|iPod/i)}static isOpera(){return o.isBrowser()&&o.getUserAgent().match(/Opera Mini/i)}static isWindows(){return o.isBrowser()&&o.isWindowsDesktop()||o.isWindowsMobile()}static isWindowsMobile(){return o.isBrowser()&&o.getUserAgent().match(/IEMobile/i)}static isWindowsDesktop(){return o.isBrowser()&&o.getUserAgent().match(/WPDesktop/i)}static isMobile(){return o.isBrowser()&&(o.isWindowsMobile()||o.isBlackBerry()||o.isAndroid()||o.isIOS())}}const a=e=>Object.keys(e).reduce(((t,i)=>"data-"===i.substr(0,5)?(0,s.Z)({},t,{[i]:e[i]}):t),{});var h=i(45697),c=i.n(h),u=i(67294);class p extends u.Component{static isA(e){return!!e&&e.type===p}constructor(e){super(e),(0,r.Z)(this,"ref",u.createRef()),(0,r.Z)(this,"onMouseMove",(e=>{if(this.state.active){const t=this.ref.current;this.props.events.emit("resize",{index:this.props.index,domElement:t,event:e}),this.props.onResize&&this.props.onResize({component:this,domElement:t}),e.stopPropagation(),e.preventDefault()}})),(0,r.Z)(this,"onMouseDown",(e=>{this.setState({active:!0}),this.props.onStartResize&&this.props.onStartResize({domElement:this.ref.current,component:this})||this.props.events.emit("startResize",{index:this.props.index,event:e})})),(0,r.Z)(this,"onMouseUp",(e=>{this.state.active&&(this.setState({active:!1}),this.props.onStopResize&&this.props.onStopResize({domElement:this.ref.current,component:this}),this.props.events.emit("stopResize",{index:this.props.index,event:e}))})),this.state={active:!1},this.document=e.document}componentDidMount(){this.document&&(this.document.addEventListener("touchend",this.onMouseUp),this.document.addEventListener("mouseup",this.onMouseUp),this.document.addEventListener("mousemove",this.onMouseMove,{passive:!1}),this.document.addEventListener("touchmove",this.onMouseMove,{passive:!1}))}componentWillUnmount(){this.document&&(this.document.removeEventListener("mouseup",this.onMouseUp),this.document.removeEventListener("touchend",this.onMouseUp),this.document.removeEventListener("mousemove",this.onMouseMove),this.document.removeEventListener("touchmove",this.onMouseMove),this.state.active&&this.props.events.emit("stopResize",{index:this.props.index,event:null}))}render(){const e=[o.isMobile()?"reflex-thin":"",...this.props.className.split(" "),this.state.active?"active":"","reflex-splitter"].join(" ").trim();return u.createElement("div",(0,n.Z)({},a(this.props),{onTouchStart:this.onMouseDown,onMouseDown:this.onMouseDown,style:this.props.style,className:e,id:this.props.id,ref:this.ref}),this.props.children)}}(0,r.Z)(p,"propTypes",{children:c().oneOfType([c().arrayOf(c().node),c().node]),onStartResize:c().func,onStopResize:c().func,className:c().string,propagate:c().bool,onResize:c().func,style:c().object}),(0,r.Z)(p,"defaultProps",{document:"undefined"!==typeof document?document:null,onStartResize:null,onStopResize:null,propagate:!1,onResize:null,className:"",style:{}});var l=class{constructor(){this._events={}}on(e,t){return e.split(" ").forEach((e=>{this._events[e]=this._events[e]||[],this._events[e].push(t)})),this}off(e,t){if(void 0!=e)return e.split(" ").forEach((e=>{e in this._events!==!1&&(t?this._events[e].splice(this._events[e].indexOf(t),1):this._events[e]=[])})),this;this._events={}}emit(e){if(void 0!==this._events[e])for(var t=this._events[e].slice(),i=0;i<t.length;++i){var n=t[i].apply(this,Array.prototype.slice.call(arguments,1));if(void 0!==n)return n}}};i(4727);class d extends u.Component{constructor(e){super(e),(0,r.Z)(this,"onWindowResize",(()=>{this.setState({flexData:this.computeFlexData()})})),(0,r.Z)(this,"onStartResize",(e=>{const t=e.event.changedTouches?e.event.changedTouches[0]:e.event;if("horizontal"===this.props.orientation)document.body.classList.add("reflex-row-resize"),this.previousPos=t.clientY;else document.body.classList.add("reflex-col-resize"),this.previousPos=t.clientX;this.elements=[this.children[e.index-1],this.children[e.index+1]],this.emitElementsEvent(this.elements,"onStartResize")})),(0,r.Z)(this,"onResize",(e=>{const t=e.event.changedTouches?e.event.changedTouches[0]:e.event,i=this.getOffset(t,e.domElement);if("horizontal"===this.props.orientation)this.previousPos=t.clientY;else this.previousPos=t.clientX;if(i){const t=this.computeAvailableOffset(e.index,i);t&&(this.elements=this.dispatchOffset(e.index,t),this.adjustFlex(this.elements),this.setState({resizing:!0},(()=>{this.emitElementsEvent(this.elements,"onResize")})))}})),(0,r.Z)(this,"onStopResize",(e=>{document.body.classList.remove("reflex-row-resize"),document.body.classList.remove("reflex-col-resize");const t=this.elements?this.elements.map((e=>e.ref)):[],i=this.children.filter((e=>!p.isA(e)&&t.includes(e.ref)));this.emitElementsEvent(i,"onStopResize"),this.setState({resizing:!1})})),(0,r.Z)(this,"onElementSize",(e=>new Promise((t=>{try{const i=e.index,n=this.getSize(this.children[i]),s=e.size-n,r=e.direction,o=i+r,a=this.computeAvailableOffset(o,r*s);this.elements=null,a&&(this.elements=this.dispatchOffset(o,a),this.adjustFlex(this.elements)),this.setState(this.state,(()=>{this.emitElementsEvent(this.elements,"onResize"),t()}))}catch(i){console.log(i)}})))),this.events=new l,this.children=[],this.state={flexData:[]},this.ref=u.createRef()}componentDidMount(){const e=this.computeFlexData(),{windowResizeAware:t}=this.props;t&&window.addEventListener("resize",this.onWindowResize),this.setState({windowResizeAware:t,flexData:e}),this.events.on("element.size",this.onElementSize),this.events.on("startResize",this.onStartResize),this.events.on("stopResize",this.onStopResize),this.events.on("resize",this.onResize)}componentWillUnmount(){this.events.off(),window.removeEventListener("resize",this.onWindowResize)}getValidChildren(e=this.props){return this.toArray(e.children).filter((e=>!!e))}componentDidUpdate(e,t){const i=this.getValidChildren(this.props);if(i.length!==this.state.flexData.length||e.orientation!==this.props.orientation||this.flexHasChanged(e)){const e=this.computeFlexData(i,this.props);this.setState({flexData:e})}this.props.windowResizeAware!==this.state.windowResizeAware&&(this.props.windowResizeAware?window.addEventListener("resize",this.onWindowResize):window.removeEventListener("resize",this.onWindowResize),this.setState({windowResizeAware:this.props.windowResizeAware}))}flexHasChanged(e){const t=this.getValidChildren(e).map((e=>e.props.flex||0));return!this.getValidChildren().map((e=>e.props.flex||0)).every(((e,i)=>e===t[i]))}getSize(e){var t,i;const n=null===e||void 0===e?void 0:e.ref.current;return"horizontal"===this.props.orientation?null!==(t=null===n||void 0===n?void 0:n.offsetHeight)&&void 0!==t?t:0:null!==(i=null===n||void 0===n?void 0:n.offsetWidth)&&void 0!==i?i:0}getOffset(e,t){const{top:i,bottom:n,left:s,right:r}=t.getBoundingClientRect();switch(this.props.orientation){case"horizontal":{const t=e.clientY-this.previousPos;if(t>0){if(e.clientY>=i)return t}else if(e.clientY<=n)return t;break}default:{const t=e.clientX-this.previousPos;if(t>0){if(e.clientX>s)return t}else if(e.clientX<r)return t}}return 0}adjustFlex(e){const t=e.reduce(((t,i)=>{const n=i.props.index;return t+(i.props.flex-this.state.flexData[n].flex)/e.length}),0);e.forEach((e=>{this.state.flexData[e.props.index].flex+=t}))}computeAvailableOffset(e,t){const i=this.computeAvailableStretch(e,t),n=this.computeAvailableShrink(e,t);return Math.min(i,n)*Math.sign(t)}checkPropagate(e,t){if(t>0){if(e<this.children.length-2){const t=this.children[e+2];return p.isA(t)&&t.props.propagate}}else if(e>2){const t=this.children[e-2];return p.isA(t)&&t.props.propagate}return!1}computeAvailableStretch(e,t){var i;const n=t<0?e+1:e-1,s=this.children[n],r=this.getSize(s),o=(null!==(i=null===s||void 0===s?void 0:s.props.maxSize)&&void 0!==i?i:0)-r;if(o<Math.abs(t)&&this.checkPropagate(e,-1*t)){const i=Math.sign(t)*(Math.abs(t)-o);return o+this.computeAvailableStretch(t<0?e+2:e-2,i)}return Math.min(o,Math.abs(t))}computeAvailableShrink(e,t){var i;const n=t>0?e+1:e-1,s=this.children[n],r=this.getSize(s)-Math.max(null!==(i=null===s||void 0===s?void 0:s.props.minSize)&&void 0!==i?i:0,0);if(r<Math.abs(t)&&this.checkPropagate(e,t)){const i=Math.sign(t)*(Math.abs(t)-r);return r+this.computeAvailableShrink(t>0?e+2:e-2,i)}return Math.min(r,Math.abs(t))}computePixelFlex(e=this.props.orientation){return this.ref.current?"horizontal"===e?0===this.ref.current.offsetHeight?(console.warn("Found ReflexContainer with height=0, this will cause invalid behavior..."),console.warn(this.ref.current),0):1/this.ref.current.offsetHeight:0===this.ref.current.offsetWidth?(console.warn("Found ReflexContainer with width=0, this will cause invalid behavior..."),console.warn(this.ref.current),0):1/this.ref.current.offsetWidth:(console.warn("Unable to locate ReflexContainer dom node"),0)}addOffset(e,t){const i=this.getSize(e),n=e.props.index,s=Math.max(i+t,0),r=this.state.flexData[n].flex,o=r>0?r*s/i:this.computePixelFlex()*s;this.state.flexData[n].flex=!isFinite(o)||isNaN(o)?0:o}dispatchStretch(e,t){const i=t<0?e+1:e-1;if(i<0||i>this.children.length-1)return[];const n=this.children[i],s=this.getSize(n),r=Math.min(n.props.maxSize,s+Math.abs(t))-s;if(this.addOffset(n,r),r<Math.abs(t)){const i=e-2*Math.sign(t),s=Math.sign(t)*(Math.abs(t)-r);return[n,...this.dispatchStretch(i,s)]}return[n]}dispatchShrink(e,t){const i=t>0?e+1:e-1;if(i<0||i>this.children.length-1)return[];const n=this.children[i],s=this.getSize(n),r=Math.max(n.props.minSize,s-Math.abs(t))-s;if(this.addOffset(n,r),Math.abs(r)<Math.abs(t)){const i=e+2*Math.sign(t),s=Math.sign(t)*(Math.abs(t)+r);return[n,...this.dispatchShrink(i,s)]}return[n]}dispatchOffset(e,t){return[...this.dispatchStretch(e,t),...this.dispatchShrink(e,t)]}emitElementsEvent(e,t){this.toArray(e).forEach((e=>{e.props[t]&&e.props[t]({domElement:e.ref.current,component:e})}))}computeFlexData(e=this.getValidChildren(),t=this.props){const i=this.computePixelFlex(t.orientation),n=e.map((e=>{const t=e.props;return{maxFlex:(t.maxSize||Number.MAX_VALUE)*i,sizeFlex:(t.size||Number.MAX_VALUE)*i,minFlex:(t.minSize||1)*i,constrained:void 0!==t.flex,flex:t.flex||0,type:e.type}})),r=(e,t=0)=>{let i=!1;const n=(e=>e.reduce(((e,t)=>p.isA(t)||t.constrained?e:e+1),0))(e),o=(e=>e.reduce(((e,t)=>!p.isA(t)&&t.constrained?e-t.flex:e),1))(e),a=e.map((e=>{if(p.isA(e))return e;const t=e.constrained?e.flex:o/n,r=Math.min(e.sizeFlex,Math.min(e.maxFlex,Math.max(e.minFlex,t))),a=e.constrained||r!==t;return i=i||a,(0,s.Z)({},e,{flex:r,constrained:a})}));return i&&t<this.props.maxRecDepth?r(a,t+1):a};return r(n).map((e=>({flex:p.isA(e)?0:e.flex,ref:u.createRef()})))}toArray(e){return e?Array.isArray(e)?e:[e]:[]}render(){const e=[this.state.resizing?"reflex-resizing":"",...this.props.className.split(" "),this.props.orientation,"reflex-container"].join(" ").trim();return this.children=u.Children.map(this.getValidChildren(),((e,t)=>{if(t>this.state.flexData.length-1)return u.createElement("div",null);const i=this.state.flexData[t],n=(0,s.Z)({},e.props,{maxSize:e.props.maxSize||Number.MAX_VALUE,orientation:this.props.orientation,minSize:e.props.minSize||1,events:this.events,flex:i.flex,ref:i.ref,index:t});return u.cloneElement(e,n)})),u.createElement("div",(0,n.Z)({},a(this.props),{style:this.props.style,className:e,ref:this.ref}),this.children)}}(0,r.Z)(d,"propTypes",{windowResizeAware:c().bool,orientation:c().oneOf(["horizontal","vertical"]),maxRecDepth:c().number,className:c().string,style:c().object}),(0,r.Z)(d,"defaultProps",{orientation:"horizontal",windowResizeAware:!1,maxRecDepth:100,className:"",style:{}});class f extends u.Component{static isA(e){return!!e&&e.type===f}constructor(e){super(e),(0,r.Z)(this,"ref",u.createRef()),(0,r.Z)(this,"onMouseMove",(e=>{if(this.state.active){const t=this.ref.current;this.props.events.emit("resize",{index:this.props.index,domElement:t,event:e}),this.props.onResize&&this.props.onResize({component:this,domElement:t}),e.stopPropagation(),e.preventDefault()}})),(0,r.Z)(this,"onMouseDown",(e=>{this.setState({active:!0}),this.props.onStartResize&&this.props.onStartResize({domElement:this.ref.current,component:this})||this.props.events.emit("startResize",{index:this.props.index,event:e})})),(0,r.Z)(this,"onMouseUp",(e=>{this.state.active&&(this.setState({active:!1}),this.props.onStopResize&&this.props.onStopResize({domElement:this.ref.current,component:this}),this.props.events.emit("stopResize",{index:this.props.index,event:e}))})),this.state={active:!1},this.document=e.document}componentDidMount(){this.document&&(this.document.addEventListener("touchend",this.onMouseUp),this.document.addEventListener("mouseup",this.onMouseUp),this.document.addEventListener("mousemove",this.onMouseMove,{passive:!1}),this.document.addEventListener("touchmove",this.onMouseMove,{passive:!1}))}componentWillUnmount(){this.document&&(this.document.removeEventListener("mouseup",this.onMouseUp),this.document.removeEventListener("touchend",this.onMouseUp),this.document.removeEventListener("mousemove",this.onMouseMove),this.document.removeEventListener("touchmove",this.onMouseMove),this.state.active&&this.props.events.emit("stopResize",{index:this.props.index,event:null}))}render(){const e=[...this.props.className.split(" "),this.state.active?"active":"","reflex-handle"].join(" ").trim();return u.createElement("div",(0,n.Z)({},a(this.props),{onTouchStart:this.onMouseDown,onMouseDown:this.onMouseDown,style:this.props.style,className:e,id:this.props.id,ref:this.ref}),this.props.children)}}(0,r.Z)(f,"propTypes",{children:c().oneOfType([c().arrayOf(c().node),c().node]),onStartResize:c().func,onStopResize:c().func,className:c().string,propagate:c().bool,onResize:c().func,style:c().object}),(0,r.Z)(f,"defaultProps",{document:"undefined"===typeof document?null:document,onStartResize:null,onStopResize:null,propagate:!1,onResize:null,className:"",style:{}});var m=i(93096),v=i.n(m),g=i(63366),b=i(94578),w=function(){if("undefined"!==typeof Map)return Map;function e(e,t){var i=-1;return e.some((function(e,n){return e[0]===t&&(i=n,!0)})),i}return function(){function t(){this.__entries__=[]}return Object.defineProperty(t.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),t.prototype.get=function(t){var i=e(this.__entries__,t),n=this.__entries__[i];return n&&n[1]},t.prototype.set=function(t,i){var n=e(this.__entries__,t);~n?this.__entries__[n][1]=i:this.__entries__.push([t,i])},t.prototype.delete=function(t){var i=this.__entries__,n=e(i,t);~n&&i.splice(n,1)},t.prototype.has=function(t){return!!~e(this.__entries__,t)},t.prototype.clear=function(){this.__entries__.splice(0)},t.prototype.forEach=function(e,t){void 0===t&&(t=null);for(var i=0,n=this.__entries__;i<n.length;i++){var s=n[i];e.call(t,s[1],s[0])}},t}()}(),y="undefined"!==typeof window&&"undefined"!==typeof document&&window.document===document,_="undefined"!==typeof i.g&&i.g.Math===Math?i.g:"undefined"!==typeof self&&self.Math===Math?self:"undefined"!==typeof window&&window.Math===Math?window:Function("return this")(),z="function"===typeof requestAnimationFrame?requestAnimationFrame.bind(_):function(e){return setTimeout((function(){return e(Date.now())}),1e3/60)};var x=["top","right","bottom","left","width","height","size","weight"],R="undefined"!==typeof MutationObserver,M=function(){function e(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=function(e,t){var i=!1,n=!1,s=0;function r(){i&&(i=!1,e()),n&&a()}function o(){z(r)}function a(){var e=Date.now();if(i){if(e-s<2)return;n=!0}else i=!0,n=!1,setTimeout(o,t);s=e}return a}(this.refresh.bind(this),20)}return e.prototype.addObserver=function(e){~this.observers_.indexOf(e)||this.observers_.push(e),this.connected_||this.connect_()},e.prototype.removeObserver=function(e){var t=this.observers_,i=t.indexOf(e);~i&&t.splice(i,1),!t.length&&this.connected_&&this.disconnect_()},e.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},e.prototype.updateObservers_=function(){var e=this.observers_.filter((function(e){return e.gatherActive(),e.hasActive()}));return e.forEach((function(e){return e.broadcastActive()})),e.length>0},e.prototype.connect_=function(){y&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),R?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},e.prototype.disconnect_=function(){y&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},e.prototype.onTransitionEnd_=function(e){var t=e.propertyName,i=void 0===t?"":t;x.some((function(e){return!!~i.indexOf(e)}))&&this.refresh()},e.getInstance=function(){return this.instance_||(this.instance_=new e),this.instance_},e.instance_=null,e}(),E=function(e,t){for(var i=0,n=Object.keys(t);i<n.length;i++){var s=n[i];Object.defineProperty(e,s,{value:t[s],enumerable:!1,writable:!1,configurable:!0})}return e},O=function(e){return e&&e.ownerDocument&&e.ownerDocument.defaultView||_},S=j(0,0,0,0);function A(e){return parseFloat(e)||0}function D(e){for(var t=[],i=1;i<arguments.length;i++)t[i-1]=arguments[i];return t.reduce((function(t,i){return t+A(e["border-"+i+"-width"])}),0)}function T(e){var t=e.clientWidth,i=e.clientHeight;if(!t&&!i)return S;var n=O(e).getComputedStyle(e),s=function(e){for(var t={},i=0,n=["top","right","bottom","left"];i<n.length;i++){var s=n[i],r=e["padding-"+s];t[s]=A(r)}return t}(n),r=s.left+s.right,o=s.top+s.bottom,a=A(n.width),h=A(n.height);if("border-box"===n.boxSizing&&(Math.round(a+r)!==t&&(a-=D(n,"left","right")+r),Math.round(h+o)!==i&&(h-=D(n,"top","bottom")+o)),!function(e){return e===O(e).document.documentElement}(e)){var c=Math.round(a+r)-t,u=Math.round(h+o)-i;1!==Math.abs(c)&&(a-=c),1!==Math.abs(u)&&(h-=u)}return j(s.left,s.top,a,h)}var Z="undefined"!==typeof SVGGraphicsElement?function(e){return e instanceof O(e).SVGGraphicsElement}:function(e){return e instanceof O(e).SVGElement&&"function"===typeof e.getBBox};function L(e){return y?Z(e)?function(e){var t=e.getBBox();return j(0,0,t.width,t.height)}(e):T(e):S}function j(e,t,i,n){return{x:e,y:t,width:i,height:n}}var C=function(){function e(e){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=j(0,0,0,0),this.target=e}return e.prototype.isActive=function(){var e=L(this.target);return this.contentRect_=e,e.width!==this.broadcastWidth||e.height!==this.broadcastHeight},e.prototype.broadcastRect=function(){var e=this.contentRect_;return this.broadcastWidth=e.width,this.broadcastHeight=e.height,e},e}(),N=function(e,t){var i=function(e){var t=e.x,i=e.y,n=e.width,s=e.height,r="undefined"!==typeof DOMRectReadOnly?DOMRectReadOnly:Object,o=Object.create(r.prototype);return E(o,{x:t,y:i,width:n,height:s,top:i,right:t+n,bottom:s+i,left:t}),o}(t);E(this,{target:e,contentRect:i})},W=function(){function e(e,t,i){if(this.activeObservations_=[],this.observations_=new w,"function"!==typeof e)throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=e,this.controller_=t,this.callbackCtx_=i}return e.prototype.observe=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!==typeof Element&&Element instanceof Object){if(!(e instanceof O(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var t=this.observations_;t.has(e)||(t.set(e,new C(e)),this.controller_.addObserver(this),this.controller_.refresh())}},e.prototype.unobserve=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!==typeof Element&&Element instanceof Object){if(!(e instanceof O(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var t=this.observations_;t.has(e)&&(t.delete(e),t.size||this.controller_.removeObserver(this))}},e.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},e.prototype.gatherActive=function(){var e=this;this.clearActive(),this.observations_.forEach((function(t){t.isActive()&&e.activeObservations_.push(t)}))},e.prototype.broadcastActive=function(){if(this.hasActive()){var e=this.callbackCtx_,t=this.activeObservations_.map((function(e){return new N(e.target,e.broadcastRect())}));this.callback_.call(e,t,e),this.clearActive()}},e.prototype.clearActive=function(){this.activeObservations_.splice(0)},e.prototype.hasActive=function(){return this.activeObservations_.length>0},e}(),k="undefined"!==typeof WeakMap?new WeakMap:new w,B=function e(t){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var i=M.getInstance(),n=new W(t,i,this);k.set(this,n)};["observe","unobserve","disconnect"].forEach((function(e){B.prototype[e]=function(){var t;return(t=k.get(this))[e].apply(t,arguments)}}));var F="undefined"!==typeof _.ResizeObserver?_.ResizeObserver:B,P=["client","offset","scroll","bounds","margin"];function U(e){var t=[];return P.forEach((function(i){e[i]&&t.push(i)})),t}function H(e,t){var i={};if(t.indexOf("client")>-1&&(i.client={top:e.clientTop,left:e.clientLeft,width:e.clientWidth,height:e.clientHeight}),t.indexOf("offset")>-1&&(i.offset={top:e.offsetTop,left:e.offsetLeft,width:e.offsetWidth,height:e.offsetHeight}),t.indexOf("scroll")>-1&&(i.scroll={top:e.scrollTop,left:e.scrollLeft,width:e.scrollWidth,height:e.scrollHeight}),t.indexOf("bounds")>-1){var n=e.getBoundingClientRect();i.bounds={top:n.top,right:n.right,bottom:n.bottom,left:n.left,width:n.width,height:n.height}}if(t.indexOf("margin")>-1){var s=getComputedStyle(e);i.margin={top:s?parseInt(s.marginTop):0,right:s?parseInt(s.marginRight):0,bottom:s?parseInt(s.marginBottom):0,left:s?parseInt(s.marginLeft):0}}return i}function I(e){return e&&e.ownerDocument&&e.ownerDocument.defaultView||window}var V=function(e){return function(t){var i,s;return s=i=function(i){function s(){for(var t,n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(t=i.call.apply(i,[this].concat(s))||this).state={contentRect:{entry:{},client:{},offset:{},scroll:{},bounds:{},margin:{}}},t._animationFrameID=null,t._resizeObserver=null,t._node=null,t._window=null,t.measure=function(i){var n=H(t._node,e||U(t.props));i&&(n.entry=i[0].contentRect),t._animationFrameID=t._window.requestAnimationFrame((function(){null!==t._resizeObserver&&(t.setState({contentRect:n}),"function"===typeof t.props.onResize&&t.props.onResize(n))}))},t._handleRef=function(e){null!==t._resizeObserver&&null!==t._node&&t._resizeObserver.unobserve(t._node),t._node=e,t._window=I(t._node);var i=t.props.innerRef;i&&("function"===typeof i?i(t._node):i.current=t._node),null!==t._resizeObserver&&null!==t._node&&t._resizeObserver.observe(t._node)},t}(0,b.Z)(s,i);var r=s.prototype;return r.componentDidMount=function(){this._resizeObserver=null!==this._window&&this._window.ResizeObserver?new this._window.ResizeObserver(this.measure):new F(this.measure),null!==this._node&&(this._resizeObserver.observe(this._node),"function"===typeof this.props.onResize&&this.props.onResize(H(this._node,e||U(this.props))))},r.componentWillUnmount=function(){null!==this._window&&this._window.cancelAnimationFrame(this._animationFrameID),null!==this._resizeObserver&&(this._resizeObserver.disconnect(),this._resizeObserver=null)},r.render=function(){var e=this.props,i=(e.innerRef,e.onResize,(0,g.Z)(e,["innerRef","onResize"]));return(0,u.createElement)(t,(0,n.Z)({},i,{measureRef:this._handleRef,measure:this.measure,contentRect:this.state.contentRect}))},s}(u.Component),i.propTypes={client:c().bool,offset:c().bool,scroll:c().bool,bounds:c().bool,margin:c().bool,innerRef:c().oneOfType([c().object,c().func]),onResize:c().func},s}}()((function(e){var t=e.measure,i=e.measureRef,n=e.contentRect;return(0,e.children)({measure:t,measureRef:i,contentRect:n})}));V.displayName="Measure",V.propTypes.children=c().func;var X=V;const q=e=>e?Array.isArray(e)?e:[e]:[];class G extends u.Component{constructor(e){super(e),(0,r.Z)(this,"onResize",(e=>{const{resizeHeight:t,resizeWidth:i}=this.props,{height:n,width:r}=e.bounds;this.setDimensions((0,s.Z)({},t&&{height:n},i&&{width:r}))})),this.setDimensions=v()((e=>{this.setState(e)}),this.props.propagateDimensionsRate/1e3),this.state={height:"100%",width:"100%"}}renderChildren(){const{propagateDimensions:e}=this.props,t=q(this.props.children).filter((e=>!!e));return u.Children.map(t,(t=>this.props.withHandle||f.isA(t)?u.cloneElement(t,(0,s.Z)({dimensions:e&&this.state},t.props,{index:this.props.index-1,events:this.props.events})):e?u.cloneElement(t,(0,s.Z)({},t.props,{dimensions:this.state})):t))}render(){return u.createElement(X,{bounds:!0,onResize:this.onResize},(({measureRef:e})=>u.createElement("div",{ref:e,className:"reflex-size-aware"},u.createElement("div",{style:this.state},this.renderChildren()))))}}class Y extends u.Component{constructor(e){super(e),this.state={size:e.size}}static getDerivedStateFromProps(e,t){return e.size!==t.size?(0,s.Z)({},t,{size:e.size}):null}async componentDidUpdate(e,t,i){if(t.size!==this.state.size){const e=q(this.props.direction);for(let t of e)await this.props.events.emit("element.size",{index:this.props.index,size:this.props.size,direction:t})}}renderChildren(){const e=q(this.props.children).filter((e=>!!e));return u.Children.map(e,(e=>this.props.withHandle||f.isA(e)?u.cloneElement(e,(0,s.Z)({},e.props,{index:this.props.index-1,events:this.props.events})):e))}render(){const e=[...this.props.className.split(" "),this.props.orientation,"reflex-element"].join(" ").trim(),t=(0,s.Z)({},this.props.style,{flexGrow:this.props.flex,flexShrink:1,flexBasis:"0%"});return u.createElement("div",(0,n.Z)({},a(this.props),{ref:this.props.innerRef,className:e,style:t}),this.props.propagateDimensions?u.createElement(G,this.props):this.renderChildren())}}(0,r.Z)(Y,"propTypes",{propagateDimensions:c().bool,resizeHeight:c().bool,resizeWidth:c().bool,className:c().string,size:c().number}),(0,r.Z)(Y,"defaultProps",{propagateDimensionsRate:100,propagateDimensions:!1,resizeHeight:!0,resizeWidth:!0,direction:[1],className:""});var $=u.forwardRef(((e,t)=>u.createElement(Y,(0,n.Z)({innerRef:t},e))))},94334:function(e,t,i){"use strict";i.d(t,{Z:function(){return s}});var n=i(4942);function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?Object(arguments[t]):{},s=Object.keys(i);"function"===typeof Object.getOwnPropertySymbols&&s.push.apply(s,Object.getOwnPropertySymbols(i).filter((function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable}))),s.forEach((function(t){(0,n.Z)(e,t,i[t])}))}return e}}}]);