
$(function() {
    //로그인여부확인할 서블릿 요청
    // 응답형태 {status :1} -- 이미로그인된 경우
    //       header.nav>a>img 의 src 를 로그아웃이미지
    /*
    <a href="/back/logout"><img src="../img/icon_user_m.png" alt=""></a>
    <a href="signup.html"><img src="../img/icon_spot_m.png" alt=""></a>
    <a href="productlist.html"><img src="../img/btn_berger_m.png" alt=""></a>
    */

    // 그외                 -- 로그인 안된 상태
    // header > nav > a > img의 src 를 enter.png 
    
    /* 
    <a href="login.html"><img src="../img/icon_user_m.png" alt=""></a>
    <a href="signup.html"><img src="../img/icon_spot_m.png" alt=""></a>
    <a href="productlist.html"><img src="../img/btn_berger_m.png" alt=""></a>
    <a href="viewcart.html"><img src="../img/basket.png" alt=""></a>
    */

    let url = '/back/loginstatus';
    let method = 'get';
    $.ajax({
        url: url,
        method: method, 
        success: function(jsonObj) {
            let $navObj = $('header>nav');
            let $navObjHtml = '';
            if(jsonObj.status == 1){ // 로그인성공한 경우
                $navObjHtml += '<a href ="/back/logout"><img src="../img/logout.png"></a>';
            } else { // 로그인 실패한 경우
                $navObjHtml += '<a href="login.html"><img src="../img/enter.png"></a>';
                $navObjHtml += '<a href="signup.html"><img src="../img/user.png"></a>';
            }
            $navObjHtml += '<a href="productlist.html"><img src="../img/beverage.jpeg"></a>';
            $navObjHtml += '<a href="viewcart.html"><img src="../img/cart.png"></a>';
            $navObj.html($navObjHtml);
        },
        error: function(jqXHR){
            alert('error : ' + jqXHR.status);
        }
    })


    // 메뉴 객체들 찾기
    // jquery 객체라고 알려주는 $표시임
    let $menuObj = $('header>nav>a');
    
    //section 첫번째 article객체 찾기
    let $articleObj = $('section>article:first');

    // 메뉴클릭 start--------------
    // 메뉴가 클릭되면 article영역의 innerHTML 로 로드
    $('header>nav').on('click', 'a', function() {
        let url = $(this).attr('href');// a 태그의 href 속성을 활용함.
        let title = $(this).html();

        $articleObj.load(url, function(responseText, statusText, xhr) {
            if(statusText != 'success') {
                // alert(xhr.status + " : " + xhr.statusText);
                if(xhr.status == 404) {
                    let msg = title + '자원을 찾을 수 없습니다.';
                    alert(msg);
                }
            }
            if (url == '/back/logout') {
                location.href ='';
            }
        });
        return false;
    });
    // 메뉴클릭 end--------------

});