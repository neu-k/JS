console.log("ファイル読み込みのテスト");


var element = document.getElementById("innerTest");
element.innerHTML = "<strong>JavaScript</strong>で書いたコード";


var buttonElm = document.getElementById("testButton");
buttonElm.addEventListener("click", function() {
  alert("ボタンが押されました");
});
