$(document).ready(function() {
  window.dancers = [];

  var fromTop = 35;
  // Determines what actions to take within event handlers based on whether dancers are lined up
  var lineUpButtonClicked = false;

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);

    window.dancers.push(dancer.$node);
  });


  $('.lineUpButton').on('click', function(event) {
    for (var i = 0; i < window.dancers.length; i++) {
      if (!window.dancers[i].hasClass("pacman")) {
        window.dancers[i].html('<img class="ghost" src="https://pngimage.net/wp-content/uploads/2018/05/blue-pacman-ghost-png-7.png" />');
        window.dancers[i].animate({
          left: '95%',
          top: `${fromTop}px`
        });
        // window.dancers[i].css('top', `${fromTop}px`);
        fromTop += 50;
      }
    }
  });

  $('.disperseButton').on('click', function(event) {
    for (var i = 0; i < window.dancers.length; i++) {
      if (window.dancers[i].hasClass("blinky")) {
        window.dancers[i].html('');
        window.dancers[i].html('<img class="ghost" src="https://static.giantbomb.com/uploads/square_small/8/87790/2469740-blinky.png"/>');
      } else if (window.dancers[i].hasClass("inky")) {
        debugger;
        window.dancers[i].html('');
        window.dancers[i].html('<img class="ghost" src="https://static.giantbomb.com/uploads/square_small/8/87790/2469741-inky.png"/>');
      }
    }
  })

  // $('.banana').on('mouseover', function(event) {
  //   $(this).css('height', '120px');
  // }).on('mouseleave', function(event) {
  //   $(this).css('height', '50px');
  // });

});

