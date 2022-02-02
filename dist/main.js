(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(81),o=n.n(r),a=n(645),s=n.n(a)()(o());s.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap);"]),s.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Hind+Siliguri&display=swap);"]),s.push([e.id,"body {\n    padding-top: 1rem;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    margin: 0;\n    width: 100vw;\n    height: 100vh;\n}\n\n#header {\n    font-size: 4.5rem;\n    font-family: 'Bebas Neue';\n}\n\n#infoDisplay {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 1.25rem;\n    font-family: 'Hind Siliguri', sans-serif;\n    width: 55%;\n    height: 3%;\n    border: 2px solid red;\n    background-color: #7d7d7d;\n}\n\n#boardsContainer {\n    width: 80%;\n    height: 60%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 2rem;\n}\n\n\n.board {\n    width: 27rem;\n    height: 27rem;\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n    grid-template-rows: repeat(10, 1fr);\n    grid-column-gap: 0px;\n    grid-row-gap: 0px;\n    cursor: pointer;\n}\n\n.userSquare {\n    border: 1px solid black;\n}\n\n.computerSquare {\n    border: 1px solid black;\n}\n\n#T {\n    background-color: red;\n}",""]);const i=s},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(r)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(s[c]=!0)}for(var u=0;u<e.length;u++){var p=[].concat(e[u]);r&&s[p[0]]||(void 0!==a&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=a),n&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=n):p[2]=n),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),t.push(p))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},s=[],i=0;i<e.length;i++){var c=e[i],u=r.base?c[0]+r.base:c[0],p=a[u]||0,l="".concat(u," ").concat(p);a[u]=p+1;var d=n(l),h={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==d)t[d].references++,t[d].updater(h);else{var f=o(h,r);r.byIndex=i,t.splice(i,0,{identifier:l,updater:f,references:1})}s.push(l)}return s}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var s=0;s<a.length;s++){var i=n(a[s]);t[i].references--}for(var c=r(e,o),u=0;u<a.length;u++){var p=n(a[u]);0===t[p].references&&(t[p].updater(),t.splice(p,1))}a=c}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=n(379),t=n.n(e),r=n(795),o=n.n(r),a=n(569),s=n.n(a),i=n(565),c=n.n(i),u=n(216),p=n.n(u),l=n(589),d=n.n(l),h=n(426),f={};f.styleTagTransform=d(),f.setAttributes=c(),f.insert=s().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=p(),t()(h.Z,f),h.Z&&h.Z.locals&&h.Z.locals;const m=(e,t,n,r)=>{for(let n=0;n<e;n++)t.push(n);const o={shipLength:e,hitLocations:t,sunkStatus:n,hit:e=>{var n;t.splice(e,1,"X"),1==(n=t).every((e=>e===n[0]))&&(o.sunkStatus="Sunk")},assignCoordinates:e=>{o.coordinates=e},coordinates:r,sinkShip:()=>{o.sunkStatus="Sunk"}};return o};let g,v;const y=(e,t,n,r,o,a)=>{let s=[];const i=[],c=[],u=[];let p;const l=e=>{c.push(e)},d=(a,i,c)=>{switch(a){case"carrier":e.hit(c);break;case"battleship":r.hit(c);break;case"cruiser":o.hit(c);break;case"submarine":n.hit(c);break;case"destroyer":t.hit(c)}for(let e=0;e<s.length;e++){let t=i[0],n=i[1];s[e][0]==t&&s[e][1]==n&&(s[e]="X")}},h={boardArray:s,createBoard:()=>{for(let t=1;t<11;t++)e=t,s.push([1,e]),s.push([2,e]),s.push([3,e]),s.push([4,e]),s.push([5,e]),s.push([6,e]),s.push([7,e]),s.push([8,e]),s.push([9,e]),s.push([10,e]);var e;h.boardArr=s},generateShips:()=>{e=m(5,[],"notSunk");const a=[[1,1],[2,1],[3,1],[4,1],[5,1]];a.motherShip="carrier",i.push(a),u.push(e),h.carrier=e,r=m(4,[],"notSunk");const s=[[7,2],[8,2],[9,2],[10,2]];s.motherShip="battleship",i.push(s),u.push(r),h.battleship=r,o=m(3,[],"notSunk");const c=[[1,3],[2,3],[3,3]];c.motherShip="cruiser",i.push(c),u.push(o),h.cruiser=o,n=m(3,[],"notSunk");const p=[[6,7],[7,7],[8,7]];p.motherShip="submarine",i.push(p),u.push(n),h.submarine=n,t=m(2,[],"notSunk");const l=[[3,5],[4,5]];l.motherShip="destroyer",i.push(l),u.push(t),h.destroyer=t,h.allShipsSunk=!1},recieveAttack:e=>{(e=>{p=!1;for(let n=0;n<i.length;n++)t(n,e);function t(e,t){for(let n=0;n<i[e].length;n++)if(i[e][n][0]==t[0]&&i[e][n][1]==t[1]){let r=i[e].motherShip;d(r,t,n),p=!0}}!1===p&&l(e)})(e)},populatedCoordinates:i,missedCoordinates:c,checkIfAllShipsSunk:()=>{for(let e=0;e<u.length;e++)"Sunk"===u[e].sunkStatus?h.allShipsSunk=!0:"notSunk"===u[e].sunkStatus&&(h.allShipsSunk=!1)},carrier:e,destroyer:t,submarine:n,battleship:r,cruiser:o,allShipsSunk:a,markPopulatedSpaces:()=>{for(let t=0;t<i.length;t++)e(t);function e(e){for(let n=0;n<i[e].length;n++)t([i[e][n][0],i[e][n][1]])}function t(e){for(let t=0;t<s.length;t++){let n=e[0],r=e[1];s[t][0]==n&&s[t][1]==r&&(s[t]="T")}}}};return h};v=y(),v.createBoard(),v.generateShips(),v.markPopulatedSpaces(),g=y(),g.createBoard(),g.generateShips(),g.markPopulatedSpaces(),function(e,t){const n=e.length;for(let t=0;t<n;t++){const n=document.getElementById("userBoard"),r=document.createElement("div");n.appendChild(r),r.classList="userSquare",r.parent="User",console.log(r.parent),r.id=e[t]}t.length;for(let e=0;e<n;e++){const n=document.getElementById("computerBoard"),r=document.createElement("div");n.appendChild(r),r.classList="computerSquare",r.parent=t[e]}}(v.boardArray,g.boardArray)})()})();