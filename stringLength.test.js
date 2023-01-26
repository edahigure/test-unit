const stringLength = require('./stringLength');

test('number of chars in "Hello" is 5', () => {

  //Arrange
  str1="Hello";
  str2="Hessssllo--------";

  //Act
  let value = stringLength(str1);

  //Assert
  expect(value).toBe(5);

  //Act
  value = stringLength("H");

  //Assert
  expect(value).toBeGreaterThan(0);
    
  //Assert
  expect(() => {
      stringLength('ocdasfasfasftopus');
    }).toThrow('not well formed string');
 

});