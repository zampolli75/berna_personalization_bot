const botBuilder = require('claudia-bot-builder');
const fbTemplate = botBuilder.fbTemplate;

module.exports = botBuilder(message => {
  if (message.type === 'facebook') {
    const Main = new fbTemplate.Generic();
    return Main
      .addBubble('Bath and Linens')
        .addImage('https://images.victorianplumbing.co.uk/images/Premier-High-Gloss-MDF-Front-Bath-Panels-White-5-x-Size-Options-l.jpg')
        .addButton('Go to Bath and Linens Category', 'Baths and Linen')
      .addBubble('Soft Drinks', 'Alcohol free drinks')
        .addUrl('https://www.coca-cola.com/')
        .addImage('https://claudiajs.com/assets/claudiajs.png')
        .addButton('No I want beer!', 'https://www.birramoretti.com')
      .addBubble('For your Comfort', 'Choose one of these options to make your stay more comfortable')
        .addImage('http://dds.cct.lsu.edu/wwwgp/p.jpeg')
        .addButton('Chose this Category', 'COMFORT')
        .addButton('Say hello', 'HELLO')
      .get();
    const HELLO = new fbTemplate.Generic();
    return HELLO
      .addBubble('Ciao')
        .addImage('https://images.victorianplumbing.co.uk/images/Premier-High-Gloss-MDF-Front-Bath-Panels-White-5-x-Size-Options-l.jpg')
        .addButton('Go to Bath and Linens Category', 'Baths and Linen')
      .get();
  }
});