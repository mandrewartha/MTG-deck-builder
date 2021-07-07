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
var cardDisplayRow = document.querySelector("#card-display-row");

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
    // var totalNumCards = numLand + numCreature + numInstant
    
    // if (numCard < totalNumCards){
    //     numLandInput.textContent = "Please remove cards to equal Total Number of Cards!";
    //     numCreatures.textContent = "Please remove cards to equal Total Number of Cards!";
    //     numInstantInput.textContent = "Please remove cards to equal Total Number of Cards!";
    // } else if (numCard > totalNumCards) {
    //     numLandInput.textContent = "Please enter more cards";
    //     numCreatures.textContent = "Please enter more cards";
    //     numInstantInput.textContent = "Please enter more cards";
    // }
  
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

        // var randomLandChosen = Math.floor(Math.random() * landPoolArr.length);
        // var randomCreatureChosen = Math.floor(Math.random() * creaturePoolArr.length);
        // var randomInstantChosen = Math.floor(Math.random() * instantPoolArr.length);

        console.log(landChosenArr);
        console.log(creatureChosenArr);
        console.log(instantChosenArr);

        // var imageTest1 = data.cards[0].imageUrl;
        // var imageTest2 = data.cards[1].imageUrl;
        // var imageTest3 = data.cards[2].imageUrl;

        // displayCard(imageTest1, imageTest2, imageTest3)
      })
  }

  // function displayCard(image1, image2, image3) {
  //   var imageFrame1 = document.createElement("img");
  //   var imageFrame2 = document.createElement("img");
  //   var imageFrame3 = document.createElement("img");
  //   imageFrame1.setAttribute("src", image1);
  //   // add class for imageFrame
  //   imageFrame2.setAttribute("src", image2);
  //   imageFrame3.setAttribute("src", image3);
  //   cardDisplayRow.append(imageFrame1);
  //   cardDisplayRow.append(imageFrame2);
  //   cardDisplayRow.append(imageFrame3);
  // }

  modalFormEl.addEventListener("submit",getUserInput);

