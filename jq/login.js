$(function(){
    //id 입력객체 찾기
    let $inputId = $('input[name=id]');
    // 비밀번호 입력객체 찾기
    let $inputPwd = $('input[name=pwd]');

    let $form = $('form');

    $form.submit(function() {
        let  url = 'http://localhost:8888/back/jsp/login.jsp';
        // 사용자가 입력해준 아이디값 비밀번호값
        let inputIdValue, inputPwdValue;
        inputIdValue =$inputId.val();
        inputPwdValue =$inputPwd.val();
        let data = 'id=' + inputIdValue + '&pwd=' + inputPwdValue;

        // 단순 jquery로 작성한 코드--------------
        // $('section>article:first').load(url, data, function(responseText, statusText, xhr){
        //     if(statusText != "success") { // 응답(자원을 찾음) 오류인 경우
        //         alert(xhr.status + ':' + xhr.statusText);
        //     } else { // 응답이 성공된 경우
        //         let jsonObj = JSON.parse(responseText) // {status:1} 문자열을 json객체로 변환
        //         let loginSuccess = jsonObj.status; // 로그인 성공시에 status가 1 실패시에 0 임
        //         if(loginSuccess == 1) { // 로그인 성공된 경우
        //             // 메인 페이지로 이동

        //         } else if (loginSuccess == 2) { // 로그인 실패한 경우
        //             alert('로그인 실패');
        //         }
        //     }
        // });

        // 위의 내용을 ajax로 바꾼 코드--------------
        $.ajax({
            url: url,
            method: 'post',
            data: data,
            success: function(responseText) {
                let jsonObj = JSON.parse(responseText);
                if(jsonObj.status == 1) {
                    // 로그인 성공
                    // 메인 화면으로 돌아가기
                    location.href = ''; // 빈 문자열을 입력할 경우 현재 사용중인 url로 redirect 해준다.
                } else {
                    // 로그인 실패
                    alert('로그인 실패');
                }
                // $('section>article:first').html(responseText);
            },
            error: function(jqXHR, status, errorThrown) {
                alert(jqXHR.status + ': ' + jqXHR.statusText); // error alert 하기
            }
        })
        return false;
    });
    // $(document).ready(function(){
    // // 아이디 저장 체크박스 객체 찾기
    // let $cb = $('input[type=checkbox]');

    // // 로그인 버튼 객체 찾기
    // let $loginBtn = $('button[type=submit]');
    
    // })
})