var n,e=new WeakMap,t=navigator.connection||navigator.mozConnection||navigator.webkitConnection;function r(r){return"IntersectionObserver"in window?(n||(n=new IntersectionObserver(function(n){n.forEach(function(n){var t;n.isIntersecting&&(null==(t=e.get(n.target))||t(),e.delete(n.target))})},{rootMargin:"4g"!==(null==t?void 0:t.effectiveType)||(null==t?void 0:t.saveData)?"2500px":"1250px"})),function(t){return t.current&&(e.set(t.current,r),n.observe(t.current)),function(){n&&t.current&&(e.delete(t.current),n.unobserve(t.current))}}):function(){return r(),function(){}}}export{r as createIntersectionObserver};
//# sourceMappingURL=intersection-observer-3b889788.js.map
