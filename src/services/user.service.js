import {axiosInstance} from "./axios.service";

const userService={
    getAll:()=>axiosInstance.get(urls.users)
}

export {
    userService
}