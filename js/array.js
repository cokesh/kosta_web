var arr = [1, 10, 23];
// console.log(arr.length);
// console.log(arr[0]);
arr.push(7);
for ( var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

var last = arr.pop();
console.log('제거된 마지막 요소값', last);
arr.forEach(function(item, index) {
    console.log('인덱스' + index, item);
});

var leng = arr.unshift(9);
console.log('추가된 후의 배열의 길이', leng);
arr.forEach(function(item, index) {
    console.log('인덱스' + index, item);
});

arr.splice(2, 0, 8);
arr.forEach(function(item, index) {
    console.log('인덱스' + index, item);
});

var index = arr.indexOf(88);
console.log('값1의 인덱스위치', index);

var arr2 = ['JAVA', 'HTML', 'CSS', 'JS'];
var joinresult = arr2.join(); //배열요소들을 문자열로 만듦
console.log(joinresult);

// 문지열을 배열로 만듦
var str1 = 'HELLO';
var arr3 = str1.split('');
console.log(arr3);

var arr4 = str1.split(',');
console.log(arr4);

