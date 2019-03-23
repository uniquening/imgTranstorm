;(function () {
  var wrapper = document.getElementById('wrapper');
  var arr = [];
  var flag = true;
  init(wrapper);
  function init (wrapper) {
    arr.push({
      w: wrapper.offsetWidth,
      h: wrapper.offsetHeight,
      l: wrapper.offsetLeft,   
      t: wrapper.offsetTop
    });
    bindEvent(wrapper);
  }
  function bindEvent(item) {
    item.addEventListener('mouseenter', function (e) {
      if ( flag ) {
        flag = false;
        addClass(e, item, 'out');
        flag = true;
      }
      
    }, false)
    item.addEventListener('mouseleave', function (e) {
      addClass(e, item, 'in');
    }, false)
  }
  function addClass(e, item, dir) {
    var d = getD(e);
    var str = '';
    switch (d) {
      case 0: 
        str = '-top';
        break;
      case 1:
        str = '-right';
        break;
      case 2: 
        str = '-bottom';
        break;
      case 3:
        str = '-left';
        break; 
    }
    item.className = dir + str;
  }
  function getD(e) {
    var w = arr[0].w,
        h = arr[0].h,
        l = arr[0].l,
        t = arr[0].t,
        x = e.pageX - (l + w / 2),
        y = e.pageY - (t + h / 2);
    var d = Math.atan2(y, x) * 180 / Math.PI;
    d = (d + 180) /  90;
    d = Math.round(d + 3) % 4;     
    return d;
  }
})();