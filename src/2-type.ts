{
	// 布尔类型
	let isBol: boolean = true
	isBol = false

	// 数字类型
	let num: number = 100
	num = 0xff00ff

	// 字符串类型
	let msg: string = 'hello world'
	msg = 'hi gp5'

	// undefinded
	let isUnd = undefined

	// null
	let isNull = null

	// 数组
	let arr1: number[] = [1,2,3,4,5]
	arr1[5] = 6
	let arr2: string[] = ['a', 'b', 'c']
	let arr3: any[] = [true, 'a', 78, undefined]

	let arr4: Array<number> = [1,2,3]
	let arr5: Array<string> = ['a', 'b', 'c']
	let arr6: Array<any> = [true, 'a', 78, undefined]
	let arr7: Array<number[]>  // 声明
	arr7 = [[1,2,3],[4,5,6],[7,8,9]]  // 赋值

	// 元组 tuple
	// 什么是元组？本质上就是长度固定且每个元素的数据类型也固定的数组
	let tup1: [string, number, any] = ['hello', 90, true]
	// 元组不能越界，越界会报错
	let tup2: [any, any, boolean, number] = [null,null,true,100]

	// any类型，表示任何类型
	let a1: any = 0
	a1 = 'hello any'
	a1 = true
	a1 = [1,2,3]
	let a2: any = [true, false, 90]

	// void类型，表示没有类型
	function foo(): void {
		console.log('hehe')
	}

	// 枚举类型
	enum Cate {
		office = '办公用品',
		car = '汽车生活',
		sport = '户外运动'
	}
	console.log(Cate.office)

	enum Color {
		red,
		green,
		blue
	}
	console.log(Color[0])
}
