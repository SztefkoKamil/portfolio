'user strict';

let screenWidth = null,
    screenHeight = null;

module.exports.setScreenSize = () => {
  screenWidth = window.outerWidth,
  screenHeight = window.outerHeight;
};

module.exports.getScreenSize = () => {
  return {
    width: screenWidth,
    height: screenHeight
  };
};