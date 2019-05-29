import { MigrationInterface, QueryRunner } from "typeorm";

export class servers1555929041221 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`CREATE TABLE servers (
      id SERIAL NOT NULL PRIMARY KEY,
      name VARCHAR NOT NULL,
      ip VARCHAR NOT NULL,
      is_active BOOLEAN NOT NULL DEFAULT true,
      created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
      updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
    );`);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`DROP TABLE servers;`);
  }
}
