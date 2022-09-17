function calc(operation, firstnumber, secondnumber) {
    if(!operation || !firstnumber || !secondnumber || typeof firstnumber !== 'number' || typeof secondnumber !== 'number') {
        return 'Error';
    }
    let operations = {
        sum: firstnumber + secondnumber,
        sub: firstnumber - secondnumber,
        mult: firstnumber * secondnumber,
        div: firstnumber / secondnumber,
        'Math.pow': firstnumber ** secondnumber,
    }
    if(!(operation in operations)) {
        return 'unknown operation';
    } else {
        return operations[operation];
    }
}
console.log(calc('sum', 4, 2));

