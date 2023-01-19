import {axiosService} from "./axios.service";

import {urls} from "../configurations";


const shipService = {
    getAll: () => axiosService.get(urls.ships)
}

export {
    shipService
};
