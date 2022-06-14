// html 문서가 화면에 보여질 준비가 되자마자
$(function() {
    $.ajax({
        url: 'http://localhost:8888/back/productlist',
        success: function(jsonObj) {
            let $tdObj = $('div.td');
            $(jsonObj).each(function(index, item) {
                console.log(item.prod_no + ":" + item.prod_name + ":" + item.prod_price);

                let $table = $('div.table'); // 복제본 append 할 상대
                let $copyObj = $tdObj.clone(); //복제본 생성
                let $imgObj = $copyObj.find("img"); // img 태그 찾기
                let $liObj = $copyObj.find("li.prod_name"); // 클래스명으로 상품명찾기
                $imgObj.attr("src","../img/" + item.prod_name + ".jpeg"); // 이미지 href 속성 변경하기
                $imgObj.attr("alt", item.prod_name); // 이미지의 alt 속성을 변경함
                $liObj.html(item.prod_name); // li의 텍스트 값을 prod_name의 값으로 변경함

                $table.append($copyObj); // table이 감싸고 있는 태그이기 때문에 table에 clone한 copyObj를 append 시켜줌
            });   
            $tdObj.hide(); // 복제본이 아닌 td태그를 숨김
        }, 
        error: function(jqXHR) {
            alert("error: " + jqXHR.status);
        }
    });
});