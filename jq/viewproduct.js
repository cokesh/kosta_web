$(function(){
    alert(window.location.search);
    let queryString = location.search.substring(1); // ?를 뺀 문자열을 전송하기위한 작업
    $.ajax({//jsp에서 사용한 방식은 jsp페이지로 이동하는 방식,이동하지 않고 JSON으로 응답하게 하기. 응답받은것을 span에 보여주기
        url: "/back/viewproduct",
        method: 'get',
        // data: 'prod_no=' + 'C0001',
        data: queryString, // 쿼리스트링을 전달하는 방법임
        success: function(jsonObj){
            if(jsonObj.status == 1) {
                let prod_no = jsonObj.p.prodNo;
                let prod_name = jsonObj.p.prodName;
                let prod_price = jsonObj.p.prodPrice;
                let prod_mfd = jsonObj.p.prodMfd;
                let prod_info = jsonObj.p.prodInfo;
                //:
                $('section article div.viewproduct>img').attr('src','../img/'+ prod_no +'.jpeg');
                $('section article div.viewproduct ul>li>span.prod_name').html(prod_name);
                $('section article div.viewproduct ul>li>span.prod_no').html(prod_no);
                $('section article div.viewproduct ul>li>span.prod_price').html(prod_price);
                $('section article div.viewproduct ul>li>span.prod_mfd').html(prod_mfd);
                $('section article div.viewproduct ul>li>span.prod_info').html(prod_info);

            } else {
                alert(jsonObj.msg);
            }
        },
        error: function(jqXHR){
            alert('오류:' + jqXHR.status);

        }
        
    });

    $('article.drink_content>div.viewproduct>div.detail>ul>li>button').click(function() {
        let prod_no = $('div.detail>ul>li>span.prod_no').html();
        let quantity = $('div.detail>ul>li>input[type=number]').val();
        // 자바스크립트 객체의 형태로 보내면 됨
        // 객체의 속성명에 ""를 붙여도 되고 안붙여도 됨
        // json객체로 보낼시에만 ""붙이면됨

        $.ajax({
            url: '/back/addcart', 
            method: 'get',
            data: {prod_no: prod_no, quantity: quantity}, 
            success: function(){
                $('article.drink_content>div.viewproduct>div.result').show();
            },
            error: function(jqXHR, textStatus, errorThrown){
                alert('Error : '+jqXHR.status);
            }
        });
        return false;
    });

    $('div.result>button.productlist').click(function(){
        $('header>nav>a[href="productlist.html"]>img').trigger('click');
    });

    $('button.viewcart').click(function(){
        $('header>nav>a[href="viewcart.html"]>img').trigger('click');
    });
});
