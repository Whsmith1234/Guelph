const fs = require('fs');
var data = fs.readFileSync("./new.json", 'utf-8'); 
data = data.split("\n");
for(var i =0;i<data.length;i++){
	data[i]=data[i].split(",");
	data[i].length = data[i].length-1;
}
var names = fs.readFileSync("./newNames.json", 'utf-8'); 
names = names.split("\n");
for(var i =0;i<names.length;i++){
	names[i]=names[i].split("|,");
}
function findCourse(Courses, CourseArray,searchTerm){
	console.log("Course: "+ searchTerm);
	console.log("Pre Requisities");
	var f = search(Courses,searchTerm,0);
	for(var i =0;i<Courses.length;i++){
		//console.log(CourseArray[i][f]);
		if(CourseArray[i][f]==1){
			console.log(Courses[i]);
			if(names[i][1]){
				console.log(names[i][1]);
			}
		}
	}
	console.log("Leads to");
	for(var i =0;i<Courses.length;i++){
		if(CourseArray[f][i]==1){
			console.log(Courses[i]);
			if(names[i][1]){
				console.log(names[i][1]);
			}	
		}
	}
}
function search(data, course, index){
	if(data.length>1&&data[0]!=course){
		var midPoint = Math.floor(data.length/2);
		if(data[midPoint]<course){
		
			var d = midPoint+index;
			var newData=[];
			for(var i =midPoint;i<data.length;i++){
				newData[i-midPoint]= data[i];
			}
			return search(newData,course,d);
		} else if(data[midPoint]>course){
			var newData=[];
			for(var i =0;i<midPoint;i++){
				newData[i] = data[i];
			}
			return search(newData,course,index);
		}else{
			var f = index+midPoint;
			return f;
		}
	}else{
		return -1;
	}
}

courses = [];
for(var i =0;i<names.length;i++){
	courses[i]=names[i][0];
	//console.log(courses[i]);
}
courses.length=courses.length-1;
//console.log(courses);
findCourse(courses, data, "ECON*4800");


/*
var awesome=[];
var data1 = fs.readFileSync("./something.json", 'utf-8'); 
var dataArray = data1.split("{\"Courses\"");
for(var i =1;i<dataArray.length;i++){
	var g = "{\"Courses\""+ dataArray[i];
    g = JSON.parse(g).CourseFullModels;
    for(var j =0; j<g.length;j++){
    	awesome[awesome.length+j]=g[j];
    }
}
*/
//MAIN(awesome);
function MAIN(data){
	var string ="";
	var d = 0;
	for(var i =0;i<data.length;i++){
		//console.log(i + " " + data[i].SubjectCode + "*" + data[i].Number);
		//console.log("");
		if(data[i]){
				
				while(names[d]!=(data[i].SubjectCode + "*" + data[i].Number)){

					string += names[d]+"\n";
					d++;
				}

				console.log(data[i].SubjectCode + "*" + data[i].Number);
				console.log("d: "+d +" names "+names[d]);
				string += names[d]+"|,"+data[i].Description+"\n";
				d++;
		}
	}
	fs.writeFileSync("./newNames.json",string, 'utf-8'); 
}