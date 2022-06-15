$(function() {
    let $btSubmit = $('button[type=submit]');
    //--아이디중복확인버튼 클릭 START--
    let $btIdupchk = $('button.iddupchk');

    //--아이디중복확인버튼 클릭 START--
    let $btIdupchk = $('input[value="아이디중복확인"]');
    $btIdupchk.click(function(){
        $.ajax({
            url: 'http://localhost:8888/back/iddupchk',
            method : 'get',
            data : {id: $inputId.val()},
            success: function(jsonObj){
                if(jsonObj.status == 1){ //사용가능한 아이디인경우
                    $btSubmit.show(); 
                }else{
                    alert(jsonObj.msg);
                }
                
            },
            error: function(jqXHR){
                alert('오류:' + jqXHR.status);
            }
        })
        //submit과 달리 button은 기본이벤트를 처리하지 않기에 return false를 작성해주지 않아도 됨 
        
    })

    $btIdupchk.click(function(){
        $btSubmit.show();
    });
    //--아이디중복확인버튼 클릭 END--

    //--아이디입력란에 포커스 START--
    let $inputId = $('input[name=id]');
    $inputId.focus(function(){
        $btSubmit.hide();
    });
    //--아이디입력란에 포커스 END--

    // 우편번호 찾기 버튼 클릭 start --------------
    // 먼저 우편번호 찾기 버튼 객체를 찾는다.
    let $btSearchIp = $('button.searchIp');
    $btSearchIp.click(function(){
        let left = Math.ceil(( window.screen.width/2 ) - 700/2);
        let top = Math.ceil(( window.screen.height/2 ) - 300/2);
        window.open('/front/html/searchip.html', '_blank', 'status=no, height=300, width=700, left='+ left + ', top='+ top);
    });
    // 우편번호 찾기 END---------

    //가입버튼 클릭이벤트 발생 -> 폼서브밋 이벤트 발생 -> 기본처리(전송)
    // 폼객체 찾아라
    let $form = $('form');

    $form.submit(function() {
        //일치확인
        // 비밀번호 객체 찾기
        let $pwd = $('#pwd-container>input[name=pwd]');
        let $pwd1 = $('#pwd-container>input[name=pwd1]');
        if($pwd.val() != $pwd1.val()) {
            alert('Please check your password!');
            $pwd.focus();
            return false; // submit 함수 빠져나감
        }
        // let idValue = $('input[name=id]').val();
        // // 비밀번호는 위에서 찾음
        // let nameValue = $('input[name=name]').val();
        // let addrValue = $('input[name=addr]').val();
        // let addrDtValue = $('input[name=detailAddr]').val();
        // let buildingnoValue = $('input[name=buildingno]').val();

        let url = 'http://localhost:8888/back/signup'; // 서블릿의 url로 지정
        //객체로 만드는 방법---------
        // let data = {id: idValue, 
        //             pwd: $pwd.val(), 
        //             name: nameValue, 
        //             addr:addrValue, 
        //             dtAddr:addrDtValue, 
        //             buildingno: buildingnoValue
        //             }; // 실제로 현업에서는 훨씬 더 정보가 많음.

        //
        let data = $(this).serialize();
        // let sedata = data = data.serialize();
        // alert(data);
        $.ajax({
            url: url,
            method: 'post',
            data: data,
            success: function(jsonObj) {
            // success: function(responseText) {
            //     let jsonObj = JSON.parse(responseText);
                alert(jsonObj.msg);
            },
            error: function(jqXHR) {
                alert('에러코드: ' + jqXHR.status);
            }
        });


        return false;
    })
})