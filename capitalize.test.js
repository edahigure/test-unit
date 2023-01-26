//Arrange

const capitalize = require('./capitalize');

//Act
str_1 = 'hello'
str_2 = capitalize(str_1);


test( 'capitalize', ()=> {
    expect(str_2).toBe('Hello'); 
} )