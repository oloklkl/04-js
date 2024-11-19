// 메서드 문자

const str = 'hello world';

// 1. lenght
console.log(str.length); // 11

console.log(str.includes('hello'));
console.log(str.includes('to'));
console.log(str.includes('Hello'));

const str2 = '12345';

console.log(str2.padStart(10, '0'));
console.log(str2.padEnd(10, '0'));
console.log(str2.padEnd(3, '0'));

const str3 = 'hello winter winter';

console.log(str3.replace('winter', 'summer'));
console.log(str3.replace(/winter/g, 'summer'));
console.log(str3);

const str4 = 'hello world';

console.log(str4.slice(0, 5));
console.log(str4.slice(6, -1));
console.log(str4.slice(-5));
console.log(str4);

const str5 = 'Spring, Summer, Fall, Winter';

console.log(str5.split(', '));
console.log(str5.toLowerCase());
console.log(str5.toUpperCase());

const str6 = ' hello world ';

console.log(str6.trim());
console.log(str6);

// 숫자 메서드

const num = 3.1415926535;

console.log(num.toFixed(2));

const num2 = 100000000;

console.log(num2.toLocaleString());
console.log(`${num2.toLocaleString()}원`);
console.log(num2.toLocaleString() + '원');

console.log(Number.isInteger(0));
console.log(Number.isInteger(3.14));

console.log(Number.isNaN(1));
console.log(Number.isNaN(NaN));

console.log(Math.abs(-10));
console.log(Math.abs(`-10`));

// 랜던 메서드
console.log(Math.random());

// 특정 범위의 랜덤 정수 반환 함수
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

console.log(getRandomInt(1, 10));
console.log(getRandomInt(1, 100));

console.log(Math.round(10.49));
console.log(Math.round(10.89));

// 날짜 메서드

const now = new Date();
console.log(now);
console.log(now.getFullYear());
console.log(now.getMonth() + 1);
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());
console.log(now.getMilliseconds());
console.log(now.getTime());

const now2 = new Date(2024, 6, 5, 12, 30, 30);
console.log(now2);

// 배열 메서드
const arr = [1, 2, 3];
console.log(arr.length);

console.log(arr[0]);
console.log(arr.at(0));

console.log(arr[arr.length - 1]);
console.log(arr.at(-1));

// console.log(
//     arr.filter((item) => {
//         return item > 1;
//     })
// );

console.log(arr.filter((item) => item > 1));

const users = [
    { name: '홍길동', age: 36 },
    { name: '고길동', age: 12 },
    { name: '둘리', age: 6 },
];

// 배열이름.filter((item) => {return 조건})
const children = users.filter((item) => item.age < 8);
console.log(children);

// 고길동 찾기
// 배열이름.find((item) => {return 조건})

const 고길동 = users.find((item) => {
    return item.name === '고길동';
});
console.log(고길동.name);

// 배열이름.forEach((item) => {실행문})
const list = ['list1', 'list2', 'list3'];
list.forEach((item) => {
    console.log(item);
});

const animals = ['Cat', 'Dog', 'Panda'];
console.log(animals.includes('cat'));
console.log(animals.includes('토끼'));

// 소문자로 변환 후 비교
// .toLowerCase()
console.log(animals.includes('Cat'));
console.log(animals.join(' 그리고 '));

const users2 = [
    { name: '홍길동', age: 36 },
    { name: '고길동', age: 12 },
    { name: '둘리', age: 6 },
];

users2.map(function (item) {
    console.log(item);
});

const newUsers = users2.map((item) => ({ ...item, email: null }));

console.log(newUsers);

console.log(arr.pop());

console.log(arr.push(4, 5, 6));
console.log(arr);

const users4 = [
    { name: '홍길동', age: 36 },
    { name: '고길동', age: 12 },
    { name: '둘리', age: 6 },
];
// 총 나이 합계 (reduce)
const totalAge = users4.reduce(function (total, currentValue) {
    return total + currentValue.age;
}, 0);

console.log(totalAge);

// 평균 나이 구하기
const avgAge = (totalAge / users4.langth).toFixed();
console.log(avgAge);

const arr2 = [1, 2, 3, 4, 5];
console.log(arr2.slice(0, 3));
