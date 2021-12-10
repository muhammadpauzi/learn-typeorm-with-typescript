import { Response } from "express";

export default class ApiResponse {
    public static successResponse(res: Response, data: object | string): Response {
        return res.status(200).json(data);
    }

    public static successCreatedResponse(res: Response, data: object | string): Response {
        return res.status(201).json(data);
    }

    public static errorResponse(res: Response, status: number, data: object | string): Response {
        return res.status(status).json(data);
    }
}