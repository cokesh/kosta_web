$(function() {
    let $result =  $('div.result');
    let $form = $('form');
    $form.submit(function() {
        let url = '/back/jsp/score.jsp';
        let $input = $('body');
        let data = $input.val();
        // let dat = data.serialize();
        $.ajax({
            url : url, 
            method : 'post',
            data : data,
            success : function(jsonObj){
                alert(jsonObj.msg);
            },
            error : function(jqXHR){
                alert('에러코드: ' + jqXHR.status);
            }

        })
        
    })

})