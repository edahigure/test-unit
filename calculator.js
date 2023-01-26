class calculator {
    constructor (a =0,b =0){
        this.a=a;
        this.b=b;
    }
    add() {
        return this.a+this.b; 
    }
    substract() {
        return this.a-this.b;
    }
    multiply() {
        return this.a*this.b;
    }
    divide() {
        if(this.b===0){
            throw new Error('second term should be different from zero');
        }else{
            return this.a/this.b;
        }
        
    }
}

module.exports = calculator;