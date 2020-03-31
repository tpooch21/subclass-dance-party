var makeBouncyDancer = function(top, left, timeBetweenSteps, lineUp) {
  makeDancer.call(this, top, left, timeBetweenSteps);

  this.$node.addClass('pacman');
  this.$node.html('<img class="pacman" src="https://upload.wikimedia.org/wikipedia/commons/4/49/Pacman.svg"/>');
  this.$node.addClass('lineUp');

};

makeBouncyDancer.prototype = Object.create(makeDancer.prototype);
makeBouncyDancer.prototype.constructor = makeBouncyDancer;

makeBouncyDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);

  if (this.$node.hasClass('lineUp')) {
    this.$node.animate({
      left: '+=100'
    }, 1000);
  }
};
