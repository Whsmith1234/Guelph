const fs = require('fs');
var Courses =[];
var awesome=[];
var data = fs.readFileSync("./something.json", 'utf-8'); 
var dataArray = data.split("{\"Courses\"");
//console.log(dataArray.length); 
for(var i =1;i<dataArray.length;i++){
	var g = "{\"Courses\""+ dataArray[i];
    g = JSON.parse(g).CourseFullModels;
    console.log(g);
    /*
    for(var j =0; j<g.length;j++){
    	awesome[awesome.length+j]=g[j];
    }
    */
}
//console.log(awesome);
//MAIN(awesome);
/*
function MAIN(data){
	
	for(var i =0;i<data.length;i++){
		//console.log(i + " " + data[i].SubjectCode + "*" + data[i].Number);
		//console.log("");
		if(data[i]){
			if(data[i].CourseRequisites[0]){
				//console.log(data[i].CourseRequisites[0].DisplayText+"\n");
				var f = data[i].CourseRequisites[0].DisplayText;
				//console.log(f);
				var d = grabCourses(f,"").replace("\(","").replace("\[","").replace("\(","").split(" ");
				//console.log(d);
				//console.log("i :"+i);
				Courses+=","+d;
							//console.log("-----------------------------------------------------");
			}
				Courses+=","+data[i].SubjectCode + "*" + data[i].Number;
		}
	}
	Courses = Courses.split(",");
	Courses.sort();
	Courses = removeDuplicates(Courses);
	Courses.length = [Courses.length-1];
	//log();
	var d = "";
	for(var i =0;i<Courses.length;i++){
		d+=Courses[i]+"\n";
	}
	fs.writeFileSync("./newNames.json",d, 'utf-8'); 
	var h = startArray(Courses.length,Courses.length);
	makeArray(data,h);

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
function grabCourses(string,substring){
	var h = string.indexOf("*")
	if(h==-1){
		return(substring)
	} else {
		substring += string.substring(h-4,h+5)+" ";
		string = string.substring((h+4));
		return grabCourses(string,substring);
	}
}
function log(){
	for(var i =0;i<Courses.length;i++){
		console.log(Courses[i]);
	}
}
function removeDuplicates(data){
	var h = data[0];
	var f = [data[0]];
	var Count = 1;
	for(var i =0;i<data.length;i++){
		if(data[i]!=h){
			f[Count]=data[i];
			h = data[i];
			Count++;
		}
	}
	f = f.join(",");
	f = f.substring(1).split(",");
	return f;
}
function makeArray(data,CourseArray){
	//console.log("------------------------------------------------------------------")
	
	for(var i =0;i<data.length;i++){
		if(data[i]){
			//console.log((data[i].SubjectCode + "*" + data[i].Number));
			if(search(Courses, (data[i].SubjectCode + "*" + data[i].Number), 0)!=-1){
				var index = search(Courses, (data[i].SubjectCode + "*" + data[i].Number), 0);
			}
			//console.log(index);
			if(data[i].CourseRequisites[0]){
				var f = data[i].CourseRequisites[0].DisplayText;
				var d = grabCourses(f,"").replace("\(","").replace("\[","").replace(",","").split(" ");
				for(var j =0;j<d.length;j++){
					if(search(Courses, (d[j]), 0)!=-1){
						if(d[j]!=''){
							var index2 = search(Courses, (d[j]), 0);
							CourseArray[index2][index] = 1;
					}
					}
				}
			}
		
		}
	}
	printArray(CourseArray);
	findCourse(CourseArray,"FIN*2000");
}
function printArray(CourseArray){
	var d = "";
	for(var i =0;i<CourseArray.length;i++){
		
		for(var j =0;j<CourseArray.length;j++){
			d+=CourseArray[i][j]+",";
		}
		d+="\n";
		//console.log(d);
		
		//console.log("-----------");
	}
	
}
function startArray(x,y){
    var g = [];
    for(var i =0;i<x;i++){
    	
         g[i]=[];
	     for(var j =0;j<y;j++){
	     		         g[i][j]=0;
	     }
     }
         return g;
}
function findCourse(CourseArray,searchTerm){
	console.log("Course: "+ searchTerm);
	console.log("Pre Requisities");
	var f = search(Courses,searchTerm,0);
	for(var i =0;i<Courses.length;i++){
		if(CourseArray[i][f]==1){
			console.log(Courses[i]);
		}
	}
	console.log("Leads to");
	for(var i =0;i<Courses.length;i++){
		if(CourseArray[f][i]==1){
			console.log(Courses[i]);
		}
	}
}
*/
