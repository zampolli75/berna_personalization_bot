const botBuilder = require('claudia-bot-builder');
const fbTemplate = botBuilder.fbTemplate;



function mainMenu() {
  const mainMenu = new fbTemplate.Generic();
  return mainMenu
    .addBubble('Reservations')
      .addImage('https://s3.amazonaws.com/dantemessengerbot/Images/reservations.jpg')
      .addButton('Make Reservation', 'https://securebooking.hotel-luganodante.com/reservation_hotel.htm')
      .addButton('Manage Reservations', 'YOURRESERVATION')
      .addButton('Modify Reservation', 'MODRESERVATION')
    .addBubble('Personalize your Stay')
      .addImage('https://s3.amazonaws.com/dantemessengerbot/Images/personalize.jpg')
      .addButton('Confirm Previous Personalization', 'CONFIRMPREVPERSO')
      .addButton('Personalize', 'PERSONALIZE')
    .addBubble('Contact Us')
      .addImage('https://s3.amazonaws.com/dantemessengerbot/Images/contactus.jpg')
      .addButton('Where We Are', 'BATHLINEN')
      .addButton('Email Us', 'PERSONALIZE')
      .addButton('Call Us', 'CALLUS')
    .get()
};

function personalize() {
  const personalize = new fbTemplate.Generic();
  return personalize
    .addBubble('Drinks')
      .addImage('https://s3.amazonaws.com/dantemessengerbot/Images/drinks.jpg')
      .addButton('Water', 'WATER')
      .addButton('Orange Soft Dring', 'ORANGESAN')
      .addButton('Others', 'OTHERDRINKS')
    .addBubble('Pillow Type')
      .addImage('https://s3.amazonaws.com/dantemessengerbot/Images/pillowtype.jpg')
      .addButton('Goose', 'GOOSEPILLOW')
      .addButton('Latex', 'PURENATLATEXPILLOW')
      .addButton('Others', 'OTHERPILLOWS')
    .addBubble('Temperature')
      .addImage('https://s3.amazonaws.com/dantemessengerbot/Images/temperature.gif')
      .addButton('22¡C/72¡F', '22CTEMP')
      .addButton('21¡C/70¡F', '21CTEMP')
      .addButton('Others', 'OTHERTEMP')
    .addBubble('Bed Type')
      .addImage('https://s3.amazonaws.com/dantemessengerbot/Images/bed.jpg')
      .addButton('View Options', 'OTHERBEDS')
    .get()
    // .addBubble('Pillows Extra')
    // .addBubble('Towels Extra')
    // .addBubble('Toilet Paper')
    // .addBubble('Clothing Management')
    // .addBubble('Food')
    // .addBubble('Welcome Basket')
};


function otherDrinks() {
const otherDrinks = new fbTemplate.Text('Select among our selection of drinks');
    return otherDrinks
      .addQuickReply('Fruit juice', 'STARK')
      .addQuickReply('Coca Cola', 'LANNISTER')
      .addQuickReply('Coca Cola light', 'TARGARYEN')
      .addQuickReply('Our kettle', 'OTHER')
      .addQuickReply('Soy milk', 'OTHER')
      .addQuickReply('Beer', 'OTHER')
      .addQuickReply('Prosecco White Wine', 'OTHER') 
      .addQuickReply('Rice milk', 'OTHER')
      .addQuickReply('Sipping Champagne', 'OTHER')
      .addQuickReply('Belvedere, IGT Col. del Milanese (70cl)', 'OTHER')
      .get()
};

function otherPillows() {
const otherDrinks = new fbTemplate.Text('Select among our selection of pillows');
    return otherDrinks
      .addQuickReply('Relax by Dorbena', 'STARK')
      .addQuickReply('Therapeutic', 'LANNISTER')
      .addQuickReply('Coca Cola light', 'TARGARYEN')
      .addQuickReply('Wool', 'OTHER')
      .addQuickReply('Orthopaedic', 'OTHER')
      .addQuickReply('Ergonomic', 'OTHER')
      .addQuickReply('Anti-suffocation', 'OTHER') 
      .get()
};


function otherTemperatures() {
const otherDrinks = new fbTemplate.Text('Select among our selection of pillows');
    return otherDrinks
      .addQuickReply('23¡C/74¡F', 'STARK')
      .addQuickReply('24¡C/75¡F', 'LANNISTER')
      .addQuickReply('25¡C/77¡F', 'TARGARYEN')
      .get()
};

function callUs() {
  return {
    "attachment":{
      "type":"template",
         "payload":{
            "template_type":"button",
            "text":"We speak English, Italian, Spanish, French, and German.",
            "buttons":[
               {
                  "type":"phone_number",
                  "title":"Call Us",
                  "payload":"+15105551234"
               }
            ]
         }
    }
  } 
};

function otherBeds() {
  return {
      "attachment": {
          "type": "template",
          "payload": {
              "template_type": "list",
              "top_element_style": "compact",
              "elements": [
                  {
                      "title": "Nordic",
                      "image_url": "https://s3.amazonaws.com/dantemessengerbot/Images/drinks.jpg",
                      "subtitle": "Minimal and neutral",
                      "buttons": [
                        {
                          "title": "Add",
                          "type": "postback",
                          "payload": "ADDNORDIC"
                        }
                      ]                
                  },
                  {
                      "title": "Mediterranean",
                      "image_url": "https://s3.amazonaws.com/dantemessengerbot/Images/drinks.jpg",
                      "subtitle": "The colour of latin Europe",
                     "buttons": [
                        {
                          "title": "Add",
                          "type": "postback",
                          "payload": "ADDMEDITERRANEAN"
                        }
                      ]
                  },
              ],
               "buttons": [
                  {
                      "title": "Placeholder",
                      "type": "postback",
                      "payload": "payload"                        
                  }
              ]  
          }
      }
  }
};


const bot = botBuilder(message => {
  
  if (message.text === 'Menu') {
    return [
      mainMenu()
    ]
  }
  
  if (message.text === 'WELCOME') {
    return [
      'Welcome to Hotel Dante. It is our pleasure to assist you today.',
      'Go to the main menu in every moment by typing \'Menu\'',
      'Type \'Help\' for things I can do',
      mainMenu()
    ]
  }  

  if (message.text === 'PERSONALIZE') {
    return personalize()
  }

  if (message.text === 'BATHLINEN') {
    return bathAndLinens()
  }

  if (message.text === 'CALLUS') {
    return callUs()
  }

  if (message.text === 'OTHERDRINKS') {
    return otherDrinks()
  }

  if (message.text === 'OTHERPILLOWS') {
    return otherPillows()
  }

  if (message.text === 'OTHERTEMP') {
    return otherTemperatures()
  }
  
  if (message.text === 'OTHERBEDS') {
    return otherBeds()
  }

});

module.exports = bot

