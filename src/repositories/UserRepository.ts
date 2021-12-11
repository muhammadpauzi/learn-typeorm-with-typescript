import { USER_DOES_NOT_EXISTS_MESSAGE } from "../constants/messages";
import { NOT_FOUND_CODE, SERVER_ERROR_CODE } from "../constants/statusCode";
import User from "../entities/User";
import IUser from "../interfaces/IUser";

export default class UserRepository {
    public getUsers(): Promise<any> {
        return new Promise(async (resolve, reject) => {
            try {
                const users = await User.find({ order: { createdAt: "DESC" }, relations: ['posts'] });
                resolve(users);
            } catch (error: any) {
                reject({ code: SERVER_ERROR_CODE, message: error.message });
            }
        })
    }

    public createUser(user: IUser): Promise<any> {
        return new Promise(async (resolve, reject) => {
            try {
                const { username, name, email, password } = user;
                let newUser = await User.create({ username, name, email, password });
                newUser = await newUser.save();
                resolve(newUser);
            } catch (error: any) {
                reject({ code: SERVER_ERROR_CODE, message: error.message });
            }
        })
    }

    public getUser(id: number): Promise<any> {
        return new Promise(async (resolve, reject) => {
            try {
                const user = await User.findOne(id, { relations: ['posts'] });
                if (!user) reject({ code: NOT_FOUND_CODE, message: USER_DOES_NOT_EXISTS_MESSAGE });
                resolve(user);
            } catch (error: any) {
                reject({ code: SERVER_ERROR_CODE, message: error.message });
            }
        })
    }

    public deleteUser(id: number): Promise<any> {
        return new Promise(async (resolve, reject) => {
            try {
                const user = await User.findOne(id);
                console.log(user);
                if (!user) reject({ code: NOT_FOUND_CODE, message: USER_DOES_NOT_EXISTS_MESSAGE });
                await user?.remove();
                resolve(true);
            } catch (error: any) {
                reject({ code: SERVER_ERROR_CODE, message: error.message });
            }
        })
    }

    public updateUser(id: number, userBody: IUser): Promise<any> {
        return new Promise(async (resolve, reject) => {
            try {
                const user = await this.getUser(id);
                // update value
                user.username = userBody.username || user.username;
                user.name = userBody.name || user.name;

                const updatedUser = await user.save();
                resolve(updatedUser);
            } catch (error: any) {
                reject({ code: SERVER_ERROR_CODE, message: error.message });
            }
        })
    }
}