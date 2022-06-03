/* 
산술 연산자 
대입 연산자
비교 연산자
논리 연산자
삼항 연산자
단항 연산자

*/

var a, b, c;
a =3;
b = 4;

b=0;
c = a/b;
console.log(a);
console.log(++c);

b=undefined;
c=a/b;
console.log(++c);

// 산술연산자
console.log(1+'2'); // 값이 문자열로 나옴

// 형변환
console.log(typeof(Number('2')));
console.log(typeof(String(2)));
console.log(typeof(Number('2.345')), Number('2.345'));
console.log(typeof(parseInt('2')),   parseInt('2'));
console.log(typeof(parseFloat('2.345')),   parseFloat('2.345'));
console.log(typeof(parseInt('2.345')),   parseInt('2.345'));

// 비교연산자
console.log(2=='2', 2==='2');
console.log(0 == false, 0 === false);


