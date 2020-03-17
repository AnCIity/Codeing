function string2(str){
  var arr = [];
  for(var i = 0; i<str.length; i++){
  	arr.push(str[i]);
  }
 	
  if(arr.length == 1){
  	return arr[0]-0;
  }else{
  	return arr.reduce(
  		function(x, y){
     		return x*10 + (y-0);
    	}
  	)
  }
}

console.log(string2("0"))
