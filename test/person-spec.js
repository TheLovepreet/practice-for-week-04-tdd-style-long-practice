// Your code here
const Person = require("../problems/person.js");
const { expect, spy } = require('chai');
const chai = require('chai'), spies = require('chai-spies');
chai.use(spies);
let Banda;
let otherPerson;
describe("Person class",function(){
        Banda = new Person("Love",21);
    it("instances should have name and age properties",function(){
        expect(Banda.name).to.equal("Love");
        expect(Banda.age).to.equal(21);
    })
})
    describe("sayHello instance method",function(){
             Banda = new Person("Love",21);
             otherPerson = new Person("Sura",20);
    it("sayHello should return instances Name with a Greeeting",function(){
        expect(Banda.sayHello()).to.equal("Hi my name is Love")
    })
})
describe("visit() method",function(){
         Banda = new Person("Love",21);
         otherPerson = new Person("Sura",20);
    it("shows that one person visited another",function(){
        expect(Banda.visit(otherPerson)).to.equal("Love visited Sura");
    })
})
describe("switchVisit() method",function(){
         Banda = new Person("Love",21);
         otherPerson = new Person("Sura",20);
    it("should show that OtherPerson Visited this person",function(){
        expect(switchVisit(otherPerson)).to.equal(otherPerson.visit(Banda));
    })
})
describe("Update() method",function(){
    beforeEach(() =>{
        Banda = new Person("Love",21);
        otherPerson = new Person("Sura",20);
    });
    it("if incoming argument is not object throw TypeError",function(){
        expect(update('string')).to.throw(TypeError);
    });
    it("should update the Values in Person Class",function(){
        expect(Banda.update({name : "lulu", age: 57})).to.equal(Banda);
    });
    it("should throw an typeError if obj doesn't have name and age property",function(){
        expect(Banda.update({something: "somehin"})).to.throw(TypeError);
    });
})
describe("tryUpdate() method",function(){
    beforeEach(() =>{
        Banda = new Person("Love",21);
        otherPerson = new Person("Sura",20);
        const obj = {name : "Someone", age: 65};
    });
    it("return true if Update () was Invoked and successfully Updated the Instance",function(){
        chai.spy.on(Banda,update(obj)).to.have.been.called.once;
        expect(Banda.tryUpdate(obj).to.equal(true));
    })
    it("return false if Update was not successfull",function(){
        expect(Banda.tryUpdate('stirnf')).to.equal(false);
    })
})
describe("GreetAll Method",function(){
    Banda = new Person("Love",21);
    otherPerson = new Person("Sura",20);
    let arr = [Banda,otherPerson];
    let helloSpy = chai.spy.on(global,"sayHello");
    it("should use sayHello on each Person instance in array",function(){
        expect(helloSpy).to.have.been.called.with.exactly(arr[0]);
        expect(helloSpy).to.have.been.called.with.exactly(arr[1]);
    })
})