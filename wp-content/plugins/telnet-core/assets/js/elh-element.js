(function ($) {
	"use strict";

	/*----- ELEMENTOR LOAD FUNTION CALL ---*/
	$(window).on("elementor/frontend/init", function () {

		var txbackgroundImage = function () {
			var img = $("[data-background]");
			img.css("background-image", function () {
				var bg = "url(" + $(this).data("background") + ")";

				if ($(this).data("background")) {
					return bg;
				} else {
					return false;
				}
			});
		}


		// nice select
		var niceSelect = function () {
			if ($("select").length) {
				$("select").niceSelect();
			}
		};

		var telSliderFour = function () {
			var slider = new Swiper('.tel-main-slider-3', {
				spaceBetween: 30,
				slidesPerView: 1,
				effect: 'fade',
				loop: true,
				pagination: {
					el: ".swiper-main-paginations-3",
					clickable: true,
				},
			});
		}

		// Hero Slider
		var txHeroSliderOne = function () {
			var txHeroSlider = new Swiper('[data-txHeroSlider]', {
				spaceBetween: 0,
				slidesPerView: 1,
				effect: 'fade',
				loop: true,
				speed: 1200,
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
					clickable: true,
				},
				pagination: {
					el: ".swiper-pagination",
					clickable: true,
				},
				autoplay: {
					enabled: true,
					delay: 6000
				},
			});

			var slider_3 = new Swiper('.tel-main-slider-area', {
				spaceBetween: 30,
				slidesPerView: 1,
				effect: 'fade',
				loop: true,
				pagination: {
					el: ".swiper-pagination",
					clickable: true,
					renderBullet: function (index, className) {
						return '<span class="' + className + '">' + (index + 1) + '</span>';
					},
				},
				autoplay: {
					enabled: true,
					delay: 6000
				},
			});

		};

		// Brand Slider
		var txBrandSlider = function () {
			var txBrandSlider = new Swiper('[data-txBrandSlider]', {
				spaceBetween: 0,
				slidesPerView: 5,
				loop: true,
				autoplay: {
					enabled: true,
					delay: 3000
				},
				breakpoints: {
					0: {
						slidesPerView: 2,
					},
					576: {
						slidesPerView: 3,
					},
					768: {
						slidesPerView: 4,
					},
					992: {
						slidesPerView: 5,
					},
				},
			});
		};

		// promo slider
		var txPromoSliderOne = function () {
			var txPromoSlider = new Swiper('[data-txPromoSlider]', {
				spaceBetween: 30,
				slidesPerView: 1,
				effect: 'fade',
				loop: true,
				navigation: {
					nextEl: ".promo-button-next",
					prevEl: ".promo-button-prev",
				},
			});
		};

		// data-txCounter
		var txCounter = function () {
			if ($(".odometer").length) {
				jQuery(".odometer").appear(function (e) {
					var odo = jQuery(".odometer");
					odo.each(function () {
						var countNumber = jQuery(this).attr("data-count");
						jQuery(this).html(countNumber);
					});
				});
			}
		};

		// data-txTestimonialSlider
		var txTestimonialSlider = function () {
			var txTestimonialOne = new Swiper('[data-txTestimonialOne]', {
				loop: true,
				speed: 500,
				slidesPerView: 1,
				spaceBetween: 0,
				autoplay: {
					enabled: true,
					delay: 6000
				},
				navigation: {
					nextEl: '[data-txTestimonialNext]',
					prevEl: '[data-txTestimonialPrev]',
					clickable: true,
				},
				pagination: {
					el: "[data-txTestimonialPagination]",
					clickable: true,
					type: "fraction",
					formatFractionCurrent: function (number) {
						return number < 10 ? '0' + number : number;
					},
					formatFractionTotal: function (number) {
						return number < 10 ? '0' + number : number;
					}
				},
			});

			var txTestimonialTwo = new Swiper('[data-txTestimonialTwo]', {
				loop: true,
				speed: 500,
				slidesPerView: 1,
				spaceBetween: 0,
				autoplay: {
					enabled: true,
					delay: 6000
				},
			});
		};

		// gallery slider
		var txGallerySlider = function () {
			var txGallerySlider = new Swiper('[data-txGallerySlider]', {
				slidesPerView: 5,
				spaceBetween: 0,
				loop: true,
				autoplay: {
					enabled: true,
					delay: 6000
				},
				speed: 500,
				breakpoints: {
					'1600': {
						slidesPerView: 5,
					},
					'1200': {
						slidesPerView: 5,
					},
					'992': {
						slidesPerView: 4,
					},
					'768': {
						slidesPerView: 3,
					},
					'576': {
						slidesPerView: 2,
					},
					'0': {
						slidesPerView: 1,
					},
				},
			});
		};

		// progress active
		var txProgressActive = function () {
			if (typeof $.fn.knob != "undefined") {
				$(".knob").each(function () {
					var $this = $(this),
						knobVal = $this.attr("data-rel");
					$this.knob({
						draw: function () {
							$(this.i).val(this.cv + "%");
						},
					});

					$this.appear(
						function () {
							$({
								value: 0,
							}).animate(
								{
									value: knobVal,
								},
								{
									duration: 2000,
									easing: "swing",
									step: function () {
										$this
											.val(Math.ceil(this.value))
											.trigger("change");
									},
								}
							);
						},
						{
							accX: 0,
							accY: -150,
						}
					);
				});
			}
		};

		// data-txProductSlider
		var txProductSlider = function () {
			var txProductSlider = new Swiper('[data-txProductSlider]', {
				slidesPerView: 4,
				spaceBetween: 30,
				loop: true,
				autoplay: {
					enabled: true,
					delay: 6000
				},
				speed: 500,
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
					clickable: true,
				},
				pagination: {
					el: ".swiper-pagination",
					clickable: true,
				},
				breakpoints: {
					'1200': {
						slidesPerView: 4,
					},
					'992': {
						slidesPerView: 3,
					},
					'576': {
						slidesPerView: 2,
					},
					'0': {
						slidesPerView: 1,
					},
				},
			});
		};

		// data-txPosttSlider
		var txPosttSlider = function () {
			var txPosttSlider = new Swiper('[data-txPosttSlider]', {
				slidesPerView: 3,
				spaceBetween: 30,
				loop: true,
				autoplay: {
					enabled: true,
					delay: 6000
				},
				speed: 500,
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
					clickable: true,
				},
				pagination: {
					el: ".swiper-pagination",
					clickable: true,
				},
				breakpoints: {
					'992': {
						slidesPerView: 3,
					},
					'576': {
						slidesPerView: 2,
					},
					'0': {
						slidesPerView: 1,
					},
				},
			});

			var txPostSlider2 = new Swiper(".tel-blog-slider", {
				spaceBetween: 30,
				slidesPerView: 3,
				roundLengths: true,
				loop: true,
				loopAdditionalSlides: 30,
				speed: 1000,
				pagination: {
					el: ".swiper-blog-paginations",
					clickable: true,
				},
				breakpoints: {
					1600: {
						slidesPerView: 3,
					},
					1500: {
						slidesPerView: 3,
					},
					1400: {
						slidesPerView: 3,
					},
					1300: {
						slidesPerView: 3,
					},
					1200: {
						slidesPerView: 2,
					},
					992: {
						slidesPerView: 2,
					},
					768: {
						slidesPerView: 1,
					},
					576: {
						slidesPerView: 1,
					},
					0: {
						slidesPerView: 1,
					},
				},
			});
		};

		// data-txPosttSlider
		var txMovieSlider = function () {
			var txMovieSlider = new Swiper('[data-txMovieSlider]', {
				slidesPerView: 5,
				spaceBetween: 30,
				loop: true,
				autoplay: {
					enabled: true,
					delay: 6000
				},
				speed: 500,
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
					clickable: true,
				},
				pagination: {
					el: ".swiper-pagination",
					clickable: true,
				},
				breakpoints: {
					'1600': {
						slidesPerView: 5,
					},
					'1200': {
						slidesPerView: 4,
					},
					'992': {
						slidesPerView: 3,
					},
					'576': {
						slidesPerView: 2,
					},
					'0': {
						slidesPerView: 1,
					},
				},
			});
		};

		if ($(".grid").length) {
			var $grid = $('.grid').imagesLoaded( function() {
				$grid.masonry({
					percentPosition: true,
					itemSelector: '.grid-item',
					columnWidth: '.grid-sizer'
				});
			});
		};
		var portfolio_cursor = $(".portfolio-text");
				function portfolioMove(e) {
					var t = e.clientX + "px",
					a = e.clientY + "px";
					TweenMax.to(portfolio_cursor, .3, {
						left: t,
						top: a,
						ease: "Power1.easeOut"
					})
				}
				$(window).on("mousemove", portfolioMove);
				var ltn__active_item = $('.arck-service-item')
				ltn__active_item.mouseover(function() {
					ltn__active_item.removeClass('active');
					$(this).addClass('active');
				});

		// data-txPosttSlider
		var txMovieFilter = function () {
			$('[data-txGrid]').imagesLoaded(function () {
				var $grid = $('[data-txGrid]').isotope({
					itemSelector: '[data-txGridItem]',
					percentPosition: true,
					masonry: {
						columnWidth: '[data-txGridItem]',
					}
				});

				$('[data-txMovieFilters]').on('click', 'li', function () {
					var filterValue = $(this).attr('data-filter');
					$grid.isotope({ filter: filterValue });
				});
			});

			$('[data-txMovieFilters] li').on('click', function (event) {
				$(this).siblings('.active').removeClass('active');
				$(this).addClass('active');
				event.preventDefault();
			});
		};
		var serviceSlideActive = function () {
		var slider = new Swiper('.tel-service-slider', {
			spaceBetween: 30,
			slidesPerView: 4,
			roundLengths: true,
			loop: true,
			loopAdditionalSlides: 30,
			speed: 1000,
			navigation: {
				nextEl: ".tel-service-button-next_3",
				prevEl: ".tel-service-button-prev_3",
			},
			pagination: {
				el: ".swiper-service-paginations",
				clickable: true,
			},
			breakpoints: {
				'1600': {
					slidesPerView: 4,
				},
				'1500': {
					slidesPerView: 4,
				},
				'1400': {
					slidesPerView: 3,
				},
				'1300': {
					slidesPerView: 3,
				},
				'1200': {
					slidesPerView: 3,
				},
				'992': {
					slidesPerView: 2,
				},
				'768': {
					slidesPerView: 1,
				},
				'576': {
					slidesPerView: 1,
				},
				'0': {
					slidesPerView: 1,
				},
			},
		});}
		var swiper = new Swiper(".mySwiper", {
			loop: true,
			spaceBetween: 50,
			speed: 500,
			slidesPerView: 3,
			navigation: {
				nextEl: ".price-button-next",
				prevEl: ".price-button-prev",
			},
			breakpoints: {
				'1400': {
					slidesPerView: 3,
				},
				'1200': {
					slidesPerView: 3,
				},
				'992': {
					slidesPerView: 3,
				},
				'768': {
					slidesPerView: 3,
				},
				'576': {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				'0': {
					slidesPerView: 1,
				},
			},
		});
		var swiper2 = new Swiper(".mySwiper2", {
			loop: true,
			spaceBetween: 10,
			effect: 'fade',
			navigation: {
				nextEl: ".price-button-next",
				prevEl: ".price-button-prev",
			},
			thumbs: {
				swiper: swiper,
			},
		});
		var pricingSliderActive = function () {
		var swiper = new Swiper(".mySwiper", {
			loop: true,
			spaceBetween: 50,
			speed: 500,
			slidesPerView: 3,
			navigation: {
				nextEl: ".price-button-next",
				prevEl: ".price-button-prev",
			},
			breakpoints: {
				'1400': {
					slidesPerView: 3,
				},
				'1200': {
					slidesPerView: 3,
				},
				'992': {
					slidesPerView: 3,
				},
				'768': {
					slidesPerView: 3,
				},
				'576': {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				'0': {
					slidesPerView: 1,
				},
			},
		});
		var swiper2 = new Swiper(".mySwiper2", {
			loop: true,
			spaceBetween: 10,
			effect: 'fade',
			navigation: {
				nextEl: ".price-button-next",
				prevEl: ".price-button-prev",
			},
			thumbs: {
				swiper: swiper,
			},
		});}


		// data-txPosttSlider
		var TeamSlider = function () {
			var slider = new Swiper(".tel-team-slider", {
				spaceBetween: 30,
				slidesPerView: 3,
				roundLengths: true,
				loop: true,
				loopAdditionalSlides: 30,
				speed: 1000,
				autoplay: {
					enabled: true,
					delay: 2000,
				},
				breakpoints: {
					1600: {
						slidesPerView: 3,
					},
					1500: {
						slidesPerView: 3,
					},
					1400: {
						slidesPerView: 3,
					},
					1300: {
						slidesPerView: 3,
					},
					1200: {
						slidesPerView: 3,
					},
					992: {
						slidesPerView: 2,
					},
					768: {
						slidesPerView: 2,
					},
					576: {
						slidesPerView: 1,
					},
					0: {
						slidesPerView: 1,
					},
				},
			});
			$(".tel-team-slider").hover(
				function () {
					this.swiper.autoplay.stop();
				},
				function () {
					this.swiper.autoplay.start();
				}
			);
		};

		var telSliderTwoActive = function () {
		var slider = new Swiper('.tel-main-slider-2', {
			spaceBetween: 30,
			slidesPerView: 1,
			effect: 'fade',
			loop: true,
			navigation: {
				nextEl: ".tel-main-button-next_3",
				prevEl: ".tel-main-button-prev_3",
			},
			pagination: {
				el: ".swiper-main-paginations-2",
				clickable: true,
			},
		});}

		gsap.registerPlugin(ScrollTrigger, ScrollSmoother, TweenMax, ScrollToPlugin);
			gsap.config({
				nullTargetWarn: false,
			});
			let splitTitleLines = gsap.utils.toArray(".headline-title");
			splitTitleLines.forEach(splitTextLine => {
				const tl = gsap.timeline({
					scrollTrigger: {
						trigger: splitTextLine,
						start: 'top 90%',
						end: 'bottom 60%',
						scrub: false,
						markers: false,
						toggleActions: 'play none none none'
					}
				});
				const itemSplitted = new SplitText(splitTextLine, { type: "words, lines" });
				gsap.set(splitTextLine, { perspective: 400 });
				itemSplitted.split({ type: "lines" })
				tl.from(itemSplitted.lines, { duration: 1, delay: 0.3, opacity: 0, rotationX: -80, force3D: true, transformOrigin: "top center -50", stagger: 0.1 });
			});

		$(document).ready(function() {
			var st = $(".tx-split-text");
			if(st.length == 0) return;
			gsap.registerPlugin(SplitText);
			st.each(function(index, el) {
				el.split = new SplitText(el, {
					type: "lines,words,chars",
					linesClass: "split-line"
				});
				gsap.set(el, { perspective: 400 });

				if( $(el).hasClass('split-in-fade') ){
					gsap.set(el.split.chars, {
						opacity: 0,
						ease: "Back.easeOut",
					});
				}
				if( $(el).hasClass('split-in-right') ){
					gsap.set(el.split.chars, {
						opacity: 0,
						x: "50",
						ease: "Back.easeOut",
					});
				}
				if( $(el).hasClass('split-in-left') ){
					gsap.set(el.split.chars, {
						opacity: 0,
						x: "-50",
						ease: "circ.out",
					});
				}
				if( $(el).hasClass('split-in-up') ){
					gsap.set(el.split.chars, {
						opacity: 0,
						y: "80",
						ease: "circ.out",
					});
				}
				if( $(el).hasClass('split-in-down') ){
					gsap.set(el.split.chars, {
						opacity: 0,
						y: "-80",
						ease: "circ.out",
					});
				}
				if( $(el).hasClass('split-in-rotate') ){
					gsap.set(el.split.chars, {
						opacity: 0,
						rotateX: "50deg",
						ease: "circ.out",
					});
				}
				if( $(el).hasClass('split-in-scale') ){
					gsap.set(el.split.chars, {
						opacity: 0,
						scale: "0.5",
						ease: "circ.out",
					});
				}
				el.anim = gsap.to(el.split.chars, {
					scrollTrigger: {
						trigger: el,
						start: "top 90%",
					},
					x: "0",
					y: "0",
					rotateX: "0",
					scale: 1,
					opacity: 1,
					duration: 0.8,
					stagger: 0.02,
				});
			});
		});

		let splitTextLines = gsap.utils.toArray(".telnet-text p");

		splitTextLines.forEach(splitTextLine => {
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: splitTextLine,
					start: 'top 90%',
					duration: 2,
					end: 'bottom 60%',
					scrub: false,
					markers: false,
					toggleActions: 'play none none none'
				}
			});

			const itemSplitted = new SplitText(splitTextLine, { type: "lines" });
			gsap.set(splitTextLine, { perspective: 400 });
			itemSplitted.split({ type: "lines" })
			tl.from(itemSplitted.lines, { duration: 1, delay: 0.5, opacity: 0, rotationX: -80, force3D: true, transformOrigin: "top center -50", stagger: 0.1 });
		});

		$(window).on('load', function(){
			const boxes = gsap.utils.toArray('.tx-animation-style1, .tel-img-animation');
			boxes.forEach(img => {
				gsap.to(img, {
					scrollTrigger: {
						trigger: img,
						start: "top 70%",
						end: "bottom bottom",
						toggleClass: "active",
						once: true,
					}
				});
			});
		});

		var slideBrands = function () {
		var slider = new Swiper('.tel-main-slider-sponsor', {
			spaceBetween: 70,
			slidesPerView: 4,
			roundLengths: true,
			loop: true,
			loopAdditionalSlides: 30,
			autoplay: {
				enabled: true,
				delay: 6000
			},
			speed: 400,
			breakpoints: {
				'1600': {
					slidesPerView: 4,
				},
				'1400': {
					slidesPerView: 3,
				},
				'992': {
					slidesPerView: 3,
				},
				'768': {
					slidesPerView: 3,
				},
				'576': {
					slidesPerView: 3,
				},
				'576': {
					slidesPerView: 3,
				},
				'0': {
					slidesPerView: 2,
				},
			},
		});}




		var teamHoverActive = function () {
			var ltn__active_item = $('.tel-team-item-2')
			ltn__active_item.mouseover(function() {
				ltn__active_item.removeClass('active');
				$(this).addClass('active');
			});
		}
		var testimonialFour = function () {
		var slider = new Swiper('.tel-testimonials-slider-2', {
			spaceBetween: 30,
			slidesPerView: 1,
			loop: true,
			pagination: {
				el: ".swiper-test-pagination",
				clickable: true,
			},
		});
		}
		var testimonialSix = function () {
		var slider = new Swiper('.tel-testimonials-slider-3', {
			spaceBetween: 30,
			slidesPerView: 1,
			effect: 'fade',
			loop: true,
			navigation: {
				nextEl: ".testi-carousel-next",
				prevEl: ".testi-carousel-prev",
			},
		});}

		var streamingSlider = function () {
		var slider = new Swiper('.tel-streaming-slider', {
			spaceBetween: 10,
			slidesPerView: 5,
			roundLengths: true,
			loop: true,
			loopAdditionalSlides: 30,
			autoplay: {
				enabled: true,
				delay: 6000
			},
			speed: 400,
			navigation: {
				nextEl: ".stream-carousel-next",
				prevEl: ".stream-carousel-prev",
			},
			breakpoints: {
				'1600': {
					slidesPerView: 5,
				},
				'1200': {
					slidesPerView: 4,
				},
				'992': {
					slidesPerView: 3,
				},
				'768': {
					slidesPerView: 3,
				},
				'576': {
					slidesPerView: 2,
				},
				'0': {
					slidesPerView: 1,
				},
			},
		});}


		var heroSliderFive = function () {
		var slider = new Swiper('.tel-main-slider-4', {
			spaceBetween: 30,
			slidesPerView: 1,
			effect: 'fade',
			loop: true,
			navigation: {
				nextEl: ".tel-main-button-next_3",
				prevEl: ".tel-main-button-prev_3",
			},
			pagination: {
				el: ".swiper-main-paginations-2",
				clickable: true,
			},
		});}
		var testimonialActiveTwo = function () {
		var slider = new Swiper('.tel-testimonial-slider-4', {
			spaceBetween: 30,
			slidesPerView: 3,
			roundLengths: true,
			loop: true,
			loopAdditionalSlides: 30,
			speed: 1000,
			pagination: {
				el: ".tel-testi-paginations",
				clickable: true,
			},
			breakpoints: {
				'1600': {
					slidesPerView: 3,
				},
				'1500': {
					slidesPerView: 3,
				},
				'1400': {
					slidesPerView: 3,
				},
				'1300': {
					slidesPerView: 3,
				},
				'992': {
					slidesPerView: 2,
				},
				'768': {
					slidesPerView: 2,
				},
				'576': {
					slidesPerView: 1,
				},
				'0': {
					slidesPerView: 1,
				},
			},
		});}

		var sliderBrandActive = function () {
		var slider = new Swiper('.tel-main-slider-sponsor', {
			spaceBetween: 70,
			slidesPerView: 4,
			roundLengths: true,
			loop: true,
			loopAdditionalSlides: 30,
			autoplay: {
				enabled: true,
				delay: 6000
			},
			speed: 400,
			breakpoints: {
				'1600': {
					slidesPerView: 4,
				},
				'1400': {
					slidesPerView: 3,
				},
				'992': {
					slidesPerView: 3,
				},
				'768': {
					slidesPerView: 3,
				},
				'576': {
					slidesPerView: 3,
				},
				'576': {
					slidesPerView: 3,
				},
				'0': {
					slidesPerView: 2,
				},
			},
		});}

		elementorFrontend.hooks.addAction(
			"frontend/element_ready/cta_content.default",
			function ($scope, $) {
				sliderBrandActive();
				txbackgroundImage();
			}
		);
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/hero_slider_five.default",
			function ($scope, $) {
				heroSliderFive();
				txbackgroundImage();
			}
		);
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/telnet_streaming.default",
			function ($scope, $) {
				streamingSlider();
			}
		);
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/telnet_testimonial.default",
			function ($scope, $) {
				testimonialSix();
			}
		);
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/telnet_testimonial.default",
			function ($scope, $) {
				testimonialFour();
			}
		);
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/hero_slider_three.default",
			function ($scope, $) {
				telSliderTwoActive();
				txbackgroundImage();
			}
		);
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/telnet_team.default",
			function ($scope, $) {
				teamHoverActive();
			}
		);
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/telnet_team.default",
			function ($scope, $) {
				TeamSlider();
			}
		);
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/pricing_tab.default",
			function ($scope, $) {
				pricingSliderActive();
			}
		);
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/service_slider.default",
			function ($scope, $) {
				serviceSlideActive();
			}
		);
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/hero_slider.default",
			function ($scope, $) {
				txHeroSliderOne();
				txbackgroundImage();
			}
		);

		elementorFrontend.hooks.addAction(
			"frontend/element_ready/telnet_brand.default",
			function ($scope, $) {
				txBrandSlider();
			}
		);

		elementorFrontend.hooks.addAction(
			"frontend/element_ready/promo_slider.default",
			function ($scope, $) {
				txPromoSliderOne();
				txbackgroundImage();
			}
		);

		elementorFrontend.hooks.addAction(
			"frontend/element_ready/counter_two.default",
			function ($scope, $) {
				txCounter();
			}
		);
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/hero_slider_four.default",
			function ($scope, $) {
				txCounter();
			}
		);

		elementorFrontend.hooks.addAction(
			"frontend/element_ready/telnet_testimonial.default",
			function ($scope, $) {
				txTestimonialSlider();
			}
		);

		elementorFrontend.hooks.addAction(
			"frontend/element_ready/telnet_gallery.default",
			function ($scope, $) {
				txGallerySlider();
			}
		);

		elementorFrontend.hooks.addAction(
			"frontend/element_ready/telnet_progress.default",
			function ($scope, $) {
				txProgressActive();
			}
		);

		elementorFrontend.hooks.addAction(
			"frontend/element_ready/woo_product_slider.default",
			function ($scope, $) {
				txProductSlider();
			}
		);

		elementorFrontend.hooks.addAction(
			"frontend/element_ready/post_grid.default",
			function ($scope, $) {
				txPosttSlider();
			}
		);

		elementorFrontend.hooks.addAction(
			"frontend/element_ready/contact_form.default",
			function ($scope, $) {
				niceSelect();
			}
		);

		elementorFrontend.hooks.addAction(
			"frontend/element_ready/telnet_cta.default",
			function ($scope, $) {
				txbackgroundImage();
			}
		);

		elementorFrontend.hooks.addAction(
			"frontend/element_ready/image_box.default",
			function ($scope, $) {
				txbackgroundImage();
			}
		);

		elementorFrontend.hooks.addAction(
			"frontend/element_ready/telnet_tab.default",
			function ($scope, $) {
				txbackgroundImage();
			}
		);

		elementorFrontend.hooks.addAction(
			"frontend/element_ready/video_button.default",
			function ($scope, $) {
				txbackgroundImage();
			}
		);

		elementorFrontend.hooks.addAction(
			"frontend/element_ready/upcomming_show_slider.default",
			function ($scope, $) {
				txMovieSlider();
			}
		);

		elementorFrontend.hooks.addAction(
			"frontend/element_ready/movie_filter.default",
			function ($scope, $) {
				txMovieFilter();
			}
		);
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/hero_slider_four.default",
			function ($scope, $) {
				telSliderFour();
				slideBrands();
			}
		);
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/testimonial_two.default",
			function ($scope, $) {
				testimonialActiveTwo();
			}
		);

	});

})(jQuery);
