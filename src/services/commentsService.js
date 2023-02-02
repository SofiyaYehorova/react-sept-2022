import {axiosService} from "./axiosService";
import {urls} from "../configs";

const commentsService = {
    getAll: () => axiosService.get(urls.comments),
    getCommentsById:(id)=>axiosService.get(`${urls.comments}/${id}`)
}

export {
    commentsService
}