(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8892],{71736:function(e){e.exports=function(e){var t={};function n(s){if(t[s])return t[s].exports;var r=t[s]={i:s,l:!1,exports:{}};return e[s].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:s})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist/",n(n.s=1)}([function(e,t,n){"use strict";n.r(t);var s=0,r=1,i=2,l=3,o=4;class a{constructor(e,t,n){this.startInOld=e,this.startInNew=t,this.size=n}get endInOld(){return this.startInOld+this.size}get endInNew(){return this.startInNew+this.size}}class c{constructor(){this.blockSize=0,this.repeatingWordsAccuracy=0,this.ignoreWhitespaceDifferences=!1}}const d=/^\s*<\/?[^>]+>\s*$/,h=/<[^\s>]+/,u=/^(\s|&nbsp;)+$/,p=/[\w\#@]+/,f=["<img"];function w(e){return!f.some((t=>null!==e&&e.startsWith(t)))&&d.test(e)}function g(e,t,n){return["<",t,' class="',n,'">',e,"</",t,">"].join("")}function I(e){return"<"===e}function m(e){return"&"===e}function W(e){return";"===e}function b(e){return u.test(e)}function v(e){return p.test(e)}function N(e,t,n){return e.push(t),e.length>n&&e.shift(),e.length!==n?null:e.join("")}class Z{constructor(e,t,n,s,r,i,l){this.oldWords=e,this.newWords=t,this.startInOld=n,this.endInOld=s,this.startInNew=r,this.endInNew=i,this.options=l}indexNewWords(){this.wordIndices=new Map;let e=[];for(let t=this.startInNew;t<this.endInNew;t++){let n=N(e,this.normalizeForIndex(this.newWords[t]),this.options.blockSize);null!==n&&(this.wordIndices.has(n)?this.wordIndices.get(n).push(t):this.wordIndices.set(n,[t]))}}normalizeForIndex(e){return e=function(e){return w(e)?function(e){return h.exec(e)[0]+(e.endsWith("/>")?"/>":">")}(e):e}(e),this.options.IgnoreWhiteSpaceDifferences&&b(e)?" ":e}findMatch(){if(this.indexNewWords(),this.removeRepeatingWords(),0===this.wordIndices.length)return null;let e=this.startInOld,t=this.startInNew,n=0,s=new Map;const r=this.options.blockSize;let i=[];for(let l=this.startInOld;l<this.endInOld;l++){let o=N(i,this.normalizeForIndex(this.oldWords[l]),r);if(null===o)continue;let a=new Map;if(this.wordIndices.has(o)){for(let i of this.wordIndices.get(o)){let o=(s.has(i-1)?s.get(i-1):0)+1;a.set(i,o),o>n&&(e=l-o-r+2,t=i-o-r+2,n=o)}s=a}else s=a}return 0!==n?new a(e,t,n+r-1):null}removeRepeatingWords(){let e=this.newWords.length+this.options.repeatingWordsAccuracy,t=Array.from(this.wordIndices.entries()).filter((t=>t[1].length>e)).map((e=>e[0]));for(let n of t)this.wordIndices.delete(n)}}class x{constructor(e,t,n,s,r){this.action=e,this.startInOld=t,this.endInOld=n,this.startInNew=s,this.endInNew=r}}var O=0,k=1,G=2,y=3;function T(e,t){let n={mode:O,currentWord:[],words:[]},s=function(e,t){let n=new Map;if(null===t)return n;for(let s of t){let t;for(;null!==(t=s.exec(e));){if(n.has(t.index))throw new Error("One or more block expressions result in a text sequence that overlaps. Current expression: "+s.toString());n.set(t.index,t.index+t[0].length)}}return n}(e,t),r=!!s.size,i=!1,l=-1;for(let a=0;a<e.length;a++){var o=e[a];if(r){l===index&&(l=-1,i=!1);let e=0;if(s.has(index)&&(i=!0,l=e=s.get(index)),i){n.currentWord.push(o),n.mode=O;continue}}switch(n.mode){case O:I(o)?E(n,"<",k):m(o)?E(n,o,y):b(o)?E(n,o,G):v(o)&&(0===n.currentWord.length||v(n.currentWord[n.currentWord.length-1]))?n.currentWord.push(o):E(n,o,O);break;case k:">"===o?(n.currentWord.push(o),n.words.push(n.currentWord.join("")),n.currentWord=[],n.mode=b(o)?G:O):n.currentWord.push(o);break;case G:I(o)?E(n,o,k):m(o)?E(n,o,y):b(o)?n.currentWord.push(o):E(n,o,O);break;case y:if(I(o))E(n,o,k);else if(b(o))E(n,o,G);else if(W(o)){let e=!0;if(0!==n.currentWord.length&&(n.currentWord.push(o),n.words.push(n.currentWord.join("")),n.words.length>2&&b(n.words[n.words.length-2])&&b(n.words[n.words.length-1]))){let t=n.words[n.words.length-2],s=n.words[n.words.length-1];n.words.splice(n.words.length-2,2),n.currentWord=[(t+s).split()],n.mode=G,e=!1}e&&(n.currentWord=[],n.mode=O)}else v(o)?n.currentWord.push(o):E(n,o,O)}}return 0!==n.currentWord.length&&n.words.push(n.currentWord.join("")),n.words}function E(e,t,n){0!==e.currentWord.length&&e.words.push(e.currentWord.join("")),e.currentWord=[t],e.mode=n}const A=new Map([["</strong>",0],["</em>",0],["</b>",0],["</i>",0],["</big>",0],["</small>",0],["</u>",0],["</sub>",0],["</strike>",0],["</s>",0]]),M=/<((strong)|(b)|(i)|(em)|(big)|(small)|(u)|(sub)|(sup)|(strike)|(s))[\>\s]+/gi;class P{constructor(e,t){this.content=[],this.newText=t,this.oldText=e,this.specialTagDiffStack=[],this.newWords=[],this.oldWords=[],this.matchGranularity=0,this.blockExpressions=[],this.repeatingWordsAccuracy=1,this.ignoreWhiteSpaceDifferences=!1,this.orphanMatchThreshold=0}build(){if(this.oldText===this.newText)return this.newText;this.splitInputsIntoWords(),this.matchGranularity=Math.min(4,this.oldWords.length,this.newWords.length);let e=this.operations();for(let t of e)this.performOperation(t);return this.content.join("")}addBlockExpression(e){this.blockExpressions.push(e)}splitInputsIntoWords(){this.oldWords=T(this.oldText,this.blockExpressions),this.oldText=null,this.newWords=T(this.newText,this.blockExpressions),this.newText=null}performOperation(e){switch(e.action){case s:this.processEqualOperation(e);break;case r:this.processDeleteOperation(e,"diffdel");break;case i:this.processInsertOperation(e,"diffins");break;case l:break;case o:this.processReplaceOperation(e)}}processReplaceOperation(e){this.processDeleteOperation(e,"diffmod"),this.processInsertOperation(e,"diffmod")}processInsertOperation(e,t){let n=this.newWords.filter(((t,n)=>n>=e.startInNew&&n<e.endInNew));this.insertTag("ins",t,n)}processDeleteOperation(e,t){let n=this.oldWords.filter(((t,n)=>n>=e.startInOld&&n<e.endInOld));this.insertTag("del",t,n)}processEqualOperation(e){let t=this.newWords.filter(((t,n)=>n>=e.startInNew&&n<e.endInNew));this.content.push(t.join(""))}insertTag(e,t,n){for(;n.length;){let s=this.extractConsecutiveWords(n,(e=>!w(e))),r="",i=!1;if(0!==s.length){let n=g(s.join(""),e,t);this.content.push(n)}else{if(M.test(n[0])){if(this.specialTagDiffStack.push(n[0]),r='<ins class="mod">',"del"===e)for(n.shift();n.length>0&&M.test(n[0]);)n.shift()}else if(A.has(n[0])){let t=0===this.specialTagDiffStack.length?null:this.specialTagDiffStack.pop();if(null!==t&&t===n[0].replace(/\//g,"")&&(r="</ins>",i=!0),"del"===e)for(n.shift();n.length>0&&A.has(n[0]);)n.shift()}if(0===n.length&&0===r.length)break;i?this.content.push(r+this.extractConsecutiveWords(n,w).join("")):this.content.push(this.extractConsecutiveWords(n,w).join("")+r)}}}extractConsecutiveWords(e,t){let n=null;for(let s=0;s<e.length;s++){let r=e[s];if(0===s&&" "===r&&(e[s]="&nbsp;"),!t(r)){n=s;break}}if(null!==n){let t=e.filter(((e,t)=>t>=0&&t<n));return n>0&&e.splice(0,n),t}{let t=e.filter(((t,n)=>n>=0&&n<e.length));return e.splice(0,e.length),t}}operations(){let e=0,t=0,n=[],c=this.matchingBlocks();c.push(new a(this.oldWords.length,this.newWords.length,0));let d=this.removeOrphans(c);for(let a of d){let c,d=e===a.startInOld,h=t===a.startInNew;(c=d||h?d&&!h?i:d?l:r:o)!==l&&n.push(new x(c,e,a.startInOld,t,a.startInNew)),0!==a.length&&n.push(new x(s,a.startInOld,a.endInOld,a.startInNew,a.endInNew)),e=a.endInOld,t=a.endInNew}return n}*removeOrphans(e){let t=null,n=null;for(let s of e){if(null===n){t=new a(0,0,0),n=s;continue}if(t.endInOld===n.startInOld&&t.endInNew===n.startInNew||n.endInOld===s.startInOld&&n.endInNew===s.startInNew){yield n,t=n,n=s;continue}let e=(e,t)=>e+t.length,r=this.oldWords.slice(t.endInOld,s.startInOld).reduce(e,0),i=this.newWords.slice(t.endInNew,s.startInNew).reduce(e,0);this.newWords.slice(n.startInNew,n.endInNew).reduce(e,0)>Math.max(r,i)*this.orphanMatchThreshold&&(yield n),t=n,n=s}yield n}matchingBlocks(){let e=[];return this.findMatchingBlocks(0,this.oldWords.length,0,this.newWords.length,e),e}findMatchingBlocks(e,t,n,s,r){let i=this.findMatch(e,t,n,s);null!==i&&(e<i.startInOld&&n<i.startInNew&&this.findMatchingBlocks(e,i.startInOld,n,i.startInNew,r),r.push(i),i.endInOld<t&&i.endInNew<s&&this.findMatchingBlocks(i.endInOld,t,i.endInNew,s,r))}findMatch(e,t,n,s){for(let r=this.matchGranularity;r>0;r--){let i=new c;i.blockSize=r,i.repeatingWordsAccuracy=this.repeatingWordsAccuracy,i.ignoreWhitespaceDifferences=this.ignoreWhiteSpaceDifferences;let l=new Z(this.oldWords,this.newWords,e,t,n,s,i).findMatch();if(null!==l)return l}return null}}P.execute=function(e,t){return new P(e,t).build()},t.default=P},function(e,t,n){e.exports=n(0)}])},79787:function(e,t,n){"use strict";var s=n(87462),r=n(13871),i=n(86010),l=n(67294),o=n(95929),a=n(28935),c=n(12519),d=n(92248),h=n(32150),u=n(84558),p=n(82032),f=n(54810),w=n(27327),g=n(17966);function I(e){var t=e.attached,n=e.basic,u=e.celled,w=e.children,m=e.className,W=e.collapsing,b=e.color,v=e.columns,N=e.compact,Z=e.definition,x=e.fixed,O=e.footerRow,k=e.headerRow,G=e.headerRows,y=e.inverted,T=e.padded,E=e.renderBodyRow,A=e.selectable,M=e.singleLine,P=e.size,D=e.sortable,j=e.stackable,z=e.striped,R=e.structured,S=e.tableData,B=e.textAlign,C=e.unstackable,_=e.verticalAlign,F=(0,i.Z)("ui",b,P,(0,o.lG)(u,"celled"),(0,o.lG)(W,"collapsing"),(0,o.lG)(Z,"definition"),(0,o.lG)(x,"fixed"),(0,o.lG)(y,"inverted"),(0,o.lG)(A,"selectable"),(0,o.lG)(M,"single line"),(0,o.lG)(D,"sortable"),(0,o.lG)(j,"stackable"),(0,o.lG)(z,"striped"),(0,o.lG)(R,"structured"),(0,o.lG)(C,"unstackable"),(0,o.sU)(t,"attached"),(0,o.sU)(n,"basic"),(0,o.sU)(N,"compact"),(0,o.sU)(T,"padded"),(0,o.X4)(B),(0,o.Ok)(_),(0,o.H0)(v,"column"),"table",m),H=(0,a.Z)(I,e),K=(0,c.Z)(I,e);if(!d.kK(w))return l.createElement(K,(0,s.Z)({},H,{className:F}),w);var L={defaultProps:{cellAs:"th"}},U=(k||G)&&l.createElement(f.Z,null,g.Z.create(k,L),(0,r.Z)(G,(function(e){return g.Z.create(e,L)})));return l.createElement(K,(0,s.Z)({},H,{className:F}),U,l.createElement(h.Z,null,E&&(0,r.Z)(S,(function(e,t){return g.Z.create(E(e,t))}))),O&&l.createElement(p.Z,null,g.Z.create(O)))}I.handledProps=["as","attached","basic","celled","children","className","collapsing","color","columns","compact","definition","fixed","footerRow","headerRow","headerRows","inverted","padded","renderBodyRow","selectable","singleLine","size","sortable","stackable","striped","structured","tableData","textAlign","unstackable","verticalAlign"],I.defaultProps={as:"table"},I.propTypes={},I.Body=h.Z,I.Cell=u.Z,I.Footer=p.Z,I.Header=f.Z,I.HeaderCell=w.Z,I.Row=g.Z,t.Z=I},32150:function(e,t,n){"use strict";var s=n(87462),r=n(86010),i=n(67294),l=n(28935),o=n(12519);function a(e){var t=e.children,n=e.className,c=(0,r.Z)(n),d=(0,l.Z)(a,e),h=(0,o.Z)(a,e);return i.createElement(h,(0,s.Z)({},d,{className:c}),t)}a.handledProps=["as","children","className"],a.defaultProps={as:"tbody"},a.propTypes={},t.Z=a},84558:function(e,t,n){"use strict";var s=n(87462),r=n(86010),i=n(67294),l=n(95929),o=n(28935),a=n(12519),c=n(92248),d=n(90902),h=n(10302);function u(e){var t=e.active,n=e.children,d=e.className,p=e.collapsing,f=e.content,w=e.disabled,g=e.error,I=e.icon,m=e.negative,W=e.positive,b=e.selectable,v=e.singleLine,N=e.textAlign,Z=e.verticalAlign,x=e.warning,O=e.width,k=(0,r.Z)((0,l.lG)(t,"active"),(0,l.lG)(p,"collapsing"),(0,l.lG)(w,"disabled"),(0,l.lG)(g,"error"),(0,l.lG)(m,"negative"),(0,l.lG)(W,"positive"),(0,l.lG)(b,"selectable"),(0,l.lG)(v,"single line"),(0,l.lG)(x,"warning"),(0,l.X4)(N),(0,l.Ok)(Z),(0,l.H0)(O,"wide"),d),G=(0,o.Z)(u,e),y=(0,a.Z)(u,e);return c.kK(n)?i.createElement(y,(0,s.Z)({},G,{className:k}),h.Z.create(I),f):i.createElement(y,(0,s.Z)({},G,{className:k}),n)}u.handledProps=["active","as","children","className","collapsing","content","disabled","error","icon","negative","positive","selectable","singleLine","textAlign","verticalAlign","warning","width"],u.defaultProps={as:"td"},u.propTypes={},u.create=(0,d.u5)(u,(function(e){return{content:e}})),t.Z=u},82032:function(e,t,n){"use strict";var s=n(87462),r=n(67294),i=n(28935),l=n(54810);function o(e){var t=e.as,n=(0,i.Z)(o,e);return r.createElement(l.Z,(0,s.Z)({},n,{as:t}))}o.handledProps=["as"],o.propTypes={},o.defaultProps={as:"tfoot"},t.Z=o},54810:function(e,t,n){"use strict";var s=n(87462),r=n(86010),i=n(67294),l=n(95929),o=n(28935),a=n(12519),c=n(92248);function d(e){var t=e.children,n=e.className,h=e.content,u=e.fullWidth,p=(0,r.Z)((0,l.lG)(u,"full-width"),n),f=(0,o.Z)(d,e),w=(0,a.Z)(d,e);return i.createElement(w,(0,s.Z)({},f,{className:p}),c.kK(t)?h:t)}d.handledProps=["as","children","className","content","fullWidth"],d.defaultProps={as:"thead"},d.propTypes={},t.Z=d},27327:function(e,t,n){"use strict";var s=n(87462),r=n(86010),i=n(67294),l=n(95929),o=n(28935),a=n(84558);function c(e){var t=e.as,n=e.className,d=e.sorted,h=(0,r.Z)((0,l.cD)(d,"sorted"),n),u=(0,o.Z)(c,e);return i.createElement(a.Z,(0,s.Z)({},u,{as:t,className:h}))}c.handledProps=["as","className","sorted"],c.propTypes={},c.defaultProps={as:"th"},t.Z=c},17966:function(e,t,n){"use strict";var s=n(87462),r=n(13871),i=n(86010),l=n(67294),o=n(95929),a=n(28935),c=n(12519),d=n(92248),h=n(90902),u=n(84558);function p(e){var t=e.active,n=e.cellAs,h=e.cells,f=e.children,w=e.className,g=e.disabled,I=e.error,m=e.negative,W=e.positive,b=e.textAlign,v=e.verticalAlign,N=e.warning,Z=(0,i.Z)((0,o.lG)(t,"active"),(0,o.lG)(g,"disabled"),(0,o.lG)(I,"error"),(0,o.lG)(m,"negative"),(0,o.lG)(W,"positive"),(0,o.lG)(N,"warning"),(0,o.X4)(b),(0,o.Ok)(v),w),x=(0,a.Z)(p,e),O=(0,c.Z)(p,e);return d.kK(f)?l.createElement(O,(0,s.Z)({},x,{className:Z}),(0,r.Z)(h,(function(e){return u.Z.create(e,{defaultProps:{as:n}})}))):l.createElement(O,(0,s.Z)({},x,{className:Z}),f)}p.handledProps=["active","as","cellAs","cells","children","className","disabled","error","negative","positive","textAlign","verticalAlign","warning"],p.defaultProps={as:"tr",cellAs:"td"},p.propTypes={},p.create=(0,h.u5)(p,(function(e){return{cells:e}})),t.Z=p}}]);