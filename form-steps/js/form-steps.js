var btn1 = document.querySelector('#btn1');
var btn2 = document.querySelector('#btn2');
var btn3 = document.querySelector('#btn3');
var btn4 = document.querySelector('#btn4');

var step1 = document.querySelector('#step1');
var step2 = document.querySelector('#step2');
var step3 = document.querySelector('#step3');
var step4 = document.querySelector('#step4');
var step5 = document.querySelector('#step5');

btn1.addEventListener('click', function(){
	step2.classList.remove("c2");
	step2.classList.add("c1");
	step2.classList.add("step-zoom");
});

btn2.addEventListener('click', function(){
	step3.classList.remove("c3");
	step3.classList.add("c1");
	step3.classList.add("step-zoom");
});

btn3.addEventListener('click', function(){
	step4.classList.remove("c4");
	step4.classList.add("c1");
	step4.classList.add("step-zoom");
});

btn4.addEventListener('click', function(){
	step5.classList.remove("c5");
	step5.classList.add("c1");
	step5.classList.add("step-zoom");
});