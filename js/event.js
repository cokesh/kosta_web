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
        (function(j) { // i의 값이 진행될때마다 함수가 실행이 되면서 그때 당시의 값을 얻을수 있음
            btnArr[i].addEventListener('click', function() { // 클릭되었을때 예약을 걸어두는 것이기 때문에 지금당장의 i의 값이 전달이 되지 않고 다 계산이 된후의 i의 값이 들어간다. scope의 개념에 의함. but 하나의 scope을 추가함으로써 원래는 i가 다 증가하고 12의 값이 들어가지만 내부적으로 addEventListener가 진행이 될때마다 함수를 직접 호출함으로써 그때 당시의 i값을 전달하여 콘솔에 찍힐수 있게끔 함.
                console.log(j+1, '버튼이 클릭됨'); 
            });
        })(i);
    }// 계산기 end --------------------------------



});

