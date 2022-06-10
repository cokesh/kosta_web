
$(function() {
    // 메뉴 객체들 찾기
    // jquery 객체라고 알려주는 $표시임
    let $menuObj = $('header>nav>a');
    
    //section 첫번째 article객체 찾기
    let $articleObj = $('section>article:first');

    // 메뉴클릭 start--------------
    // 메뉴가 클릭되면 article영역의 innerHTML 로 로드
    $menuObj.click(function() {
        let url = $(this).attr('href');// a 태그의 href 속성을 활용함.
        let title = $(this).html();
        // url.preventDefault(); -- 이렇게하면안됨?

        $articleObj.load(url, function(responseText, statusText, xhr) {
            if(statusText != 'success') {
                // alert(xhr.status + " : " + xhr.statusText);
                if(xhr.status == 404) {
                    let msg = title + '자원을 찾을 수 없습니다.';
                    alert(msg);
                }
            }
        });
        return false;
    });
    // 메뉴클릭 end--------------

});