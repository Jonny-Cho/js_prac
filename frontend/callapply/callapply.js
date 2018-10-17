function Person(name, age){
    this.name = name;
    this.age = age;
    console.log("["+this.name + "," + this.age + "]");
}

var p = new Person("Tom", 33);
var p2 = Person("Tim", 22);

var p3 = {};
var p4 = new Object();

Person.call(p3, "Sebin", 11);
Person.apply(p4, ["Yebin", 9]);