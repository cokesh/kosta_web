// DOM 객체의 load 이벤트 발생을 감시했다가 이벤트가 발생하면 function()이 자동호출됨.
window.addEventListener("load", function() {
    //DOM 트리의 btn객체 찾기
    var btn = document.querySelector("body>button");
    var ipt = document.querySelector("input[type=text]");

    btn.addEventListener("click", function() {
        alert("클릭발생발생 삐용삐용!");
        ipt.value = "클릭발생발생 삐용삐용!"; // input 태그에 값을 넣음.
    });
    
    // 계산기 스타트 --------------------
    // DOM 트리에서 class 속성값이 calculator인 객체의 자식 중 모든 button 찾기
    var btnArr = document.querySelectorAll("div.calculator>button"); // 모든 버튼을 찾아오기 때문에 배열타입으로 반환이 됨
    for ( var i = 0; i < btnArr.length; i++ ) {
        var btnVal = document.querySelector("div.calculator>button");
        
        btnArr[i].addEventListener('click', function() { //클릭되었을때 예약을 걸어두는 것이기 때문에 지금당장의 i의 값이 전달이 되지 않고 다 계산이 된후의 i의 값이 들어간다.
            console.log(btnVal, '버튼이 클릭됨');
        });
    }



});

