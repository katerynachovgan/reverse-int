module.exports = function reverse (n) {
    let num = n;
    if ( num < 0) n = n*(-1);
    console.log(n);
    let hundred = (n % 10) *100;
    console.log(hundred);
    let units = Math.trunc(n / 100);
    console.log(units);
    let decimal = Math.trunc((n % 100) / 10)*10;
    console.log(decimal);
    if (hundred === 0) return decimal + units;
    return hundred + decimal + units;
}
