(function speak(name) {
var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for (var i = 0; i < names.length; i++) {

  var firstLetter = names[i].charAt(0).toLowerCase();
  if (firstLetter === 'j') {
    console.log ("Goodbye "+ names[i]);

  } else {
    console.log ("Hello "+ names[i]);
  }
<<<<<<< HEAD
}
=======
}
>>>>>>> 39f1ea670e76ad9f1b1e373d3d75929ab9f1b12e
