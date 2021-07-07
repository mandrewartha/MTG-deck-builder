$(document).ready(function(){
    $('.modal').modal();
  });

$(document).ready(function(){
    $('.dropdown-trigger').dropdown({hover: false});
});  

// Global variables
var numCardInput = document.querySelector("#number-of-card");
var colorManaInput = document.querySelector("#color-of-mana");
var numLandInput = document.querySelector("#number-of-land");
var numCreatureInput = document.querySelector("#number-of-creature");
var numInstantInput = document.querySelector("#number-of-instant");

var modalFormEl = document.querySelector("#modal-form")
var generateBtn = document.querySelector("#generate-Btn");

// JSON data of land cards
var landCardJson = [
    {
        name: "Plains",
        type: "Land",
        color: "White",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvChOj0BCeLNntc5zzn6sEda9jbH1mFz2QOQ&usqp=CAU"
    },
    {
        name: "Swamp",
        type: "Land",
        color: "Black",
        image: "https://media.magic.wizards.com/image_legacy_migration/images/magic/tcg/products/avr/wllqq7y4tx_en.jpg"
    },
    {
        name: "Island",
        type: "Land",
        color: "Blue",
        image: "https://www.mtglands.com/img/small/rix-193.jpg"
    },
    {
        name: "Mountain",
        type: "Land",
        color: "Red",
        image: "https://c1.scryfall.com/file/scryfall-cards/large/front/4/c/4cf7d0ad-8fe2-4065-89e3-c2ee04062695.jpg?1592518017"
    },
    {
        name: "Forest",
        type: "Land",
        color: "Green",
        image: "https://crystalcommerce-assets.s3.amazonaws.com/photos/23611/large/Forest1.jpg?1406831491"
    }
]

function getUserInput(event) {
    event.preventDefault();
    var numCard = numCardInput.value;
    var colorMana = colorManaInput.value;
    var numLand = numLandInput.value;
    var numCreature = numCreatureInput.value;
    var numInstant = numInstantInput.value;
  
    // Add an alert message for valid number of cards 
    var totalNumCards = numLand + numCreature + numInstant
    
    if (numCard < totalNumCards){
        numLandInput.textContent = "Please remove cards to equal Total Number of Cards!";
        numCreatures.textContent = "Please remove cards to equal Total Number of Cards!";
        numInstantInput.textContent = "Please remove cards to equal Total Number of Cards!";
    } else if (numCard > totalNumCards) {
        numLandInput.textContent = "Please enter more cards";
        numCreatures.textContent = "Please enter more cards";
        numInstantInput.textContent = "Please enter more cards";
    }
  
    console.log(numCard);
    console.log(colorMana);
    console.log(numLand);
    console.log(numCreature);
    console.log(numInstant);
    getCardData(colorMana);
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
      })
  }

  modalFormEl.addEventListener("submit",getUserInput);

