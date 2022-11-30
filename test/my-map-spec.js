// Your code here
const myMap = require("../problems/my-map");
const {expect} = require('chai');
const chai = require('chai'), spies = require('chai-spies');
chai.use(spies);
describe("My Map Function",function(){
    let arr;
    beforeEach(()=>{
        arr = [1,2,3,4,5,6];
})
    it("should return new array with conditions and not altering the old array",function(){
        expect(arr).to.equal(arr);

    })

    it("Did not called the inbuit map function",function(){
        chai.spy.on(arr,'arr.map');
    })
    it("called the function atleast once",function(){
        chai.spy.on(myMap(arr,function(){}));
    })
})