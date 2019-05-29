import { MigrationInterface, QueryRunner } from "typeorm";

export class servers1557703795208 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`ALTER TABLE servers ADD COLUMN uptime VARCHAR;
      ALTER TABLE servers ADD COLUMN location VARCHAR;
      ALTER TABLE servers ADD COLUMN group_id INTEGER REFERENCES groups(id);`);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`ALTER TABLE servers DROP COLUMN uptime;
      ALTER TABLE servers DROP COLUMN location;
      ALTER TABLE servers DROP COLUMN group_id;`);
  }
}
