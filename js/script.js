const init = () => { 
    console.log("Script loaded");
    // changeFavicon('00FF00');
}

const changeFavicon = (hex) => {
    document.childNodes[1].childNodes[0].childNodes[1].href = "data:image/svg+xml,%3Csvg id='Favicon' data-name='Capa 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 58 62.52'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23" + hex +";%7D.cls-2%7Bfont-size:56.19px;font-family:RooneySans-Bold, RooneySans;font-weight:700;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M48,58H10A10,10,0,0,1,0,48V10A10,10,0,0,1,10,0H48A10,10,0,0,1,58,10V48A10,10,0,0,1,48,58Z'/%3E%3Ctext class='cls-2' transform='translate(14.9 48.47)'%3EF%3C/text%3E%3C/svg%3E";
}

document.addEventListener('DOMContentLoaded', async function () {
    init();
});