import { Column, Entity, ManyToOne } from "typeorm";
import BaseModel from "./BaseModel";
import User from "./User";

@Entity({ name: 'posts' })
export default class Post extends BaseModel {
    @Column({ type: "text" })
    content!: string;

    @Column()
    userId!: number;

    @ManyToOne(() => User, user => user.posts)
    user!: User;
}