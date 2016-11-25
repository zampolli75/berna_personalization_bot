const botBuilder = require('claudia-bot-builder');
const fbTemplate = botBuilder.fbTemplate;
 

// const request = originalApiRequest

// api.post('/facebook', request => {
//   let arr = [].concat.apply([], request.body.entry.map(entry => entry.messaging));
//   let fbHandle = parsedMessage => {
//     if (parsedMessage) {
//       var recipient = parsedMessage.sender;

//       return Promise.resolve(parsedMessage).then(parsedMessage => bot(parsedMessage, request))
//         .then(botResponse => responder(recipient, botResponse, request.env.facebookAccessToken))
//         .catch(logError);
//       }
//   }
// };



function mainMenu() {
  const mainMenu = new fbTemplate.Generic();
  return mainMenu
    .addBubble('Menu')
      .addImage('https://s3.amazonaws.com/dantemessengerbot/Images/menu.jpg')
      .addButton('Reservations', 'RESERVATIONS')
      .addButton('Personalize', 'PERSONALIZE')
      .addButton('Contact Us', 'CONTACTUS')
    .get()
};

function reservations() {
  const reservations = new fbTemplate.Generic();
  return reservations
    .addBubble('Reservations')
      .addImage('https://s3.amazonaws.com/dantemessengerbot/Images/reservations.jpg')
      .addButton('Make Reservation', 'MAKERESERVATION')
      .addButton('Manage Reservation', 'YOURRESERVATION')
      .addButton('Check In', 'CHECKIN')
    .get()
};

function contactUs() {
  const contactUs = new fbTemplate.Generic();
  return contactUs
    .addBubble('Reservations')
      .addImage('https://s3.amazonaws.com/dantemessengerbot/Images/contactus.jpg')
      .addButton('Call Us', 'CALLUS')
      .addButton('Email Us', 'EDU')
      .addButton('Where Are We', 'WHEREWEARE')
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


function whereWeAre() {
  return {
    "attachment":{
    "type":"template",
    "payload":{
    "template_type":"generic",
      "elements":[
        {
        "title":"Where We Are",
        "item_url":"https://www.google.com/maps/place/Hotel+Berna/@45.4826686,9.2012447,17z/data=!3m1!4b1!4m5!3m4!1s0x4786c6c5a5ea63e5:0x74ea125c3395e1ac!8m2!3d45.4826686!4d9.2034387",
        "image_url":"https://s3.amazonaws.com/dantemessengerbot/Images/mappa.png"
        }
        ]
    }
    }
}};








// function mailUs() {
//   return {
//     "attachment":{
//       "type":"template",
//          "payload":{
//             "template_type":"button",
//             "text":"We speak English, Italian, Spanish, French, and German.",
//             "buttons":[
//             {
//               "type":"web_url",
//               "url":"mailto:jrod122@lsu.edu",
//               "title":"Mail Us",
//               "webview_height_ratio": "compact"
//             }
//             ]
//          }
//     }
//   } 
// };


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

const bot = botBuilder(function(message, originalApiRequest){
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

  if (message.text === 'Help') {
    return 'Placeholder'
  }

  if (message.text === 'RESERVATIONS') {
    return reservations()
  }

  if (message.text === 'PERSONALIZE'  || message.text === 'Personalize') {
    return personalize()
  }

  if (message.text === 'CALLUS') {
    return callUs()
  }

  if (message.text === 'BATHLINEN') {
    return bathAndLinens()
  }

  if (message.text === 'CONTACTUS') {
    return contactUs()
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

  if (message.text === 'WHEREWEARE') {
    return whereWeAre()
  }  

});



module.exports = bot






// function whereWeAre() {
//   return {
//     "attachments": [
//       {
//         "title": "Facebook HQ",
//         "url": "https://www.facebook.com/l.php?u=https%....5-7Ocxrmg",
//         "type": "location",
//         "payload": {
//         "coordinates": {
//                     "lat": 37.483872693672,
//                     "long": -122.14900441942
//                   }
//                 }
//               }
//             ]
//           }
// };