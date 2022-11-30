// Your code here
const { expect } = require('chai');
const reverseString = require("../problems/reverse-string");

describe("String Reversal", function(){
    it("should Reverse the String", function(){
        expect(reverseString("fun")).to.equal("nuf");
    })
})