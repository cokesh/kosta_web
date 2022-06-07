var a = "window객체의 변수";
console.log(window.a);
console.log(a);

for ( var i =0; i <3; i++) {
    console.log(i);
}
console.log(i);
console.log(i);// 자바스크립트는 {}으로 변수의 영역이 나뉘어지지 않는다.

var b = function() {
    var lv1 = 'outer local variable';
    console.log(a);
    var lv2 = function() {
        var inner = 'inner local variable';
        console.log(lv1); // outer function variable 가능함
    }
    console.log(inner); // error
}
b ();


