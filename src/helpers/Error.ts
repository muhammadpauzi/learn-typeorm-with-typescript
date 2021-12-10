import { Response } from "express";
import ApiResponse from "./ApiResponse";

export default class Error {
    public static handleError(res: Response, error: any) {
        console.log(error);
        return ApiResponse.errorResponse(res, error.code, { code: error.code, message: error.message });
    }
}