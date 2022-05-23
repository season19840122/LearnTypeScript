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

// class
// private 私有，符号 #
// public 公开
// protected 受保护

class Live {
    roomName: string
    private id: string
    protected name: string

    constructor(roomName: string, id: string, name: string) {
        this.roomName = roomName
        this.id = id
        this.name = name
    }
}

class CarLive extends Live {
    sex: string

    constructor(roomName: string, id: string, name: string, sex: string) {
        super(roomName, id, name)
        this.sex = sex
    }
    start() {
        super.name
    }
}

let live = new CarLive('No.1', '000001', 'Season', 'male');

console.log(`live: ${live}`);

// 使用类的技巧
interface CarProps {
    name: string
    age: number
    start: () => void
}

class Car implements CarProps {
    name: string
    age: number

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
    start() {}
}

// 泛型
function print<T>(data: T) {
    console.log(`data: ${data}`);
}

print<number>(999)
print<string>('Season')

// 类也可以用泛型
class Print<T> {
    data: T
    constructor(d: T) {
        this.data = d
    }
}

const p = new Print<number>(666)
const p1 = new Print<string>('Spring')
console.log(`data: ${p.data}`);
console.log(`data: ${p1.data}`);

// Utility
// Record
interface CatInfo {
    age: number;
    breed: string;
}

type CatName = "miffy" | "boris" | "mordred";

const cats: Record<CatName, CatInfo> = {
    miffy: { age: 10, breed: "Persian" },
    boris: { age: 5, breed: "Maine Coon" },
    mordred: { age: 16, breed: "British Shorthair" },
};

cats.boris;

// Pick
interface Todo {
    title: string;
    description: string;
    completed: boolean;
}

type TodoPreview = Pick<Todo, "title" | "completed">;

const todo1: TodoPreview = {
    title: "Clean room",
    completed: false,
};


// Omit
interface Todo {
    title: string;
    description: string;
    completed: boolean;
    createdAt: number;
}

type TodoPreview2 = Omit<Todo, "description">;

const todo2: TodoPreview2 = {
    title: "Clean room",
    completed: false,
    createdAt: 1615544252770,
};
