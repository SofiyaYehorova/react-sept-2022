const baseURL = 'http://owu.linkpc.net/carsAPI/v2'

const cars = './cars';
const auth='./auth';

const urls = {
    cars: {
        cars,
        byID: (id) => `${cars}/${id}`
    },
    auth:{
        login:auth,
        me:`${auth}/me`,
        refresh:`${auth}/refresh`
    },
    users:'./users'

}

export {
    baseURL,
    urls
}