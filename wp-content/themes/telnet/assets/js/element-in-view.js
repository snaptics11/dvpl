(function ($) {
	/**
	 * Copyright 2012, Digital Fusion
	 * Licensed under the MIT license.
	 * http://teamdf.com/jquery-plugins/license/
	 *
	 * @author Sam Sehnert
	 * @desc A small plugin that checks whether elements are within
	 *     the user visible viewport of a web browser.
	 *     only accounts for vertical position, not horizontal.
	 */

	$.fn.visible = function (partial) {
		var $t = $(this),
			$w = $(window),
			viewTop = $w.scrollTop(),
			viewBottom = viewTop + $w.height(),
			_top = $t.offset().top,
			_bottom = _top + $t.height(),
			compareTop = partial === true ? _bottom : _top,
			compareBottom = partial === true ? _top : _bottom;

		return compareBottom <= viewBottom && compareTop >= viewTop;
	};
})(jQuery);

jQuery(window).on("scroll", function () {
	jQuery(
		".pricing-section-six .pattern-layer, .package-section .image-column .image, .tv-section .image-column .pattern-layer, .about-one_image"
	).each(function (i, el) {
		var el = jQuery(el);
		if (el.visible(true)) {
			el.addClass("now-in-view");
		} else {
			el.removeClass("now-in-view");
		}
	});
});

jQuery(document).on("ready", function () {
	jQuery(
		".pricing-section-six .pattern-layer, .package-section .image-column .image, .tv-section .image-column .pattern-layer, .about-one_image"
	).each(function (i, el) {
		var el = jQuery(el);
		if (el.visible(true)) {
			el.addClass("now-in-view");
		} else {
			el.removeClass("now-in-view");
		}
	});
});
