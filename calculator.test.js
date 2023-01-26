//Arrange
const calculator = require('./calculator');



describe('calculator',() => {
    //Act
    const value = new calculator(5,3);
    
    //Assert
    test('sum', () => {        
        expect(value.add()).toBe(8);
    });

    test('substract', () => {        
        expect(value.substract()).toBe(2);
    });

    test('multiply', () => {        
        expect(value.multiply()).toBe(15);
    });

    test('divide', () => {                
            expect(value.divide()).toBeCloseTo(1.6666);
    });        

    //Act
    const value2 = new calculator(5,0); 

    //Assert
    test('divide', () => {                
        expect(()=> {value2.divide() }).toThrow('second term should be different from zero');
});        

        
        
})
test
