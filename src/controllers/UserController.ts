import { Request, Response } from "express";
import ApiResponse from "../helpers/ApiResponse";
import UserRepository from "../repositories/UserRepository";

export default class UserController {
    private userRepository: UserRepository;

    constructor() {
        this.userRepository = new UserRepository();
    }

    public async users(req: Request, res: Response) {
        try {
            const users = await this.userRepository.getUsers();
            return ApiResponse.successResponse(res, { users });
        } catch (error) {
            console.log(error);
        }
    }

    public async create(req: Request, res: Response) {
        try {
            const user = await this.userRepository.createUser(req.body);
            return ApiResponse.successCreatedResponse(res, { user });
        } catch (error) {
            console.log(error);
        }
    }

    // FIX: using query instead req.params (?id=...)
    public async user(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const user = await this.userRepository.getUser(Number(id));
            return ApiResponse.successResponse(res, { user });
        } catch (error) {
            console.log(error);
        }
    }

    public async delete(req: Request, res: Response) {
        try {
            const { id } = req.query;
            // FIX: show error if id missing
            await this.userRepository.deleteUser(Number(id));
            // REFACTOR: "DELETED" to contant
            return ApiResponse.successResponse(res, { message: "USER_DELETED" });
        } catch (error) {
            console.log(error);
        }
    }
}