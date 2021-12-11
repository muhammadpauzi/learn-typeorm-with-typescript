import { Request, Response } from "express";
import { USER_CREATED_MESSAGE, USER_DELETED_MESSAGE, USER_UPDATED_MESSAGE } from "../constants/messages";
import ApiResponse from "../helpers/ApiResponse";
import Error from "../helpers/Error";
import UserRepository from "../repositories/UserRepository";

export default class UserController {
    private userRepository: UserRepository;

    constructor() {
        this.userRepository = new UserRepository();
    }

    public async users(req: Request, res: Response) {
        try {
            const users = await this.userRepository.getUsers();
            return ApiResponse.successResponse(res, { data: users });
        } catch (error) {
            return Error.handleError(res, error);
        }
    }

    public async create(req: Request, res: Response) {
        try {
            const user = await this.userRepository.createUser(req.body);
            return ApiResponse.successCreatedResponse(res, { data: user });
        } catch (error: any) {
            return Error.handleError(res, error);
        }
    }

    // FIX: using query instead req.params (?id=...)
    public async user(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const user = await this.userRepository.getUser(Number(id));
            return ApiResponse.successResponse(res, { data: user });
        } catch (error: any) {
            return Error.handleError(res, error);
        }
    }

    public async delete(req: Request, res: Response) {
        try {
            const { id } = req.query;
            // FIX: show error if id missing
            await this.userRepository.deleteUser(Number(id));
            // REFACTOR: "DELETED" to contant
            return ApiResponse.successResponse(res, { message: USER_DELETED_MESSAGE });
        } catch (error: any) {
            return Error.handleError(res, error);
        }
    }

    public async update(req: Request, res: Response) {
        try {
            const { id } = req.query;
            const updatedUser = await this.userRepository.updateUser(Number(id), req.body);
            return ApiResponse.successResponse(res, { message: USER_UPDATED_MESSAGE, data: updatedUser });
        } catch (error: any) {
            return Error.handleError(res, error);
        }
    }
}