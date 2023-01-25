import {axiosService} from "./axiosService";

const postsService={
    getByUserId:(userId)=>axiosService.get('./posts', {params:{userId}})
}

export {
    postsService
}