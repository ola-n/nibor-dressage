// Function to use for getting the width of the scrollbar. Needs to be used when covering
// the screen by some sort of popup while turning off scroll on the below lying content,
// otherwise everything will jump when scrolling is turned off and the scrollbar goes away.
export function getScrollBarWidth() {
  if (typeof document !== 'undefined') {
    var outer;
    var w1;
    var w2;
    var inner = document.createElement('p');
    inner.style.width = '100%';
    inner.style.height = '200px';

    outer = document.createElement('div');
    outer.style.position = 'absolute';
    outer.style.top = '0px';
    outer.style.left = '0px';
    outer.style.visibility = 'hidden';
    outer.style.width = '200px';
    outer.style.height = '150px';
    outer.style.overflow = 'hidden';
    outer.appendChild(inner);

    document.body.appendChild(outer);
    w1 = inner.offsetWidth;
    outer.style.overflow = 'scroll';
    w2 = inner.offsetWidth;
    if (w1 === w2) {
      w2 = outer.clientWidth;
    }

    document.body.removeChild(outer);

    return w1 - w2;
  }
}
