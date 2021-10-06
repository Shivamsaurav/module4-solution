/* 
  Author : Shivam Saurav
  Date : 7th October 2021
*/
(function (window) {
  var helloSpeaker = {};
  var speakWord = 'Hello';
  helloSpeaker.speak = function speak(names) {
    console.log(speakWord + ' ' + names);
  };

  window.helloSpeaker = helloSpeaker;
})(window);