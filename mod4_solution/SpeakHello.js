(function speak(name) {
var helloSpeaker = {}; 
helloSpeaker.name = "Yaakov", "Paul", "Frank", "Larry", "Paula", "Laura";
var speakWord = "Hello ";
helloSpeaker.sayHello = function () { 
 console.log(speakWord + helloSpeaker.name); 
} 
name.helloSpeaker = helloSpeaker 

})(name);
