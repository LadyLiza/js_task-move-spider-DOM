document.addEventListener("click",function(t){var e=document.querySelector(".wall"),a=e.querySelector(".spider");if(t.target===e){var c=e.clientWidth,i=e.clientHeight,n=a.offsetWidth,o=a.offsetHeight,f=t.offsetX-n/2,l=t.offsetY-o/2;f=Math.max(0,Math.min(f,c-n)),l=Math.max(0,Math.min(l,i-o)),a.style.top="".concat(l,"px"),a.style.left="".concat(f,"px")}});
//# sourceMappingURL=index.245eace7.js.map
