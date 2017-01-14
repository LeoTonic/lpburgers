$(function() {
	// apply team page accordeon
	$('.team-acco--trigger').on('click', function(e) {
		e.preventDefault();

		var
			$this = $(this),
			container = $this.closest('.team-acco'),
			item = $this.closest('.team-acco--item'),
			items = $('.team-acco--item', container),
			popups = $('.team-acco--popup', container),
			popup = item.find('.team-acco--popup'),
			content = item.find('.team-acco--content'),
			reqHeight = content.outerHeight();

		if (!item.hasClass('team-acco--item-active')) {
			items.removeClass('team-acco--item-active');
			item.addClass('team-acco--item-active');
			popups.css({
				'height': 0
			});
			popup.css({
				'height': reqHeight
			});
		}
		else {
			item.removeClass('team-acco--item-active');
			popup.css({
				'height': 0
			});
		}
	});
	//apply menu page accordeon
	$('.menu-acco--trigger').on('click', function(e) {
		e.preventDefault();

		var
			$this = $(this),
			container = $this.closest('.menu-acco'),
			item = $this.closest('.menu-acco--item'),
			items = $('.menu-acco--item', container),
			contents = $('.menu-acco--content', container),
			content = item.find('.menu-acco--content'),
			textObj = content.find('.menu-acco--text'),
			reqWidth = textObj.outerWidth(false);
		if (!item.hasClass('menu-acco--item-active')) {
			items.removeClass('menu-acco--item-active');
			item.addClass('menu-acco--item-active');
			contents.css({
				'width': 0
			});
			content.css({
				'width': reqWidth
			});
		}
		else {
			item.removeClass('menu-acco--item-active');
			content.css({
				'width': 0
			});
		}
	});
	// menu accordeon outside
	$(document).on('click', function(e) {
		e.preventDefault();
		var $this = $(e.target);
		if (!$this.closest('.menu-acco').length) {
			$('.menu-acco--content').css({
				'width': 0
			});
			$('.menu-acco--item').removeClass('menu-acco--item-active');
		}
	});

	// one page scroll
	var
		sections = $('.section'),
		display = $('.maincontent'),
		inScroll = false;

	var scrollToSection = function(sectionEq) {
		var position;
		if (inScroll || sectionEq < 0) return;
		inScroll = true;
		position = (sections.eq(sectionEq).index() * -100) + '%';
		sections.eq(sectionEq).addClass('active').siblings().removeClass('active');
		display.css({
			'transform': 'translate3d(0px, ' + position + ', 0px)'
		});

		setTimeout(function() {
			inScroll = false;
			$('.fixed-menu--item').eq(sectionEq).addClass('fixed-menu-active').siblings().removeClass('fixed-menu-active');
		}, 1000);
	}

	$('.down-arrow').on('click', function(e){
		e.preventDefault();
		scrollToSection(1);
	});

	$('.fixed-menu--link, .order-link, .nav--link, .burger-slider--buy').on('click', function(e) {
		e.preventDefault();

		var sec_num = parseInt($(this).attr('href'));
		scrollToSection(sec_num);
	});
	$(document).on('wheel', function(e) {
			var dY = e.originalEvent.deltaY;
			var activeSec = sections.filter('.active');
			var reqSec;

			if (dY > 0) {
				reqSec = activeSec.next().index();
			}
			else {
				reqSec = activeSec.prev().index();
			}
			scrollToSection(reqSec);
	});

	$(document).on('keydown', function(e) {
		if ($(e.target).is('textarea')) return;

		var activeSec = sections.filter('.active');
		switch (e.keyCode) {
			case 38:
				scrollToSection(activeSec.prev().index());
				break;
			case 40:
				scrollToSection(activeSec.next().index());
				break;
		}
	});

	// burger slider
	var owl = $('.owl-carousel');
	owl.owlCarousel({
		items : 1,
		loop : true
	});

	$('.burger-slider--btn-next').on('click', function(e) {
		e.preventDefault();
		owl.trigger('next.owl.carousel');
	});
	$('.burger-slider--btn-prev').on('click', function(e) {
		e.preventDefault();
		owl.trigger('prev.owl.carousel');
	});

	// input mask
	$('.phone-mask').inputmask('+7 (999) 999-99-99');

	//fancybox
	$('.review--view').fancybox({
		type : 'inline',
		maxWidth : 460,
		fitToView : false,
		padding : 0
	});

	$('.full-review--close').on('click', function(e) {
		e.preventDefault();
		$.fancybox.close();
	});
})