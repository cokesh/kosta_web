var a;
a = function() {
    alert("함수1");
    
};

a();

var b;
b = a;
b();

var c;
c = function(p) {
    console.log("매개변수 p="+ p);
    if(typeof(p) == 'function') {
        p();
    }
};

c('fxxking tomboy~');
c('따다다라라라 예암');
c(a); // p 매개변수로 a 로 들어감
c(function(){
    console.log("콜백함수 입니다");
})

d = function(p1, p2, p3) {
    if(typeof(p1) == 'function') {
        p1(p2, p3);
    }
};

d(function(a, b){
    console.log(a, b, a+b);
}, 1, 2);

d(function(a, b){
    for ( var i = a; i <= b; i++){
        console.log(i);
    }
}, 1, 2);

var e = function(p1, p2) {
    console.log(p1, p2);
};

e(1, 2);
e(1); // 모자랄 경우엔 undefined로 표시가 됨
e(1, 2, 3) // 2개의 매개변수만 받는 걸로 되어있으니 초과된 매개변수는 무시됨.


var f = function() {
    return true;
}

var f1 = f();

if(f1) {
    console.log('f함수의 반환값은 true입니다.');
}

var f2 = f();
console.log(5+f2);

var g = function() {
    console.log('반환값없는 함수입니다.');
}

var g1 = g();
console.log('g함수의 반환값:', g1); // 반환값없는 함수를 호출하여 값이 무엇인지 알아보려고 하는데 반환값이 없기 때문에 undefined가 나온다.

var h = function() {
    var lv1 = '지역변수';
    var lv2 = function() {
        var inner = '지역변수2';
        console.log('lv2함수내부에서 lv1', lv1);
        console.log('lv2함수내부에서 inner', inner);

    }
    lv2();
    console.log('h함수내부에서 lv1', lv1);
    console.log('h함수내부에서 inner', inner);
};
h();
// console.log('h함수', h)













