var pi=Math.PI,sin=Math.sin,floor=Math.floor,abs=Math.abs,pow=Math.pow;const doc=document.documentElement,changeFavicon=a=>{function b(a){return("0"+parseInt(a).toString(16)).slice(-2)}var c=b((a=a.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/))[1])+b(a[2])+b(a[3]);doc.style.setProperty("--changing-color-dark","#"+LightenDarkenColor(c,-45)),document.childNodes[1].childNodes[0].childNodes[1].href="data:image/svg+xml,%3Csvg id='Favicon' data-name='Capa 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 58 62.52'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23"+c+";%7D.cls-2%7Bfont-size:56.19px;font-family:RooneySans-Bold, RooneySans;font-weight:700;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M48,58H10A10,10,0,0,1,0,48V10A10,10,0,0,1,10,0H48A10,10,0,0,1,58,10V48A10,10,0,0,1,48,58Z'/%3E%3Ctext class='cls-2' transform='translate(14.9 48.47)'%3EF%3C/text%3E%3C/svg%3E"};var epoch=function(){return new Date().getTime()/800};function K(a){var b=sin(pi*(a*=-1)),c=sin(pi*(a+1/3)),d=sin(pi*(a+2/3));return[b,c,d].map(function(a){return a*=a,floor(255*(a=.85+.1*a))})}function recolor(b){var c=(epoch()/50+b)%1,a=K(c);a="rgb("+a.join(",")+")",doc.style.setProperty("--changing-color",a),changeFavicon(a)}function appHeight(){doc.style.setProperty("--vh",.01*window.innerHeight+"px")}function LightenDarkenColor(d,e){var g=!1;"#"==d[0]&&(d=d.slice(1),g=!0);var f=parseInt(d,16),a=(f>>16)+e;a>255?a=255:a<0&&(a=0);var b=(f>>8&255)+e;b>255?b=255:b<0&&(b=0);var c=(255&f)+e;return c>255?c=255:c<0&&(c=0),(g?"#":"")+(c|b<<8|a<<16).toString(16)}$(document).ready(function(){AOS.init(),window.addEventListener("resize",appHeight),appHeight(),(a=function(){setInterval(function(){recolor(0)},400)})();var a=new Date("2002-04-15"),b=Math.abs(new Date(Date.now()-a.getTime()).getUTCFullYear()-1970);document.querySelector(".js-age").innerHTML=b+" year old"})