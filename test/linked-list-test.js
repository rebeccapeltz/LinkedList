const mocha = require('mocha');
const chai = require('chai');
const ll = require('../LinkedList');

describe("Linked List", function() {
  it("should add an array to a linked list", function() {
    expect(3).to.be.equal(ll.addArray(['a','b','c']));
  });
});