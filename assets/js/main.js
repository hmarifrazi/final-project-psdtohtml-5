$(document).ready(function () {
  // Counter Up JS
  $(".counter").counterUp();

  // Custom Accordion Toggoling JS
  const accordion = document.getElementsByClassName("faq-example");
  for (i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function () {
      this.classList.toggle("active");
    });
  }
});
