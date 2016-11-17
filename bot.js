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
      .addButton('Others', 'DRINKOTHERS')
    .addBubble('Pillow Type')
      .addImage('https://s3.amazonaws.com/dantemessengerbot/Images/pillowtype.jpg')
      .addButton('Goose', 'GOOSEPILLOW')
      .addButton('Latex', 'PURENATLATEXPILLOW')
      .addButton('Others', 'PILLOWOTHERS')
    .addBubble('Temperature')
      .addImage('https://s3.amazonaws.com/dantemessengerbot/Images/temperature.gif')
      .addButton('22¡C/72¡F', '22CTEMP')
      .addButton('21¡C/70¡F', '21CTEMP')
      .addButton('Others', 'TEMPOTHERS')
    .addBubble('Bed Type')
      .addImage('https://s3.amazonaws.com/dantemessengerbot/Images/bed.jpg')
      .addButton('Nordic', 'NORDIC')
      .addButton('Mediterranean', 'MEDITERRANEAN')
      .addButton('Others', 'BEDOTHERS')
    .get()
    // .addBubble('Pillows Extra')
    // .addBubble('Towels Extra')
    // .addBubble('Toilet Paper')
    // .addBubble('Clothing Management')
    // .addBubble('Food')
    // .addBubble('Welcome Basket')
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
    }}};





// const bot = botBuilder(message => {
  
//   if (message.text === 'Main') {
//     return [
//       'Welcome to Hotel Dante. It is our pleasure to assist you today.',
//       mainMenu()
//     ]
//   }

//   if (message.text === 'PERSONALIZE') {
//     return personalize()
//   }

//   if (message.text === 'BATHLINEN') {
//     return bathAndLinens()
//   }

//   if (message.text === 'CALLUS') {
//     return callUs()
//   }

// });

const bot = function botBuilder(message) {
  
  if (message.text === 'Main') {
    return [
      'Welcome to Hotel Dante. It is our pleasure to assist you today.',
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

};


module.exports = bot



// function welcomeButton() {
// return {
//     "setting_type":"call_to_actions",
//     "thread_state":"new_thread",
//     "call_to_actions":[
//       {
//         "payload":"WELCOME"
//       }
//     ]
//   }
// };