$(function(){
    let clickIp = $('td.ip');
    $(clickIp).click(function() {
        let ip = '';
        let $select = $(this);
        let $selectIp = $select.html();
        let $selectDtIp = $select.next().html();
        ip = $selectIp;

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