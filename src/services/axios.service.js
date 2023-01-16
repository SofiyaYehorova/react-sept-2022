import axios from "axios";

import {baseURL} from "../componets/configs";

const axiosInstance = axios.create({baseURL:baseURL});

export {
    axiosInstance
}