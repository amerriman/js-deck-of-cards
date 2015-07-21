// if this goes up here, it won't work - it has to go below the "deal" part
//var hideCards = document.getElementById("reset");
//   hideCards.onclick = function() {
//   var resetContainer = document.getElementById('container');
//     resetContainer.innerHTML = "";
//     hideCards();
//   };

//this is for interacting with the DOM
var showCards = document.getElementById("cards");

//when you click on the #cards' button, this function displays the cards
showCards.onclick = function(){
      //creates a variable to select the 'container' section in the DOM
  var cardContainer = document.getElementById('container');
  //sets cardContainer insides to an empty string
  cardContainer.innerHTML = "";

  //calls the dC function
  displayCards();
};

//displayes the deck of shuffled cards
function displayCards(){
  var deck = newDeck();
  var shuffledCards = shuffleCards(deck);

  for(var i=0; i < deck.length; i++){
    //makes a div
    var card = document.createElement('div');
    //gives it the class of 'card'
    card.className = "card";
    //creates a variable to select the 'container' section in the DOM
    var cardContainer = document.getElementById('container');
    //adds a card at the end
    cardContainer.appendChild(card);
    //changes the background to the image of the card from shuffledCards
    card.style.backgroundImage = "url(images/" + shuffledCards[i].suit + "-" + shuffledCards[i].card + ".png" + ")";

  }
}
var hideCards = document.getElementById("reset");
  hideCards.onclick = function() {
  var resetContainer = document.getElementById('container');
    resetContainer.innerHTML = "";
  };

// Creates a deck of 52 cards
function newDeck(){

  var ranks = [
    {card:"a"},
    {card:"2"},
    {card:"3"},
    {card:"4"},
    {card:"5"},
    {card:"6"},
    {card:"7"},
    {card:"8"},
    {card:"9"},
    {card:"10"},
    {card:"j"},
    {card:"q"},
    {card:"k"}
  ];

  var suits = [ "d", "c", "s", "h"];
  var deck = [];

  for (var i = 0; i < ranks.length; i++) {
    for (var j = 0; j < suits.length; j++) {
      deck.push({
        card:ranks[i].card,
        suit:suits[j]
      });
    }
  }
  //console.log(JSON.stringify(deck));
  return deck;
}

// Shuffles the Deck
function shuffleCards(cardDeck){
  var result = [];
  var cardDeckCopy = cardDeck.slice(0);
  cardDeckLength = cardDeckCopy.length;
  for (var i = 0; i < cardDeckLength; i++) {
    var num = Math.floor(Math.random() * cardDeckCopy.length);
    result.push(cardDeckCopy.splice(num, 1)[0]);
  }
  return result;
}


