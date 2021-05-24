// 泛型（Generics）是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性。

// function print1(arg: number): void {
// 	console.log('arg', arg)
// }
// function print2(arg: string): void {
// 	console.log('arg', arg)
// }
function print<T>(arg: T): void {
	console.log('arg', arg)
}
print<string>('hello')
print<number>(100)
print<any>(1.2345)


function add<T>(x: T, y: T, z: T): void {
	console.log(x, y, z)
}
add<number>(1,2,3)
add<string>('a','b','c')
add<any>('a',20,'c')

// 支持使用多个泛型
function swap<T,U>(tup:[T,U]): [U,T] {
	return [tup[1], tup[0]]
}
swap<number, string>([100, 'hello'])   // ['hello', 100]
interface MyU { a: string; b: number }
swap<boolean, MyU>([true, {a:'hi',b:11}])  // [{a:'hi',b:11}, true]

// 泛型约束
interface LengthType {
	length: number
}
function printLength<T extends LengthType>(arg: T): number {
	// 为什么要进行泛型约束呢？因为入参的数据类型不确定，它可能没有length属性
	return arg.length
}
printLength<string>('hello')   // 5
printLength<Array<any>>([1,2,'a','b'])  // 4

// 泛型类
class Dog<T> {
	name: T
	constructor(name: T) {
		this.name = name
	}
	sayHi(): T {
		return this.name
	}
}
const dog = new Dog<string>('dahuang')  // 调用constructor()
dog.sayHi()

// 泛型接口（泛型类型）
interface Tfn1<T> {
	(x: T, y: T, z: T): T
}
const tf1: Tfn1<number> = function(x: number, y: number, z: number): number {
	return x * y * z
}
tf1(1,2,3)
const tf3: Tfn1<string> = function(x: string, y: string, z: string): string {
	return x + y + z
}
tf3('a','b','c')


// 泛型接口（泛型类型）
interface Tfn2 {
	<T>(x: T, y: T, z: T): void
}
const tf2: Tfn2 = <T>(x:T, y:T, z: T): void => {
	console.log(x, y, z)
}
// const tf2: Tfn2 = function <T>(x:T, y:T, z: T):void {
// 	console.log(x, y, z)
// }
tf2<string>('a','b','c')
tf2<number>(10, 20, 30)
