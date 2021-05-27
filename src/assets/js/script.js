"use strict";

// import sliders from './sliders.js';

document.addEventListener("DOMContentLoaded", function () {

flatpickr("#bornDate", {
});
flatpickr("#analysDate", {
	enableTime: true,
	dateFormat: "Y-m-d H:i:s",
});
flatpickr("#testDate", {
	enableTime: true,
	dateFormat: "Y-m-d H:i:s",
});

});