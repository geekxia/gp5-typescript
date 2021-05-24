{
	// 用TS类型注释，可以精细地控制函数的输入与输出

	function addxy(x: number, y: number): number {
		// do something
		return x + y
	}
	// add(1,'2')
	// add(1)
	// add(1,2,3)
	addxy(2,3)

	// ? 表示这个参数是可选的，可以不传，也可以传
	// 非必填参数，必须放在必填参数的后面
	// A required parameter cannot follow an optional parameter.
	function sub(x: number, y?: number, z?: number): number {
		return x - (y||0)
	}
	sub(1)
	sub(1,2,3)

	// ts也支持ES6的rest参数的写法
	// rest参数，必须是最后一个参数
	function push(arr:any[], ...rest:any[]): any[] {
		return [...arr, ...rest]
	}
	const res = push([], 1,true,3,'hello','world', [1,2,3])
	console.log('res', res)


	function foox(x: number, y: string, ...args:number[]): string {
		console.log('rest', args)
		return `${x}-${y}`
	}
	foox(1,'hello', 2, 4, 5, 6, 7)
	foox(1,'hi')

	// 参数默认值，本来就是非必填的（不要加 ?）
	// 虽然 y是非必填的，但是不一定“必须放在必填参数的后面”
	// 建议：把带有默认值的非必填参数放在最后
	function bar(y: string = 'hi', x: string): void {
		console.log(`${y} ${x}`)
	}
	bar('hello', 'zhang san')  // 'hello zhang san'
	bar(undefined, 'li si')    // 'hi li si'
	bar(undefined, 'wang wu')  // 'hi wang wu'

	// 函数重载
	// 什么是重载？方法名相同，参数类型、参数个数、函数返回值三者有一个不同，就是重载
	function test(n: string): void
	function test(n: number): void
	function test(n: boolean): boolean
	function test(n: number, m: number): number
	// 重载中的最后一方法，必须考虑实现上面的所有重载方法
	function test(x: any, y?: any): any {
		if(typeof x === 'string') {
			console.log('implements第一个重载的方法')
		}else if(typeof x === 'number') {
			console.log('implements第二个重载的方法')
		}else if(typeof x === 'boolean') {
			return true
		}else if(typeof x === 'number') {
			return 100
		}
	}

	// 函数表达式
	const fn1 = function(x: number, y: number): number { return 100 }

	let fn2: (x: number, y: number)=>number
	fn2 = function(x: number, y: number): number { return 100}

	interface FnType {
		(x: number, y: number) : string
	}
	const fn3: FnType = function(x: number, y: number): string { return '100' }

}
