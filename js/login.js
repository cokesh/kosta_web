window.addEventListener('load', function() {
    // 아이디 저장 체크박스 객체 찾기
    let cb = document.querySelector('input[type=checkbox]');
    
    // 로그인 버튼 객체 찾기
    let loginBtn = document.querySelector('button[type=submit]');
    
    // 아이디 입력객체 찾기
    let inputId = this.document.querySelector('input[name=id]');

    // localStorage에 idValue이름의 item이 있다면
    // 아이디 입력객체의 value로 설정하기

    let idValue = this.localStorage.getItem('idValue');
    if(idValue != null && idValue != "") {
        inputId.value = idValue;
    }

    //로그인 버튼 클릭 start--------------
    // ID저장 체크박스가 체크되었다면 
    // 사용자가 입력해 준 아이디 값을 localstorage에 저장(이름 idValue)
    // 아이디저장 체크박스가 체크되었다면
    // localStorage의 idValue이름의 item 을 삭제
    loginBtn.addEventListener('click', function() {
        console.log(cb);
        if (cb.checked) { 
            localStorage.setItem("idValue", inputId.value);

        } else {
            localStorage.removeItem("idValue");
        }
    });
    //로그인 버튼 클릭 end--------------


});