function Foo(name) {
  this.name = name;
}

Foo.prototype.myName = function() {
  return this.name;
}

function Bar(name, label) {
  Foo.call(this, name);
  this.label = label;
}

console.log('\nFoo.Prototype', Foo.prototype);

var FooPrototype = Object.create(Foo.prototype);
console.log('\nFooPrototype', FooPrototype);

Bar.prototype = Foo.prototype;

console.log('\nFooPrototype === Foo.prototype', FooPrototype === Foo.prototype);




Bar.prototype.myLabel = function() {
  return this.label;
}

var a  = new Bar('a', 'obj a');
console.log('a.myName()', a.myName());
console.log('a.myLabel()', a.myLabel());

console.log(Bar.prototype);
console.log(Foo.prototype);

console.log('\nFooPrototype', FooPrototype);
