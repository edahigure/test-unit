
function reverseString (str)
{
    let str_2=str;
    
    return str_2.split('').reverse().join('');
}

module.exports=reverseString;