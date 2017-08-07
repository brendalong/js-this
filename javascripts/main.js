console.log("hello this");

//Example one: call site and call stack
// try with let and var
// let keeps code block
var world = "210";

function sky() {
    // console.log("sky function");
    ocean();
}

function ocean() {
    // console.log("ocean function");
    dirt();
}

function dirt() {
    let world = "333";
    // console.log("dirt function");
    console.log("this", this); //execution context
    console.log("this.world", this.world); //refer to execution context
    //THIS holds the execution context, which is always at the original call site.

}

sky();

///////////////////////////////////////

//Example two: context objects
//lets make a chicken object

let chickenObj = {
    eggs: 6,
    sound: "cluck",
    makeSound: function makeSound() {
        console.log("this.sound", this.sound);
        // console.log("what about sound", sound);
    }
};

chickenObj.makeSound();

// chickenObj.makeSound() is the call site. 
// chickenObj is the execution context.


//////////////////////////////////////////

//Example three: more context objects

function foo() {
    console.log("foo", this.a);
}

let obj2 = {
    a: 42,
    foo: foo
};

let obj1 = {
    a: 2,
    obj2: obj2
};

obj1.obj2.foo();

///////////////////////////////////////////

//Example four: losing original binding

function storm() {
	console.log("storm: this.temp", this.temp);
}

let weatherObj = {
	temp: 72,
	storm: storm
};

var temp = "global warming";

//test each of these
weatherObj.storm();
// storm();


/////////////////////////////////////////////

//Example five: losing original binding with callbacks

var obj = {
    a: 2,
    foo5: foo5
};

function foo5() {
    console.log("foo5", this.a);
}

function doFoo(objFunction) {
    objFunction();
}

var a = "oops, global";
doFoo(obj.foo5);
//try this one to get a:2
// obj.foo5();

//doFoo() is the original call site that then calls foo5. 
//So doFoo is executed on the window (execution context)


/////////////////////////////////////////////////
//

let element = document.getElementsByTagName('div');

for (let i = 0; i < element.length; i++) {
    element[i].onmouseover = over;
    element[i].onmouseout = out;
}

function over() {
    this.style.backgroundColor = '#cc0000'
}

function out() {
    this.style.backgroundColor = '#ffffff'
}

//////////////////////////////////////////




