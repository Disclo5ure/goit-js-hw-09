var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},e.parcelRequired7c6=n);var i=n("iQIUW");const r=document.querySelector(".form"),l=document.getElementsByTagName("button")[0],s=(e,t)=>{const o=Math.random()>.3;return new Promise(((n,i)=>{setTimeout((()=>{o?n({position:e,delay:t}):i({position:e,delay:t})}),t)}))};r.addEventListener("submit",(e=>{e.preventDefault(),l.setAttribute("disabled","");const{elements:{delay:t,step:o,amount:n}}=e.currentTarget;let r=t.value,a=o.value,d=n.value;for(let e=0;e<d;e++){let t=parseInt(r)+parseInt(a)*e;s(e+1,t).then((({position:e,delay:t})=>{i.Notify.success(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{i.Notify.failure(`❌ Rejected promise ${e} in ${t}ms`)})),e===d-1&&setTimeout((()=>l.removeAttribute("disabled")),t)}}));
//# sourceMappingURL=03-promises.21d7ec45.js.map