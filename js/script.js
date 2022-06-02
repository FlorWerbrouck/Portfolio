var pi = Math.PI;
var sin = Math.sin;
var floor = Math.floor;
var abs = Math.abs;
var pow = Math.pow;

const changeFavicon = (rgb) => {
    rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    function hex(x) {
        return ("0" + parseInt(x).toString(16)).slice(-2);
    }
    var color = hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
    document.childNodes[1].childNodes[0].childNodes[1].href = "data:image/svg+xml,%3Csvg id='Favicon' data-name='Capa 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 58 62.52'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23" + color +";%7D.cls-2%7Bfont-size:56.19px;font-family:RooneySans-Bold, RooneySans;font-weight:700;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M48,58H10A10,10,0,0,1,0,48V10A10,10,0,0,1,10,0H48A10,10,0,0,1,58,10V48A10,10,0,0,1,48,58Z'/%3E%3Ctext class='cls-2' transform='translate(14.9 48.47)'%3EF%3C/text%3E%3C/svg%3E";
}

// Today in Bad Variable Names, we visit something I chose to call “epoch”…	
var epoch = function() { return new Date().getTime()/2000; }
// The last number in that line controls color cycle speed.

// This is an adaptation of the rainbow function described at
// http://basecase.org/env/on-rainbows (K is for @skimbrel, my
// buddy who had the central insight that sines work for this).
// We lighten and desaturate it a little.
function K(h) {
    h *= -1;
    var r = sin(pi * h);
    var g = sin(pi * (h + 1/3));
    var b = sin(pi * (h + 2/3));
    return [r, g, b].map(function (c) {
        c = c*c;
        c = 0.85 + (c*0.1); // HURRRR
        return floor(c * 255);
    });
}

function recolor(plus) {
    var cycle = ((epoch()/50) + plus) % 1;
    var color = K(cycle);
    color = 'rgb(' + color.join(',') + ')';
    $('html').css({'background-color': color});
    changeFavicon(color);
}
    
$(document).ready(function(){
    recolor(0);
    // The last number in this line is the update interval (in ms):
    a = function() { setInterval(function() { recolor(0) }, 100); }
    a();
});