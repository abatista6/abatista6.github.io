/*function to toggle dark mode of resume */
function darkFunction() {
   	var element = document.body;
	element.classList.add("dark-mode");
}

/*function to toggle light mode of resume*/
function lightFunction() {
	var element = document.body;
	element.classList.remove("dark-mode")
}

/*function to toggle mobile hamburger menu and exit icon*/
function closeFunction(x) {
	x.classList.toggle("fa-times");
}

/*function iconFunction(y) {
	y.classList.toggle("fa-moon");
}*/

/*returns the object itself or the object to which the passed ID refers 
(enhanced version of getElementById allows either an object or ID name to be passed)*/
function getObj(oh) {
	return typeof oh == 'object' ? oh : document.getElementById(oh);
}

/*returns the style property of an object or element refers to
accepts either ID or object (getObj('id').style.color='green' == getStyle('id').color='green')*/
function getStyle(si) {
	return getObj(si).style;
}

/*returns an array of all objects that match the class name provided
iterate through the object of the array using a for loop*/
function getClass(eh) {
	return document.getElementsByClassName(eh);
}

/*function timelineFunction() {
"use strict";*/

/* define variables */
/*var items = document.querySelectorAll(".timeline li");*/

/* check if an element is in viewport */
/*function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();

    return rect.bottom > 0 &&
        rect.right > 0 &&
        rect.left < (window.innerWidth || document.documentElement.clientWidth)*/ /* or $(window).width() */ /*&&
        rect.top < (window.innerHeight || document.documentElement.clientHeight)*/ /* or $(window).height(); */
/*}

function callbackFunc() {
	for (var i = 0; i < items.length; i++) {
		if (isElementInViewport(items[i])) {
			items[i].classList.add("in-view");
		}
	}
}

function listen() {*/
	/*listen for events*/
/*	window.addEventListener("load", callbackFunc);
	window.addEventListener("resize", callbackFunc);
	window.addEventListener("scroll", callbackFunc);*/

/*	document.addEventListener("load", callbackFunc);
	document.addEventListener("resize", callbackFunc);
	document.addEventListener("scroll", callbackFunc);
}*/
