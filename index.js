document.querySelector('.btn').addEventListener('click', function() {
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;

    var randomDiceImg1 = "./images/dice" + randomNumber1 + ".png";
    var randomDiceImg2 = "./images/dice" + randomNumber2 + ".png";

    document.querySelector(".img1").setAttribute("src", randomDiceImg1);
    document.querySelector(".img2").setAttribute("src", randomDiceImg2);

    var results;
    if (randomNumber1 > randomNumber2) {
        results = "Player 1 Wins!";
    } else if (randomNumber2 > randomNumber1) {
        results = "Player 2 Wins!";
    } else {
        results = "It's a tie! Roll again!";
    }

    document.querySelector("h1").textContent = results;
});
