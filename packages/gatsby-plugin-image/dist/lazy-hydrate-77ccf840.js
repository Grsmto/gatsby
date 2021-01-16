import{a as e,b as r,h as a,c as t,L as s,g as i,d as o}from"./compat.browser-d706b78e.js";import l,{forwardRef as c}from"react";import{render as n,hydrate as d}from"react-dom";import{string as u,bool as m,exact as g,arrayOf as p,oneOfType as f}from"prop-types";var b,v=function(r){var a=r.src,t=r.srcSet,s=r.loading,i=r.alt,o=void 0===i?"":i,c=r.shouldLoad,n=r.innerRef,d=e(r,["src","srcSet","loading","alt","shouldLoad","innerRef"]);return l.createElement("img",Object.assign({},d,{decoding:"async",loading:s,src:c?a:void 0,"data-src":c?void 0:a,srcSet:c?t:void 0,"data-srcset":c?void 0:t,alt:o,ref:n}))},y=c(function(r,a){var t=r.fallback,s=r.sources,i=void 0===s?[]:s,o=r.shouldLoad,c=void 0===o||o,n=r.sizes,d=e(r,["fallback","sources","shouldLoad","sizes"]),u=l.createElement(v,Object.assign({sizes:n},d,t,{shouldLoad:c,innerRef:a}));return i.length?l.createElement("picture",null,i.map(function(e){var r=e.media,a=e.srcSet,t=e.type;return l.createElement("source",{key:r+"-"+t+"-"+a,type:t,media:r,srcSet:a,sizes:n})}),u):u});v.propTypes={src:u.isRequired,alt:u.isRequired,sizes:u,srcSet:u,shouldLoad:m},y.displayName="Picture",y.propTypes={alt:u.isRequired,shouldLoad:m,fallback:g({src:u.isRequired,srcSet:u,sizes:u}),sources:p(f([g({media:u.isRequired,type:u,sizes:u,srcSet:u.isRequired}),g({media:u,type:u.isRequired,sizes:u,srcSet:u.isRequired})]))};var h=function(r){var a=r.fallback,t=e(r,["fallback"]);return a?l.createElement(y,Object.assign({},t,{fallback:{src:a},"aria-hidden":!0,alt:""})):l.createElement("div",Object.assign({},t))};h.displayName="Placeholder",h.propTypes={fallback:u,sources:null==(b=y.propTypes)?void 0:b.sources,alt:function(e,r,a){return e[r]?new Error("Invalid prop `"+r+"` supplied to `"+a+"`. Validation failed."):null}};var k=c(function(e,a){var t=r({},e);return l.createElement(l.Fragment,null,"eager"===t.loading&&l.createElement("link",{rel:"preload",as:"image",href:t.fallback.src,imagesrcset:t.fallback.srcSet,imagesizes:t.fallback.sizes}),l.createElement(y,Object.assign({ref:a},t)),l.createElement("noscript",null,l.createElement(y,Object.assign({},t,{shouldLoad:!0}))))});function j(c,u,m){var g=c.image,p=c.loading,f=c.isLoading,b=c.isLoaded,v=c.toggleIsLoaded,y=c.ref,j=c.imgClassName,E=c.imgStyle,L=void 0===E?{}:E,S=c.objectPosition,R=c.backgroundColor,z=c.objectFit,q=void 0===z?"cover":z,O=e(c,["image","loading","isLoading","isLoaded","toggleIsLoaded","ref","imgClassName","imgStyle","objectPosition","backgroundColor","objectFit"]),N=g.width,C=g.height,T=g.layout,P=g.images,w=g.placeholder,F=g.backgroundColor;if(!u.current)return null;var I=u.current.querySelector("[data-gatsby-image-ssr]");if(a()&&I&&!m.current)return null;var x=JSON.stringify(P),J=!m.current&&t(x);L=r({objectFit:q,objectPosition:S,backgroundColor:R},L);var M=l.createElement(s,{layout:T,width:N,height:C},!J&&l.createElement(h,Object.assign({},i(w,b,T,N,C,F))),l.createElement(k,Object.assign({},O,{className:j},o(f,J||b,P,p,v,x,y,L))));return(m.current?n:d)(M,u.current),m.current=!0,function(){u.current&&n(null,u.current)}}k.displayName="MainImage",k.propTypes=y.propTypes;export{j as lazyHydrate};
//# sourceMappingURL=lazy-hydrate-77ccf840.js.map
