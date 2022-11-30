// Your code here
const { expect } = require('chai');
const numberfun = require("../problems/number-fun");

describe("returnsThree Function",function(){
    it("should return the Number 3",function(){
        expect(numberfun.returnsThree()).to.equal(3);
    })
})

describe("Reciprocal Function",function(){
    it("should return reciprocal of the number",function(){
        expect(numberfun.reciprocal(1)).to.equal(1/1);
        expect(numberfun.reciprocal(12)).to.equal(1/12);
        expect(numberfun.reciprocal(15)).to.equal(1/15);
    })
})