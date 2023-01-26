//Arrange
const reverseString = require('./reverseString');


test( 'reverse string', ()=> {

    //Act
    value=reverseString('Hello');
    //Assert
    expect(value).toBe('olleH');
} )