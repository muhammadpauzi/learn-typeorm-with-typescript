import {MigrationInterface, QueryRunner} from "typeorm";

export class createUsersTable1639134882643 implements MigrationInterface {
    name = 'createUsersTable1639134882643'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "username" varchar(128) NOT NULL, "name" varchar(128) NOT NULL, "email" varchar(255) NOT NULL, "password" varchar(255) NOT NULL)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
