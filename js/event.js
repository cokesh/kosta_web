// DOM 객체의 load 이벤트 발생을 감시했다가 이벤트가 발생하면 function()이 자동호출됨.
window.addEventListener("load", function() {
    //DOM 트리의 btn객체 찾기
    var btn = document.querySelector("body>button");
    var ipt = document.querySelector("input[type=text]");

    btn.addEventListener("click", function() {
        alert("클릭발생발생 삐용삐용!");
        ipt.value = "클릭발생발생 삐용삐용!"; // input 태그에 값을 넣음.
    });

});

// function btn(s) {
//     alert(s);

// }
