function capitalize(str){
    let str_0,str_1;
    str_1 = str.split('');
    str_0 = str.toUpperCase().split('');    
    str_1[0] = str_0[0];
    
    return str_1.join('');
}

module.exports = capitalize;