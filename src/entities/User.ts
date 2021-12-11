import { BeforeInsert, Column, Entity, OneToMany, } from "typeorm";
import BaseModel from "./BaseModel";
import Post from './Post';
import { genSalt, hash } from 'bcrypt';
import moment from 'moment';

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

    @BeforeInsert()
    public async hashPassword() {
        const salt = await genSalt();
        this.password = await hash(this.password, salt);
    }

    public toJSON() {
        return {
            ...this, password: undefined,
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