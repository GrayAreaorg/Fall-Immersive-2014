function setup() {
  // put setup code here
	var eggs = createCanvas(640,480);
	eggs.parent('chickens');
	console.log("I created a canvas tag, look at me.");
}

function draw() {
  // put drawing code here
	fill(255,0,0);
	rect(0,0,width,height);

}


var myInterval = setInterval(function() { 
	console.log("Hi Hi Hi"); 
},  1000);

var myFunction = function(thingtoPrint) {
	console.log("Hi");
};
function myFunction() {
	console.log("Hi");
}

function add(firstNum, secondNum) {

	console.log(firstNum+secondNum);
}
// 2 + 2
add(2,2);
//30.4 + 125
add(30.4, 125);

function storeAndAdd(firstNum, secondNum) {
	var myInternalVariable = firstNum + secondNum;
	console.log(firstNum + secondNum);

}


console.log("$" + 3 + 3);  // $33
console.log(3 + 3); // Number == 6
console.log("$" + (3 + 3));











