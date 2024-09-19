window.addEventListener("load", () => {
  var element = document.getElementById("innerTest");
  element.innerHTML = "Inserted <strong>JavaScript</strong> code";
  
  var buttonElm = document.getElementById("testButton");
  buttonElm.addEventListener("click", function() {
    var numberElm = document.getElementById("number");
    var val = numberElm.value;
    var num = parseInt(val);
    if (num % 2 == 0) {
      alert("偶数です");
    } else {
      alert("偶数ではありません");
    }
  });
});
