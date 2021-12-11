import { Request, Response } from "express";
import { POST_CREATED_MESSAGE, POST_DELETED_MESSAGE, POST_UPDATED_MESSAGE } from "../constants/messages";
import ApiResponse from "../helpers/ApiResponse";
import Error from "../helpers/Error";
import PostRepository from "../repositories/PostRepository";

export default class PostController {
    private postRepository: PostRepository;

    constructor() {
        this.postRepository = new PostRepository();
    }

    public async posts(req: Request, res: Response) {
        try {
            const posts = await this.postRepository.getPosts();
            return ApiResponse.successResponse(res, { posts });
        } catch (error) {
            return Error.handleError(res, error);
        }
    }

    public async create(req: Request, res: Response) {
        try {
            const post = await this.postRepository.createPost(req.body);
            return ApiResponse.successCreatedResponse(res, { post });
        } catch (error: any) {
            return Error.handleError(res, error);
        }
    }
}