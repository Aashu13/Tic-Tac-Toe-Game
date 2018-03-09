$(document).ready(function () {
  var oneplayer_btn = document.getElementById("one_player");
  var two_player = document.getElementById('two_player');
  var container = document.getElementById("container");
  $("table").fadeOut(0);
  $("#reset_Btn").fadeOut(0);

  var gameChoose = document.getElementById("game_choose");


  function player_1() {
    $(gameChoose).fadeOut(0);
    var symbole_chooseDiv = document.createElement("div");
    symbole_chooseDiv.id = "choose_symbol";
    symbole_chooseDiv.style.width = "100%";
    symbole_chooseDiv.style.padding = "50px";
    symbole_chooseDiv.style.textAlign = "center";

    var h3Tag = document.createElement("h2");
    h3Tag.textContent = "Would You like To Be X Or O";
    h3Tag.style.fontSize = "35px";
    h3Tag.style.color = "#ddd";

    var btn_x = document.createElement("button");
    btn_x.id = "X_symbol";
    $(btn_x).addClass("btn btn-primary");
    btn_x.textContent = "X";
    btn_x.style.margin = "10px";

    var btn_o = document.createElement("button");
    btn_x.id = "O_symbol";
    $(btn_o).addClass("btn btn-danger");
    btn_o.textContent = "O";

    var icon = document.createElement("div");
    var back_arrow = document.createElement("i");
    back_arrow.id = "back_Page";
    $(back_arrow).addClass("fa fa-arrow-left");
    back_arrow.style.fontSize = "35px";

    var p = document.createElement("p");
    p.textContent = "Back";

    icon.appendChild(p);
    icon.appendChild(back_arrow);
    symbole_chooseDiv.appendChild(h3Tag);
    symbole_chooseDiv.appendChild(btn_x);
    symbole_chooseDiv.appendChild(btn_o);
    symbole_chooseDiv.appendChild(icon);
    container.appendChild(symbole_chooseDiv);

    $(back_arrow).click(function () {
      $(symbole_chooseDiv).fadeOut(0);
      $(gameChoose).fadeIn(0);
    });

    $(btn_x).click(function () {
      $(symbole_chooseDiv).fadeOut(0);
      $("table").fadeIn(0);
      $("#reset_Btn").fadeIn(0);
      $("#reset_all").fadeIn(0);
    });

    $(btn_o).click(function () {
      $(symbole_chooseDiv).fadeOut(0);
      $("table").fadeIn(0);
      $("#reset_Btn").fadeIn(0);
      $("#reset_all").fadeIn(0);
    });

    $("#reset_all").on("click", function () {
      $("table").fadeOut(0);
      $(gameChoose).fadeIn(0);
      $("#reset_Btn").fadeOut(0);
      location.reload();
    });
  };


  // Initilize the code for the tic tac toe game

  var cell_0 = document.getElementById("0");
  var cell_1 = document.getElementById("1");
  var cell_2 = document.getElementById("2");
  var cell_3 = document.getElementById("3");
  var cell_4 = document.getElementById("4");
  var cell_5 = document.getElementById("5");

  var cell_6 = document.getElementById("6");
  var cell_7 = document.getElementById("7");
  var cell_8 = document.getElementById("8");

  var turnX = "X";
  var turnO = "O";

  playerTimeWinning = 0;
  computerTimeWinning = 0;

  var winnerMessage = document.getElementById("winnerMessage");
  var player = document.getElementById("player");
  player.textContent = playerTimeWinning;

  var computer = document.getElementById("computer");
  computer.textContent = computerTimeWinning;

  var computerTurn = false;
  var cellCount = 0;
  var cells = document.querySelectorAll("td");


  one_player.addEventListener("click", function () {
    player_1();
    pomodoro_app_player_1();
  });

  two_player.addEventListener("click", function () {
    $("#player_1").html("player_1");
    $("#computer_player").html("player_2");
    player_1();
    pomodoro_app_player_2();
  });




  function pomodoro_app_player_1() {
    for (var i = 0; i < cells.length; i++) {
      cells[i].addEventListener("click", startGame);
    }

    function startGame() {
      if (cellCount >= cells.length || this.innerText) {
        return;
      }
      cellCount++;
      if (computerTurn) {
        this.innerText = turnO;

        computerTurn = false;
      } else {
        this.innerText = turnX;
        randomTurn();
      }

      checkWinner();
    }

    function randomTurn() {
      computerTurn = true;
      var randomeNum = Math.floor(Math.random() * 9);
      var randomeCell = document.getElementById(randomeNum);

      var cellCount = 0;

      while (randomeCell.innerText && cellCount < cells.length) {
        randomeNum = Math.floor(Math.random() * 9);
        randomeCell = document.getElementById(randomeNum);
        cellCount++;
      }
      var ev = new CustomEvent("click");
      randomeCell.dispatchEvent(ev);
    }
  } // close paranthese for close function player 1



  function pomodoro_app_player_2() {

    var turnX = "X";
    var turnO = "O";
    var playerOne_turn = false;

    for (var j = 0; j < cells.length; j++) {
      cells[j].addEventListener("click", player_1_game);
    }

    function player_1_game() {

      if (cellCount >= cells.length && this.innerText) {
        return;
      }

      cellCount++;

      if (playerOne_turn) {
        this.innerText = turnO;
        playerOne_turn = false;
      } else {

        this.innerText = turnX;
        player_2_game();
      }

      checkWinner();
    }



    function player_2_game() {
      playerOne_turn = true;
      var randomeCell_2 = document.querySelectorAll('td');
      console.log(randomeCell_2);

      var cellCount = 0;

      while (randomeCell_2.innerText && cellCount < cells.length) {
        randomeCell_2 = document.querySelectorAll('td');
        cellCount++;
      }
      randomeCell_2.addEventListener("click");

    }

  } // close function for pomodoro function player_2


  function checkWinner() {
    if (
      cell_0.innerText == turnX &&
      cell_1.innerText == turnX &&
      cell_2.innerText == turnX
    ) {
      winnerMessage.textContent = "X won the match";
      player.innerHTML = playerTimeWinning += 1;
      counter = setInterval(reloadpage_after_win, 3000);
    }

    if (
      cell_3.innerText == turnX &&
      cell_4.innerText == turnX &&
      cell_5.innerText == turnX
    ) {
      winnerMessage.textContent = "X won the match";
      player.innerHTML = playerTimeWinning += 1;
      counter = setInterval(reloadpage_after_win, 3000);
    }

    if (
      cell_6.innerText == turnX &&
      cell_7.innerText == turnX &&
      cell_8.innerText == turnX
    ) {
      winnerMessage.textContent = "X won the match";
      player.innerHTML = playerTimeWinning += 1;
      counter = setInterval(reloadpage_after_win, 3000);
    }

    if (
      cell_0.innerText == turnX &&
      cell_4.innerText == turnX &&
      cell_8.innerText == turnX
    ) {
      winnerMessage.textContent = "X won the match";
      player.innerHTML = playerTimeWinning += 1;
      counter = setInterval(reloadpage_after_win, 3000);
    }

    if (
      cell_1.innerText == turnX &&
      cell_4.innerText == turnX &&
      cell_7.innerText == turnX
    ) {
      winnerMessage.textContent = "X won the match";
      player.innerHTML = playerTimeWinning += 1;
      counter = setInterval(reloadpage_after_win, 3000);
    }

    if (
      cell_2.innerText == turnX &&
      cell_5.innerText == turnX &&
      cell_8.innerText == turnX
    ) {
      winnerMessage.textContent = "X won the match";
      player.innerHTML = playerTimeWinning += 1;
      counter = setInterval(reloadpage_after_win, 3000);
    }

    if (
      cell_0.innerText == turnX &&
      cell_3.innerText == turnX &&
      cell_6.innerText == turnX
    ) {
      winnerMessage.textContent = "X won the match";
      player.innerHTML = playerTimeWinning += 1;
      counter = setInterval(reloadpage_after_win, 3000);
    }

    if (
      cell_2.innerText == turnX &&
      cell_4.innerText == turnX &&
      cell_6.innerText == turnX
    ) {
      winnerMessage.textContent = "X won the match";
      player.textContent = playerTimeWinning += 1;
      counter = setInterval(reloadpage_after_win, 3000);
    }

    if (
      cell_0.innerText == turnX &&
      cell_1.innerText == turnX &&
      cell_2.innerText == turnX
    ) {
      winnerMessage.textContent = "X won the match";
      player.innerHTML = playerTimeWinning += 1;
      counter = setInterval(reloadpage_after_win, 2000);
    }

    if (
      cell_3.innerText == turnX &&
      cell_4.innerText == turnX &&
      cell_5.innerText == turnX
    ) {
      winnerMessage.textContent = "X won the match";
      player.innerHTML = playerTimeWinning += 1;
      counter = setInterval(reloadpage_after_win, 3000);
    }

    if (
      cell_6.innerText == turnX &&
      cell_7.innerText == turnX &&
      cell_8.innerText == turnX
    ) {
      winnerMessage.textContent = "X won the match";
      player.innerHTML = playerTimeWinning += 1;
      counter = setInterval(reloadpage_after_win, 3000);
    }

    if (
      cell_0.innerText == turnX &&
      cell_4.innerText == turnX &&
      cell_8.innerText == turnX
    ) {
      winnerMessage.textContent = "X won the match";
      player.innerHTML = playerTimeWinning += 1;
      counter = setInterval(reloadpage_after_win, 3000);
    }

    if (
      cell_1.innerText == turnX &&
      cell_4.innerText == turnX &&
      cell_7.innerText == turnX
    ) {
      winnerMessage.textContent = "X won the match";
      player.innerHTML = playerTimeWinning += 1;
      counter = setInterval(reloadpage_after_win, 2000);
    }

    if (
      cell_2.innerText == turnX &&
      cell_5.innerText == turnX &&
      cell_8.innerText == turnX
    ) {
      winnerMessage.textContent = "X won the match";
      player.innerHTML = playerTimeWinning += 1;
      counter = setInterval(reloadpage_after_win, 3000);
    }

    if (
      cell_0.innerText == turnX &&
      cell_3.innerText == turnX &&
      cell_6.innerText == turnX
    ) {
      winnerMessage.textContent = "X won the match";
      player.innerHTML = playerTimeWinning += 1;
      counter = setInterval(reloadpage_after_win, 3000);
    }

    if (
      cell_2.innerText == turnX &&
      cell_4.innerText == turnX &&
      cell_6.innerText == turnX
    ) {
      winnerMessage.textContent = "X won the match";
      player.innerHTML = playerTimeWinning += 1;
      counter = setInterval(reloadpage_after_win, 3000);
    }

    // check condition for o turn

    if (
      cell_0.innerText == turnO &&
      cell_1.innerText == turnO &&
      cell_2.innerText == turnO
    ) {
      winnerMessage.textContent = "O won the match";
      counter = setInterval(reloadpage_after_win, 3000);

    }

    if (
      cell_3.innerText == turnO &&
      cell_4.innerText == turnO &&
      cell_5.innerText == turnO
    ) {
      winnerMessage.textContent = "O won the match";
      counter = setInterval(reloadpage_after_win, 3000);

    }

    if (
      cell_6.innerText == turnO &&
      cell_7.innerText == turnO &&
      cell_8.innerText == turnO
    ) {
      winnerMessage.textContent = "O won the match";
      counter = setInterval(reloadpage_after_win, 3000);

    }

    if (
      cell_0.innerText == turnO &&
      cell_4.innerText == turnO &&
      cell_8.innerText == turnO
    ) {
      winnerMessage.textContent = "O won the match";
      counter = setInterval(reloadpage_after_win, 3000);

    }

    if (
      cell_1.innerText == turnO &&
      cell_4.innerText == turnO &&
      cell_7.innerText == turnO
    ) {
      winnerMessage.textContent = "O won the match";
      counter = setInterval(reloadpage_after_win, 3000);

    }

    if (
      cell_2.innerText == turnO &&
      cell_5.innerText == turnO &&
      cell_8.innerText == turnO
    ) {
      winnerMessage.textContent = "O won the match";
      counter = setInterval(reloadpage_after_win, 3000);

    }

    if (
      cell_0.innerText == turnO &&
      cell_3.innerText == turnO &&
      cell_6.innerText == turnO
    ) {
      winnerMessage.textContent = "O won the match";
      counter = setInterval(reloadpage_after_win, 3000);

    }

    if (
      cell_2.innerText == turnO &&
      cell_4.innerText == turnO &&
      cell_6.innerText == turnO
    ) {
      winnerMessage.textContent = "O won the match";
      counter = setInterval(reloadpage_after_win, 3000);

    }
  }

  function reloadpage_after_win() {
    window.location.reload();
  }
}); // close for document objecti