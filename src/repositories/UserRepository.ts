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
                resolve(user);
            } catch (error) {
                reject(error);
            }
        })
    }
}