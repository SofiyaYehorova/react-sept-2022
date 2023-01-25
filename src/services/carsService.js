import {axiosService} from "./axiosService";
import {urls} from "../configs";

const carsService = {
    getAll: () => axiosService.get(urls.cars),
    create: (newCar) => axiosService.post(urls.cars, newCar),
    updateById: (id, data) => axiosService.put(`${urls.cars}/${id}`, data),
    daleteById: (id) => axiosService.delete(`${urls.cars}/${id}`)
}

export {
    carsService
}