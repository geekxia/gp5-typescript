interface S {
	length: number
	width: number
	heigth: number
	run(): void
}

interface S {
	heigth: number
	run(dis:number): number
}

// 声明合并
// TS会自动把函数、接口、类进行合并
// 在声明合并时，相同属性必须完全相同才能合并，如果是重载函数可以正常合并
// 除了接口可以自动合并外，类也可以合并，合并的原则和接口合并一样

// const desk: S = {
// 	length: 50,
// 	width: 100,
// 	heigth: 200
// }
