const getImage = (id) => {
    let img;
    switch (id) {
      case 1: {
        img = require('./img/room1.jpg');
        break;
      }
      case 2: {
        img = require('./img/room2.jpg');
        break;
      }
      case 3: {
        img = require('./img/room3.jpg');
        break;
      }
      case 4: {
        img = require('./img/room4.jpg');
        break;
      }
      case 5: {
        img = require('./img/room5.jpg');
        break;
      }
      case 6: {
        img = require('./img/room6.jpg');
        break;
      }
      case 7: {
        img = require('./img/room7.jpg');
        break;
      }
      default: {
        img = require('./img/default.jpg');
      }
    }
    return img;
  }

  export default getImage;