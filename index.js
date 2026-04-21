let code1;
code1 = 7 + 3;
let code2 = (100 - 20) / 2;
let code3 = 39 % 40; //and this felt like a cheater way to get a remainder of 39 but im really bad at math
let message = "The vault has been secured. The combination is: ";
let codeA = code1 + "-" + code2 + "-" + code3;
let codeB = `${code1}-${code2}-${code3}`;
console.log(message + " " + codeA + " " + codeB);

// Alternative possibility
//console.log(message);
//console.log(codeA);
//console.log(codeB);

//I also considered I could use the template literal to do it this way
//console.log(`${message} ${codeA} ${codeB}`);
