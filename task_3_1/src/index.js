import mult from 'test-module-amd';

 function getNum () {
    const res = mult (8, 196);
    document.getElementById("res").innerHTML = res;
    console.log (res);
 }
 window.getNum = getNum;

