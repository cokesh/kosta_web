$(function(){
    // let jsonObj = [{p:{prodNo:'C0001', prodName:'아메리카노'},quantity:1}, 
    // {p:{prodNo:'C0002', prodName:'라떼'},quantity:2},
    // {p:{prodNo:'C0002', prodName:'라떼'}, quantity:3}];
    
    
    // -- 장바구니 보기 START--
    $.ajax({
        url: '/back/viewcart',
        success: function(jsonObj){
            let $itemObj = $('div.viewcart>div.item');
            $(jsonObj).each(function(index, element){
                $copyObj = $itemObj.clone();
                
                let p = element.p;
                let product = '<ul>';
                product +='<li class="prod_no">상품번호:<span>'+p.prodNo + '</span></li>';
                product +='<li class="prod_name">상품명:<span>'+p.prodName + '</span></li>';
                product +='<li class="prod_price">가격:<span>'+p.prodPrice + '</span></li>';
                product +='</ul>';
                
                $copyObj.find('div.product').html(product);
                let quantity = element.quantity;
                $copyObj.find('div.quantity').html(quantity);
                
                $('div.viewcart').append($copyObj);
            });
        },
        error: function(jqXHR) {
            alert('error : ' + jqXHR.status);
        }
    });
    // -- 장바구니 보기 end--
    
    // 주문하기 버튼 클릭 start--------------
    $('div.viewcart>div.add-order>button').click(function() {
        $.ajax({
            url: '/back/addorder',
            success: function(jsonObj) {
                if (jsonObj.status == 1){
                    alert(json.msg + '주문성공'); // 주문성공경우
                    location.href ="";
                    $('header>nav>a[href="productlist.html"]>img').trigger('click'); // 상품목록을 보러감
                } else if(jsonObj.status == 0){ // 0: 로그인이 안된경우
                    alert(json.msg);
                    $('header>nav>a[href="login.html"]>img').trigger('click'); // 로그인화면으로 이동시킴
                } else if(jsonObj.status == -1) { // -1: 주문실패
                    alert(json.msg);
                }
            },
            error: function(jqXHR, textStatus, errorThrown) {
                alert('error : '+ jqXHR.status);
            }
        });
    });
    // 주문하기 end--------------
    
});