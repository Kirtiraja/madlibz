$(document).ready(function() {
  $("#form1").submit(function(event) {
    var blanks = ["noun1", "verb", "name", "object", "noun2", "adjective", "exclamation", "color"];
blanks.forEach(function(blank) {
  var userInput = $("input#" + blank).val();
  $("." + blank).text(userInput);

});

  $("#story").show();

  event.preventDefault();

});
});


// $(".noun1").text(noun1Input);
// $(".verb").text(verbInput);
// $(".name").text(nameInput);
// $(".object").text(objectInput);
// $(".noun2").text(noun2Input);
// $(".adjective").text(adjectiveInput);
// $(".exclamation").text(exclamationInput);
// $(".color").text(colorInput);
// var noun1Input = $("input#noun1").val();
// var verbInput = $("input#verb").val();
// var nameInput = $("input#name").val();
// var objectInput = $("input#object").val();
// var noun2Input = $("input#noun2").val();
// var adjectiveInput = $("input#adjective").val();
// var exclamationInput = $("input#exclamation").val();
// var colorInput = $("input#color").val();
