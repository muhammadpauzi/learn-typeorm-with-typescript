import { Response } from "express";
import ApiResponse from "./ApiResponse";

export default class Error {
    public static handleError(res: Response, error: any) {
        console.log(error);
        const { code, message } = error;
        return ApiResponse.errorResponse(res, code, { code, message });
    }
}