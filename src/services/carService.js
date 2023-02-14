import {axiosService} from "./axiosService";
import {urls} from "../configs";

const carService = {
    getAll: () => axiosService.get(urls.cars.cars),
    create: (data) => axiosService.post(urls.cars.cars, data),
    update: (id, data) => axiosService.put(urls.cars.ById(id), data),
    deleteById: (id) => axiosService.delete(urls.cars.ById(id))
}

export {
    carService
}