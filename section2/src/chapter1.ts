//number
let num1: number = 123;
let num2: number = -123;
let num3: number = 0.123;
let num4: number = -0.123;
let num5: number = Infinity;
let num6: number = -Infinity;
let num7: number = NaN;

// 숫자만 가능
// num1 = "hello";
// 문자열 전용 메서드 사용 X
// num1.toUpperCase();
// 이건 가능
// num1.toFixed();

// string
let str1: string = "hello";
let str2: string = 'hello';
let str3: string = `hello`;
let str4: string = `hello ${str1}`;

// string 사용 불가능 한 것
// str1 = 123;
// str1.toFixed();
// 가능한것
// str1.toUpperCase();

// boolean
let bool1: boolean = true;
let bool2: boolean = false;

// null
let null1: null = null;

// undefined
let unde1: undefined = undefined;

// number값에 null 넣기
// strictNullChecks option false
// let nulltest: number = null;

// 리터럴 타입 --> 값으로 만든 타입이라는 뜻
let numA: 10 = 10;
numA = 10;
// numA = 20; --> 오류발생

// let bool1:true = false;
// let boolB : false = true;
let boolA: true = true;