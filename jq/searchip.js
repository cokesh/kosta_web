$(function(){
    let clickIp = $('td.ip');
    $(clickIp).click(function() {
        let ip = '';
        let $select = $(this);
        let $selectIp = $select.html();
        let $selectDtIp = $select.next().html();
        ip = $selectIp;

        // 주소입력창을 팝업으로 띄운 후에 click한 ip 값을 부모의 페이지에 전달함
        // 클릭하면 팝업창을 닫아줌
        $("#addr", parent.opener.document).attr('value', ip);
        $("input[name=detailAddr]", parent.opener.document).attr('value', $selectDtIp);
        window.self.close();
            // $.ajax({
            //     url: url,
            //     method: 'get',
            //     data: data,
            //     success: function() {
            //         // let jsonObj = JSON.parse(responseText);
            //         // alert(responseText);
            //         // location.href = url;

            //         $('input[name=addr]').attr('value', ip);
            //         // location.reload();
            //     },
            //     error: function(jqXHR) {
            //         alert('에러코드: ' + jqXHR.status);
            //     }
            // })
    });
})