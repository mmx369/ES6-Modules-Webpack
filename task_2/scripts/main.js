requirejs(['myModule'], function(mult) {

  window.getNumb = () => {
    const res = mult(8, 84);
    document.getElementById("res").innerHTML = res;
    console.log(res);
  }
  });
