// Refactor makeDancer superclass to pseudoclassical
// Pseudoclassical
//  Use 'this' keyword to add and point to properties and methods
//  Uses prototypal chain for methods that are shared amongst instances of a class
//    Uses prototype object of class constructor function to store methods
//  Uses keyword 'new' to instantiate an object

// Don't need to create var dancer
// Properties we can use keyword 'this'
// Methods - we can store them in makeDancer's prototype object
// No return statement

// Creates and returns a new dancer object that can step
var MakeDancer = function(top, left, timeBetweenSteps) {

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');

  this.step();

  // now that we have defined the this dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setPosition(top, left);
};

MakeDancer.prototype.step = function() {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  setTimeout(this.step, timeBetweenSteps);
};

MakeDancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

