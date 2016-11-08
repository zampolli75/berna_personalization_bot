const botBuilder = require('claudia-bot-builder');
const fbTemplate = botBuilder.fbTemplate;

module.exports = botBuilder(message => {
  if (message.type === 'facebook') {
    const Main = new fbTemplate.Generic();

    return generic
      .addBubble('Bath and Linens')
        .addImage('https://images.victorianplumbing.co.uk/images/Premier-High-Gloss-MDF-Front-Bath-Panels-White-5-x-Size-Options-l.jpg')
        .addButton('Go to Bath and Linens Category', 'Baths and Linen')
      .get();
  }
});

