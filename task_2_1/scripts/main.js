requirejs(['../node_modules/test-module-amd/myModule'], function(testModule) {

  function mult () {
    const res = testModule (8, 196);
    document.getElementById("res").innerHTML = res;
    console.log (res);
 }
 window.mult = mult;
  });
