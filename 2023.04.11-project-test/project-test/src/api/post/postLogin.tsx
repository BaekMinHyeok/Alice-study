import instance from "..";
import { AxiosError, AxiosResponse } from "axios";
import { LoginFormType } from "@/pages/login/utils/loginValidation";

export default async function postLogin(data: LoginFormType) {
    try {
        const response: AxiosResponse = await instance.post<LoginFormType>(
            "/user/login",
            data
        );
        return response.data;
    } catch (err) {
        if (err instanceof AxiosError) {
            console.error(err);
            return err.response;
        }
    }
}
