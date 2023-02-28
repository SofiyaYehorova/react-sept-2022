import {apiService} from "./apiService";

import {IUser} from "../interfaces/userInterface";
import {IRes} from "../interfaces/responseInterface";

const userService = {
    getAll: (): IRes<IUser[]> => apiService.get('/users')
}

export {
    userService
}