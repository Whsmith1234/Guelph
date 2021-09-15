var searchData = `10.5
12
11
8
4
9
5
8
11
12.5
10
16
7
12
7
7
8
10
13
9
12
8
10
12
13
13
7
12
7.5
6
8
8
11
13
11
14
10
10
10
8
6.5
8
8
14
19
13
14
18
13
9
12
12
10
11
12
13
14
11
22
18
19
13
15
11
8
12
13
13
15
11
15
16
16
14
14
11
15
17
16
11
17
19
20
15
18
19
15
14
12
14
11.5
13
17
30
34
44
25
18
14
15
14
14
23
30
27
16
12
17
18
19
17
16
15
13
16
11
17
15
17
19
28
111
83
58
54
35
39
34
31
46
59
116
125
55
43
46
52`;
stockData = `0.02
0.03
0.06
0.03
-0.02
0.03
0.12
-0.04
-0.02
0.07
0.03
0.02
0.05
0.14
-0.17
-0.10
-0.01
0.02
0.04
0.01
0.03
-0.03
0.00
0.08
-0.07
0.02
0.00
0.04
0.09
-0.11
0.03
-0.05
0.03
0.02
0.05
-0.02
0.02
0.00
-0.04
-0.04
0.05
0.02
0.04
0.05
0.02
0.00
0.03
0.02
0.00
0.01
-0.01
0.05
0.00
0.04
0.05
-0.01
-0.01
0.00
0.03
0.01
0.00
0.01
0.07
0.01
-0.05
-0.02
0.00
0.09
-0.02
-0.07
0.00
-0.02
0.01
0.00
-0.02
0.06
-0.04
0.00
0.03
0.02
0.00
0.03
-0.02
0.01
0.01
0.01
0.01
0.04
-0.05
0.03
0.03
0.03
0.02
-0.05
0.04
-0.01
0.02
0.02
0.04
0.01
0.06
0.01
-0.01
-0.03
0.03
0.01
0.01
0.04
-0.06
0.00
0.02
0.03
0.03
0.01
0.01
0.10
-0.06
-0.04
-0.02
-0.01
-0.02
0.04
0.01
0.03
0.03
0.05
-0.01
0.03
0.08
-0.04
0.07
-0.04
-0.08
0.01
0.05
0.03
-0.03`;
searchData = searchData.split("\n");
stockData = stockData.split("\n");
console.log("DATA SETS FOR MONTHLY STOCK MARKET DATA AND MONTHLY SEARCH TERMS");
console.log("Will Prangley\n -----------------------------------------------------------------------------");

/*

Okay the goal of this program is to pick random stock market events and see what happens
Through a monte carlo simulation


*/
console.log(searchData);
searchData = searchData.map(parseFloat);
stockData = stockData.map(parseFloat);
console.log(searchData +" "+ stockData);

for(var q =0.0; q< 9;q ++){
var histogram = [];
var variance =[];
var stockScore = 0;
var index = 0;
trueVariance=0;
for(var i =0;i<stockData.length;i++){
	var low =-0.01-(q/100);
	var high =0.03+(q/100);
	
	if(stockData[i]>(high)||stockData[i]<(low)){
		trueVariance+=Math.abs(0.02 - stockData[i])
		stockScore+=searchData[i];
		index++;
	}
}
for(var j =0;j<1000000;j++){
	histogram[j]=0;
	variance[j]=0;
	for(var i =0;i<index;i++){
		var f = Math.floor(Math.random() * 137);
		histogram[j] += searchData[f];
		variance[j] += Math.abs(0.02 - stockData[f]);
	
	}
}
var counter =0;
var varianceCounter=0;
for(var i =0;i<histogram.length;i++){
	//console.log(histogram[i]);
	if(histogram[i]<stockScore){
		counter++;
	}
	
}
console.log(`high ${high} low ${low} Stock Score ${stockScore} Counter ${counter}`);

}











































