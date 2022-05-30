(function speak(name) {
var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for (var i = 0; i < names.length; i++) {

  var firstLetter = names[i].charAt(0).toLowerCase();
  if (firstLetter === 'j') {
    console.log ("Goodbye "+ names[i]);

  } else {
    console.log ("Hello "+ names[i]);
  }
}

<<<<<<< HEAD
})();
=======
})();
>>>>>>> e406605b2bdec9961772a673c2d942e0f884d081
