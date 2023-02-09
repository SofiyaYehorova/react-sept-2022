import {apiService} from "./apiService";
import {urls} from "../configs";

const carsService = {
    getAll: () => apiService(urls.cars.cars),
    create: (data) => apiService.post(urls.cars.cars, data),
    updateById: (id, data) => apiService.put(urls.cars.ById(id), data),
    deleteById: (id) => apiService.delete(urls.cars.ById(id))
};

export {
    carsService
}