"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let str = 'season';
let str1;
str1 = 'season2';
let num = 1000;
let boo = true;
let n = null;
let un = undefined;
let test = 'name';
// 数组
let arr = ['a', 'b'];
let arr2 = [['aa', 'bb']];
// 元组：指定类型的数组
let tuple = [1, 'a', true];
let tuple2 = ['a', 1, true];
let tuple3 = [1, 'a', true];
let tuple4 = [['a', 'b'], ['1', '2']];
// 枚举
var Livestatus;
(function (Livestatus) {
    Livestatus[Livestatus["success"] = 0] = "success";
    Livestatus[Livestatus["fail"] = -1] = "fail";
    Livestatus[Livestatus["streaming"] = 1] = "streaming";
})(Livestatus || (Livestatus = {}));
const staus = Livestatus.success;
console.log(staus);
// Union
let aaa;
aaa = 1000;
aaa = 'str';
let a1;
a1 = 999;
a1 = "str";
const obj = {
    name: 'bruce',
    desc: '...'
};
// function
function hello(a, b) {
    return a + b;
}
function hello2(a, b) {
    console.log(a + b);
    return 999;
}
// 自动推导
function hello3(a, b) {
    return 100;
}
function test2(a) {
    console.log(a);
}
function hello4(name, age) {
    if (age === undefined)
        return -1;
    test2(age);
    return 100;
}
// 箭头函数也支持类型推导
const func = () => { };
const func2 = () => {
    return 1;
};
function getData() {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = yield res.json();
        console.log(`res: ${JSON.stringify(res)}`);
        console.log(`data: ${data}`);
        console.log(`formatData: ${JSON.stringify(data)}`);
    });
}
getData();
const data1 = {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
};
const beta = data1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLElBQUksR0FBRyxHQUFHLFFBQVEsQ0FBQztBQUNuQixJQUFJLElBQVksQ0FBQztBQUNqQixJQUFJLEdBQUcsU0FBUyxDQUFBO0FBRWhCLElBQUksR0FBRyxHQUFXLElBQUksQ0FBQTtBQUN0QixJQUFJLEdBQUcsR0FBWSxJQUFJLENBQUE7QUFDdkIsSUFBSSxDQUFDLEdBQVMsSUFBSSxDQUFBO0FBQ2xCLElBQUksRUFBRSxHQUFjLFNBQVMsQ0FBQTtBQUU3QixJQUFJLElBQUksR0FBUSxNQUFNLENBQUE7QUFFdEIsS0FBSztBQUNMLElBQUksR0FBRyxHQUFhLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFBO0FBQzlCLElBQUksSUFBSSxHQUFlLENBQUMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQTtBQUVyQyxhQUFhO0FBQ2IsSUFBSSxLQUFLLEdBQThCLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQTtBQUNyRCxJQUFJLE1BQU0sR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUcsSUFBSSxDQUFDLENBQUE7QUFDNUIsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFHLElBQUksQ0FBQyxDQUFBO0FBQzVCLElBQUksTUFBTSxHQUF1QixDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUE7QUFFekQsS0FBSztBQUNMLElBQUssVUFJSjtBQUpELFdBQUssVUFBVTtJQUNYLGlEQUFXLENBQUE7SUFDWCw0Q0FBUyxDQUFBO0lBQ1QscURBQWEsQ0FBQTtBQUNqQixDQUFDLEVBSkksVUFBVSxLQUFWLFVBQVUsUUFJZDtBQUNELE1BQU0sS0FBSyxHQUFHLFVBQVUsQ0FBQyxPQUFPLENBQUE7QUFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUVuQixRQUFRO0FBQ1IsSUFBSSxHQUFvQixDQUFDO0FBQ3pCLEdBQUcsR0FBRyxJQUFJLENBQUE7QUFDVixHQUFHLEdBQUcsS0FBSyxDQUFBO0FBS1gsSUFBSSxFQUFLLENBQUE7QUFDVCxFQUFFLEdBQUcsR0FBRyxDQUFBO0FBQ1IsRUFBRSxHQUFHLEtBQUssQ0FBQTtBQXNCVixNQUFNLEdBQUcsR0FBVTtJQUNmLElBQUksRUFBRSxPQUFPO0lBQ2IsSUFBSSxFQUFFLEtBQUs7Q0FDZCxDQUFBO0FBRUQsV0FBVztBQUNYLFNBQVMsS0FBSyxDQUFFLENBQVMsRUFBRSxDQUFTO0lBQ2hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNqQixDQUFDO0FBRUQsU0FBUyxNQUFNLENBQUUsQ0FBUyxFQUFFLENBQVM7SUFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDbkIsT0FBTyxHQUFHLENBQUM7QUFDZixDQUFDO0FBRUQsT0FBTztBQUNQLFNBQVMsTUFBTSxDQUFFLENBQVMsRUFBRSxDQUFTO0lBQ2pDLE9BQU8sR0FBRyxDQUFDO0FBQ2YsQ0FBQztBQUVELFNBQVMsS0FBSyxDQUFFLENBQVM7SUFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNuQixDQUFDO0FBRUQsU0FBUyxNQUFNLENBQUUsSUFBWSxFQUFFLEdBQVk7SUFDdkMsSUFBSSxHQUFHLEtBQUssU0FBUztRQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDakMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ1gsT0FBTyxHQUFHLENBQUM7QUFDZixDQUFDO0FBRUQsY0FBYztBQUNkLE1BQU0sSUFBSSxHQUFHLEdBQUcsRUFBRSxHQUFFLENBQUMsQ0FBQTtBQUVyQixNQUFNLEtBQUssR0FBRyxHQUFHLEVBQUU7SUFDZixPQUFPLENBQUMsQ0FBQTtBQUNaLENBQUMsQ0FBQTtBQVdELFNBQWUsT0FBTzs7UUFDbEIsTUFBTSxHQUFHLEdBQUcsTUFBTSxLQUFLLENBQUMsOENBQThDLENBQUMsQ0FBQTtRQUN2RSxNQUFNLElBQUksR0FBRyxNQUFNLEdBQUcsQ0FBQyxJQUFJLEVBQVcsQ0FBQztRQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDM0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLElBQUksRUFBRSxDQUFDLENBQUM7UUFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7Q0FBQTtBQUVELE9BQU8sRUFBRSxDQUFDO0FBRVYsTUFBTSxLQUFLLEdBQVU7SUFDakIsUUFBUSxFQUFFLENBQUM7SUFDWCxJQUFJLEVBQUUsQ0FBQztJQUNQLE9BQU8sRUFBRSxvQkFBb0I7SUFDN0IsV0FBVyxFQUFFLEtBQUs7Q0FDckIsQ0FBQTtBQU1ELE1BQU0sSUFBSSxHQUFHLEtBQXdCLENBQUMifQ==