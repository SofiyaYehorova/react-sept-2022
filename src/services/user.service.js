import {axiosInstance} from "./axios.service";
import {urls} from "../configs";

const userService={
    getAll:()=>axiosInstance.get(urls.users)
}

export {
    userService
}