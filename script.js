//modal pop up
$(document).ready(function(){
    $('.modal').modal();
  });

//dropdown in nav bar
$(document).ready(function(){
    $('.dropdown-trigger').dropdown({hover: false});
});  

//color of mana select
(function($){
    $(function(){
      // Plugin initialization
      $('select').not('.disabled').formSelect();
    });  
})(jQuery);

// Global variables
var numCardInput = document.querySelector("#number-of-card");
var colorManaInput = document.querySelector("#color-of-mana");
var numLandInput = document.querySelector("#number-of-land");
var numCreatureInput = document.querySelector("#number-of-creature");
var numInstantInput = document.querySelector("#number-of-instant");
var cardDisplayRow = document.querySelector("#card-display-row");

var modalFormEl = document.querySelector("#modal-form")

// JSON data of land cards
var landCardJson = [
    {
        name: "Plains",
        type: "Land",
        color: "White",
        image: "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=524948&type=card"
    },
    {
        name: "Swamp",
        type: "Land",
        color: "Black",
        image: "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=524952&type=card"
    },
    {
        name: "Island",
        type: "Land",
        color: "Blue",
        image: "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=524950&type=card"
    },
    {
        name: "Mountain",
        type: "Land",
        color: "Red",
        image: "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=524954&type=card"
    },
    {
        name: "Forest",
        type: "Land",
        color: "Green",
        image: "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=524956&type=card"
    }
]

function getUserInput(event) {
  event.preventDefault();
  var numCard = numCardInput.value;
  var colorMana = colorManaInput.value;
  var numLand = numLandInput.value;
  var numCreature = numCreatureInput.value;
  var numInstant = numInstantInput.value;

  console.log(numCard)
  // Add an alert message for valid number of cards 

  var totalNumCards = Number(numLand) + Number(numCreature) + Number(numInstant);

  var errorMessage = document.querySelector("#error-message");

  if (Number(numCard) < totalNumCards) {
      errorMessage.textContent = "Please remove cards to equal total number of cards";
    return;
  } else if (Number(numCard) > totalNumCards) {
      errorMessage.textContent = "Please enter more cards";
      return;
  } else if (Number(numCard) === totalNumCards) {
      $('.modal').hide();
  }
  console.log(numCard);
  console.log(colorMana);
  console.log(numLand);
  console.log(numCreature);
  console.log(numInstant);
  getCardData(colorMana, numLand, numCreature, numInstant);
}

function getCardData(colorOfMana, numberOfLand, numberOfCreature, numberOfInstant) {
  var mtgApiUrl = "https://api.magicthegathering.io/v1/cards";
  
  fetch(mtgApiUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      console.log(typeof(data));
      console.log(data.cards.length);
      console.log(colorOfMana);
      var landCategory = "Land";
      var creatureCategory = "Creature";
      var instantCategory = "Instant"
      var landPoolArr = [];
      var creaturePoolArr = [];
      var instantPoolArr = [];

      for (let i = 0; i < landCardJson.length; i++) {
        var dataMatchColorLand = landCardJson[i].color;
        var dataMatchTypesLand = landCardJson[i].type;
        if (dataMatchColorLand === colorOfMana && dataMatchTypesLand === landCategory) {
          landPoolArr.push(landCardJson[i].name);
        }  
      }

      for (let i = 0; i < data.cards.length; i++) {
        var dataMatchColor = data.cards[i].colors[0];
        var dataMatchTypes = data.cards[i].types[0];
        if(dataMatchColor == colorOfMana && dataMatchTypes == creatureCategory) {
          creaturePoolArr.push(data.cards[i].name);
        } else if(dataMatchColor == colorOfMana && dataMatchTypes == instantCategory) {
          instantPoolArr.push(data.cards[i].name);
        } 
      }
      console.log(landPoolArr);
      console.log(creaturePoolArr);
      console.log(instantPoolArr);

      var landChosenArr = [];
      var creatureChosenArr = [];
      var instantChosenArr = [];

      for (let i = 0; i < numberOfLand; i++) {
        var randomLandChosen = Math.floor(Math.random() * landPoolArr.length);
        var landPoolArrChosen = landPoolArr[randomLandChosen];
        landChosenArr.push(landPoolArrChosen);
      }

      for (let i = 0; i < numberOfCreature; i++) {
        var randomCreatureChosen = Math.floor(Math.random() * creaturePoolArr.length);
        var creaturePoolArrChosen = creaturePoolArr[randomCreatureChosen];
        creatureChosenArr.push(creaturePoolArrChosen);
      }

      for (let i = 0; i < numberOfInstant; i++) {
        var randomInstantChosen = Math.floor(Math.random() * instantPoolArr.length);
        var instantPoolArrChosen = instantPoolArr[randomInstantChosen];
        instantChosenArr.push(instantPoolArrChosen);
      }

      console.log(landChosenArr);
      console.log(creatureChosenArr);
      console.log(instantChosenArr);     
  })
}

modalFormEl.addEventListener('submit', getUserInput);