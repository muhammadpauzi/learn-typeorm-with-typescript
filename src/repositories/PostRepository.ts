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

    public createPost(post: IPost): Promise<any> {
        return new Promise(async (resolve, reject) => {
            try {
                // FIX: userId -> req.user.id with JWT
                const { content, userId } = post;
                let newPost = await Post.create({ content, userId });
                newPost = await newPost.save();
                resolve(newPost);
            } catch (error: any) {
                reject({ code: SERVER_ERROR_CODE, message: error.message });
            }
        })
    }

    public getPost(id: number): Promise<any> {
        return new Promise(async (resolve, reject) => {
            try {
                const post = await Post.findOne(id, { relations: ['user'] });
                if (!post) reject({ code: NOT_FOUND_CODE, message: POST_DOES_NOT_EXISTS_MESSAGE });
                resolve(post);
            } catch (error: any) {
                reject({ code: SERVER_ERROR_CODE, message: error.message });
            }
        })
    }

    public deletePost(id: number): Promise<any> {
        return new Promise(async (resolve, reject) => {
            try {
                const post = await Post.findOne(id);
                if (!post) reject({ code: NOT_FOUND_CODE, message: POST_DOES_NOT_EXISTS_MESSAGE });
                post?.remove();
                resolve(true);
            } catch (error: any) {
                reject({ code: SERVER_ERROR_CODE, message: error.message });
            }
        })
    }

    public updatePost(id: number, postBody: IPost): Promise<any> {
        return new Promise(async (resolve, reject) => {
            try {
                const post = await this.getPost(id);
                // update value
                post.content = postBody.content || post.content;

                const updatedPost = await post.save();
                resolve(updatedPost);
            } catch (error: any) {
                reject({ code: SERVER_ERROR_CODE, message: error.message });
            }
        })
    }
}