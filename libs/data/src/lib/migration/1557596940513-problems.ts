import { MigrationInterface, QueryRunner } from "typeorm";

export class problems1557596940513 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`CREATE TABLE problems (
      id SERIAL NOT NULL PRIMARY KEY,
      name VARCHAR NOT NULL,
      description VARCHAR NOT NULL,
      server_id INTEGER REFERENCES servers(id),
      is_resolved BOOLEAN NOT NULL,
      created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
      updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
    );`);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`DROP TABLE problems;`);
  }
}
