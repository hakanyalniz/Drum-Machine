import $ from "jquery";

$(function () {
  // Add event listener to the drum pad
  $("#Heater-1").on("click", function () {
    $("#Q")[0].play(); // Play the sound when the button is clicked
    $("#display").html("Heater-1");
  });
  $("#Heater-2").on("click", function () {
    $("#W")[0].play();
    $("#display").html("Heater-2");
  });
  $("#Heater-3").on("click", function () {
    $("#E")[0].play();
    $("#display").html("Heater-3");
  });
  $("#Heater-4").on("click", function () {
    $("#A")[0].play();
    $("#display").html("Heater-4");
  });
  $("#Heater-6").on("click", function () {
    $("#S")[0].play();
    $("#display").html("Heater-6");
  });
  $("#Dsc").on("click", function () {
    $("#D")[0].play();
    $("#display").html("Dsc");
  });
  $("#KicknHat").on("click", function () {
    $("#Z")[0].play();
    $("#display").html("KicknHat");
  });
  $("#Kick").on("click", function () {
    $("#X")[0].play();
    $("#display").html("Kick");
  });
  $("#Cev").on("click", function () {
    $("#C")[0].play();
    $("#display").html("Cev");
  });

  $(document).on("keydown", function (event) {
    const keyPressed = event.key.toUpperCase();
    const audioElement = $("#" + keyPressed); // Find the audio element with the right ID
    if (audioElement.length) {
      audioElement[0].play();

      // Get the id of the corresponding span (drum pad)
      const spanId = audioElement.closest(".drum-pad").attr("id"); // Get the closest parent span id

      $("#display").html(spanId);
    }
  });
});
