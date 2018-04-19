var left = document.getElementById("previous");
console.log(left);
var right = document.getElementById("next");
console.log(right);



var slider = {
  slides: ["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg"],
  flame: 0,

  set: function(image) {
    document.getElementById("scr").style.backgroundImage =
      "url(img/" + image + ")";
  },

  init: function() {
    this.set(this.slides[this.flame]);
  },

  left: function() {
    this.flame--;
    if (this.flame < 0) {
      this.flame = this.slides.length - 1;
    };  
    this.set(this.slides[this.flame]);
  
  },

  right: function() {
    this.flame++;
    if (this.flame == this.slides.length) {
      this.flame = 0;
    };
    this.set(this.slides[this.flame]);
    
  }
};

left.addEventListener("click", function() {slider.left();}, false);
right.addEventListener("click", function() {slider.right();}, false);

window.onload = function() {
  slider.init();
  this.setInterval(function() {
    slider.right(); 
  },5000);  
};