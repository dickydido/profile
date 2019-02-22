window.onload = function() {
//Copyright year.
var today = new Date();
var year = document.createTextNode(today.getFullYear());
var copyright = document.querySelector('#copyright');
copyright.appendChild(year);

};
