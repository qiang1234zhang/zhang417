type AddF = (a: number, b: number) => number;

const add: AddF = (a, b) => a + b;

add(2,3);//5

////////////////////////////////////////
//对象类型
interface AddFs {
    d: number;
    c(m:string):number;
    a:()=>void;
    b:()=> void;
}

const addF: AddFs = Object.assign(
    (m: string) => m.length,
    {   d: 5,
        a() { console.log('a'); },
        b() { console.log('b'); }
    }
);

addF.c('hello');//5
addF.a();//a
addF.b();//b

// 新增的类型定义---对象类型，包含2个方法
type Ma = { 
    ms(): void ,//方法签名
    m: () => void //箭头函数形式的 方法签名 用于定义一个匿名函数，该函数不返回任何值。
};

// 没有函数体的普通函数就是重载签名  重载签名不包含函数体,返回包含2属性的对象类型
function func(name: string, age: number): { name: string, age: number }; //重载签名 用于定义函数的重载列表 

// 函数定义 用于实现函数体  
function func(name: string, age: number): { name: string, age: number } {
    return { name, age };
}

// 示例调用
const person = func('Alice', 30);
console.log(person); // { name: 'Alice', age: 30 }

//类中的构造函数不允许指定返回类型，所以和普通函数稍有区别



// 新增的接口定义
interface ccc {
    a?: string;
    c: string;
}

interface ddd {
    b?: number;
}

// 创建一个可以是 ccc 或 ddd 类型的对象,只能是其中一个类型，不可2种类型同时存在。
const obj: ccc | ddd = {
    a: "3231423sdfdsf",
    c: "23423423"
};
//在这个代码中，obj 对象同时包含了 ccc 和 ddd 接口的属性。
//由于 obj 的类型是 ccc | ddd，它可以包含 ccc 或 ddd 中的属性。
//obj 可以是 ccc 或 ddd 类型之一，但不能同时包含两者的属性。


type myType = string | number | boolean;
const a: myType = "hello"



//语义侧重点
//方法签名：更侧重于描述一个对象的行为，强调 ping 是对象可以执行的一个操作。
//属性签名：更侧重于描述对象的状态，把 ping 当作对象的一个属性，这个属性恰好是一个函数。

//方法签名
interface Pingable {
    ping(): () => void;
}

class MyPingable implements Pingable {
    ping() {
        return () => {
            console.log('Ping!');
        };
    }
}

const myPingable1: Pingable = new MyPingable();
const innerFunction = myPingable1.ping();
innerFunction(); // 输出: Ping!

//属性签名
interface Pingable2 {
    ping2: () => void;
}

class MyPingable2 implements Pingable2 {
    ping2 = () => {
        console.log('Ping!');
    };
}

const myPingable21: Pingable2 = new MyPingable2();
myPingable21.ping2(); // 输出: Ping!


//这两种j接口定义的区别
interface Pingable {//无返回值
    ping():  void;  
}   
interface Pingable {//有返回值，返回一个无参、无返回值的函数
    ping(): () => void;
}