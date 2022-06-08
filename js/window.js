function displayTime(element) {
    var today = new Date();
    var month = today.getMonth() + 1;
    var date = today.getDate();

    var now = '<h1>';
    now += today.getFullYear();
    now += '-';
    now += month<10? '0'+month: month;
    now += '-';
    now += date<10? '0'+date: date;
    now += ' ';
    now += today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    now += '</h1>';

    element.innerHTML = now;
}
// 큐알 이미지 띄우기
var aObj = this.document.querySelector('div.qr');
function openQR() {
    var qr = '<img src="../img/스크린샷 2022-06-08 오후 2.14.55.png" alt="" style="width:500px;">';
    aObj.innerHTML = qr;
}

window.addEventListener('load', function() {

    // qr 이미지 띄우기 start------------------------
    var btqr = this.document.querySelector('button.openQR');

    btqr.addEventListener('click', function() {
        window.setInterval(openQR, 3000, btqr);
    })
    // qr 이미지 띄우기 end------------------------

    var windowID;
    var btClose = this.document.querySelector('button.close');

    //새창띄우기 start--------------
    var btOpen = this.document.querySelector('button.open');
    btOpen.addEventListener('click', function() {
        var url = 'js_popup.html';'http://www.google.com';
        var target = 'first';
        var features = 'width=300px, height=300px';
        windowID = window.open(url, target, features); // 창을 띄울수 있음
        this.style.display = 'none';
        btClose.style.display = 'inline';
    });
    // 새창띄우기 end-----------


    //새창닫기 버튼 클릭 start--------------
    btClose.addEventListener('click', function() {
        windowID.close();
        this.style.display = 'none';
        btOpen.style.display = 'inline';
    });
    //새창닫기 버튼 클릭 end--------------

    //5초 후 버튼 클릭 start--------------
    var btTimeout = document.querySelector('button.timeout');
    btTimeout.addEventListener('click', function() {
        window.setTimeout(function() {
            alert('Timeout 5sec');
        }, 5*1000);
    });
    //5초 후 버튼 클릭 end--------------
    
    //div 객체 찾아서 현재시간값 출력 start------------------------
    var divObj = document.querySelector('div');
    var today = new Date();
    var month = today.getMonth() + 1;
    var date = today.getDate();

    var now = '<h1>';
    now += today.getFullYear();
    now += '-';
    now += month<10? '0'+month: month;
    now += '-';
    now += date<10? '0'+date: date;
    now += ' ';

    now += today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    now += '</h1>';
    divObj.innerHTML = now;

    displayTime(divObj);
    //div 객체 찾아서 현재시간값 출력 end------------------------

    //1초 간격 버튼 클릭 start --------------
    var intervalID;
    var interval = document.querySelector('button.interval');
    interval.addEventListener('click', function() {
        // window.setInterval(function() {
        //     displayTime(divObj);
        // }, 1000);
        intervalID = window.setInterval(displayTime, 1000, divObj);
    });
    //1초 간격 버튼 클릭 end --------------

    // 간격 해제 start --------------------------------
    var btClear = this.document.querySelector('button.clear');
    btClear.addEventListener('click', function() {
        window.clearInterval(intervalID);
    });
    // 간격 해제 end --------------------------------


});