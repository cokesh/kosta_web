
$(function() {
    let $txtObj = $('input[type=text]');
    let $btObj = $('button').first();
    $btObj.click(function() {
        alert('클릭되었습니다.');
        $txtObj.val('클릭되었습니다.');
    });

    // var btArr = document.querySelectorAll("div.calculator>button");
    // console.log(btArr);
    // console.log("----------------");

    // let $btArr = $('div.calculator>button');
    // console.log($btArr);
    // console.log("----------------");

    // console.log(btArr[0]=== $btArr[0])

    let $btArr = $('div.calculator>button');
    // $btArr.forEach(function(item, index){
    //     if(index % 2 == 0) {
    //         item.hide();
    //     }
    // });

    let $resultObj = $('div.calculator>div.result');
    let resultNum = 0;
    let operator;
    $btArr.click(function(){
        $(this).css('color', 'blue');
        
    });

    //Jquery는 each만 쓰며 index, item 순서임
    //index item 순서이다. 
    // $btArr.each(function(index, item){
    //     $(item).click(function() {
    //         let inner = $(this).html();
    //         switch(inner) {
    //             case '+':
    //                 operator = inner;
    //                 break;
    //             case '=' :
    //                 $resultObj.html(resultNum);
    //                 operator = undefined;
    //                 resultNum = 0;
    //                 break;
    //             default: //숫자버튼들
    //                 $resultObj.html(resultNum);
    //                 if(operator == '+'){
    //                     resultNum += parseInt(inner);
    //                 }else {
    //                     resultNum = parseInt(inner);
    //                 }
    //         }
    //     });
    // });

    //checkbox start
    // checkbox 의 checked 속성값을 얻기 위해서 prop()를 사용해야 함.
    let $cb = $('input[type=checkbox]').first();
    let $cbChild = $('input[type=checkbox]');

    // alert($cb.prop('checked', true));
    // console.log($cbChild);
    $cb.click(function(){
        if ($cb.prop('checked')==true) {
            $cbChild.each(function(index, item){
                $(item).prop('checked', true);
            });
        } else {
            $cbChild.each(function(index, item){
                $(item).prop('checked', false);
            });
        }
    })
    //checkbox end

    //option start
    let $selectSidoObj = $('div.select select.sido');
    let $selectSigunguObj = $('div.select select.sigungu');

    $selectSidoObj.change(function(){
        switch($(this).val()){
            case '서울시':
                $selectSigunguObj.empty();
                var seoul = ['구를 선택하세요', '중구', '강북구', '강동구', '강남구', '강서구'];
                for(var i=0; i<seoul.length; i++){
                    var $opt = $('<option>');
                    var txt = seoul[i];
                    $opt.append(txt);
                    $selectSigunguObj.append($opt);
                }
                // $selectSigunguObj.html(seoul);
                $selectSigunguObj.show();
                break;
            case '제주도':
                $selectSigunguObj.empty();
                var jeju = ['시를 선택하세요', '제주시','서귀포시'];
                for(var i=0; i<jeju.length; i++){
                    var $opt = $('<option>');
                    var txt = jeju[i];
                    $opt.append(txt);
                    $selectSigunguObj.append($opt);
                }
                $selectSigunguObj.show();
                break;
        };
    })

    // var $selectSidoObj = $("div.select>select.sido");

    // var $selectSigunguObj = $("div.select>select.sigungu");

    // $selectSidoObj.change(function(){
    //     console.log($(this).val(), '변경되었습니다');
    //     switch($(this).val()){
    //         case '서울시':
    //             $selectSigunguObj.empty();
    //             var seoul = '<option>구를 선택하세요</option>';
    //             seoul += '<option>중구</option>';
    //             seoul += '<option>강북구</option>';
    //             seoul += '<option>강동구</option>';
    //             seoul += '<option>강남구</option>';
    //             seoul += '<option>강서구</option>';
    //             $selectSigunguObj.html(seoul);
    //             $selectSigunguObj.show();
    //             break;
    //         case '제주도':
    //             $selectSigunguObj.empty();
    //             var jeju = ['시를 선택하세요', '제주시','서귀포시'];
    //             for(var i=0; i<jeju.length; i++){
    //                 var $opt = $('<option>');
    //                 var txt = jeju[i];
    //                 $opt.append(txt);
    //                 $selectSigunguObj.append($opt);
    //             }
    //             $selectSigunguObj.show();
    //             break;
    //         default:
    //             $selectSigunguObj.empty();
    //             $selectSigunguObj.hide();
    //         }
    // });

    //option end

    // 전송관련 이벤트 : 버튼의 click 이벤트 -> 폼의 submit 이벤트 -> 폼의 submit 이벤트 기본처리(전송)됨
    
    let $formObj = $('div.submit>form');
    let $textSubmitObj = $formObj.find('input[type=text]');
    let $btSubmitObj = $formObj.find('button');
    $btSubmitObj.click(function () {
        alert('전송버튼 클릭이벤트가 발생했습니다.');
    });
    $formObj.submit(function() {
        alert('폼의 서브밋 이벤트가 발생했습니다.');
        if($textSubmitObj.val() == '') {
            alert('값을 입력하세요.');
            // event.preventDefault(); //기본이벤트처리 금지
            return false; //기본이벤트처리 금지 + 이벤트 전파 중지
        }
    });
    //submit END-----------

    var $divObj = $("div.a");
    $divObj.click(function() {
        $(this).css('background-color', 'yellow');
    });
    var $aObj = $("a");
    $aObj.click(function(event) {
        $(this).css('background-color', 'blue');
        return false;
    });
});
