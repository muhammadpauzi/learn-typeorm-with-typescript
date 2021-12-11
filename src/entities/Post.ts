import moment from "moment";
import { Column, Entity, ManyToOne } from "typeorm";
import BaseModel from "./BaseModel";
import User from "./User";

@Entity({ name: 'posts' })
export default class Post extends BaseModel {
    @Column({ type: "text" })
    content!: string;

    @Column()
    userId!: number;

    @ManyToOne(() => User, user => user.posts, { onDelete: "CASCADE" })
    user!: User;

    public toJSON() {
        return {
            ...this,
            createdAt: {
                "unformat": this.createdAt,
                "formated": moment(this.createdAt).format('llll'),
                "fromNow": moment(this.createdAt).fromNow()
            },
            updatedAt: {
                "unformat": this.updatedAt,
                "formated": moment(this.updatedAt).format('llll'),
                "fromNow": moment(this.updatedAt).fromNow()
            }
        };
    }
}