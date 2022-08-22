import axios from "axios";

export type ResponseType = {
    errorText: string;
    info: string;
    yourBody: { success: boolean; }
    yourQuery: {};
}

const instance = axios.create({
    baseURL: "https://neko-cafe-back.herokuapp.com/auth/test"
})


export const RequestsAPI = {
    createRequest(checkedStatus: boolean) {
       return instance.post<ResponseType>("", {success: checkedStatus});
    }
}