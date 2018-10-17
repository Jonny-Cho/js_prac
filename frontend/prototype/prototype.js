function Person(name, age){
    this.name = name;
    this.age = age;
}

var obj = new Person("david", 10);
var obj2 = new Person("wendy", 20);

// 생성자의 prototype에 함수 getName()을 추가
Person.prototype.getName = function() {
    return this.name;
}

console.log(obj.getName());
console.log(obj2.getName());