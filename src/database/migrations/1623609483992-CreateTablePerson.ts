import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateTablePerson1623609483992 implements MigrationInterface {
    name = 'CreateTablePerson1623609483992'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "person" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "last_name" character varying NOT NULL, "age" integer NOT NULL, "cep" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_5fdaf670315c4b7e70cce85daa3" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "person"`);
    }

}
