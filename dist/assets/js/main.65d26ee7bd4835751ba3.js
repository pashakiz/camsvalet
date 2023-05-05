!function(){"use strict";var e,t={7612:function(e,t,o){var s=o(1112);document.addEventListener("DOMContentLoaded",(()=>{setTimeout((function(){let e=document.body.querySelector("#page-preloader");if(!e)return!1;e.classList.contains("done")||e.classList.add("done")}),1e3)}),!1);const n=document.querySelector(".show-menu"),r=document.querySelector(".header__links"),l=document.querySelector(".bg-overlay"),i=document.querySelector(".show-menu__icon-menu"),c=document.querySelector(".show-menu__icon-close"),a=document.querySelector(".show-filter"),d=document.querySelector(".sidebar-filter"),u=document.querySelector(".show-filter__icon-filter"),p=document.querySelector(".show-filter__icon-close"),m=()=>{r.classList.remove("open"),i.style.display="block",c.style.display="none",l.style.display="none"};n.addEventListener("click",(e=>null!==e.target.closest(".show-menu")&&(r.classList.contains("open")?(m(),!1):(v(),r.classList.add("open"),i.style.display="none",c.style.display="block",void(l.style.display="block")))),!1);const v=()=>{d.classList.remove("open-mob"),d.classList.remove("open"),u.style.display="block",p.style.display="none",l.style.display="none"};a.addEventListener("click",(e=>null!==e.target.closest(".show-filter")&&(d.classList.contains("open-mob")?(v(),!1):(m(),d.classList.add("open-mob"),u.style.display="none",p.style.display="block",void(l.style.display="block")))),!1);l.addEventListener("click",(e=>{if(null===e.target.closest(".bg-overlay"))return!1;m(),v()}),!1);const y=document.querySelector(".show-more-tags"),g=document.querySelector(".search-widget"),f=g.querySelector(".tags .tag-list");y.addEventListener("click",(e=>{if(null===e.target.closest(".show-more-tags"))return!1;const t=e.target.closest(".show-more-tags").querySelector("svg path");if(f.classList.contains("open"))return f.classList.remove("open"),t.setAttribute("d","M4.53,10.357v-10h1.7v10ZM.377,6.206v-1.7h10V6.2h-10Z"),!1;f.classList.add("open"),t.setAttribute("d","M0 5.76V4.24h10v1.52H0Z")}),!1);let h=window.pageYOffset;window.addEventListener("scroll",(e=>{window.pageYOffset>h&&h>=150?g.classList.add("hide"):g.classList.remove("hide"),h=window.pageYOffset}),!1);const L=document.querySelector(".btn-toggle-sidebar"),b=document.querySelector(".sidebar-filter"),w=document.querySelector(".content");L.addEventListener("click",(e=>null!==e.target.closest(".btn-toggle-sidebar")&&(b.classList.contains("open")?(b.classList.remove("open"),b.classList.remove("open-mob"),w.classList.remove("open"),L.classList.add("right"),!1):(b.classList.add("open"),w.classList.add("open"),void L.classList.remove("right")))),!1);const q=document.querySelectorAll(".filter"),S=e=>{if(null===e.target.closest(".filter"))return!1;let t=e.target.closest(".filter"),o=t.querySelector(".collapse-header"),s=t.querySelector(".collapse-body");if(console.log("thisFilter",t),o.classList.contains("open")&&s.classList.contains("open"))return o.classList.remove("open"),s.classList.remove("open"),!1;o.classList.add("open"),s.classList.add("open")};q.forEach((e=>e.addEventListener("click",S,!1)));const k=document.querySelector(".custom-file-input"),_=document.querySelector(".settings-photo .profile-photo");k&&k.addEventListener("change",(()=>{_.style.backgroundImage="url(assets/img/photos/ava.jpg)"}),!1);const E=document.querySelectorAll(".splide"),O=e=>{if(null===e.target.closest(".splide"))return!1;e.target.closest(".splide").classList.add("is-grab")},C=e=>{if(null===e.target.closest(".splide"))return!1;e.target.closest(".splide").classList.remove("is-grab")};E&&(E.forEach((e=>e.addEventListener("mousedown",O,!1))),E.forEach((e=>e.addEventListener("mouseup",C,!1))));const Z=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1200,o=arguments.length>2?arguments[2]:void 0,s=arguments.length>3?arguments[3]:void 0,n=arguments.length>4?arguments[4]:void 0,r=arguments.length>5?arguments[5]:void 0,l=document.documentElement.clientWidth<t?o:n,i=document.documentElement.clientWidth<t?s:r;document.querySelectorAll(e).forEach((e=>{e.setAttribute("viewBox","0 0 "+l+" "+i),e.setAttribute("width",l),e.setAttribute("height",i)}))};null!==document.querySelector(".splide_up")&&(new s.ZP(".splide_up",{type:"loop",arrows:!0,arrowPath:"M0.292893 7.29338C-0.0976295 7.6839 -0.0976296 8.31707 0.292892 8.70759L6.65685 15.0716C7.04738 15.4621 7.68054 15.4621 8.07107 15.0716C8.46159 14.681 8.46159 14.0479 8.07107 13.6573L2.41422 8.00048L8.07107 2.34363C8.46159 1.95311 8.46159 1.31994 8.07107 0.929417C7.68054 0.538893 7.04738 0.538893 6.65685 0.929417L0.292893 7.29338ZM44.1187 7.00049L1 7.00048L1 9.00048L44.1187 9.00049L44.1187 7.00049Z",autoHeight:!0,autoWidth:!0,perPage:1,gap:"30px",mediaQuery:"min",breakpoints:{992:{gap:"33px"},1200:{arrowPath:"M0.847183 10.9393C0.261383 11.5251 0.261383 12.4749 0.847183 13.0606L10.3931 22.6066C10.9789 23.1924 11.9286 23.1924 12.5144 22.6066C13.1002 22.0208 13.1002 21.0711 12.5144 20.4853L4.02916 12L12.5144 3.51471C13.1002 2.92892 13.1002 1.97917 12.5144 1.39339C11.9287 0.8076 10.9789 0.8076 10.3931 1.39339L0.847183 10.9393ZM141.908 10.5L1.90784 10.5L1.90784 13.5L141.908 13.5L141.908 10.5Z",gap:"33px"},1400:{gap:"33px"}}}).mount(),Z(".splide_up .splide__arrow svg",1200,45,16,142,24)),null!==document.querySelector(".splide_reviews")&&(new s.ZP(".splide_reviews",{type:"loop",arrows:!0,arrowPath:"m3.97 11.1 10.68-8.96L13.36.6.86 11.09l12.5 10.5 1.29-1.54-10.68-8.96Z",autoHeight:!0,autoWidth:!0,perPage:1,gap:"30px",mediaQuery:"min",breakpoints:{1200:{arrowPath:"M14.01 3.37 3.11 15.36l10.9 11.98v3.02l-13.63-15L14 .36v3.01Z"}}}).mount(),Z(".splide_ulist .splide__arrow svg",1200,12,19,14,30))}},o={};function s(e){var n=o[e];if(void 0!==n)return n.exports;var r=o[e]={exports:{}};return t[e](r,r.exports,s),r.exports}s.m=t,e=[],s.O=function(t,o,n,r){if(!o){var l=1/0;for(d=0;d<e.length;d++){o=e[d][0],n=e[d][1],r=e[d][2];for(var i=!0,c=0;c<o.length;c++)(!1&r||l>=r)&&Object.keys(s.O).every((function(e){return s.O[e](o[c])}))?o.splice(c--,1):(i=!1,r<l&&(l=r));if(i){e.splice(d--,1);var a=n();void 0!==a&&(t=a)}}return t}r=r||0;for(var d=e.length;d>0&&e[d-1][2]>r;d--)e[d]=e[d-1];e[d]=[o,n,r]},s.d=function(e,t){for(var o in t)s.o(t,o)&&!s.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={179:0};s.O.j=function(t){return 0===e[t]};var t=function(t,o){var n,r,l=o[0],i=o[1],c=o[2],a=0;if(l.some((function(t){return 0!==e[t]}))){for(n in i)s.o(i,n)&&(s.m[n]=i[n]);if(c)var d=c(s)}for(t&&t(o);a<l.length;a++)r=l[a],s.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return s.O(d)},o=self.webpackChunkcamsvalet=self.webpackChunkcamsvalet||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}(),s.O(void 0,[112],(function(){return s(6981)}));var n=s.O(void 0,[112],(function(){return s(7612)}));n=s.O(n)}();