function rope(index, score){
	while(score!=6){
		
		var f = Math.floor(Math.random()*3);
		if(f==0){
			index++;
			score++;
			
		}else{
			index++;
			score =0;
	
		}
	}
	return index;
}
var count =0;
var g = 10000;
for(var i =0;i<g;i++){
	console.log(rope(0,0));
}
