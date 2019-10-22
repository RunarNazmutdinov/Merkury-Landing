
    $(document).ready(function() {

  


		// Мобильная навигация
		$('.navigation__toggle').on('click', function(e){
			e.preventDefault();
			$('.navigation__list').toggleClass('navigation__list--open');

		})

		$('.navigation__list a').on('click', function(){
			$('.navigation__list').removeClass('.navigation__list--open');

		})








	  // // Cоздаем переменные для кнопки и для меню
	  // var pull = $("#navigation-toogle");
	  // var nav = $(".navigation ul");

	  //  // Описываем событие при нажатии на кнопку
	  //  $(pull).on("click", function(e) {

	  //  // Отменяем стандартное поведение ссылки в браузере
	  //  e.preventDefault();

	  //  // Открываем / Скрываем меню
	  //  $(nav).slideToggle();

	  // });


	  //slide2id - плавная прокрутка по ссылкам внутри страницы
	  $("nav a,a[href='#top'],a[rel='m_PageScroll2id'],a.PageScroll2id").mPageScroll2id({
	    highlightSelector: "nav a"
	  });

	});
