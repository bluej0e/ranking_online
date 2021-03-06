(
	function ( $, window, document ) {
		'use strict';

		$(
			function ( $ ) {

				$( document ).on(
					// Buttons, headings, images.
					'click',
					'[data-wpl_tracker] a',
					function ( event ) {
						var $link    = $( this ),
							href     = $link.attr( 'href' ),
							target   = $link.attr( 'target' ),
							lightbox = $link.data( 'elementor-open-lightbox' ),
							options  = $link.parents( '.events-tracker-for-elementor' ).data( 'wpl_tracker' );

						// Отменим переход по ссылке.
						event.preventDefault();

						// Если есть ссылка для перехода, добавим задержку,
						// чтобы трекинги успели отработать.
						if ( href && '#' !== href && ( ! lightbox || 'no' === lightbox ) ) {
							track_element( options );
							console.log( 'Click with link' );

							/**
							 * Open in new window.
							 *
							 * @link https://learn.javascript.ru/popup-windows
							 */
							if ( target && '_blank' === target ) {
								window.open( href );
							} else {
								setTimeout(
									function () {
										document.location.href = href;
									},
									2000
								);
							}
						} else {
							track_element( options );
							console.log( 'Click without link' );
						}
					}
				);

				$( document ).on(
					// Forms.
					'submit_success',
					'[data-wpl_tracker] form',
					function ( event ) {
						var $form   = $( this ),
							options = $form.parents( '.events-tracker-for-elementor' ).data( 'wpl_tracker' );

						track_element( options );
						console.log( 'Submit success' );
					}
				);

				function track_element( options ) {
					if ( options.vkontakte ) {
						track_vkontakte( options.vkontakte_event_name );
					}

					if ( options.yandex_metrika ) {
						track_yandex_metrika( options.yandex_metrika_event_name, options.yandex_metrika_id );
					}

					if ( options.gtag ) {
						track_gtag( options.gtag_category, options.gtag_action, options.gtag_label );
					}

					if ( options.adwords ) {
						track_adwords( options.adwords_id, options.adwords_label, options.adwords_currency, options.adwords_value );
					}

					if ( options.analytics ) {
						track_analytics( options.analytics_category, options.analytics_action, options.analytics_label );
					}

					if ( options.facebook ) {
						if ( 'Custom' === options.facebook_event_name ) {
							track_facebook( options.facebook_event_name_custom, 'trackCustom' );
						} else {
							track_facebook( options.facebook_event_name, 'track' );
						}
					}
				}

				function track_vkontakte( event_name ) {
					if ( window.VK && typeof ( VK ) === 'object' ) {
						VK.Retargeting.Event( event_name );
					} else {
						window.console.log( 'Vkontakte not loaded' );
					}
				}

				function track_yandex_metrika( event_name, id ) {
					if ( window.ym && typeof ( ym ) === 'function' ) {
						ym( id, 'reachGoal', event_name );
					} else {
						window.console.log( 'Yandex Metrika not loaded' );
					}
				}

				function track_gtag( category, action, label ) {
					if ( window.gtag && typeof ( gtag ) === 'function' ) {
						gtag(
							'event',
							action,
							{
								'event_category' : category,
								'event_label' : label
							}
						);
					} else {
						window.console.log( 'Global Google Tag (gtag.js) not loaded' );
					}
				}

				function track_adwords( id, label, currency, value ) {
					if ( window.gtag && typeof ( gtag ) === 'function' ) {
						gtag(
							'event',
							'conversion',
							{
								'send_to': id + '/' + label,
								'value': value,
								'currency': currency
							}
						);
					} else {
						window.console.log( 'Global Google Tag (gtag.js) not loaded' );
					}
				}

				function track_analytics( category, action, label ) {
					if ( window.ga && typeof ( ga ) === 'function' ) {
						ga(
							'send',
							'event',
							{
								eventCategory: category,
								eventAction: action,
								eventLabel: label,
							}
						);
					} else {
						window.console.log( 'Google Analytics (analytics.js) not loaded' );
					}
				}

				function track_facebook( event_name, type ) {
					if ( window.fbq && typeof ( fbq ) === 'function' ) {
						fbq( type, event_name );
					} else {
						window.console.log( 'Yandex Metrika not loaded' );
					}
				}
			}
		);
	}
)( window.jQuery, window, document );

// eof.
