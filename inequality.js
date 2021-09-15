var inequality = 2;
var lowest = 1;
var highest = inequality*lowest;
var population = 1000;
var increment = (highest - lowest)/population;
var people =[];
var gdp=0;
for(var i =0;i<population;i++){
	people[i] = lowest + (increment*i);
	gdp+=(lowest + (increment*i));
}
var divisions = 5;
var quadrants=0;
for(var i =0;i<people.length;i++){
	quadrants+=(lowest + (increment*i));
	if((i%(population/divisions))==((population/divisions)-1)){
		console.log((quadrants/gdp)*100);
		quadrants =0;
	}
}
console.log(people.length);
