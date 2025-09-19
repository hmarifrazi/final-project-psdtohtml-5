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

  // Magnific Popup JS

  $(".project-img").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
  });

  // Slick Slider
  $(".testimonials").slick({
    arrows: false,
    dots: true,
    autoplay: true,
    loop: true,
  });
  $(".clients").slick({
    arrows: false,
    dots: false,
    autoplay: true,
    loop: true,
    slidesToShow: 5,
    slidesToScroll: 1,
  });
});
