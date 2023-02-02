import {axiosService} from "./axiosService";
import {urls} from "../configs";

const postsService = {
    getPostsById: (id) => axiosService.get(urls.postsById(id))
}

export {
    postsService
}