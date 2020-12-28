$(document).ready(function () {
  //slide2id - плавная прокрутка по ссылкам внутри страницы
  $("nav a").mPageScroll2id({
    highlightSelector: "nav a",
  });

  // Мобильная навигация
  var navToggleButton = $("#navigation__button");
  var navBlockOpen = "navigation__list--open";
  var navToggleIcon = $(".navigation__toggle .fa");
  var navBlock = $(".navigation__list");
  var navLink = $(".navigation__list a");

  // События по клику на иконку
  navToggleButton.on("click", function (e) {
    e.preventDefault();
    navBlock.toggleClass(navBlockOpen);
    navButtonToggle();
  });

  // События по клику на ссылки
  navLink.on("click", function () {
    if (navBlock.hasClass(navBlockOpen)) {
      navButtonToggle();
    }
    navBlock.removeClass(navBlockOpen);
  });

  // Функция для анимации иконки
  function navButtonToggle() {
    if (navToggleButton.hasClass("active")) {
      navToggleButton.removeClass("active");
    } else {
      navToggleButton.addClass("active");
    }
  }

  var swiper = new Swiper(".swiper-container", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});
