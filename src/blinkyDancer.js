// call MakeDancer with this keyword
// set blinkyDancer.prototype.oldStep equal to blinkyDancer.prototype.step

// blinkyDancer.prototype.step = function() {}

// blinkyDancer.prototype.oldStep = function() {};

// blinkyDancer.prototype.step =

// makeBlinkyDancer.prototype = Object.create(makeDancer.prototype)

// var blinkyDancer = new makeBlinkyDancer();

// Pseudoclassical
//  Use 'this' keyword to add and point to properties and methods
//  Uses prototypal chain for methods that are shared amongst instances of a class
//    Uses prototype object of class constructor function to store methods
//  Uses keyword 'new' to instantiate an object

// Don't need to create var dancer
// Properties we can use keyword 'this'
// Methods - we can store them in makeDancer's prototype object
// No return statement

var MakeBlinkyDancer = function(top, left, timeBetweenSteps) {

  MakeDancer.call(this, top, left, timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
};

MakeBlinkyDancer.prototype = Object.create(MakeDancer.prototype);

MakeBlinkyDancer.prototype.constructor = MakeBlinkyDancer;

// MakeBlinkyDancer.prototype.oldStep = MakeBlinkyDancer.prototype.step;

MakeBlinkyDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  MakeDancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
};

// var blinkyDancer = new MakeBlinkyDancer();
// blinkyDancer.step();
//    this = blinkyDancer;
//    MakeDancer.prototype.step.call(blinkyDancer);

//    setTimeout(blinkyDancer.step.bind(blinkyDancer))