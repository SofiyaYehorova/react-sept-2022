import {axiosService} from "./axiosService";
import {urls} from "../configs";

const usersService = {
    getAll: () => axiosService.get(urls.users),
    createUsers: (data) => axiosService.post(urls.users, data)
}

export {
    usersService
}