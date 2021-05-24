// 复习ES6面向对象的知识

// ES6（ECMAScript2015）
// class A {
// 	constructor(name) {
// 		this.name = name
// 	}
// 	say() {
// 		console.log(`hi ${this.name}`)
// 	}
// }

// ES7提案（TypeScript收录了很多这样的提案）
class A {
	public name   // 实例属性（公共属性）
	public static age    // 类属性（静态属性）
	public constructor(name, age) {
		this.name = name
		A.age = age
	}
	// 实例方法
	public say() {
		console.log(`hi ${this.name}`)
	}
	// 静态方法
	public static run() {
		console.log('run')
	}
}
const a = new A('lisi', 20)
console.log(a.name)
a.name = 'wangwu'
a.say()
console.log(A.age)
A.run()
