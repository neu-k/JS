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


  var fruits = ["りんご", "もも", "みかん"];
  var fruitsStr = "";
  for (var i = 0; i < fruits.length; i++) {
    fruitsStr += '<li class="fruit">' + fruits[i] + '</li>';
  }
  var arrayElm = document.getElementById("arrayTest");
  arrayElm.innerHTML = fruitsStr;


  var fruitElms = document.getElementsByClassName("fruit");
  for (var i = fruitElms.length; i > 0; i--) {
    var fruitElm = fruitElms[i - 1];
    console.log(fruitElm.textContent);
  }


  var colorsObj = {
    red: "あか",
    green: "みどり",
    "blue": "あお"
  };

  console.log(colorsObj);

  console.log(colorsObj["red"]);
  console.log(colorsObj.red);
  console.log(colorsObj.blue);

  colorsObj["red"] = "レッド";
  console.log(colorsObj.red);

  colorsObj.blue = "ブルー";
  console.log(colorsObj.blue);
});




