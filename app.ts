// 1) створити інтерфейс на основі цього объекта:
//     Зверніть увагу там де масиви... в них може бути багато однотипних обїектів

// version 1

// interface IRocket{
//     mission_name: string,
//     launch_date_local: number,
//     launch_site: {
//     site_name_long: number
// },
//     links: {
//     article_link: boolean,
//         video_link: string
// },
//     rocket: {
//     rocket_name: string,
//         first_stage: {
//         cores: [
//             {
//                 flight: number,
//                 core: {
//                     reuse_count: number,
//                     status: string | boolean
//                 }
//             }
//         ]
//     },
//     second_stage: {
//         payloads: [
//             {
//                 payload_type: string,
//                 payload_mass_kg: number,
//                 payload_mass_lbs: number
//             }
//         ]
//     }
// }
// }

// Version 2

// interface ICores {
//     flight: number,
//     core: {
//         reuse_count: number,
//         status: string | boolean
//     }
// }
//
// interface IPayloads {
//     payload_type: string,
//     payload_mass_kg: number,
//     payload_mass_lbs: number
// }
//
//
// interface IRocket {
//     mission_name: string,
//     launch_date_local: number,
//     launch_site: {
//         site_name_long: number
//     },
//     links: {
//         article_link: boolean,
//         video_link: string
//     },
//     rocket: {
//         rocket_name: string,
//         first_stage: {
//             cores: ICores[]
//         },
//         second_stage: {
//             payloads: IPayloads[]
//         }
//     }
// }

// ---------------------------------------------------------------------------—————————
// 2) протипізувати функції:
//
//     const user = {
//         name:Max,
//         age:18,
//         gender:'male'
//     }

interface IUser {
    name: string;
    age: number;
    gender: string
}

const user: IUser = {
    name: 'Max',
    age: 18,
    gender: 'male'
}


function sum(a: number, b: number): number {
    return a + b
}

function showSum(a: number, b: number): void {
    console.log(a + b);
}

function incAge(someUser: IUser, inc: number):IUser{
    someUser.age += inc
    return someUser
}

console.log(sum(1, 2));
showSum(2, 3)
incAge(user, 2)