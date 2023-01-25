import {axiosService} from "./axiosService";

const usersService = {
    getAll: () => axiosService.get('/users')
}

export {
    usersService
}