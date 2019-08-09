function Foo(who) {
	this.me = who;
}
Foo.prototype.identify = function() {
	return "I am " + this.me;
};

function Bar(who) {
	Foo.call( this, who );
}

Bar.prototype = Object.create( Foo.prototype ); 
// When overriding 'prototype' for an object/function it's 'constructor' property is lost.
// In this case, it will be resolved on 'Foo.prototype' due to [[prototype]] linkage from 'Bar.prototype' object to 'Foo.prototype' object.
// So any constructor call to Bar() e.g., var b1 = new Bar("b1"), here b1.constructor would resolve to 'Foo.prototype.constructor' eventually
// and value will be '[Function Foo]'.



// Bar.prototype.constructor = Bar; 

// Upon overriding 'prototype' property of a Function, if we don't want any object's (constructed via constructor calls on Bar()) 
// constructor property to point to 'Foo', then we need to set 'constructor' property of 'Bar.prototype' accordingly.
// In this case we have set it to 'Bar'. If we do this, any call to 'Bar.prototype.constructor' would resolve to [Function: Bar] else [Function: Foo].



Bar.prototype.speak = function() {
	console.log( "Hello, " + this.identify() + "." );
};

var b1 = new Bar( "b1" );
var b2 = new Bar( "b2" );

b1.speak();
b2.speak();

console.log("\nFoo.prototype - ", Foo.prototype);
console.log("Bar.prototype - ", Bar.prototype);
console.log("\tBar.prototype === Foo.prototype - ", Bar.prototype === Foo.prototype);
console.log("\tBar.prototype.__proto__ - ", Bar.prototype.__proto__);
console.log("\tb1.constructor - ", b1.constructor);

console.log("\nb1.constructor === Foo.prototype.constructor - ", b1.constructor === Foo.prototype.constructor);
console.log("b1.constructor === Foo", b1.constructor === Foo);


console.log("\nFunction.hasOwnProperty('__proto__') - ", Function.hasOwnProperty("__proto__"));
console.log("Object.prototype.hasOwnProperty('__proto__')", Object.prototype.hasOwnProperty("__proto__")); // __proto__ exists as GETTER on Object.prototype

console.log("Function.hasOwnProperty('prototype')", Function.hasOwnProperty("prototype")); // Functions have 'prototype' property on them.


console.log("Bar.constructor - ", Bar.constructor); 
// Function object's constructor property points to [Function: Function].
// Function object has it's own 'prototype' object assigned to it while it's creation.
// Function object's [[protoype]] linkage points to 'Function.prototype'. 
// This is the reason any Function objects can call 'call/apply/bind' etc functions on themselves
