$(document).ready(function(){
  var turn = 'X';
  var turn1 = 'O';
  var turns = [' ',' ',' ',' ',' ',' ',' ',' ',' '];
  var computerTurn = 'O';
  var gameOn = false;
  var count = 0;
  
  $('.change').hide();
  $('#tictac').hide();
  $('#info').hide();
  
  $('.change').click(function(){
    $('#tictac').fadeOut(1000);
    $('.change').fadeOut(1000);
    $('#sides').delay(1300).fadeIn(1000);
    $('#X, #O').delay(1300).fadeIn(1000);
    reset();
  });
  
  $('#X').click(function(){
    turn = 'X';
    computerTurn = 'O';
    $('#O').removeClass('btn-primary');
    $('#X').addClass('btn-primary');
    $('#tictac').delay(1300).fadeIn(1000);
    $('.change').delay(1300).fadeIn(1000);
    $('#X, #O').fadeOut(1000);
    $('#sides').fadeOut(1000);
    reset();
  });
    $('#O').click(function(){
    turn = 'O';
    computerTurn = 'X';
    $('#X').removeClass('btn-primary');
    $('#O').addClass('btn-primary');
    $('#tictac').delay(1300).fadeIn(1000);
    $('.change').delay(1300).fadeIn(1000);
    $('#X, #O').fadeOut(1000);
    $('#sides').fadeOut(1000);
      reset();
  });
  
  function computersTurn(){
    var taken = false;
    while (taken === false && count !== 5){
      var computerMove = (Math.random()*10).toFixed();
      var move = $('#' + computerMove).text();
      if (move === ' '){
        $('#' + computerMove).text(computerTurn);
        taken = true;
        turns[computerMove] = computerTurn;
      }
    }
  }
  
  function playerTurn(turn, id){
    var spotTaken = $('#' + id).text();
    if(spotTaken === ' '){
      count++;
      turns[id] = turn;
      $('#' + id).text(turn);
      winCondition(turns, turn);
      if (gameOn === false){
        computersTurn();
        winCondition(turns, computerTurn);
      }
    }
  }
  
  function winCondition(turnArray, currentTurn){
    // WIN!
    if (turnArray[0] === currentTurn && turnArray[1] === currentTurn && turnArray[2] === currentTurn){
      gameOn = true;
      $('#info').show().text(currentTurn + " wins!").delay(1000).fadeOut(1000);
      reset();
    }
     else if (turnArray[0] === currentTurn && turnArray[3] === currentTurn && turnArray[6] === currentTurn){
      gameOn = true;
      $('#info').show().text(currentTurn + " wins!").delay(1000).fadeOut(1000);
      reset();
    }
     else if (turnArray[0] === currentTurn && turnArray[4] === currentTurn && turnArray[8] === currentTurn){
      gameOn = true;
      $('#info').show().text(currentTurn + " wins!").delay(1000).fadeOut(1000);
       reset();
    }
     else if (turnArray[1] === currentTurn && turnArray[4] === currentTurn && turnArray[7] === currentTurn){
      gameOn = true;
      $('#info').show().text(currentTurn + " wins!").delay(1000).fadeOut(1000);
       reset();
    }
     else if (turnArray[2] === currentTurn && turnArray[5] === currentTurn && turnArray[8] === currentTurn){
      gameOn = true;
      $('#info').show().text(currentTurn + " wins!").delay(1000).fadeOut(1000);
       reset();
    }
     else if (turnArray[2] === currentTurn && turnArray[4] === currentTurn && turnArray[6] === currentTurn){
      gameOn = true;
      $('#info').show().text(currentTurn + " wins!").delay(1000).fadeOut(1000);
       reset();
    }
     else if (turnArray[3] === currentTurn && turnArray[4] === currentTurn && turnArray[5] === currentTurn){
      gameOn = true;
      $('#info').show().text(currentTurn + " wins!").delay(1000).fadeOut(1000);
       reset();
    }
     else if (turnArray[6] === currentTurn && turnArray[7] === currentTurn && turnArray[8] === currentTurn){
      gameOn = true;
      $('#info').show().text(currentTurn + " wins!").delay(1000).fadeOut(1000);
       reset();
    }
    // DRAW!
     else if (turnArray[0] === currentTurn && turnArray[1] === currentTurn && turnArray[5] === currentTurn && turnArray[6] === currentTurn && turnArray[7] === currentTurn){
      gameOn = true;
      $('#info').show().text(" Draw!").delay(1000).fadeOut(1000);
      reset();
    }
    else if (turnArray[1] === currentTurn && turnArray[2] === currentTurn && turnArray[3] === currentTurn && turnArray[7] === currentTurn && turnArray[8] === currentTurn){
      gameOn = true;
      $('#info').show().text(" Draw!").delay(1000).fadeOut(1000);
      reset();
    }
    else if (turnArray[0] === currentTurn && turnArray[2] === currentTurn && turnArray[3] === currentTurn && turnArray[5] === currentTurn && turnArray[7] === currentTurn){
      gameOn = true;
      $('#info').show().text(" Draw!").delay(1000).fadeOut(1000);
      reset();
    }
    else if (turnArray[1] === currentTurn && turnArray[3] === currentTurn && turnArray[5] === currentTurn && turnArray[6] === currentTurn && turnArray[8] === currentTurn){
      gameOn = true;
      $('#info').show().text(" Draw!").delay(1000).fadeOut(1000);
      reset();
    }
    else if (turnArray[1] === currentTurn && turnArray[3] === currentTurn && turnArray[5] === currentTurn && turnArray[6] === currentTurn && turnArray[8] === currentTurn){
      gameOn = true;
      $('#info').show().text(" Draw!").delay(1000).fadeOut(1000);
      reset();
    }
    else if (turnArray[0] === currentTurn && turnArray[2] === currentTurn && turnArray[3] === currentTurn && turnArray[7] === currentTurn && turnArray[8] === currentTurn){
      gameOn = true;
      $('#info').show().text(" Draw!").delay(1000).fadeOut(1000);
      reset();
    }
    else if (turnArray[0] === currentTurn && turnArray[2] === currentTurn && turnArray[5] === currentTurn && turnArray[6] === currentTurn && turnArray[7] === currentTurn){
      gameOn = true;
      $('#info').show().text(" Draw!").delay(1000).fadeOut(1000);
      reset();
    }
    else if (turnArray[0] === currentTurn && turnArray[1] === currentTurn && turnArray[5] === currentTurn && turnArray[6] === currentTurn && turnArray[8] === currentTurn){
      gameOn = true;
      $('#info').show().text(" Draw!").delay(1000).fadeOut(1000);
      reset();
    }
    else if (turnArray[1] === currentTurn && turnArray[2] === currentTurn && turnArray[3] === currentTurn && turnArray[6] === currentTurn && turnArray[8] === currentTurn){
      gameOn = true;
      $('#info').show().text(" Draw!").delay(1000).fadeOut(1000);
      reset();
    }
    else if (turnArray[0] === currentTurn && turnArray[2] === currentTurn && turnArray[4] === currentTurn && turnArray[5] === currentTurn && turnArray[6] === currentTurn){
      gameOn = true;
      $('#info').show().text(" Draw!").delay(1000).fadeOut(1000);
      reset();
    }
    else if (turnArray[0] === currentTurn && turnArray[1] === currentTurn && turnArray[4] === currentTurn && turnArray[6] === currentTurn && turnArray[8] === currentTurn){
      gameOn = true;
      $('#info').show().text(" Draw!").delay(1000).fadeOut(1000);
      reset();
    }
    else if (turnArray[2] === currentTurn && turnArray[3] === currentTurn && turnArray[4] === currentTurn && turnArray[6] === currentTurn && turnArray[8] === currentTurn){
      gameOn = true;
      $('#info').show().text(" Draw!").delay(1000).fadeOut(1000);
      reset();
    }
    else if (turnArray[0] === currentTurn && turnArray[2] === currentTurn && turnArray[4] === currentTurn && turnArray[7] === currentTurn && turnArray[8] === currentTurn){
      gameOn = true;
      $('#info').show().text(" Draw!").delay(1000).fadeOut(1000);
      reset();
    }
    else if (turnArray[0] === currentTurn && turnArray[1] === currentTurn && turnArray[4] === currentTurn && turnArray[5] === currentTurn && turnArray[6] === currentTurn){
      gameOn = true;
      $('#info').show().text(" Draw!").delay(1000).fadeOut(1000);
      reset();
    }
    else if (turnArray[1] === currentTurn && turnArray[3] === currentTurn && turnArray[4] === currentTurn && turnArray[6] === currentTurn && turnArray[8] === currentTurn){
      gameOn = true;
      $('#info').show().text(" Draw!").delay(1000).fadeOut(1000);
      reset();
    }
    else if (turnArray[2] === currentTurn && turnArray[3] === currentTurn && turnArray[4] === currentTurn && turnArray[7] === currentTurn && turnArray[8] === currentTurn){
      gameOn = true;
      $('#info').show().text(" Draw!").delay(1000).fadeOut(1000);
      reset();
    }
    else if (turnArray[0] === currentTurn && turnArray[2] === currentTurn && turnArray[4] === currentTurn && turnArray[5] === currentTurn && turnArray[7] === currentTurn){
      gameOn = true;
      $('#info').show().text(" Draw!").delay(1000).fadeOut(1000);
      reset();
    }
     else if (turnArray[0] === currentTurn && turnArray[2] === currentTurn && turnArray[3] === currentTurn && turnArray[4] === currentTurn && turnArray[7] === currentTurn){
      gameOn = true;
      $('#info').show().text(" Draw!").delay(1000).fadeOut(1000);
      reset();
    }
     else if (turnArray[0] === currentTurn && turnArray[4] === currentTurn && turnArray[5] === currentTurn && turnArray[6] === currentTurn && turnArray[7] === currentTurn){
      gameOn = true;
      $('#info').show().text(" Draw!").delay(1000).fadeOut(1000);
      reset();
    }
     else if (turnArray[1] === currentTurn && turnArray[4] === currentTurn && turnArray[5] === currentTurn && turnArray[6] === currentTurn && turnArray[8] === currentTurn){
      gameOn = true;
      $('#info').show().text(" Draw!").delay(1000).fadeOut(1000);
      reset();
    }
     else if (turnArray[1] === currentTurn && turnArray[2] === currentTurn && turnArray[3] === currentTurn && turnArray[4] === currentTurn && turnArray[8] === currentTurn){
      gameOn = true;
      $('#info').show().text(" Draw!").delay(1000).fadeOut(1000);
      reset();
    }
    else {
      gameOn = false;
    }
  }
  
  $('.tic').click(function(){
    var slot = $(this).attr('id');
    playerTurn(turn, slot);
  });
  function reset(){
    turns = [' ',' ',' ',' ',' ',' ',' ',' ',' '];
    count = 0;
    $('.tic').text(' ');
    gameOn = true;
  }
});