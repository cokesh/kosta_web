$(function(){
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
                $imgObj.attr("src","../img/" + item.prod_no + ".jpeg"); // 이미지 href 속성 변경하기
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
    //table 객체 찾기
    let $tbleObj = $('div.table');
    //div.td 객체찾기
    let $tdObj = $('div.td');
    // div.td 객체 클릭 start
    $tbleObj.on("click", "div.td", function(){
        let src = $(this).find('img').attr('src');
        console.log(src);
        let arr = src.split('/');
        console.log(arr);
        let prod_no = arr[arr.length-1].split('.')[0];
        console.log(prod_no);

        // location.href = "http://localhost:8888/back/viewproduct?prod_no=" + prod_no;
        // 백을 직접 요청하는게 아니라 프론트가 갖고있는 같은경로에 있는 html을 요청함
        location.href = "/front/html/viewproduct.html?prod_no=" + prod_no;

        //
    });
});