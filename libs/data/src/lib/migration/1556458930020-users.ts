import { MigrationInterface, QueryRunner } from "typeorm";

export class users1556458930020 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`CREATE TABLE users (
      id SERIAL NOT NULL PRIMARY KEY,
      email VARCHAR NOT NULL,
      is_active BOOLEAN NOT NULL DEFAULT true,
      roles JSONB NOT NULL,
      created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
      updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
    );`);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`DROP TABLE users;`);
  }
}
