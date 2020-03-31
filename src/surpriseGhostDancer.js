var makeSurpriseDancer = function(top, left, timeBetweenSteps) {

  makeDancer.call(this, top, left, timeBetweenSteps);

  this.$node.addClass('surprise');
  this.$node.html('<img class="ghost" src="https://static.giantbomb.com/uploads/square_small/8/87790/2469741-inky.png"/>');


};

makeSurpriseDancer.prototype = Object.create(makeDancer.prototype);

makeSurpriseDancer.prototype.constructor = makeSurpriseDancer;

makeSurpriseDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);

  // Add spin functionality
  this.$node.toggleClass('rotateY');
};
