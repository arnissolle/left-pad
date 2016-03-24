;(function() {

	"use strict";

	/**
	 * Friendly properties :)
	 */
	var repository_version = "0.1.0";
	var repository_url = "https://github.com/parnissolle/left-pad";
	var print_prefix = "[parnissolle/left-pad@" + repository_version + "]";

	/**
	 * Leftpad function
	 * Left string padding
	 */
	var leftpad = function(str, len, ch) {
		
		try {

			if (typeof str === "undefined") {
				throw "The first given parameter cannot be undefined, please see " + repository_url + " to learn more.";
			} else {
				str = String(str);
			}

			len = (len === parseInt(len)) ? len : 0;
			ch = (typeof ch !== "undefined") ? String(ch) : " ";

			for (var i = str.length; i < len; i++) {
				str = ch + str;
			}

	  		return str;

		} catch (exception) {

			console.error(print_prefix, exception);
			return false;

		}

	};

	try {

		if (window.leftpad) {

			throw "Fail to assign \"leftpad\" to window as a global method, please see " + repository_url + " to learn more.";

		} else window.leftpad = leftpad;

	} catch (exception) {

		console.warn(print_prefix, exception);

	}

	try {

		if (String.prototype.leftpad) {

			throw "Fail to assign \"leftpad\" to String as a method, please see " + repository_url + " to learn more.";

		} else {

			String.prototype.leftpad = function(len, ch) {
				return leftpad(this, len, ch);
			};

		}

	} catch (exception) {

		console.warn(print_prefix, exception);

	}

})();
