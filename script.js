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
      name: "Isolated Chapel",
      type: "Land",
      color: "White",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqS7oNy0HX7G0NhEi_Wyur4pNrfklqTmHp2A&usqp=CAU"
    },
    {
      name: "Idyllic Grange",
      type: "Land",
      color: "White",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZVsjLVy53etpXi41By21tQgoOU9ee1TAZCA&usqp=CAU"
    },
    {
      name: "Bant Panorama",
      type: "Land",
      color: "White",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgwvXeQgqAQsbTBX5eEX-0H_3PZEtikjSHjg&usqp=CAU"
    },
    {
      name: "Nykthos, Shrine to Nyx",
      type: "Land",
      color: "White",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc1TMA3oFUIx6oLbRrKWvIB-xJtZxooe0TFw&usqp=CAU"
    },
    {
      name: "Seaside Citadel",
      type: "Land",
      color: "White",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2yMmZwOToyW1h9NErsa3zwgekwHHcO_SLvQ&usqp=CAU"
    },
    {
      name: "Isolated Watchtower",
      type: "Land",
      color: "White",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz06gHnqWqq7JOLsVJkxQhNIutrLJ3YTi24w&usqp=CAU"
    },
    {
        name: "Swamp",
        type: "Land",
        color: "Black",
        image: "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=524952&type=card"
    },
    {
      name: "Smoldering Marsh",
      type: "Land",
      color: "Black",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTikz1MLDaoffy6L9OzPVMJqxsNxkgcotv2xQ&usqp=CAU"
    },
    {
      name: "Silent Clearing",
      type: "Land",
      color: "Black",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAHRFIN-pYbc2UGUHV2cgy-W8oQQb_SEKq_w&usqp=CAU"
    },
    {
      name: "Cabal Stronghold",
      type: "Land",
      color: "Black",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUU_JTD5O3Oznbsan7xdrI9m_SbLjjAmFMwQ&usqp=CAU"
    },
    {
      name: "Castle Locthwait",
      type: "Land",
      color: "Black",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVIVq_803QiODO5oLQ1f4ERvGlvLk-Op3w7g&usqp=CAU"
    },
    {
      name: "Leechridden Swamp",
      type: "Land",
      color: "Black",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQunHnx1nEtFq1L-q6fpp2uTZoy5v3vACz8_g&usqp=CAU"
    },
    {
      name: "Foul Orchard",
      type: "Land",
      color: "Black",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNoeFQky_zMRBEn5SZzDSNLznRy1ENfxXSNw&usqp=CAU"
    },
    {
        name: "Island",
        type: "Land",
        color: "Blue",
        image: "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=524950&type=card"
    },
    {
      name: "Simic Growth Chamber",
      type: "Land",
      color: "Blue",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0iH7uk2uiTw6C9OfEVCRzsxuSLMTQvxgoTw&usqp=CAU"
    },
    {
      name: "Zagoth Triome",
      type: "Land",
      color: "Blue",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnGXOCy7DD9e3Nmd4CecTcPCIGVEoLqSUIEg&usqp=CAU"
    },
    {
      name: "Halimar Depths",
      type: "Land",
      color: "Blue",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtsoB-FDqADFpOUTSjxgniLhcsuFcqM2jOdQ&usqp=CAU"
    },
    {
      name: "Botanical Sanctum",
      type: "Land",
      color: "Blue",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtCytHu3BPovWIH4cmH-gmjcQBSCwI1fyi8g&usqp=CAU"
    },
    {
      name: "Evolving Wilds",
      type: "Land",
      color: "Blue",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwGUJv8MFOihZ__-o1lQ1ZK1oV5p3zEa_sZA&usqp=CAU"
    },
    {
      name: "Tolaria West",
      type: "Land",
      color: "Blue",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3kWhrwr6HHpfVbsDCIqceAWl_wo7YjzPerQ&usqp=CAU"
    }
    {
        name: "Mountain",
        type: "Land",
        color: "Red",
        image: "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=524954&type=card"
    },
    {
      name: "Cinder Glade",
      type: "Land",
      color: "Red",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjPQocMB7d6MgJt4Wd0b10gh_82WpAieJ63Q&usqp=CAU"
    },
    {
      name: "Caldera Lake",
      type: "Land",
      color: "Red",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPSBkfp4d9oUjDN3C15pnpt9KeTwDKVU6F4Q&usqp=CAU"
    },
    {
      name: "Sheltered Thicket",
      type: "Land", 
      color: "Red",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcuEG2fWYnsqxeQ9ja0cNHneTJOh-g9Reg4g&usqp=CAU"
    },
    {
      name: "Ghitu Encampment",
      type: "Land",
      color: "Red",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS693oyC-kkTnmKMg1PTbyBjC9wlGVKLV0nFw&usqp=CAU"
    },
    {
      name: "Needle Spires",
      type: "Land",
      color: "Red",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUouZ4EET_ITbdADqToBl7IeAoiUWhfZtbxA&usqp=CAU"
    },
    {
      name: "Temple of Triumph",
      type: "Land",
      color: "Red",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwRsn2D4G_KITNj3kGjDv-ZcSIoqhowUPyWA&usqp=CAU"
    },
    {
        name: "Forest",
        type: "Land",
        color: "Green",
        image: "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=524956&type=card"
    },
    {
      name: "Graypelt Refuge",
      type: "Land",
      color: "Green",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdKTOmY9l8bEvlSqjOcSlqhG2wWC39ii39SQ&usqp=CAU"
    },
    {
      name: "Selesnya Guildgate",
      type: "Land",
      color: "Green",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMfn9SPQccCuFD1ucKmhDhH5HpobBtw-vCXw&usqp=CAU"
    },
    {
      name: "Scattered Groves",
      type: "Land",
      color: "Green",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyxyUBCqvV1ByifzekDq76goZdyGY9Sd0ToQ&usqp=CAU"
    },
    {
      name: "Castle Garenbrig",
      type: "Land",
      color: "Green",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3ZO1zH6ZCjoBoMsMBoz8nAi7rRYHckoraeQ&usqp=CAU"
    },
    {
      name: "Sunpetal Grove",
      type: "Land",
      color: "Green",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7Gv4YQKmX2_ZVPWJQvb6rUVp6pf47lIScDQ&usqp=CAU"
    },
    {
      name: "Bayou",
      type: "Land",
      color: "Green",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_yx4-cLwiAq6mjUPFrR1BzSNXogOYDxDXPQ&usqp=CAU"
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