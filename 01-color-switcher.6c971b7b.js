!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),o=document.querySelector("body"),r=null,n=function(){return"#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))},l=function(){o.style.backgroundColor=n()};t.addEventListener("click",(function(a){o.style.backgroundColor=n(),r=setInterval(l,1e3),t.toggleAttribute("disabled"),e.toggleAttribute("disabled")})),e.addEventListener("click",(function(n){o.style.backgroundColor="white",clearInterval(r),t.toggleAttribute("disabled"),e.toggleAttribute("disabled")}))}();
//# sourceMappingURL=01-color-switcher.6c971b7b.js.map