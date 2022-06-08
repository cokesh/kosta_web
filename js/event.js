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

    // for ( var i = 0; i < btnArr.length; i++ ) {
    //     (function(j) { // i의 값이 진행될때마다 함수가 실행이 되면서 그때 당시의 값을 얻을수 있음
    //         btnArr[i].addEventListener('click', function() { // 클릭되었을때 예약을 걸어두는 것이기 때문에 지금당장의 i의 값이 전달이 되지 않고 다 계산이 된후의 i의 값이 들어간다. scope의 개념에 의함./ but 하나의 scope을 추가함으로써 원래는 i가 다 증가하고 12의 값이 들어가지만 내부적으로 addEventListener가 진행이 될때마다 함수를 직접 호출함으로써 그때 당시의 i값을 전달하여 콘솔에 찍힐수 있게끔 함.
    //             console.log(j+1, '버튼이 클릭됨'); 
    //         });
    //     })(i);

    var resultObj = document.querySelector("div.calculator>div.result")
    var resultNum = 0; //계산될 결과값 
    var operator; //연산자
    btnArr.forEach(function(item, index) { // 배열쓸때 forEach 쓰는 것이 훨 낫다(0-끝까지 순차처리 할 때 쓰길 권장함!!)
        item.addEventListener('click', function() {
            // console.log(index+1, '클릭!');
            // var calBtn = index + 1;
            // resultObj.innerHTML = calBtn + '번 클릭됨'; //바디태그의 html에 접근하여 수정가능
            // console.log(this.attr('class'));
            var inner = this.innerHTML;
            switch(inner) {
                case '+':
                    operator = inner;
                    break;
                case '=' :
                    resultObj.innerHTML = resultNum;
                    operator = undefined;
                    resultNum = 0;
                    break;
                default: //숫자버튼들
                    resultObj.innerHTML = inner;
                    if(operator == '+'){
                        resultNum += parseInt(inner);
                    }else {
                        resultNum = parseInt(inner);
                    }
            }
        });
    });
    // 계산기 end --------------------------------
    var cbArr = document.querySelectorAll("div.checkbox input[type=checkbox]");
    cbArr.forEach(function(item, index) {
        console.log(item, item.checked);
    });
    cbArr[0].addEventListener('click', function() {
        for ( var i = 0; i < cbArr.length; i++ ) {
            cbArr[i].checked = this.checked;
        }
    })

    var selectObj = document.querySelector("div.select>select");
    var selectSigunguObj = document.querySelector("div.select>select.sigungu");
    selectObj.addEventListener('click', function() {
        console.log(this.value, "클릭되었습니다.");
    });
    selectObj.addEventListener('change', function() {
        console.log(this.value, '변경되었습니다.');
        
        switch ( this.value ) {
            case '서울시':
                selectSigunguObj.innerHTMl = '';
                var seoul = '<option>구를 선택하세요</option>';
                seoul += '<option>중구</option>';
                seoul += '<option>강북구</option>';
                seoul += '<option>강동구</option>';
                seoul += '<option>강남구</option>';
                seoul += '<option>강서구</option>';
                selectSigunguObj.innerHTML = seoul;
                selectSigunguObj.style.display = 'inline-block';
                break;
            case '제주도':
                // for ( var i = 0; i < selectSigunguObj.childNodes.length; i++ ) {
                //     console.log('before length', selectSigunguObj.childNodes.length);
                //     selectSigunguObj.removeChild( selectSigunguObj.childNodes[i]);
                //     console.log('after length', selectSigunguObj.childNodes.length);
                // }

                while (selectSigunguObj.hasChildNodes()) {
                    selectSigunguObj.removeChild(selectSigunguObj.firstChild);
                }

                // var jeju = '<option>시를 선택하세요</option>';
                // jeju += '<option>제주시</option>';
                // jeju += '<option>서귀포시</option>';
                // selectSigunguObj.innerHTML = jeju;
                selectSigunguObj.innerHTML = '';
                var jeju = ['시를 선택하세요.', '제주시', '서귀포시'];
                for ( var i = 0; i < jeju.length; i++ ) {
                    var opt = document.createElement('option');
                    var txt = document.createTextNode(jeju[i]);
                    opt.appendChild(txt);
                    selectSigunguObj.appendChild(opt);
                }
                selectSigunguObj.style.display = 'inline-block';
                break;
            default:
                selectSigunguObj.innerHTML = '';
                selectSigunguObj.style.display = 'inline-none';
        }
    });


    var inputObj = document.querySelector("div.keyboard>input[type=text]");
    inputObj.addEventListener('click', function() {
        console.log('input객체가 클릭됨');
    })
    inputObj.addEventListener('focus', function() {
        console.log('input객체 포커스받았음');
    })
    inputObj.addEventListener('keyup', function(event) {
        alert('입력된 키값:'+ event.key);
    })

    var btSubmitObj = this.document.querySelector('div.submit>form>button');
    var formObj = this.document.querySelector('div.submit>form');
    // var textSubmitObj = this.document.querySelector('div.submit>form>input[name=t]');

    //DOM
    var btSubmitObj = formObj.lastElementChild; 
    //element를 써주지 않으면 enter 값도 텍스트노드로 받아들이기 때문에 차지 못함.
    var textSubmitObj = formObj.firstElementChild; 
    console.log(btSubmitObj);

    btSubmitObj.addEventListener('click', function() {
        alert('전송버튼 클릭이 되었습니다.');
    });
    
    formObj.addEventListener('submit', function(event) {//전송되기전에 할일을 작성함.
        alert('폼의 서브밋이벤트가 발생함.');
        if(textSubmitObj.value == '') {
            alert('값을 입력하세요.');
            event.preventDefault();

        }
    });

    var dicAobj = this.document.querySelector("div.a");
    dicAobj.addEventListener('click' ,function() {
        this.style.backgroundColor = 'navy';
    });
    // 이벤트 전파: 하위객체에서 발생한 이벤트가 상위객체로 전파 = > 이벤트 버블링방식
    var aObj = document.querySelector('div.a>a');
    aObj.addEventListener('click', function(event) {
        this.style.backgroundColor = 'teal';
        event.preventDefault();
        event.stopPropagation();
    });

    //getElementsByTagName보다 더 많은 태그를 찾는데에 있어 더 적합함.
    //getElementsByTagName은 배열형태가 아님
    var inputNodeList = this.document.querySelectorAll("input");
    console.log("----------------");
    console.log(inputNodeList);
    console.log("----------------");
    
    var inputCollection = this.document.getElementsByTagName("input");
    console.log("----------------");
    console.log(inputCollection);
    console.log("----------------");

    // inputCollection.forEach(function(item, index){
    //     console.log('inputCollection', item);
    // });
});

