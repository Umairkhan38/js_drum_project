console.log("hello");

function object(name,age,designation){
this.name=name;
this.age=age;
this.designation=designation;
}

var obj1=new object("khan",21,"seniorDeveloper");
console.log(obj1.name);


