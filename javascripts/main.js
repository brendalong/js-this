console.log("hello this");

//Example one: call site and call stack
var world = "42";

function sky() {
    // console.log("sky function");
    ocean();
}

function ocean() {
    // console.log("ocean function");
    dirt();
}

function dirt() {
    var world = "333";
    // console.log("dirt");
    console.log("this", this); //execution context
    console.log("this.world", this.world); //refer to execution context
    //THIS holds the execution context, which is always at the original call site.

}

sky();

///////////////////////////////////////

//Example two: context objects

function makeSound() {
    console.log("this.eggs", this.eggs);
}

var chickenObj = {
    eggs: 6,
    makeSound: makeSound
};

chickenObj.makeSound();

// chickenObj.makeSound() is the call site. 
// chickenObj is the execution context.


//////////////////////////////////////////

//Example three: more context objects

function foo() {
    console.log(this.a);
}

var obj2 = {
    a: 42,
    foo: foo
};

var obj1 = {
    a: 2,
    obj2: obj2
};

obj1.obj2.foo();

///////////////////////////////////////////

//Example four: losing original binding

function storm() {
	console.log("storm: this.temp", this.temp);
}

var weatherObj = {
	temp: 72,
	storm: storm
};

var bar = weatherObj.storm;
var temp = "global warming";

//test each of these
weatherObj.storm();
// storm();

/////////////////////////////////////////////

//Example five: losing original binding with callbacks

function foo5() {
    console.log(this.a);
}

function doFoo(fn) {
    fn();
}

var obj = {
    a: 2,
    foo5: foo5
};

var a = "oops, global";
doFoo(obj.foo5);
//doFoo() is the original call site that then calls foo. 
//So doFoo is executed on the window (execution context)

//////////////////////////////////////////////


