var makeSurpriseDancer = function(top, left, timeBetweenSteps) {

  makeDancer.call(this, top, left, timeBetweenSteps);

  this.$node.addClass('spinner');
  this.$node.html('<img class="banana" src="https://i.ya-webdesign.com/images/peanut-butter-jelly-time-png-3.png">');

};

makeSurpriseDancer.prototype = Object.create(makeDancer.prototype);

makeSurpriseDancer.prototype.constructor = makeSurpriseDancer;

makeSurpriseDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);

  // Add spin functionality
  this.$node.toggleClass('rotateY');
};