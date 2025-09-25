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
  // Magnific Popup JS for Sidebar Popup

  $(".sidebar-popup").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
  });

  // Magnific Popup JS for About Page Video

  $(".video-icon").magnificPopup({
    type: "iframe",
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
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });

  // init Isotope
  var $grid = $(".project-grid").isotope({
    // options
  });
  // filter items on button click
  $(".project-list").on("click", "li", function () {
    var filterValue = $(this).attr("data-filter");
    $grid.isotope({ filter: filterValue });
  });

  // jQuery
  // hash of functions that match data-filter values
  var filterFns = {
    // show if number is greater than 50
    numberGreaterThan50: function () {
      // use $(this) to get item element
      var number = $(this).find(".number").text();
      return parseInt(number, 10) > 50;
    },
    // show if name ends with -ium
    ium: function () {
      var name = $(this).find(".name").text();
      return name.match(/ium$/);
    },
  };

  // filter items on button click
  $(".project-list").on("click", "button", function () {
    var filterValue = $(this).attr("data-filter");
    // use filter function if value matches
    filterValue = filterFns[filterValue] || filterValue;
    $grid.isotope({ filter: filterValue });
  });

  // vanilla JS
  // hash of functions that match data-filter values
  var filterFns = {
    // show if number is greater than 50
    numberGreaterThan50: function (itemElem) {
      // use itemElem argument for item element
      var number = itemElem.querySelector(".number").textContent;
      return parseInt(number, 10) > 50;
    },
    // show if name ends with -ium
    ium: function (itemElem) {
      var number = itemElem.querySelector(".name").textContent;
      return name.match(/ium$/);
    },
  };
});
