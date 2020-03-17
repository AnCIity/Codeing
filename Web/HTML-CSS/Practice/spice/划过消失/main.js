var oBox = document.getElementById('box');

var str = '';
for(var i=0; i<200; i++){
	str = str + '<div>' + i + '</div>';
}
oBox.innerHTML = str;

var aBox = oBox.getElementsByTagName('div');

for(var k=0; k<aBox.length; k++){
	aBox[k].onmouseover = function(){
		this.style.backgroundColor = 'transparent';
	}
}