var w= window.innerWidth,
h = window.innerHeight,
y= w/h;
// w_font = 0;

const screen = (a) => {
if (w >= h)  y=  w/h;
else y = h/w;
return (a * y) + '%';
}

export default screen;