{
	// 类型推论（类型推断）

	// 在ts中给一个变量赋值时，如果没有指定类型，那么TS环境就会以它的初始值的类型作为它的类型

	let a = 'hello'  // 从此以后就是 string
	a = 'world'
	// a = 123

	let name        // 从此以后就是 any
	name = 123
	name = 'zhangsan'
	name = true
	name = 'hellozs'
	name = [1,2,3]
	// 使用 as 进行类型推断，以保证代码更加强壮
	let length = (name as string).length
	console.log('长度是：', length)

	// 类型联合
	let b: string | number | boolean
	b = 123
	b = '456'
	b = true

	// never 表示永远没有终止的一种类型
	function die(): never {
		while (true) {
			console.log('1')
		}
	}
	die()

	function handleError(msg:string): never {
		throw new Error(msg)
	}

	// undefined  null 是所有其它类型的子类型
	let c: string = 'hello'
	c = null
	c = undefined
}
