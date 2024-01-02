/* global jing22, jing23 */
var jing22, jing23;

var jing24, jing25;

const sayHelloLinting = (fName) => {

    var str11 = "no-unused-vars error";
    let str12 = "indent warn";
    const str13 = "no semis at the end";
    str14 = "no-undef error";

    const str15 = str12 + str13;
    return str15.length + ' __ '+ fName.toLowerCase();
};

let blah1 = sayHelloLinting('paRaM23');
console.log(blah1);

