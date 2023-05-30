var a = parseInt(prompt('Valor 1 :'));
var b = parseInt(prompt('Valor 2 :'));
var c = parseInt(prompt('Valor 3 :'));

if (a > b && a > c) {
    console.log('Mayor 1: ' + a);
    if (b > c) {
        console.log('Mayor 2: ' + b);
    }else {
        console.log('Mayor 2: ' + c);
    }
}else if (b > a && b > c) {
    console.log('Mayor 1: ' + b);
    if (a > c) {
        console.log('Mayor 2: ' + a);
    }else {
        console.log('Mayor 2: ' + c);
    }
}else {
    console.log('Mayor 1: ' + c);
    if (a > b) {
        console.log('Mayor 2: ' + a);
    }else {
        console.log('Mayor 2: ' + b);
    }
}