console.log("hello this");

//Example one: call site and call stack

var fubar = "42";

function baz() {
    // console.log("baz function");
    bar();
}

function bar() {
    // console.log("bar function");
    foo();
}

function foo() {
    var fubar = "333";
    // console.log("foo");
    console.log("this", this); //execution context
    console.log("this.fubar", this.fubar); //refer to execution context
}

baz();


///////////////////////////////////////

//Example two: context objects

function foo() {
    console.log( this.a );
}

var obj = {
    a: 2,
    foo: foo
};

obj.foo();

// obj.foo() is the call site. obj is the execution context.



