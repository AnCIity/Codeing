var chunkOne = document.getElementById("chunk-one");
var chunkTwo = document.getElementById("chunk-two");
var chunkThree = document.getElementById("chunk-three");
var chunkFour = document.getElementById("chunk-four");


function upWidth(value){
	
	var one = '136px';
	var two = '136px';
	var three = '136px';
	var four = '136px';
	
	if (value == 1) {
		one = '316px';
	} else if (value == 2) {
		two = '316px';
	} else if (value == 3) {
		three = '316px';
	} else if (value == 4) {
		four = '316px';
	}
	
	chunkOne.style.width = one;
	chunkTwo.style.width = two;
	chunkThree.style.width = three;
	chunkFour.style.width = four;
}

function upOpacity(value){
	
	var one = '0.5';
	var two = '0.5';
	var three = '0.5';
	var four = '0.5';
	
	if (value == 1) {
		one = '1';
	} else if (value == 2) {
		two = '1';
	} else if (value == 3) {
		three = '1';
	} else if (value == 4) {
		four = '1';
	}
	
	document.getElementById("chunk-one-oper").style.opacity = one;
	document.getElementById("chunk-two-oper").style.opacity = two;
	document.getElementById("chunk-three-oper").style.opacity = three;
	document.getElementById("chunk-four-oper").style.opacity = four;
	
}

function operOne(){
	upWidth(1)
	upOpacity(1)
}

function operTwo(){
	upWidth(2)
	upOpacity(2)
}

function operThree(){
	upWidth(3)
	upOpacity(3)
}

function operFour(){
	upWidth(4)
	upOpacity(4)
}