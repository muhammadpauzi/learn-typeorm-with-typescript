import { POST_DOES_NOT_EXISTS_MESSAGE } from "../constants/messages";
import { NOT_FOUND_CODE, SERVER_ERROR_CODE } from "../constants/statusCode";
import Post from "../entities/Post";
import IPost from "../interfaces/IPost";

export default class PostRepository {
    public getPosts(): Promise<any> {
        return new Promise(async (resolve, reject) => {
            try {
                const posts = await Post.find({ order: { createdAt: "DESC" }, relations: ['user'] });
                resolve(posts);
            } catch (error: any) {
                reject({ code: SERVER_ERROR_CODE, message: error.message });
            }
        })
    }
}