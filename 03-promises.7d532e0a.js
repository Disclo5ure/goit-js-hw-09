!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var i={id:e,exports:{}};return t[e]=i,o.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o);var i=o("h6c0i"),r=document.querySelector(".form"),a=document.getElementsByTagName("button")[0],u=function(e,t){var n=Math.random()>.3;return new Promise((function(o,i){setTimeout((function(){n?o({position:e,delay:t}):i({position:e,delay:t})}),t)}))};r.addEventListener("submit",(function(e){e.preventDefault(),a.setAttribute("disabled","");for(var t=e.currentTarget.elements,n=t.delay,o=t.step,r=t.amount,l=n.value,c=o.value,s=r.value,d=0;d<s;d++){var f=parseInt(l)+parseInt(c)*d;u(d+1,f).then((function(e){var t=e.position,n=e.delay;i.Notify.success("✅ Fulfilled promise ".concat(t," in ").concat(n,"ms"))})).catch((function(e){var t=e.position,n=e.delay;i.Notify.failure("❌ Rejected promise ".concat(t," in ").concat(n,"ms"))})),d===s-1&&setTimeout((function(){return a.removeAttribute("disabled")}),f)}}))}();
//# sourceMappingURL=03-promises.7d532e0a.js.map