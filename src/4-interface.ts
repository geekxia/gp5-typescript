// 定义一个接口（对象形状）
interface Point {
	x: number
	y: number
}

function calArea(p1: Point, p2: Point): number {
	return (p1.x - p2.x) * (p1.y - p2.y)
}
calArea({x:0,y:0}, {x:10, y:10})

// 接口，Person的形状
interface Person {
	name: string
	readonly age: number   // 只读属性，不能改
	addr?: string   // 可选属性（非必填属性）
	[propName: string]: any   // 支持扩展属性
}
let p1: Person = { name: 'zhangsan', age: 20, addr: '深圳' }
// let p2: Person = { name: 'lisi', age: 30, mobile: '110' }  // 报错
// let p3: Person = { name: 'wangwu' }    // 报错
let p4: Person = { name: 'lisi', age: 30, mobile: '120', gender: true }
// p4.age = 40  // 因为age是readonly只读，不能被修改，会报错


// 定义一个接口（函数类型）
interface FnArrType {
	(arg1: string, arg2?: number) : any[]
}
let myFn: FnArrType = function(x: string, y: number=0): any[] {
	return [1,2,true,'hello']
}

// 这个接口，用于函数参数类型检测，还用于函数返回值检测
interface LatLng {
	lat: string,
	lng: string,
	[propName: string]: any
}
function fn(p: LatLng): LatLng {
	return {...p, line: 68 }
}
