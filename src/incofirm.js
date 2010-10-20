/**
* Inline Confirmation plugin for jQuery.  
*
* Source code             : http://github.com/neerajdotname/iconfirm
* Usage and Documentation : http://github.com/neerajdotname/iconfirm
* Demo                    : coming up
*
*/

(function($) {

	$.fn.iconfirm = function(ops) {

		/* if there are no elements then just return */
		if (!this.length) return this;

		var defaults = {
			okLabel: "Continue",
			cancelLabel: "Cancel",
			msg: "Are you sure?",
			separator: " | ",
			timeout: 0,
			initCallback: function() {},
			cleanupCallback: function() {},
			yesCallback: function() {}
		};

		var options = $.extend(defaults, ops),
		resetElems = function(ic) {
			var origElem = ic.parent().find('.iconfirmOriginal');
			origElem.removeClass('iconfirmOriginal').show();
			options.cleanupCallback.apply(this, [origElem]);
			ic.remove();
		};

		options.okHtml = "<a href='#' class='iconfirmyes'>" + options.okLabel + "</a>";
		options.cancelHtml = "<a href='#' class='iconfirmno'>" + options.cancelLabel + "</a>";

		return this.each(function() {

			$(this).click(function(e) {
				var $this = $(this),
				origElem = $this;

				if (!origElem.hasClass('iconfirmOriginal')) {
					origElem.addClass('iconfirmOriginal').hide();
					options.initCallback.apply(this, [origElem]);
					origElem.siblings('.iconfirm').remove();

					var html = options.msg + ' ' + options.okHtml + options.separator + options.cancelHtml,
					ic = $('<span  />').addClass('iconfirm').html(html);

					origElem.after(ic);

					ic.find('a.iconfirmno').bind('click', function() {
						var ic = $(this).closest('.iconfirm');
						resetElems(ic);
					});

					ic.find('a.iconfirmyes').bind('click', function() {
						options.yesCallback.apply(this, [$(this)]);

						origElem.trigger('click');
						resetElems(ic);
					});

					if (options.timeout > 0) {
						setTimeout(function() {
							resetElems(ic);
						},
						options.timeout);
					}
					return false;
				};
			});

		}); //end of return this.each(function(){})
	}; //end of plugin
})(jQuery);

