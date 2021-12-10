import { Response } from "express";
import {  CREATED_CODE, SUCCESS_CODE } from "../constants/statusCode";

export default class ApiResponse {
    public static successResponse(res: Response, data: object | string): Response {
        return res.status(SUCCESS_CODE).json(data);
    }

    public static successCreatedResponse(res: Response, data: object | string): Response {
        return res.status(CREATED_CODE).json(data);
    }

    public static errorResponse(res: Response, status: number, data: object | string): Response {
        return res.status(status).json(data);
    }
}