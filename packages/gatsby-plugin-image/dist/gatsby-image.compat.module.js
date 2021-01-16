import e,{forwardRef as t,Fragment as r}from"react";import{string as n,bool as a,exact as i,arrayOf as s,oneOfType as o}from"prop-types";function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t.indexOf(r=i[n])>=0||(a[r]=e[r]);return a}var u=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),d=Object.freeze(Object.defineProperties(["",""],{raw:{value:Object.freeze(["",""])}}));function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var g=function(){function e(){for(var t=this,r=arguments.length,n=Array(r),a=0;a<r;a++)n[a]=arguments[a];return f(this,e),this.tag=function(e){for(var r=arguments.length,n=Array(r>1?r-1:0),a=1;a<r;a++)n[a-1]=arguments[a];return"function"==typeof e?t.interimTag.bind(t,e):"string"==typeof e?t.transformEndResult(e):(e=e.map(t.transformString.bind(t)),t.transformEndResult(e.reduce(t.processSubstitutions.bind(t,n))))},n.length>0&&Array.isArray(n[0])&&(n=n[0]),this.transformers=n.map(function(e){return"function"==typeof e?e():e}),this.tag}return u(e,[{key:"interimTag",value:function(e,t){for(var r=arguments.length,n=Array(r>2?r-2:0),a=2;a<r;a++)n[a-2]=arguments[a];return this.tag(d,e.apply(void 0,[t].concat(n)))}},{key:"processSubstitutions",value:function(e,t,r){var n=this.transformSubstitution(e.shift(),t);return"".concat(t,n,r)}},{key:"transformString",value:function(e){return this.transformers.reduce(function(e,t){return t.onString?t.onString(e):e},e)}},{key:"transformSubstitution",value:function(e,t){return this.transformers.reduce(function(e,r){return r.onSubstitution?r.onSubstitution(e,t):e},e)}},{key:"transformEndResult",value:function(e){return this.transformers.reduce(function(e,t){return t.onEndResult?t.onEndResult(e):e},e)}}]),e}(),p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return{onEndResult:function(t){if(""===e)return t.trim();if("start"===(e=e.toLowerCase())||"left"===e)return t.replace(/^\s*/,"");if("end"===e||"right"===e)return t.replace(/\s*$/,"");throw new Error("Side not supported: "+e)}}};function m(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}var h,y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"initial";return{onEndResult:function(t){if("initial"===e){var r=t.match(/^[^\S\n]*(?=\S)/gm),n=r&&Math.min.apply(Math,m(r.map(function(e){return e.length})));if(n){var a=new RegExp("^.{"+n+"}","gm");return t.replace(a,"")}return t}if("all"===e)return t.replace(/^[^\S\n]+/gm,"");throw new Error("Unknown type: "+e)}}},b=function(e,t){return{onEndResult:function(r){if(null==e||null==t)throw new Error("replaceResultTransformer requires at least 2 arguments.");return r.replace(e,t)}}},v=function(e,t){return{onSubstitution:function(r,n){if(null==e||null==t)throw new Error("replaceSubstitutionTransformer requires at least 2 arguments.");return null==r?r:r.toString().replace(e,t)}}},w={separator:"",conjunction:"",serial:!1},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w;return{onSubstitution:function(t,r){if(Array.isArray(t)){var n=t.length,a=e.separator,i=e.conjunction,s=e.serial,o=r.match(/(\n?[^\S\n]+)$/);if(t=t.join(o?a+o[1]:a+" "),i&&n>1){var l=t.lastIndexOf(a);t=t.slice(0,l)+(s?a:"")+" "+i+t.slice(l+1)}}return t}}},E=function(e){return{onSubstitution:function(t,r){if(null==e||"string"!=typeof e)throw new Error("You need to specify a string character to split by.");return"string"==typeof t&&t.includes(e)&&(t=t.split(e)),t}}},k=function(e){return null!=e&&!Number.isNaN(e)&&"boolean"!=typeof e},j=(new g(S({separator:","}),y,p),new g(S({separator:",",conjunction:"and"}),y,p),new g(S({separator:",",conjunction:"or"}),y,p),new g(E("\n"),function(){return{onSubstitution:function(e){return Array.isArray(e)?e.filter(k):k(e)?e:""}}},S,y,p),new g(E("\n"),S,y,p,v(/&/g,"&amp;"),v(/</g,"&lt;"),v(/>/g,"&gt;"),v(/"/g,"&quot;"),v(/'/g,"&#x27;"),v(/`/g,"&#x60;")),new g(b(/(?:\n(?:\s*))+/g," "),p),new g(b(/(?:\n\s*)/g,""),p),new g(S({separator:","}),b(/(?:\s+)/g," "),p),new g(S({separator:",",conjunction:"or"}),b(/(?:\s+)/g," "),p),new g(S({separator:",",conjunction:"and"}),b(/(?:\s+)/g," "),p),new g(S,y,p),new g(S,b(/(?:\s+)/g," "),p),new g(y,p),new g(y("all"),p),new Set,function(t){var r=t.src,n=t.srcSet,a=t.loading,i=t.alt,s=void 0===i?"":i,o=t.shouldLoad,l=t.innerRef,u=c(t,["src","srcSet","loading","alt","shouldLoad","innerRef"]);return e.createElement("img",Object.assign({},u,{decoding:"async",loading:a,src:o?r:void 0,"data-src":o?void 0:r,srcSet:o?n:void 0,"data-srcset":o?void 0:n,alt:s,ref:l}))}),A=t(function(t,r){var n=t.fallback,a=t.sources,i=void 0===a?[]:a,s=t.shouldLoad,o=void 0===s||s,l=t.sizes,u=c(t,["fallback","sources","shouldLoad","sizes"]),d=e.createElement(j,Object.assign({sizes:l},u,n,{shouldLoad:o,innerRef:r}));return i.length?e.createElement("picture",null,i.map(function(t){var r=t.media,n=t.srcSet,a=t.type;return e.createElement("source",{key:r+"-"+a+"-"+n,type:a,media:r,srcSet:n,sizes:l})}),d):d});j.propTypes={src:n.isRequired,alt:n.isRequired,sizes:n,srcSet:n,shouldLoad:a},A.displayName="Picture",A.propTypes={alt:n.isRequired,shouldLoad:a,fallback:i({src:n.isRequired,srcSet:n,sizes:n}),sources:s(o([i({media:n.isRequired,type:n,sizes:n,srcSet:n.isRequired}),i({media:n,type:n.isRequired,sizes:n,srcSet:n.isRequired})]))};var O=function(t){var r=t.fallback,n=c(t,["fallback"]);return r?e.createElement(A,Object.assign({},n,{fallback:{src:r},"aria-hidden":!0,alt:""})):e.createElement("div",Object.assign({},n))};O.displayName="Placeholder",O.propTypes={fallback:n,sources:null==(h=A.propTypes)?void 0:h.sources,alt:function(e,t,r){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+r+"`. Validation failed."):null}};var R=t(function(t,r){var n=l({},t);return e.createElement(e.Fragment,null,"eager"===n.loading&&e.createElement("link",{rel:"preload",as:"image",href:n.fallback.src,imagesrcset:n.fallback.srcSet,imagesizes:n.fallback.sizes}),e.createElement(A,Object.assign({ref:r},n)),e.createElement("noscript",null,e.createElement(A,Object.assign({},n,{shouldLoad:!0}))))});R.displayName="MainImage",R.propTypes=A.propTypes;var T=function(){return e.createElement("script",{type:"module",dangerouslySetInnerHTML:{__html:'const t="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;if(t){const t=document.querySelectorAll("img[data-main-image]");for(let e of t)e.dataset.src&&(e.setAttribute("src",e.dataset.src),e.removeAttribute("data-src")),e.dataset.srcset&&(e.setAttribute("srcset",e.dataset.srcset),e.removeAttribute("data-srcset")),e.complete&&(e.style.opacity=1)}'}})},z=function(t){var n=t.layout,a=t.width,i=t.height,s=t.children,o=null;return"fluid"===n&&(o=e.createElement("div",{"aria-hidden":!0,style:{paddingTop:i/a*100+"%"}})),"constrained"===n&&(o=e.createElement("div",{style:{maxWidth:a,display:"block"}},e.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+i+"' width='"+a+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}}))),e.createElement(r,null,o,s,e.createElement(T,null))},C=function(e){return e.replace(/\n/g,"")},N=function(t){var r=t.as,n=void 0===r?"div":r,a=t.children,i=c(t,["as","children"]);return e.createElement(n,Object.assign({},i),a)};function x(){"development"===process.env.NODE_ENV&&console.warn('gatsby-plugin-image/compat does not support passing arrays to "fixed" or "fluid"')}var L,q=(L=function(t){var r=t.as,n=t.className,a=t.class,i=t.style,s=t.image,o=t.loading,u=void 0===o?"lazy":o,d=t.imgClassName,f=t.imgStyle,g=t.backgroundColor,p=t.objectFit,m=t.objectPosition,h=c(t,["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"]);if(!s)return console.warn("[gatsby-plugin-image] Missing image prop"),null;a&&(n=a),f=l({objectFit:p,objectPosition:m,backgroundColor:g},f);var y=s.width,b=s.height,v=s.layout,w=s.images,S=s.placeholder,E=s.backgroundColor,k=function(e,t,r){var n={position:"relative",overflow:"hidden"};return"fixed"===r?(n.width=e,n.height=t):"constrained"===r&&(n.display="inline-block"),{className:"gatsby-image-wrapper","data-gatsby-image-wrapper":"",style:n}}(y,b,v),j=k.style,A=k.className,T=c(k,["style","className"]),x={fallback:void 0,sources:[]};return w.fallback&&(x.fallback=l({},w.fallback,{srcSet:w.fallback.srcSet?C(w.fallback.srcSet):void 0})),w.sources&&(x.sources=w.sources.map(function(e){return l({},e,{srcSet:C(e.srcSet)})})),e.createElement(N,Object.assign({},T,{as:r,style:l({},j,i,{backgroundColor:g}),className:A+(n?" "+n:"")}),e.createElement(z,{layout:v,width:y,height:b},e.createElement(O,Object.assign({},function(e,t,r,n,a,i){var s={};i&&(s.backgroundColor=i,"fixed"===r?(s.width=n,s.height=a,s.backgroundColor=i,s.position="relative"):("constrained"===r||"fluid"===r)&&(s.position="absolute",s.top=0,s.left=0,s.bottom=0,s.right=0));var o=l({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:l({opacity:1,transition:"opacity 500ms linear"},s)});return global.GATSBY___IMAGE||(o.style={height:"100%",left:0,position:"absolute",top:0,width:"100%"}),o}(S,0,v,y,b,E))),e.createElement(R,Object.assign({"data-gatsby-image-ssr":"",className:d,style:f},h,function(e,t,r,n,a,i,s,o){return void 0===o&&(o={}),global.GATSBY___IMAGE||(o=l({height:"100%",left:0,position:"absolute",top:0,transform:"translateZ(0)",transition:"opacity 250ms linear",width:"100%",willChange:"opacity"},o)),l({},r,{loading:n,shouldLoad:e,"data-main-image":"",style:l({},o,{opacity:0}),onLoad:function(e){var t=e.currentTarget,r=new Image;r.src=t.currentSrc,r.decode?r.decode().catch(function(){}).then(function(){(void 0)(!0)}):(void 0)(!0)},ref:void 0})}("eager"===u,0,x,u)))))},function(t){var r=t.fixed,n=t.fluid,a=t.backgroundColor,i=t.critical,s=t.Tag,o=c(t,["fixed","fluid","backgroundColor","critical","Tag"]),u=l({alt:"",as:s,image:void 0},o);if(a&&(u.style=u.style||{},u.style.backgroundColor=!0===a?"light-gray":a),i&&(u.loading="eager"),r){Array.isArray(r)&&(x(),r=r[0]);var d={placeholder:void 0,layout:"fixed",width:r.width,height:r.height,images:{fallback:{src:r.src,srcSet:r.srcSet},sources:[]}},f=r.tracedSVG||r.base64;f&&(d.placeholder={fallback:f}),r.srcSetWebp&&d.images.sources.push({srcSet:r.srcSetWebp,type:"image/webp"}),u.image=d}else if(n){Array.isArray(n)&&(x(),n=n[0]);var g={width:1,height:n.aspectRatio,layout:"fluid",images:{fallback:{src:n.src,srcSet:n.srcSet,sizes:n.sizes},sources:[]}},p=n.tracedSVG||n.base64;p&&(g.placeholder={fallback:p}),n.srcSetWebp&&g.images.sources.push({srcSet:n.srcSetWebp,type:"image/webp",sizes:n.sizes}),u.image=g}return e.createElement(L,Object.assign({},o,u))});export{q as GatsbyImage};
//# sourceMappingURL=gatsby-image.compat.module.js.map
