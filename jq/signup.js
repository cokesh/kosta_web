$(function() {
    //가입버튼 클릭이벤트 발생 -> 폼서브밋 이벤트 바랫ㅇ -> 기본처리(전송)
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
        }
        return false;
    })
})