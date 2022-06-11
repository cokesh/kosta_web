$(function(){
    let clickIp = $('td.ip');
    let ip = '';
    $(clickIp).click(function() {
        let $selectIp = $(this);
        // alert($selectIp);
        ip = $selectIp;
        let url = 'http://localhost:8888/back/jsp/searchip.jsp';
        // let url = '/front/html/signup.html';
        let data = $selectIp.serialize();
        alert(data);
            $.ajax({
                url: url,
                method: 'post',
                data: data,
                success: function(data) {
                    // alert(ip);
                    $('input[name=addr]').attr('value', ip);
                    location.href = url;
                    // location.reload();
                    
                },
                error: function(jqXHR) {
                    alert('에러코드: ' + jqXHR.status);
                }
        
            })
    });
})