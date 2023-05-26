"use strict";
const time = document.querySelector(".time");
const day = document.querySelector(".day");
const text = document.querySelector(".text");

setInterval(() => {
	const now = new Date();
	const options = {
		hour: "numeric",
		minute: "numeric",
		second: "numeric",
	};
	const locale = navigator.language;
	console.log(new Intl.DateTimeFormat(locale, options).format(now));

	time.textContent = new Intl.DateTimeFormat(locale, options).format(now);
}, 1000);

// console.log(new Date());

const now = new Date();
const options = {
	weekday: "long",
	month: "long",
	day: "numeric",
	year: "numeric",
};
const locale = navigator.language;
day.textContent = new Intl.DateTimeFormat(locale, options).format(now);

const today = now.getDay();
const message = [
	"It's Sunday, a day of reflection and preparation.",
	"It's Monday, make it the best of your week.",
	"It's Tuesday, time to fuel your momentum. Let your determination drive you forward.",
	"Midweek has arrived, and you're halfway there! Wednesday brings a fresh surge of energy and possibilities.",
	"It's Thursday, a day of determination. You've come a long way this week, and now is the time to push even harder.",
	"It's Friday, the gateway to the weekend. Finish the week strong and celebrate your accomplishments.",
	"Happy Saturday! It's time to recharge, rejuvenate, and indulge in things that bring you joy.",
];

text.textContent = `${message[today]}😊`;
