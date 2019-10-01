	$(document).ready(function() {
	  // Cоздаем переменные для кнопки и для меню
	  var pull = $("#navigation-toogle");
	  var nav = $(".navigation ul");




	  // Описываем событие при нажатии на кнопку
	  $(pull).on("click", function(e) {

	    // Отменяем стандартное поведение ссылки в браузере
	    e.preventDefault();


	    // Открываем / Скрываем меню
	    $(nav).slideToggle();

	  });

	  // При изменении размера окна,в большую сторону,если меню было скрыто,показывать его.

	  //slide2id - плавная прокрутка по ссылкам внутри страницы
	  $("nav a,a[href='#top'],a[rel='m_PageScroll2id'],a.PageScroll2id").mPageScroll2id({
	    highlightSelector: "nav a"
	  });

	});


	// Запуск Owl Carousel

	$(document).ready(function() {

	  var owl = $("#owl-demo");

	  owl.owlCarousel({
	    navigation: true,
	    singleItem: true,
	    transitionStyle: "backSlide"
	  });

	});