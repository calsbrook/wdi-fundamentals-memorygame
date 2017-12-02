var cards = [
{
rank: "queen",
suit: "hearts",
cardImage: "images/queen-of-hearts.png"
},
{
rank: "queen",
suit: "diamonds",
cardImage: "images/queen-of-diamonds.png"
},
{
rank: "king",
suit: "hearts",
cardImage: "images/king-of-hearts.png"
},
{
rank: "king",
suit: "diamonds",
cardImage: "images/king-of-diamonds.png"
}
];
var cardsInPlay = [];
var score = 0


var createBoard = function () {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
};

var reset = function () {
	document.getElementById('game-board').innerHTML="";
	createBoard();
	score = 0;
	cardsInPlay = [];
	displayScore();
}


var flipCard = function () {
	var cardId = this.getAttribute('data-id');
	this.setAttribute('src', cards[cardId].cardImage);
	this.removeEventListener('click', flipCard);
	cardsInPlay.push(cards[cardId].rank);
	if (cardsInPlay.length === 2) {
	checkForMatch();
  }
}


var checkForMatch = function () {
	if (cardsInPlay[0] === cardsInPlay[1]) {
			cardsInPlay = [];
			score = score + 1;
			displayScore();
			console.log(score);
			setTimeout(function() {
  	alert('You found a match!');
  },30);
		} else {
			setTimeout(function() {
  	alert('Sorry try again');
	},30);
			cardsInPlay = [];
			score = score - 1;
			displayScore();
			setTimeout(function() {
				var board = document.getElementById('game-board');
			while(board.hasChildNodes()){
				board.removeChild(board.firstChild);
			}	},30);
			setTimeout(function() {createBoard();
			},30);
		}
}

var displayScore = function () {
	document.getElementById('score-display').innerHTML = score;
}

createBoard();
displayScore();
