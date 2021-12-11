import { Column, Entity, OneToMany, } from "typeorm";
import BaseModel from "./BaseModel";
import Post from './Post';

@Entity({ name: 'users' })
export default class User extends BaseModel {
    @Column({ type: "varchar", length: 128, nullable: false, unique: true })
    username!: string;

    @Column({ type: "varchar", length: 128, nullable: false })
    name!: string;

    @Column({ type: "varchar", length: 255, nullable: false, unique: true })
    email!: string;

    @Column({ type: "varchar", length: 255, nullable: false })
    password!: string;

    @OneToMany(() => Post, post => post.user)
    posts!: Post[]

    toJSON() {
        return { ...this, password: undefined };
    }
}