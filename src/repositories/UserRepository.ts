import User from "../entities/User";
import IUser from "../interfaces/IUser";

export default class UserRepository {
    public getUsers(): Promise<any> {
        return new Promise(async (resolve, reject) => {
            try {
                const users = await User.find({ order: { createdAt: "DESC" } });
                resolve(users);
            } catch (error) {
                reject(error);
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
            } catch (error) {
                reject(error);
            }
        })
    }

    public getUser(id: number): Promise<any> {
        return new Promise(async (resolve, reject) => {
            try {
                const user = await User.findOne(id);
                if (!user) reject({ code: 404, message: "USER_DOES_NOT_EXISTS" });
                resolve(user);
            } catch (error) {
                reject(error);
            }
        })
    }

    public deleteUser(id: number): Promise<any> {
        return new Promise(async (resolve, reject) => {
            try {
                const user = await User.findOne(id);
                if (!user) reject({ code: 404, message: "USER_DOES_NOT_EXISTS" });
                user?.remove();
                resolve(true);
            } catch (error) {
                reject(error);
            }
        })
    }
}