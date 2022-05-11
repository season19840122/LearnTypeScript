let str = 'season';
let str1: string;
str1 = 'season2'

let num: number = 1000
let boo: boolean = true
let n: null = null
let un: undefined = undefined

let test: any = 'name'

// 数组
let arr: string[] = ['a', 'b']
let arr2: string[][] = [['aa', 'bb']]

// 元组：指定类型的数组
let tuple: [number, string, boolean] = [1, 'a', true]
let tuple2 = ['a', 1 , true]
let tuple3 = [1, 'a' , true]
let tuple4: [string, string][] = [['a', 'b'], ['1', '2']]

// 枚举
enum Livestatus {
    success = 0,
    fail = -1,
    streaming = 1
}
const staus = Livestatus.success
console.log(staus);

// Union
let aaa: number | string;
aaa = 1000
aaa = 'str'

// 自定义类型 type
type A = number | string

let a1: A
a1 = 999
a1 = "str"

// interface
type Card = {
    name: string,
    desc: string,
}

// interface 可以同名扩充，但是 type 不行
// type Card = {
//     age: number
// }

interface Card2 {
    name: string,
    desc: string,
}

interface Card2 {
    age?: number
}

const obj: Card2 = {
    name: 'bruce',
    desc: '...'
}

// function
function hello (a: string, b: string) {
    return a + b;
}

function hello2 (a: string, b: string): number {
    console.log(a + b);
    return 999;
}

// 自动推导
function hello3 (a: string, b: string) {
    return 100;
}

function test2 (a: number) {
    console.log(a);
}

function hello4 (name: string, age?: number) {
    if( age === undefined) return -1;
    test2(age);
    return 100;
}

// 箭头函数也支持类型推导
const func = () => {}

const func2 = () => {
    return 1
}

// 断言 as unknown

type Datas = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

async function getData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const data = await res.json() as Datas;
    console.log(`res: ${JSON.stringify(res)}`);
    console.log(`data: ${data}`);
    console.log(`formatData: ${JSON.stringify(data)}`);
}

getData();

const data1: Datas = {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
}

type Beta = {
    name: string
}

const beta = data1 as unknown as Beta;

