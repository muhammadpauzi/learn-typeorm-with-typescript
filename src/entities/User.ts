import { Column, Entity } from "typeorm";
import BaseModel from "./BaseModel";

@Entity({ name: 'users' })
export default class User extends BaseModel {
    @Column({ type: "varchar", length: 128, nullable: false })
    username!: string;

    @Column({ type: "varchar", length: 128, nullable: false })
    name!: string;

    @Column({ type: "varchar", length: 255, nullable: false })
    email!: string;

    @Column({ type: "varchar", length: 255, nullable: false })
    password!: string;
}