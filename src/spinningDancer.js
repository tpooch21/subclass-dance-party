var makeSpinnyDancer = function(top, left, timeBetweenSteps) {

  makeDancer.call(this, top, left, timeBetweenSteps);

  // this.$node.css('border', '10px solid blue');

};

makeSpinnyDancer.prototype = Object.create(makeDancer.prototype);

makeSpinnyDancer.prototype.constructor = makeSpinnyDancer;

makeSpinnyDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);

  // Add spin functionality
  this.$node.toggle();
};