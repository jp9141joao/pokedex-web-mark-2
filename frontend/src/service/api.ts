import { AuthData, ChangeData } from "@/types/types"
import  axios  from 'axios'

const url = 'http://localhost:3000';

export const Authentication = async (authData: AuthData) => {

    if (!authData) {
        throw new Error("authData is missing at authentication");
    }

    const response = await axios.post(`${url}/home`, authData);

    return response.data;
}

export const updateInfo = async (changeData: ChangeData) => {
    
    if (!changeData) {
        throw new Error("changeData is missing at change date");
    }

    const response = await axios.post(`${url}/overview`, changeData);

    return response.data;
}