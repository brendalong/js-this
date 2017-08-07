let howmanyBeans = 6;
let howmanyCows = 2;

//jquery add click event to id - event is passed in by default
$("#resultBtn").click( () => {
	resultFunction(howmanyBeans, howmanyCows);
});

function resultFunction(a, b){
	let result = a * b;
	//jquery change the html
	$("#result-1").html(`${result} random items of cows and beans`);
}



// hide and show all li and use of toggle
$("#scaryBtn").click( () => {
	$("li").toggle();
	console.log("ishidden", $("li").is(":hidden"));
	$("li").is(":hidden") ? $("#scaryBtn").html("Show") : $("#scaryBtn").html("Too Scary");
});




let storyItems = $(".story");

for (let i = 0; i < storyItems.length; i++){
	storyItems[i].onmouseover = over;
	storyItems[i].onmouseout = out;
}

function over() {
	// console.log("over this.id", this.id, "event.currentTarget", event.currentTarget, "event.target", event.target);
	this.style.backgroundColor = "peachpuff";
}

function out() {
	this.style.backgroundColor = "#ffffff";
}

$(".inner").append(`, <strong>Jack</strong>`);

// option 1
$("#holiday").click( () => {
	doSomething($("#holiday"));
});

function doSomething(obj){
	console.log("this obj", obj, obj[0], event);
	// obj[0].style.backgroundColor = "orange";
    event.target.style.backgroundColor = "orange";
}

///// option 2
$("#tomorrow").click( (event) => {
	doSomethingMore(event);
});

function doSomethingMore(event){
	console.log("event", event);
    event.target.style.backgroundColor = "lightgreen";
}






































