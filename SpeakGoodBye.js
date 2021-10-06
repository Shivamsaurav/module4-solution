/* 
  Author : Shivam Saurav
  Date : 7th October 2021
*/
(function (window) {
  var byeSpeaker = {};
  var speakWord = 'Good Bye';
  byeSpeaker.speak = function speak(names) {
    console.log(speakWord + ' ' + names);
  };

  window.byeSpeaker = byeSpeaker;
})(window);