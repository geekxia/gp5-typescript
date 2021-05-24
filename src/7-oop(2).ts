// 在TS中，接口可以继承一个类
class Props {
	cate: string
	price: number
}
// 定义一个接口，并继承自一个类
interface PropsIter extends Props {
	color: string
	play(): void
}
interface Shape {
	leg: number
	arm: number
}

// 抽象类，不能 new，不能实例化
// public所修饰的属性或方法，在其它类中可以被正常访问
// private所修饰的属性或方法，在其它类中是不能被访问的
// protected所修饰的属性或方法，只能在子类中被访问的
// 成员：成员属性、成员方法
abstract class Animal {
	public a: string
	private b: string
	protected c: string
	constructor(a,b,c) {
		this.a = a
		this.b = b
		this.c = c
	}
	public abstract run() {
		console.log('animal run')
	}
	private stop() {
		console.log('animal stop')
	}
	protected skip() {
		console.log('animal skip')
	}
}

// 定义一个子类，继承一个抽象类，并实现了多个接口
// 一个类只能继承一个父类；一个类，可以有多个子类。
// 一个类可以实现多个接口
// class Cat extends Animal implements PropsIter, Shape {
// 	cate: string
// 	price: number
// 	public readonly color: string
// 	leg: number
// 	arm: number
// 	constructor(a,b,c, cate, price, color, leg, arm, age) {
// 		super(a,b,c)  // 调用父类的构造器
// 		this.cate = cate
// 		this.price = price
// 		this.color = color
// 		this.leg = leg
// 		this.arm = arm
// 	}
// 	eat() {
// 		console.log('cat eat')
// 	}
// 	skip() {
// 		super.skip()
// 	}
// 	getAbc() {
// 		console.log(this.a, this.c)
// 	}
// 	play() {
// 		console.log('cat test')
// 	}
// 	// getter/setter存取器，作用是把成员属性私有化
// }
//
// const c: Cat = new Cat('aaa', 'bbb', 'ccc', 'tomcat', 3000, 'red', 10, 8, 0.5)
// console.log('这是一只神奇的猫', c)
// console.log(c instanceof Cat)  // true
// console.log(c instanceof Animal)  // true
// // c.color = 'blue'  // 只读属性不能改
