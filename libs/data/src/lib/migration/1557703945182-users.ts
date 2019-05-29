import { MigrationInterface, QueryRunner } from "typeorm";

export class users1557703945182 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      `ALTER TABLE users ADD COLUMN password VARCHAR NOT NULL;`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`ALTER TABLE users DROP COLUMN password;`);
  }
}
