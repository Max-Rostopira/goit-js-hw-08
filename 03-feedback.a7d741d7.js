!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={save:function(e,t){try{var n=JSON.stringify(t);localStorage.setItem(e,n)}catch(e){console.error("Set state error: ",e.message)}},load:function(e){try{var t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}},remove:function(e){try{localStorage.removeItem(e)}catch(e){console.log("Romove item error : ",e.message)}}},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var i="Expected a function",a=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,c=/^0o[0-7]+$/i,l=parseInt,s="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,v=s||d||Function("return this")(),m=Object.prototype.toString,g=Math.max,y=Math.min,p=function(){return v.Date.now()};function b(e,t,n){var r,o,a,u,f,c,l=0,s=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError(i);function m(t){var n=r,i=o;return r=o=void 0,l=t,u=e.apply(i,n)}function b(e){return l=e,f=setTimeout(S,t),s?m(e):u}function O(e){var n=e-c;return void 0===c||n>=t||n<0||d&&e-l>=a}function S(){var e=p();if(O(e))return w(e);f=setTimeout(S,function(e){var n=t-(e-c);return d?y(n,a-(e-l)):n}(e))}function w(e){return f=void 0,v&&r?m(e):(r=o=void 0,u)}function T(){var e=p(),n=O(e);if(r=arguments,o=this,c=e,n){if(void 0===f)return b(c);if(d)return f=setTimeout(S,t),m(c)}return void 0===f&&(f=setTimeout(S,t)),u}return t=j(t)||0,h(n)&&(s=!!n.leading,a=(d="maxWait"in n)?g(j(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==f&&clearTimeout(f),l=0,r=c=o=f=void 0},T.flush=function(){return void 0===f?u:w(p())},T}function h(t){var n=void 0===t?"undefined":e(o)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(o)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==m.call(t)}(t))return NaN;if(h(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=h(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(a,"");var r=f.test(t);return r||c.test(t)?l(t.slice(2),r?2:8):u.test(t)?NaN:+t}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(i);return h(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),b(e,t,{leading:r,maxWait:t,trailing:o})};var O=document.querySelector(".feedback-form"),S="feedback-form-state",w=function(e){var t=e.elements,n=r.load(S);n&&Object.keys(t).filter((function(e){return isNaN(e)})).forEach((function(e){t[e].value=n[e]||""}))};O.addEventListener("input",e(t)(w,500)),O.addEventListener("submit",(function(e){e.preventDefault();var t=e.target,n=t.elements,o=n.email,i=n.message,a=o.value,u=i.value;console.log({userEmail:a,userMessage:u}),t.reset(),r.remove(S)})),O.addEventListener("change",(function(e){var t=e.target,n=t.value,o=t.name,i=r.load(S)||{};i[o]=n,r.save(S,i)})),w(O)}();
//# sourceMappingURL=03-feedback.a7d741d7.js.map