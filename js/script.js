const init = () => { 
    console.log("Script loaded");
    // changeFavicon('00FF00');
}

const changeFavicon = (hex) => {
    document.childNodes[1].childNodes[0].childNodes[1].href = "data:image/svg+xml,%3Csvg version='1.1' id='Capa_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 58 58' style='enable-background:new 0 0 58 58;' xml:space='preserve'%3E%3Cg%3E%3Crect style='fill:%23" + hex +";' width='58' height='58'/%3E%3C/g%3E%3C/svg%3E";
}

document.addEventListener('DOMContentLoaded', async function () {
    init();
});