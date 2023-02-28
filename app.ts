// type MyType = number | string[] | boolean;
// const test = (name: string): MyType => {
//     return [name]
// }

// console.log(test('Max'));

// const arr: number[] = [1, 2, 3, 4];
// const arr: [number, string] = [2, '2'];

// interface IUser<DATA, ITEM> {
//     name: string;
//     surname: string;
//     age: number;
//     status: boolean;
//     data: DATA;
//     data2: ITEM;
// }


// const user: IUser = {name: 'Max', surname: 'popov', age: 17, status: true}

// const user1: Partial<IUser> = {name: 'Igor', age: 20}

// const user: IUser<number[]> = {name: 'Dima', surname: 'popov', age: 22, status: false, data: [1, 2, 3, 4]};

// const getName = (user: IUser): string => {
//     return user.name
// }


// class User {
//     constructor(private name: string, private age: number) {
//
//     }
// }

// interface IShape {
//     area: () => number;
//     perimeter: () => number;
// }
//
// interface IGreeting {
//     greeting: () => void;
// }
//
// class Rectangle implements IGreeting, IShape {
//     constructor(private a: number, private b: number) {
//     }
//
//     greeting(): void {
//         console.log('hello');
//     }
//
//     area(): number {
//         return this.a * this.b;
//     }
//
//     perimeter(): number {
//         return this.a * 2 + this.b * 2;
//     }
// }

// const rectangle = new Rectangle(2, 4);
// rectangle.greeting()
// console.log(rectangle.area());
// console.log(rectangle.perimeter());

// class Triangle implements IShape {
//     constructor(private a: number, private b: number, private c: number) {
//     }
//
//     area(): number {
//         return this.a * this.b * this.c;
//     }
//
//     perimeter(): number {
//         return this.a + this.b + this.c;
//     }
// }

// const triangle = new Triangle(2,2, 4);
// console.log(triangle.area());
// console.log(triangle.perimeter());

// const shapes: IShape[] = [new Rectangle(2, 4), new Triangle(2, 2, 4)];
// for (let shape of shapes) {
//     console.log(shape.area());
//     console.log(shape.perimeter());
// }

// const x = () => {
//     return 20
// }
//
// type MyType = ReturnType<typeof x>;
//
// const a:MyType='hhhh'


import {userService} from "./services/userService";

userService.getAll().then(({data})=>{
    console.log(data[0].address.geo);
})