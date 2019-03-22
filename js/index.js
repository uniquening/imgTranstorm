;(function () {
  var wrapper = document.getElementById('wrapper');
  wrapper.addEventListener('mouseenter', function (){
    this.className = 'anticlockwise-right';

  }, false)
  wrapper.addEventListener('mouseleave', function (){
    this.className = 'clockwise-right';

  }, false)
})();