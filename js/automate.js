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
})