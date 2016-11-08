const botBuilder = require('claudia-bot-builder');
const fbTemplate = botBuilder.fbTemplate;

module.exports = botBuilder(message => {
  if (message.type === 'facebook') {
    const beverage = new fbTemplate.Generic();

    return beverage
      .addBubble('Soft Drinks', 'Alcohol free drinks')
        .addUrl('https://www.coca-cola.com/')
        .addImage('https://claudiajs.com/assets/claudiajs.png')
        .addButton('No I want beer!', 'https://www.birramoretti.com')
        .addButton('Go to Github', 'https://github.com/claudiajs/claudia')

      .addBubble('Alocholic beverages')
        .addUrl('https://www.birramoretti.com')
        .addImage('https://claudiajs.com/assets/claudia-bot-builder-video.jpg')
        .addButton('Yeah, beer!', 'Are you sure you dont want milk?')

      .addBubble('Milk', 'No alochol but a lot of calcium!')
        .addUrl('https://claudiajs.com')
        .addImage('https://claudiajs.com/assets/claudiajs.png')
        .addButton('No I want beer', 'https://www.birramoretti.com')
        .addButton('Pick your favorite cereals', 'https://en.wikipedia.org/wiki/Cereal')
      .get();
  }
});
