$(function(){

  // PRESENT X OR O FOR CHOICE

  $(".choice").fadeOut(0,function(){
   $(this).fadeIn();
  });

  $(".which").show(1000);

  var selection;
  //Detect choice
  $(".which").click(function(event) {
        selection = $(event.target.id);
        /*console.log(choice);*/
        // Show grid
        $(".choice").hide(1000);
        $(".grid").show(1000);
        $("#prompt").show(1000);
  });

  // CREATE LIs FOR GRID MAP. MIGHT BE EXTRA; MAYBE CAN USE JUST DIV

  var grid = [
  ['','',''],
  ['','',''],
  ['','',''],
  ];

  var popCells = function () {
    $('<li>').text(grid[0][0]).appendTo($('.row.11 > ul'));
    $('<li>').text(grid[0][1]).appendTo($('.row.12 > ul'));
    $('<li>').text(grid[0][2]).appendTo($('.row.13 > ul'));
    $('<li>').text(grid[1][0]).appendTo($('.row.21 > ul'));
    $('<li>').text(grid[1][1]).appendTo($('.row.22 > ul'));
    $('<li>').text(grid[1][2]).appendTo($('.row.23 > ul'));
    $('<li>').text(grid[2][0]).appendTo($('.row.31 > ul'));
    $('<li>').text(grid[2][1]).appendTo($('.row.32 > ul'));
    $('<li>').text(grid[2][2]).appendTo($('.row.33 > ul'));
  }

  popCells();

// PLAY

  // Win check
  // Check for 3 images in row with = and 8 combos separated by ||. SYNTAX

  var row = function () {
    return ((($('.11').children('img').length) &&  ($('.22').children('img').length) &&  ($('.33').children('img').length))
    || (($('.13').children('img').length) &&  ($('.22').children('img').length) &&  ($('.31').children('img').length))
    || (($('.11').children('img').length) &&  ($('.12').children('img').length) &&  ($('.13').children('img').length))
    || (($('.21').children('img').length) &&  ($('.22').children('img').length) &&  ($('.23').children('img').length))
    || (($('.31').children('img').length) &&  ($('.32').children('img').length) &&  ($('.33').children('img').length))
    || (($('.11').children('img').length) &&  ($('.21').children('img').length) &&  ($('.31').children('img').length))
    || (($('.12').children('img').length) &&  ($('.22').children('img').length) &&  ($('.32').children('img').length))
    || (($('.13').children('img').length) &&  ($('.23').children('img').length) &&  ($('.33').children('img').length)));
  };

  var winner = row.id;

  // Players

  // X. Too much in here, I know....

  var playerX = function () {
    var count = 0;

    $('#prompt').html('X');

    //Want to detect click in parent div but assign image to specific child
    $('.grid').click(function () {
      // ID which cell was clicked
      var target = $( event.target );
      // show image in that cell (by attaching)
      $(target).prepend('<img id="xxxx" src="./imgs/X.png" />')
      // Add to click count
      count += 1;
      $('#prompt').html('O');
    });
  }
 /*
    Var Click2 = function () {
      $('.grid').click(function () {
    // If click on div w/ img
        While (((count === 2) && ($(event.target).find('img')) {
          $('#prompt').html('Click different cell');
        };
        // Can have this stand alone if or else rqd?
        if ((count === 2) && ($(event.target).find('img')===0)) {
          $( event.target).prepend('<img id="xxxx" src="./imgs/o_small.png" />'))
        };
        count += 1;
        $('#prompt').html('X');
      });
    };

    Var Click3 = function () {
      $('.grid').click(function () {
        While (((count === 3) && ($(event.target).find('img')) {
          $('#prompt').html('Click different cell');
        };
        if ((count === 3) && ($(event.target).find('img')===0)) {
          $( event.target).prepend('<img id="xxxx" src="./imgs/X.png" />'))
        };
        count += 1;
        $('#prompt').html('O');
      });
    };

    Var Click4 = function () {
      $('.grid').click(function () {
        While (((count === 4) && ($(event.target).find('img')) {
          $('#prompt').html('Click different cell');
        };
        if ((count === 4) && ($(event.target).find('img')===0)) {
          $( event.target).prepend('<img id="xxxx" src="./imgs/o_small.png" />'))
        };
        count += 1;
        $('#prompt').html('X');
      });
    };

    Var Click5 = function () {
      $('.grid').click(function () {
        While (((count === 5) && ($(event.target).find('img')) {
          $('#prompt').html('Click different cell');
        };
        if ((count === 5) && ($(event.target).find('img')===0)) {
          $( event.target).prepend('<img id="xxxx" src="./imgs/X.png" />'))
        };
        count += 1;
      });
      // win, lose check
      if (row) {
        $('#prompt').html(winner + ‘wins!’);
      } else {
        $('#prompt').html('O');
      };
   });

    Var Click6 = function () {
      $('.grid').click(function () {
        While (((count === 6) && ($(event.target).find('img')) {
          $('#prompt').html('Click different cell');
        };
        if ((count === 6) && ($(event.target).find('img')===0)) {
          $( event.target).prepend('<img id="xxxx" src="./imgs/o_small.png" />'))
        };
        count += 1;
      });
      if (row) {
        $('#prompt').html(winner + ‘wins!’);
      } else {
        $('#prompt').html('X');
      };
   });


    Var Click7 = function () {
      $('.grid').click(function () {
        While (((count === 7) && ($(event.target).find('img')) {
          $('#prompt').html('Click different cell');
        };
        if ((count === 7) && ($(event.target).find('img')===0)) {
          $( event.target).prepend('<img id="xxxx" src="./imgs/X.png" />'))
        };
        count += 1;
      });
      if (row) {
        $('#prompt').html(winner + ‘wins!’);
      } else {
        $('#prompt').html('O');
      };
   });

    Var Click8 = function () {
      $('.grid').click(function () {
        While (((count === 8) && ($(event.target).find('img')) {
          $('#prompt').html('Click different cell');
        };
        if ((count === 8) && ($(event.target).find('img')===0)) {
          $( event.target).prepend('<img id="xxxx" src="./imgs/o_small.png" />'))
        };
        count += 1;
      });
      if (row) {
        $('#prompt').html(winner + ‘wins!’);
      } else {
        $('#prompt').html('X');
      };
   });

    Var Click9 = function () {
      $('.grid').click(function () {
        While (((count === 9) && ($(event.target).find('img')) {
          $('#prompt').html('Click different cell');
        };
        if ((count === 9) && ($(event.target).find('img')===0)) {
          $( event.target).prepend('<img id="xxxx" src="./imgs/X.png" />'))
        };
        count += 1;
      });
      if (row) {
        $('#prompt').html(winner + ‘wins!’);
      } else {
        $('#prompt').html(‘No winner.’);
      };
    // Can I call a game variable encompassing this and total game?
   });
};

  // O.

  var playerO = function () {
    var count = 0;

    $('#prompt').html('O');

    //Want to detect click in parent div but assign image to specific child
    $('.grid').click(function () {
      // ID which cell was clicked
      var target = $( event.target );
      // show image in that cell (by attaching)
      $(target).prepend('<img id="xxxx" src="./imgs/o_small.png" />')
      // Add to click count
      count += 1;
      $('#prompt').html('X');
    });

    Var Click2 = function () {
      $('.grid').click(function () {
    // If click on div w/ img
        While (((count === 2) && ($(event.target).find('img')) {
          $('#prompt').html('Click different cell');
        };
        // Can have this stand alone if or else rqd?
        if ((count === 2) && ($(event.target).find('img')===0)) {
          $( event.target).prepend('<img id="xxxx" src="./imgs/X.png" />'))
        };
        count += 1;
        $('#prompt').html('O');
      });
    };

    Var Click3 = function () {
      $('.grid').click(function () {
        While (((count === 3) && ($(event.target).find('img')) {
          $('#prompt').html('Click different cell');
        };
        if ((count === 3) && ($(event.target).find('img')===0)) {
          $( event.target).prepend('<img id="xxxx" src="./imgs/o_small.png" />'))
        };
        count += 1;
        $('#prompt').html('X');
      });
    };

    Var Click4 = function () {
      $('.grid').click(function () {
        While (((count === 4) && ($(event.target).find('img')) {
          $('#prompt').html('Click different cell');
        };
        if ((count === 4) && ($(event.target).find('img')===0)) {
          $( event.target).prepend('<img id="xxxx" src="./imgs/X.png" />'))
        };
        count += 1;
        $('#prompt').html('O');
      });
    };

    Var Click5 = function () {
      $('.grid').click(function () {
        While (((count === 5) && ($(event.target).find('img')) {
          $('#prompt').html('Click different cell');
        };
        if ((count === 5) && ($(event.target).find('img')===0)) {
          $( event.target).prepend('<img id="xxxx" src="./imgs/o_small.png" />'))
        };
        count += 1;
      });
      // win, lose check
      if (row) {
        $('#prompt').html(winner + ‘wins!’);
      } else {
        $('#prompt').html('X');
      };
   });

    Var Click6 = function () {
      $('.grid').click(function () {
        While (((count === 6) && ($(event.target).find('img')) {
          $('#prompt').html('Click different cell');
        };
        if ((count === 6) && ($(event.target).find('img')===0)) {
          $( event.target).prepend('<img id="xxxx" src="./imgs/X.png" />'))
        };
        count += 1;
      });
      if (row) {
        $('#prompt').html(winner + ‘wins!’);
      } else {
        $('#prompt').html('O');
      };
   });


    Var Click7 = function () {
      $('.grid').click(function () {
        While (((count === 7) && ($(event.target).find('img')) {
          $('#prompt').html('Click different cell');
        };
        if ((count === 7) && ($(event.target).find('img')===0)) {
          $( event.target).prepend('<img id="xxxx" src="./imgs/o_small.png" />'))
        };
        count += 1;
      });
      if (row) {
        $('#prompt').html(winner + ‘wins!’);
      } else {
        $('#prompt').html('X');
      };
   });

    Var Click8 = function () {
      $('.grid').click(function () {
        While (((count === 8) && ($(event.target).find('img')) {
          $('#prompt').html('Click different cell');
        };
        if ((count === 8) && ($(event.target).find('img')===0)) {
          $( event.target).prepend('<img id="xxxx" src="./imgs/X.png" />'))
        };
        count += 1;
      });
      if (row) {
        $('#prompt').html(winner + ‘wins!’);
      } else {
        $('#prompt').html('O');
      };
   });

    Var Click9 = function () {
      $('.grid').click(function () {
        While (((count === 9) && ($(event.target).find('img')) {
          $('#prompt').html('Click different cell');
        };
        if ((count === 9) && ($(event.target).find('img')===0)) {
          $( event.target).prepend('<img id="xxxx" src="./imgs/o_small.png" />'))
        };
        count += 1;
      });
      if (row) {
        $('#prompt').html(winner + ‘wins!’);
      } else {
        $('#prompt').html(‘No winner.’);
      };
    // Can I call a game variable encompassing this and total game?
   });
};

  // Who goes first
  Var goesFirst = function (){
    if (selection.indexOf('x') {
      playerX();
    } else {
      playerO();
    }
  };




*/


});
